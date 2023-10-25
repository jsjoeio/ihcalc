import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from '@astrojs/vercel/serverless';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  site: "https://www.howmuchtomake.org/",
  integrations: [tailwind(), mdx(), sitemap(), react()]
});