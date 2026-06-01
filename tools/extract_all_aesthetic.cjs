const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist', 'assets');
const outDir = path.join(__dirname, '..', 'public', 'showcase');

if (!fs.existsSync(distDir)) {
  console.error('dist/assets not found:', distDir);
  process.exit(2);
}

const files = fs.readdirSync(distDir).filter(f => f.endsWith('.js'));
const regex = /data:image\/jpeg;base64,([A-Za-z0-9+/=]+)"/g;
const matches = [];

for (const file of files) {
  const p = path.join(distDir, file);
  const content = fs.readFileSync(p, 'utf8');
  let m;
  while ((m = regex.exec(content)) !== null) {
    matches.push(m[1]);
  }
}

if (matches.length === 0) {
  console.error('No base64 JPEG data URI matches found in dist/assets');
  process.exit(3);
}

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

for (let i = 0; i < Math.min(2, matches.length); i++) {
  const buf = Buffer.from(matches[i], 'base64');
  const outPath = path.join(outDir, `aesthetic-${i + 1}.jpg`);
  fs.writeFileSync(outPath, buf);
  console.log('Wrote:', outPath, '(', buf.length, 'bytes)');
}

if (matches.length > 2) console.log('Note: found', matches.length, 'matches; only wrote first 2.');

process.exit(0);
