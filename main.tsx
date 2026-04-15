import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

async function initializeApp() {
  try {
    const { loadRuntimeConfig } = await import('./lib/config.ts');
    await loadRuntimeConfig();
    console.log('Runtime configuration loaded');
  } catch (error) {
    console.warn('Config not loaded:', error);
  }

  createRoot(document.getElementById('root')!).render(<App />);
}

initializeApp();