import { defineConfig } from 'vitest/config';

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  test: {
    coverage: {
      provider: 'c8',
      reporter: ['text', 'html'],
      src: ['./src'],
      lines: 80,
      functions: 80,
      branches: 80,
      statements: 80,
    },
  },
});
