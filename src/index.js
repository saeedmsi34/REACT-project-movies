import React from 'react';
import ReactDOM from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import './index.css';
import App from './componets/App/App.jsx';
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';





ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename='/#/'>
      <App />
     

    </BrowserRouter >
  </React.StrictMode>

  , document.getElementById('root')
);

reportWebVitals()
