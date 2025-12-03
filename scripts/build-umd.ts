import * as esbuild from "esbuild";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";

// Ensure dist directory exists
mkdirSync("dist", { recursive: true });

// Build UMD bundle
await esbuild.build({
  entryPoints: ["src/index.tsx"],
  bundle: true,
  minify: true,
  sourcemap: true,
  format: "iife",
  globalName: "ExcalidrawEmbed",
  outfile: "dist/excalidraw-embed.umd.js",
  target: ["es2020"],
  conditions: ["production", "browser"],
  resolveExtensions: [".tsx", ".ts", ".jsx", ".js", ".mjs", ".json"],
  loader: {
    ".css": "empty", // CSS will be extracted separately
  },
  define: {
    "process.env.NODE_ENV": '"production"',
  },
  // Footer to make it UMD compatible
  footer: {
    js: `if(typeof module==="object"&&typeof module.exports==="object"){module.exports=ExcalidrawEmbed}`,
  },
});

// Copy CSS from excalidraw package
const excalidrawPkg = dirname(require.resolve("@excalidraw/excalidraw/package.json"));
const cssPath = join(excalidrawPkg, "dist/prod/index.css");
const css = readFileSync(cssPath, "utf-8");
writeFileSync("dist/excalidraw-embed.css", css);

console.log("✅ UMD bundle built: dist/excalidraw-embed.umd.js");
console.log("✅ CSS extracted: dist/excalidraw-embed.css");

