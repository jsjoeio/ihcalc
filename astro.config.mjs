import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  site: "https://www.howmuchtomake.org/",
  integrations: [tailwind(), mdx(), sitemap(), react()],
  vite: {
    plugins: [rawFonts(['.ttf'])],
    build: {
      rollupOptions: {
        external: ["satori-html"],
      },
    },
  },
});

// Credit: https://blog.otterlord.dev/posts/dynamic-opengraph/
function rawFonts(ext) {
  return {
    name: 'vite-plugin-raw-fonts',
    transform(_, id) {
      if (ext.some(e => id.endsWith(e))) {
        const buffer = fs.readFileSync(id);
        return {
          code: `export default ${JSON.stringify(buffer)}`,
          map: null
        };
      }
    }
  };
}
