import tailwindcss from '@tailwindcss/postcss';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// GitHub Pages serves project sites below /<repository>/ and user sites at /.
// actions/configure-pages provides both values automatically during deployment.
const pagesBasePath = (process.env.PAGES_BASE_PATH ?? '').replace(/\/$/, '');
const siteUrl = (
  process.env.PAGES_BASE_URL ?? `https://qianqin11.github.io${pagesBasePath}`
).replace(/\/$/, '');

// macOS Seatbelt blocks FSEvents, so Codex previews need polling for HMR.
const isCodexSeatbeltSandbox = process.env.CODEX_SANDBOX === 'seatbelt';

export default defineConfig({
  base: pagesBasePath ? `${pagesBasePath}/` : '/',
  css: { postcss: { plugins: [tailwindcss()] } },
  server: isCodexSeatbeltSandbox
    ? { watch: { useFsEvents: false, usePolling: true } }
    : undefined,
  plugins: [
    react(),
    {
      name: 'github-pages-metadata',
      transformIndexHtml(html) {
        return html.replaceAll('__SITE_URL__', siteUrl);
      },
    },
  ],
});
