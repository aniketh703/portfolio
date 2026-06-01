import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');

const today = new Date().toISOString().split('T')[0];

let content = fs.readFileSync(sitemapPath, 'utf-8');

// Replace all occurrences of the lastmod date with today's date
content = content.replace(/<lastmod>[\d-]{10}<\/lastmod>/g, `<lastmod>${today}</lastmod>`);

fs.writeFileSync(sitemapPath, content, 'utf-8');

console.log(`✅ Updated sitemap lastmod to ${today}`);
