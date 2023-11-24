import React from 'react';
import ReactDOM from 'react-dom/client';
import { MemoizedApp } from './App.tsx';
import { EvidenceCollectionProvider } from './context/EvidenceCollectionProvider.tsx';
import './index.css';

const root: HTMLElement | null = document.getElementById('root');

root !== null &&
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <EvidenceCollectionProvider>
        <MemoizedApp />
      </EvidenceCollectionProvider>
    </React.StrictMode>,
  );
