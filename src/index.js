import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/resume.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register service worker if needed
serviceWorker.unregister();
