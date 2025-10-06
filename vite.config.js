import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // ЭТО САМОЕ ВАЖНОЕ ИСПРАВЛЕНИЕ:
  base: "/interactive-cv/", 
  plugins: [react()],
});