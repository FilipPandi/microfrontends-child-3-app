import React from "react";
import {Panel} from "primereact/panel";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import './App.css'

function App() {
    return (
        <div style={{margin: '5%'}}>
            <Panel header="Ovo je Privatni dio" className="custom-panel">
                PRIVATNI dio!
            </Panel>
        </div>

    );
}
export default App;
