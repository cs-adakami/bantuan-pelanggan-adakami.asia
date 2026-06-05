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

// Menu items dari config
const menuItems = [
  'general',
  'account',
  'payment',
  'consultation',
  'technical',
  'security',
];

// Define all URLs for your site
const urls: UrlEntry[] = [
  {
    loc: SITE_URL,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 1.0,
  },
  // Add hash routes for each menu item (SPA navigation)
  ...menuItems.map((item) => ({
    loc: `${SITE_URL}/#${item}`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly' as const,
    priority: 0.8,
  })),
];

// Generate XML Sitemap
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

// Generate robots.txt
function generateRobots(): string {
  return `# Robots.txt for bantuan-pelanggan-adakami.asia

User-agent: *
Allow: /
Disallow: /node_modules/
Disallow: /.git/

# Sitemap
Sitemap: https://bantuan-pelanggan-adakami.asia/sitemap.xml

# Crawl delay (optional, adjust as needed)
Crawl-delay: 1
`;
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

  // Generate and write sitemap
  const sitemap = generateSitemap(urls);
  const sitemapPath = path.join(PUBLIC_DIR, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap, 'utf-8');
  console.log(`✅ Sitemap generated at ${sitemapPath}`);
  console.log(`   📄 Total URLs: ${urls.length}`);

  // Generate and write robots.txt
  const robots = generateRobots();
  const robotsPath = path.join(PUBLIC_DIR, 'robots.txt');
  fs.writeFileSync(robotsPath, robots, 'utf-8');
  console.log(`✅ Robots.txt generated at ${robotsPath}`);
}

main();
