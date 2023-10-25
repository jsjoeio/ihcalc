import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import nodejs from "@astrojs/node"

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: nodejs({
    mode: "middleware"
  }),
  site: "https://www.howmuchtomake.org/",
  integrations: [tailwind(), mdx(), sitemap(), react()]
});