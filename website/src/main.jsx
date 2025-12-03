import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import './i18n.js'


import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <BrowserRouter basename="/Portfolio-Website/">
      <App />
      </BrowserRouter>
      </HelmetProvider>
  </React.StrictMode>
);