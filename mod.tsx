import render_string from "https://esm.sh/preact-render-to-string@6.2.1";
import { Hono } from "https://deno.land/x/hono/mod.ts";
import { serveStatic } from "https://deno.land/x/hono/middleware.ts";
import { getMimeType } from "https://deno.land/x/hono@v3.7.6/utils/mime.ts";
import esbuild from "npm:esbuild";
import App from "./client/app.tsx";
import uno from "https://deno.land/x/deuno@0.1.2/mod.ts"
import Shell from "./shell.tsx";

await uno.build({ outfile: "./static/uno.css" })

const app = new Hono();

app.use("*", serveStatic({ root: "./static/" }));
app.get("/client/*", async (c) => {
  const pathname = new URL(c.req.url).pathname;
  const mimetype = getMimeType(pathname);
  const result = await esbuild.transform(
    await Deno.readTextFile("." + pathname),
    { loader: "tsx", jsx: "automatic", jsxImportSource: "preact", jsxFactory: "h" },
  );
  return new Response(result.code, {
    headers: { "content-type": mimetype ?? "text/javascript" },
  });
});
app.get("*", (c) => c.html(render_string(<Shell><App /></Shell>)));

Deno.serve(app.fetch);
