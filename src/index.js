import React from 'react';
import './index.css';
import App from './App';
import * as ReactDOMClient from 'react-dom/client';

let root = null;
let container = null;
window.renderChild3 = (containerId) => {
    container = document.getElementById(containerId);
    root = ReactDOMClient.createRoot(container);

    root.render(<App/>);
};

window.unmountChild3 = () => {
    root.unmount(container);
};

if (!document.getElementById('Child3-container')) {
    const container = document.getElementById('root');
    const root = ReactDOMClient.createRoot(container);
    root.render(<App/>);
}
