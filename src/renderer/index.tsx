import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Application from "./components/Application";
import { rootReducer } from "./reducers";

const mainElement = document.createElement("div");
document.body.appendChild(mainElement);

ReactDom.render(
    <Provider store={createStore(rootReducer)}>
        <Application />
    </Provider>,
    mainElement
);
