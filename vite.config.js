import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite config for Chrome Extensions
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            input: {
                popup: 'index.html',
                contentScript: 'src/contentScript.js' // Ensure content script is built
            },
            output: {
                entryFileNames: '[name].js' // Ensure naming consistency
            }
        }
    }
});