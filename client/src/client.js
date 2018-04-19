import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const username = 'berker';
ReactDOM.render(
    <App name={username} />,
    document.getElementById('root')
);
