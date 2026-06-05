import * as fs from 'fs';
import * as path from 'path';

interface UrlEntry {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

const SITE_URL = 'https://bantuan-pelanggan-adakami.asia';
const PUBLIC_DIR = path.join(process.cwd(), 'public');

// Define all URLs for your site
const urls: UrlEntry[] = [
  {
    loc: SITE_URL,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 1.0,
  },
  {
    loc: `${SITE_URL}/`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.9,
  },
];

// Generate XML
function generateSitemap(urls: UrlEntry[]): string {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  urls.forEach((url) => {
    xml += '  <url>\n';
    xml += `    <loc>${escapeXml(url.loc)}</loc>\n`;
    xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
    xml += `    <priority>${url.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>\n';
  return xml;
}

// Escape XML special characters
function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Main function
function main() {
  // Ensure public directory exists
  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }

  const sitemap = generateSitemap(urls);
  const sitemapPath = path.join(PUBLIC_DIR, 'sitemap.xml');

  fs.writeFileSync(sitemapPath, sitemap, 'utf-8');
  console.log(`✅ Sitemap generated successfully at ${sitemapPath}`);
}

main();
