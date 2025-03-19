// vite.config.ts
import { defineConfig } from "file:///workspaces/asd12/node_modules/vite/dist/node/index.js";
import react from "file:///workspaces/asd12/node_modules/@vitejs/plugin-react/dist/index.mjs";
import themePlugin from "file:///workspaces/asd12/node_modules/@replit/vite-plugin-shadcn-theme-json/dist/index.mjs";
import path, { dirname } from "path";
import runtimeErrorOverlay from "file:///workspaces/asd12/node_modules/@replit/vite-plugin-runtime-error-modal/dist/index.mjs";
import { fileURLToPath } from "url";
var __vite_injected_original_import_meta_url = "file:///workspaces/asd12/vite.config.ts";
var __filename = fileURLToPath(__vite_injected_original_import_meta_url);
var __dirname = dirname(__filename);
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("file:///workspaces/asd12/node_modules/@replit/vite-plugin-cartographer/dist/index.mjs").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared")
    }
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvd29ya3NwYWNlcy9hc2QxMlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL3dvcmtzcGFjZXMvYXNkMTIvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL3dvcmtzcGFjZXMvYXNkMTIvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHRoZW1lUGx1Z2luIGZyb20gXCJAcmVwbGl0L3ZpdGUtcGx1Z2luLXNoYWRjbi10aGVtZS1qc29uXCI7XG5pbXBvcnQgcGF0aCwgeyBkaXJuYW1lIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCBydW50aW1lRXJyb3JPdmVybGF5IGZyb20gXCJAcmVwbGl0L3ZpdGUtcGx1Z2luLXJ1bnRpbWUtZXJyb3ItbW9kYWxcIjtcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tIFwidXJsXCI7XG5cbmNvbnN0IF9fZmlsZW5hbWUgPSBmaWxlVVJMVG9QYXRoKGltcG9ydC5tZXRhLnVybCk7XG5jb25zdCBfX2Rpcm5hbWUgPSBkaXJuYW1lKF9fZmlsZW5hbWUpO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBydW50aW1lRXJyb3JPdmVybGF5KCksXG4gICAgdGhlbWVQbHVnaW4oKSxcbiAgICAuLi4ocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgcHJvY2Vzcy5lbnYuUkVQTF9JRCAhPT0gdW5kZWZpbmVkXG4gICAgICA/IFtcbiAgICAgICAgICBhd2FpdCBpbXBvcnQoXCJAcmVwbGl0L3ZpdGUtcGx1Z2luLWNhcnRvZ3JhcGhlclwiKS50aGVuKChtKSA9PlxuICAgICAgICAgICAgbS5jYXJ0b2dyYXBoZXIoKSxcbiAgICAgICAgICApLFxuICAgICAgICBdXG4gICAgICA6IFtdKSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJjbGllbnRcIiwgXCJzcmNcIiksXG4gICAgICBcIkBzaGFyZWRcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzaGFyZWRcIiksXG4gICAgfSxcbiAgfSxcbiAgcm9vdDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJjbGllbnRcIiksXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcImRpc3QvcHVibGljXCIpLFxuICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxuICB9LFxufSk7XG5cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcU8sU0FBUyxvQkFBb0I7QUFDbFEsT0FBTyxXQUFXO0FBQ2xCLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sUUFBUSxlQUFlO0FBQzlCLE9BQU8seUJBQXlCO0FBQ2hDLFNBQVMscUJBQXFCO0FBTDRHLElBQU0sMkNBQTJDO0FBTzNMLElBQU0sYUFBYSxjQUFjLHdDQUFlO0FBQ2hELElBQU0sWUFBWSxRQUFRLFVBQVU7QUFFcEMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sb0JBQW9CO0FBQUEsSUFDcEIsWUFBWTtBQUFBLElBQ1osR0FBSSxRQUFRLElBQUksYUFBYSxnQkFDN0IsUUFBUSxJQUFJLFlBQVksU0FDcEI7QUFBQSxNQUNFLE1BQU0sT0FBTyx1RkFBa0MsRUFBRTtBQUFBLFFBQUssQ0FBQyxNQUNyRCxFQUFFLGFBQWE7QUFBQSxNQUNqQjtBQUFBLElBQ0YsSUFDQSxDQUFDO0FBQUEsRUFDUDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsV0FBVyxVQUFVLEtBQUs7QUFBQSxNQUM1QyxXQUFXLEtBQUssUUFBUSxXQUFXLFFBQVE7QUFBQSxJQUM3QztBQUFBLEVBQ0Y7QUFBQSxFQUNBLE1BQU0sS0FBSyxRQUFRLFdBQVcsUUFBUTtBQUFBLEVBQ3RDLE9BQU87QUFBQSxJQUNMLFFBQVEsS0FBSyxRQUFRLFdBQVcsYUFBYTtBQUFBLElBQzdDLGFBQWE7QUFBQSxFQUNmO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
