import * as esbuild from "esbuild";

// Build ESM bundle with excalidraw bundled in
await esbuild.build({
  entryPoints: ["src/index.tsx"],
  bundle: true,
  minify: true,
  sourcemap: true,
  format: "esm",
  outfile: "dist/index.js",
  target: ["es2020"],
  conditions: ["production", "browser"],
  resolveExtensions: [".tsx", ".ts", ".jsx", ".js", ".mjs", ".json"],
  loader: {
    ".css": "empty", // CSS is extracted separately
  },
  define: {
    "process.env.NODE_ENV": '"production"',
  },
});

console.log("✅ ESM bundle built: dist/index.js");

