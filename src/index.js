import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './ThemeContext';

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider brand="marca-a" themeName="tema-1" mode="light">
        <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
