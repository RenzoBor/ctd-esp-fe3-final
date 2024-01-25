import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextProvider } from './context.js';
import { DataProvider } from './Components/utils/global.context.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <DataProvider>
      <App/>
      </DataProvider>
);


