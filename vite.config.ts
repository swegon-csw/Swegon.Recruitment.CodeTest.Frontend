import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import eslint from "vite-plugin-eslint";
import checker from "vite-plugin-checker";

export default defineConfig({
  plugins: [
    react(),
    eslint({
      cache: false,
      failOnError: false,
    }),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "src/**/*.{ts,tsx}"',
        useFlatConfig: true,
      },
      overlay: false,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    port: 3000,
    hmr: {
      overlay: false,
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom", "react-error-boundary", "react-helmet-async"],
          uic: ["@swegon-core/uic"],
          swegonCore: ["@swegon-core/swegon.conversions.javascript"],
          redux: ["@reduxjs/toolkit", "react-redux", "redux"],
          i18n: ["i18next", "react-i18next", "i18next-http-backend", "i18next-browser-languagedetector"],
          three: ["three", "three-stdlib"],
          threeReact: ["@react-three/fiber", "@react-three/drei"],
          styling: ["styled-components"],
          utils: ["file-saver", "react-outside-click-handler", "npe", "uom-units"],
          properties: ["@promaster-sdk/property"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    target: "es2020",
    minify: "esbuild",
  },
});
