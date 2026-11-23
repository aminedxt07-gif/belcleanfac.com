# Uploads dist/ to the One.com web root over SFTP. Usage: SFTP_PW=... LOCAL_DIST=dist python3 scripts/sftp-deploy.py
import os, paramiko
HOST = "ssh.belcleanfac.be"; USER = "belcleanfac.be"; REMOTE_ROOT = "webroots/by-route/belcleanfac.be_"
LOCAL = os.environ.get("LOCAL_DIST", "dist")
t = paramiko.Transport((HOST, 22)); t.connect(username=USER, password=os.environ["SFTP_PW"])
s = paramiko.SFTPClient.from_transport(t)
def mkdirs(p):
    cur = ''
    for x in p.split('/'):
        cur = f"{cur}/{x}" if cur else x
        try: s.stat(cur)
        except IOError: s.mkdir(cur)
n = 0
for root, dirs, files in os.walk(LOCAL):
    rel = os.path.relpath(root, LOCAL); rr = REMOTE_ROOT if rel == '.' else f"{REMOTE_ROOT}/{rel}"
    mkdirs(rr)
    for f in files:
        s.put(os.path.join(root, f), f"{rr}/{f}"); n += 1
print("uploaded", n, "files"); s.close(); t.close()
