import React from "react";
import ReactDom from "react-dom";
import { Application } from "./components";

const mainElement = document.createElement("div");
document.body.appendChild(mainElement);

ReactDom.render(<Application />, mainElement);
