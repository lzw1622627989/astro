// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import preact from '@astrojs/preact';

import vue from '@astrojs/vue';
import pagefind from 'astro-pagefind';

// https://astro.build/config
export default defineConfig( {
  site: "https://example.com",
  integrations: [ tailwind(), preact(), vue(),pagefind() ]
});