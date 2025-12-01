import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import { store } from './app/store'; 
const root = createRoot(document.getElementById('root'));
// Import the store here.

// Pass state and dispatch props to the <App /> component.
const render = () => {
  root.render(
    <App 
      
    />)
};
render();

// Subscribe render to the store.