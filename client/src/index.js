import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
<<<<<<< HEAD
// import '../public/lib/bootstrap/css/bootstrap.min.css';
import 'public/css/style.css';
import 'public/css/index.css';
import 'src/App.css';
import 'public/css/adminlte.css';
import 'public/plugins/fontawesome-free/css/all.min.css';
import 'public/lib/font-awesome/css/font-awesome.min.css';
import 'public/plugins/jquery/jquery.min.js'
import 'public/dist/js/adminlte.min.js';
import 'public/lib/animate/animate.min.css';
// import '../public/lib/lightbox/css/lightbox.min.css';
import App from '../src/components/App';

=======
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
>>>>>>> 3c004d6d6ae07ceb3c9587bfcba5f4dcf8ea30a1
=======
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
>>>>>>> 3c004d6d6ae07ceb3c9587bfcba5f4dcf8ea30a1

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
