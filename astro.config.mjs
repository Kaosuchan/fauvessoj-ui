import { defineConfig } from 'astro/config';

// https://astro.build/config
import deno from "@astrojs/deno";

// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: deno({
    port: 3000,
    start: true
  }),
  integrations: [preact(), tailwind(), mdx()]
});