import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote_app",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: "^19.0.0",
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "^19.0.0",
        },
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        // format: "iife", // Use Immediately Invoked Function Expression
        // entryFileNames: "search-plugin.js", // Name of the output file
        // chunkFileNames: "chunks/[name].js", // Name for chunk files if used
        // assetFileNames: "[name].[ext]", // Keep asset file names
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
    // modulePreload: false,
    // target: "esnext",
    // minify: true,
    // cssCodeSplit: false,
  },
  preview: {
    port: 5001,
    strictPort: true,
    cors: true,
  },
});
