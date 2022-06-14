import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppFunctionalRewrite from './AppFunctionalRewrite';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <AppFunctionalRewrite />
  </React.StrictMode>
);
