import { z } from "zod";
import rawConfig from "../../foj.config.mjs";

export const prerender = true;

export const FOJConfigSchema = z.object({
  name: z.string().default('Fauves\'s Online Judge'),
  version: z.string().regex(/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/g).optional(),
  abbr: z.string().optional(),
  domain: z.string().optional(),
  links: z.string().array().optional(),
  navigator: z
    .tuple([z.string(), z.string(), z.enum(["lg", "md", "sm"] as const)])
    .or(z.tuple([z.string(), z.string()]))
    .array()
    .default(
      [['Home', '/']]
    ),
  email: z.string().email().optional(),
  github: z.string().url().optional()  
});

export type FOJConfigSchema = z.infer<typeof FOJConfigSchema>;
export default FOJConfigSchema.parse(rawConfig);
