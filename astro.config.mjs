import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// When the site is cut over to goldengroverecovery.com, set SITE_URL in env and drop BASE.
const SITE_URL = process.env.SITE_URL || 'https://alsos-management.github.io';
const PROD_BASE = process.env.SITE_BASE ?? '/golden-grove-frontend';

// `astro dev` sets NODE_ENV=development; `astro build` sets it to production.
// Dev serves at /, prod build emits under the GH Pages subpath.
const isBuild = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: SITE_URL,
  base: isBuild ? PROD_BASE : '/',
  trailingSlash: 'ignore',
  output: 'static',
  integrations: [react(), sitemap()],
  vite: {
    ssr: {
      noExternal: ['react-router-dom'],
    },
  },
});
