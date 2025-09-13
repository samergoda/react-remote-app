import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    // federation({
    //   name: "remote_app",
    //   filename: "remoteEntry.js",
    //   exposes: {
    //     "./App": "./src/App",
    //   },
    //   shared: {
    //     react: {
    //       singleton: true,
    //       requiredVersion: "^19.0.0",
    //     },
    //     "react-dom": {
    //       singleton: true,
    //       requiredVersion: "^19.0.0",
    //     },
    //   },
    // }),
  ],
  build: {
    rollupOptions: {
      output: {
        format: "iife", // Ensure this is set for a self-invoking script
        entryFileNames: "testt.js", // Name of the output file
        chunkFileNames: "chunks/[name].js", // Name for chunk files if used
        assetFileNames: "[name].[ext]", // Keep asset file names
        // dir: "test.js", // Output file name (single JS file)
        // inlineDynamicImports: true, // Ensure inline dynamic imports are enabled
        // Don't use `manualChunks` or `dir`
      },
    },
  },
  preview: {
    port: 5001,
    strictPort: true,
    cors: true,
  },
});
