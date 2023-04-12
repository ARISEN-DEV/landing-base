import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://ARISEN-DEV.github.io',
  base: '/landing-base',
  integrations: [tailwind(), react()]
});