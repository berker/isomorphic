import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const username = window.SERVER_STATE ? window.SERVER_STATE.username : 'berker';
ReactDOM.render(
    <App name={username} />,
    document.getElementById('root')
);