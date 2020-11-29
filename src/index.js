import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App  from './App';
import Footer from './components/footer';
import reportWebVitals from './reportWebVitals';
import Formfill from './components/form';





ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <Formfill />,
  document.getElementById("nav")
);

ReactDOM.render(
  <Footer />,
  document.getElementById('bottom')
);

reportWebVitals();
