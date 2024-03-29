import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { AdminFlagProvider } from './components/providers/AdminFlagProvider';

/*
//デフォルト記載
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/

/*
//テキスト記載
ReactDOM.render(
  <AdminFlagProvider>
    <App />
  </AdminFlagProvider>,
  document.getElementById("root")
);
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AdminFlagProvider>
    <App />
  </AdminFlagProvider>,
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
