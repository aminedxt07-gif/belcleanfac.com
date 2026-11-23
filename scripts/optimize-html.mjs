// Post-build pass over dist/: adds intrinsic width/height (prevents layout shift), lazy-loading and
// async decoding to below-the-fold <img>, and serves a WebP version of each raster image when smaller.
// Originals are kept (Open Graph previews and the photo lightbox still reference them).
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const dist = path.resolve('dist');
const imgDir = path.join(dist, 'images');
const meta = new Map();
const webp = new Map();

async function info(file) {
  if (!meta.has(file)) {
    const m = await sharp(path.join(dist, file)).metadata();
    meta.set(file, { w: m.width, h: m.height });
  }
  return meta.get(file);
}

async function webpFor(file) {
  if (webp.has(file)) return webp.get(file);
  const src = path.join(dist, file);
  const out = src.replace(/\.(jpe?g|png)$/i, '.webp');
  const isPng = /\.png$/i.test(file);
  const buf = await sharp(src).webp({ quality: isPng ? 85 : 76, effort: 5 }).toBuffer();
  const ok = buf.length < fs.statSync(src).size * 0.95;
  if (ok) fs.writeFileSync(out, buf);
  const result = ok ? file.replace(/\.(jpe?g|png)$/i, '.webp') : file;
  webp.set(file, result);
  return result;
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : p.endsWith('.html') ? [p] : [];
  });
}

let tags = 0;
for (const file of walk(dist)) {
  let html = fs.readFileSync(file, 'utf8');
  const matches = [...html.matchAll(/<img\b[^>]*>/g)];
  let first = true;
  for (const m of matches) {
    let tag = m[0];
    const src = tag.match(/\ssrc="(\/images\/[^"]+\.(?:jpe?g|png))"/i);
    const isFirst = first;
    first = false;
    if (!src) continue;
    const rel = src[1];
    const { w, h } = await info(rel);
    let t = tag;
    if (!/\swidth=/.test(t)) t = t.replace(/\s*\/?>$/, (end) => ` width="${w}" height="${h}"${end}`);
    if (!/\sdecoding=/.test(t)) t = t.replace(/\s*\/?>$/, (end) => ` decoding="async"${end}`);
    if (!/\sloading=/.test(t) && !/\sfetchpriority=/.test(t) && !isFirst) {
      t = t.replace(/\s*\/?>$/, (end) => ` loading="lazy"${end}`);
    }
    const next = await webpFor(rel);
    if (next !== rel) t = t.replace(`src="${rel}"`, `src="${next}"`);
    // Priority (above-the-fold / LCP) images get responsive variants so phones don't download the 1920px file.
    if (/\sfetchpriority="high"/.test(t) && !/\ssrcset=/.test(t) && next.endsWith('.webp')) {
      const base = next.replace(/\.webp$/, '');
      const widths = [640, 1024, 1440].filter((x) => x < w);
      const parts = [];
      for (const x of widths) {
        const out = path.join(dist, `${base}-${x}w.webp`);
        await sharp(path.join(dist, rel)).resize({ width: x }).webp({ quality: 72, effort: 5 }).toFile(out);
        parts.push(`${base}-${x}w.webp ${x}w`);
      }
      parts.push(`${next} ${w}w`);
      t = t.replace(/\s*\/?>$/, (end) => ` srcset="${parts.join(', ')}" sizes="100vw"${end}`);
    }
    if (t !== tag) {
      html = html.replace(tag, t);
      tags++;
    }
  }
  fs.writeFileSync(file, html);
}
console.log(`[optimize-html] updated ${tags} <img> tags, ${[...webp.values()].filter((v) => v.endsWith('.webp')).length} WebP files`);
