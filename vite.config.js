import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  // Base configuration for both development and production
  const config = {
    plugins: [tailwindcss(), react()],
    base: '/', // Default base path for local development
  };

  // When running the 'build' command for deployment...
  if (command === 'build') {
    // ...change the base path to your GitHub repository name.
    // Make sure 'ReactJS-Qualifier' is the exact name of your repo.
    config.base = '/ReactJS-Qualifier/';
  }

  // Return the final, correct configuration
  return config;
});