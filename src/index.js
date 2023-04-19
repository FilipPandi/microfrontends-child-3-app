import React from 'react';
import './index.css';
import App from './App';
import * as ReactDOMClient from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

let isMounted = false;
let root = null;
let container = null;
const router = createBrowserRouter([
    {
        path: "/components/private",
        element: <App/>,
    }
]);

window.renderChild3 = (containerId) => {
    container = document.getElementById(containerId);

    if (isMounted === false) {
        root = ReactDOMClient.createRoot(container);

        root.render(
            <React.StrictMode>
                <RouterProvider router={router}/>
            </React.StrictMode>);
    }

    isMounted = true;

    console.log("Application 3 - Private - is mounted.");
};

window.unmountChild3 = () => {
    if (isMounted === true) {
        root.unmount(container);
        isMounted = false;

        console.log("Application 3 - Private - unmounting previous...")
    }
};

if (!document.getElementById('Child3-container')) {
    const container = document.getElementById('root');
    const root = ReactDOMClient.createRoot(container);
    root.render(
        <React.StrictMode>
            <RouterProvider router={router}/>
        </React.StrictMode>);
}
