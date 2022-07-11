import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    environment: 'jsdom',
    deps: {
      inline: [/@nuxt\/test-utils-edge/]
    }
  }
});
