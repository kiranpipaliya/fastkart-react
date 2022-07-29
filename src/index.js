import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';
import './assets/scss/style.scss';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<App />);
