import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { initializeContract } from "./utils/near";

window.nearInitPromise = initializeContract()
    .then(() => {
        ReactDOM.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>,
            document.getElementById("root")
        );
    })
    .catch(console.error);