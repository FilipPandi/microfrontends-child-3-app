import React from "react";
import {Panel} from "primereact/panel";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import './App.css'
import {Button} from "primereact/button";

function App() {
    return (
        <div style={{margin: '5%'}}>
            <Panel header="Ovo je Privatni dio" className="custom-panel">
                <h2><a className={"link"} href="http://localhost:3000/"><Button severity="secondary"
                                                                                icon="pi pi-desktop"
                                                                                label={"Root - Direct link"}/></a></h2>
                <br/>
                PRIVATNI dio!
            </Panel>
        </div>

    );
}
export default App;
