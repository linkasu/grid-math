import React from "react";
import ReactDOM from "react-dom/client";
import './utils/firebase'
import "./index.scss";
import App from "./components/App";
import { Provider } from "react-redux";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
);
