import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import {VitePWA, VitePWAOptions} from "vite-plugin-pwa";

const pwaConfig: VitePWAOptions = {
  disable: false,
  includeManifestIcons: false,
  injectManifest: undefined,
  injectRegister: undefined,
  minify: false,
  workbox: {
    navigateFallbackDenylist: [/\/__\/auth/],
    navigateFallbackAllowlist: [/^(?!\/__).*/],
  },
  registerType: 'autoUpdate',
  includeAssets: ['icon.png'],
  manifest: {
    theme_color: "#FFFFFF",
    background_color: "#FFFFFF",
    display: "standalone",
    scope: "/",
    start_url: "/",
    name: "けーきやさんた",
    short_name: "けーきやさんた",
    icons: [
      {
        src: "/icon.png",
        sizes: "256x256",
        type: "image/png",
      }
    ]
  },
  devOptions: {
    enabled: true,
  }
}

export default defineConfig({
  plugins: [
    VitePWA(pwaConfig),
    react()],
})
