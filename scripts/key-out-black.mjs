import fs from 'node:fs';
import jpeg from 'jpeg-js';
import { PNG } from 'pngjs';

const src = process.argv[2];
const dest = process.argv[3];
const threshold = 55; // pixels darker than this on all channels become transparent
const feather = 35; // extra range for partial alpha to soften the edge

const raw = fs.readFileSync(src);
const { width, height, data } = jpeg.decode(raw, { useTArray: true });

const png = new PNG({ width, height });

for (let i = 0; i < width * height; i++) {
  const o = i * 4;
  const r = data[o];
  const g = data[o + 1];
  const b = data[o + 2];
  const maxc = Math.max(r, g, b);

  let alpha = 255;
  if (maxc <= threshold) {
    alpha = 0;
  } else if (maxc <= threshold + feather) {
    alpha = Math.round(((maxc - threshold) / feather) * 255);
  }

  png.data[o] = r;
  png.data[o + 1] = g;
  png.data[o + 2] = b;
  png.data[o + 3] = alpha;
}

png.pack().pipe(fs.createWriteStream(dest));
console.log(`Wrote ${dest} (${width}x${height})`);
