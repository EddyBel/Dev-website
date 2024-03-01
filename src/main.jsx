import React from 'react';
import ReactDOM from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from './store/store.context.jsx';
import App from './App.jsx';
import './styles/index.css';
import './styles/mesh-gradients.css';
import './styles/phones.css';
import './styles/blob-mesh.css';
import './styles/animations.css';
import './styles/loader-fire.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NextUIProvider>
      <StoreProvider>
        <App />
      </StoreProvider>
    </NextUIProvider>
  </BrowserRouter>,
);
