import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "./index.css";
import emailjs from 'emailjs-com';

emailjs.init('94AG-Sdq8lKAy5zC3');


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);