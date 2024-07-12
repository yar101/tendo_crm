import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import FullReload from 'vite-plugin-full-reload'
import StimulusHMR from "vite-plugin-stimulus-hmr";

export default defineConfig({
  plugins: [
    RubyPlugin(),
    FullReload(["app/views/**/*", "config/routes.rb"], {delay: 100}),
    StimulusHMR(),
  ],
})
