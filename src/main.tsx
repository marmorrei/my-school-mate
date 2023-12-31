import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { EvidenceCollectionProvider } from './context/EvidenceCollectionProvider.tsx';
import { UserProvider } from './context/UserProvider.tsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const root: HTMLElement | null = document.getElementById('root');

root !== null &&
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <BrowserRouter>
        <EvidenceCollectionProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </EvidenceCollectionProvider>
      </BrowserRouter>
    </React.StrictMode>,
  );
