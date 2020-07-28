import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { getBus } from '@runnan/obvious-core';

const bus = getBus('demo');

bus.createApp('react-app')
    .bootstrap(async () => {
        ReactDOM.render(
            <React.StrictMode>
              <App />
            </React.StrictMode>,
            document.getElementById('react-app')
        );
    });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
