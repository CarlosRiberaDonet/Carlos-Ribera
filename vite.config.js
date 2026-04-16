import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Cambiamos la ruta absoluta por una relativa para evitar el error de resolución
  base: './', 
  plugins: [react()],
});