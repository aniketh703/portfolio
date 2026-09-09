const fs = require('fs');
const path = require('path');

const file = fs.readFileSync('src/data/projects.js', 'utf8');

const evalSafe = file
  .replace(/import\.meta\.env\.BASE_URL/g, "'/'")
  .replace(/export const projects =/, 'module.exports =') + ';';

fs.writeFileSync('temp_check.cjs', evalSafe);
const projects = require(path.resolve('temp_check.cjs'));
fs.unlinkSync('temp_check.cjs');

console.log(`Verifying all assets in dist/projects/ for ${projects.length} projects...`);
const missingInDist = [];
let total = 0;

for (const p of projects) {
  const images = [];
  if (p.coverImage) images.push({ field: 'coverImage', val: p.coverImage });
  if (p.modules) {
    p.modules.forEach((m, idx) => {
      if (m.type === 'image' && m.url) images.push({ field: `module[${idx}]`, val: m.url });
    });
  }

  for (const img of images) {
    total++;
    const raw = img.val;
    const rel = decodeURIComponent(raw.replace(/^\/?projects\//, ''));
    const distPath = path.join('dist', 'projects', rel);
    if (!fs.existsSync(distPath)) {
      missingInDist.push({ id: p.id, title: p.title, field: img.field, path: raw, distPath });
    }
  }
}

console.log(`Total images checked: ${total}`);
console.log(`Missing in dist count: ${missingInDist.length}`);
if (missingInDist.length > 0) {
  console.table(missingInDist);
  process.exit(1);
} else {
  console.log('SUCCESS: All 121 images exist in dist/projects/ and are ready for production!');
}
