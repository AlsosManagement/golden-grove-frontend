/**
 * Static prerendering script for SEO.
 *
 * After `vite build` produces `dist/`, this script:
 *   1. Spins up a local static server pointing at dist/
 *   2. Uses Puppeteer to load each route
 *   3. Captures the fully-rendered HTML
 *   4. Writes it to dist/<route>/index.html
 *
 * Usage:  node scripts/prerender.js
 * Requires: puppeteer (install as devDep)
 */

import { createServer } from 'http';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const BASE = '/golden-grove-frontend';
const PORT = 4173;

const routes = [
  '/',
  '/about',
  '/programs',
  '/programs/residential',
  '/programs/php',
  '/programs/co-occurring',
  '/programs/mat',
  '/therapy',
  '/resources',
  '/insurance',
  '/faq',
  '/contact',
];

const MIME = {
  '.html': 'text/html',
  '.js':   'application/javascript',
  '.css':  'text/css',
  '.svg':  'image/svg+xml',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.json': 'application/json',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
};

function serveStatic() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let url = req.url;
      // Strip base path
      if (url.startsWith(BASE)) url = url.slice(BASE.length) || '/';
      let filePath = join(DIST, url);
      // Serve index.html for SPA routes
      if (!extname(filePath)) filePath = join(DIST, 'index.html');
      try {
        const data = readFileSync(filePath);
        const ext = extname(filePath);
        res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
        res.end(data);
      } catch {
        // Fallback to index.html for SPA routing
        const data = readFileSync(join(DIST, 'index.html'));
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
    server.listen(PORT, () => {
      console.log(`  Static server on http://localhost:${PORT}`);
      resolve(server);
    });
  });
}

async function prerender() {
  console.log('Prerendering routes...\n');

  const server = await serveStatic();
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });

  for (const route of routes) {
    const url = `http://localhost:${PORT}${BASE}${route}`;
    console.log(`  Rendering: ${route}`);

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 15000 });

    // Wait a bit for React to hydrate and effects to run
    await new Promise(r => setTimeout(r, 300));

    const html = await page.content();
    await page.close();

    // Determine output path
    const outDir = join(DIST, route === '/' ? '' : route);
    if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

    const outFile = route === '/' ? join(DIST, 'index.html') : join(outDir, 'index.html');
    writeFileSync(outFile, html, 'utf-8');
    console.log(`    -> ${outFile.replace(DIST, 'dist')}`);
  }

  await browser.close();
  server.close();
  console.log('\nPrerendering complete!');
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
