import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement("h1", { id: "heading" }, "Namaste new react series 🚀")


//ref: JSX got transpiled before it reaches to JS engine - PARCEL responsible for it

const jsxheading = <h1 id="heading" tabIndex="2">JSX heading</h1>

const para = (
    <p className="para">
        Hello this is a paragraph which shows that if we write JSX in more than 1 line we need to wrap the code with () paranthesis
    </p>
);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(para)
