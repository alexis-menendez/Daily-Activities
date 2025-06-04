import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'semantic-ui-css/semantic.min.css'
import './index.css'

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
    <App />
    </React.StrictMode>
  );
}
