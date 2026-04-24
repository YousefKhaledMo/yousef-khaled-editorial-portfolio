import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

console.log('[main] Mounting React app...');
const root = document.getElementById('root');
if (!root) {
  console.error('[main] FATAL: #root element not found in DOM');
  throw new Error('#root element not found');
}
try {
  createRoot(root).render(<App />);
  console.log('[main] React app mounted successfully');
} catch (err) {
  console.error('[main] React mount error:', err);
  root.innerHTML = '<div style="padding:40px;font-family:monospace;color:#c00"><h2>Mount Error</h2><pre>' + (err instanceof Error ? err.message + '\\n' + err.stack : String(err)) + '</pre></div>';
}
