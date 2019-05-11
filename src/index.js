import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Entry Point find App.js
ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
