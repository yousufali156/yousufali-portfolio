// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from './ThemeContext';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
