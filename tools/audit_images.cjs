const fs = require('fs');
const path = require('path');

// Read src/data/projects.js
const file = fs.readFileSync('src/data/projects.js', 'utf8');

// Replace showcaseAsset to return the local file path relative to public/projects
// showcaseAsset("xyz") -> "public/projects/xyz"
const evalSafe = file
  .replace(/import\.meta\.env\.BASE_URL/g, "''")
  .replace(/export const projects =/, 'module.exports =') + ';';

fs.writeFileSync('temp_projects.cjs', evalSafe);
const projects = require(path.resolve('temp_projects.cjs'));
fs.unlinkSync('temp_projects.cjs');

console.log('--- AUDITING PROJECT IMAGES ---');
const missing = [];
const external = [];
const valid = [];

for (const p of projects) {
  const cover = p.coverImage;
  if (!cover) {
    missing.push({ id: p.id, title: p.title, issue: 'coverImage is null or undefined' });
    continue;
  }
  
  if (cover.startsWith('http://') || cover.startsWith('https://')) {
    external.push({ id: p.id, title: p.title, url: cover });
  } else {
    // Local path
    // cover usually starts with "projects/..." or "/projects/..."
    const cleanPath = cover.replace(/^\//, '');
    const diskPath = path.resolve('public', cleanPath);
    if (!fs.existsSync(diskPath)) {
      missing.push({ id: p.id, title: p.title, cover, diskPath });
    } else {
      valid.push({ id: p.id, title: p.title, cover, diskPath, size: fs.statSync(diskPath).size });
    }
  }
}

console.log('\nMISSING ON DISK:');
console.table(missing);

console.log('\nEXTERNAL URLS:');
console.table(external);

console.log('\nVALID LOCAL FILES:');
console.table(valid.map(v => ({ id: v.id, title: v.title, cover: v.cover, size: v.size })));
