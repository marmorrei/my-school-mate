import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { EvidenceCollectionProvider } from './context/EvidenceCollectionProvider.tsx';
import './index.css';

const root: HTMLElement | null = document.getElementById('root');

root !== null &&
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <EvidenceCollectionProvider>
        <App />
      </EvidenceCollectionProvider>
    </React.StrictMode>,
  );
