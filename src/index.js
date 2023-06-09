import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UseStateApp from './useState/App';
import UseEffectApp from './useEffect/App';
import UseMemoApp from './useMemo/App';
import UseRefApp from './useRef/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UseStateApp />
    <UseEffectApp />
    <UseMemoApp />
    <UseRefApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
