const fs = require('fs');
const path = require('path');

// We test against dev server
const DEV_HOST = 'http://localhost:5173';

const file = fs.readFileSync('src/data/projects.js', 'utf8');

const evalSafe = file
  .replace(/import\.meta\.env\.BASE_URL/g, "'/'")
  .replace(/export const projects =/, 'module.exports =') + ';';

fs.writeFileSync('temp_projects.cjs', evalSafe);
const projects = require(path.resolve('temp_projects.cjs'));
fs.unlinkSync('temp_projects.cjs');

async function testAll() {
  console.log(`Auditing ${projects.length} projects...`);
  const failed = [];
  const ok = [];

  for (const p of projects) {
    // 1. Check coverImage
    if (!p.coverImage) {
      failed.push({ id: p.id, title: p.title, field: 'coverImage', url: null, reason: 'null/undefined' });
    } else {
      const fullUrl = p.coverImage.startsWith('http') ? p.coverImage : `${DEV_HOST}${p.coverImage.startsWith('/') ? '' : '/'}${p.coverImage}`;
      try {
        const res = await fetch(fullUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        const type = res.headers.get('content-type') || '';
        if (res.status !== 200 || type.includes('text/html')) {
          failed.push({ id: p.id, title: p.title, field: 'coverImage', url: p.coverImage, status: res.status, type });
        } else {
          ok.push({ id: p.id, title: p.title, field: 'coverImage', type });
        }
      } catch (e) {
        failed.push({ id: p.id, title: p.title, field: 'coverImage', url: p.coverImage, error: e.message });
      }
    }

    // 2. Check modules images
    if (p.modules) {
      for (let i = 0; i < p.modules.length; i++) {
        const m = p.modules[i];
        if (m.type === 'image' && m.url) {
          const fullUrl = m.url.startsWith('http') ? m.url : `${DEV_HOST}${m.url.startsWith('/') ? '' : '/'}${m.url}`;
          try {
            const res = await fetch(fullUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } });
            const type = res.headers.get('content-type') || '';
            if (res.status !== 200 || type.includes('text/html')) {
              failed.push({ id: p.id, title: p.title, field: `module[${i}]`, url: m.url, status: res.status, type });
            } else {
              ok.push({ id: p.id, title: p.title, field: `module[${i}]`, type });
            }
          } catch (e) {
            failed.push({ id: p.id, title: p.title, field: `module[${i}]`, url: m.url, error: e.message });
          }
        }
      }
    }
  }

  console.log('\n--- FAILED IMAGES (Returned HTML or 404) ---');
  console.table(failed);

  console.log(`\nPassed: ${ok.length}, Failed: ${failed.length}`);
}

testAll().catch(console.error);
