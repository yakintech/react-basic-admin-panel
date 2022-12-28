import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CounterProvider } from './store/CounterContext';
import { FavoriteProvider } from './store/FavoriteContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FavoriteProvider>
        <CounterProvider>
          <App />
        </CounterProvider>
      </FavoriteProvider>
    </BrowserRouter>
  </React.StrictMode>
);

