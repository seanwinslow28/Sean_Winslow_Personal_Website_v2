import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CaseSamplePage from './pages/case-sample';
import LabPage from './pages/lab';
import './index.css';
import './styles/tokens.css';
import './styles/tokens-motion.css';

const normalizePathname = (pathname) => {
  if (!pathname) {
    return '/';
  }

  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed.length === 0 ? '/' : trimmed;
};

const routes = {
  '/': <App />,
  '/case-sample': <CaseSamplePage />,
  '/lab': <LabPage />,
};

const Router = () => {
  if (typeof window === 'undefined') {
    return routes['/'];
  }

  const path = normalizePathname(window.location.pathname);
  return routes[path] ?? routes['/'];
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
);
