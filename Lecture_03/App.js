import React from "react"
import ReactDOM from "react-dom/client"

//todo: creating nested elements in react 
//*one element inside the another
const parent = React.createElement(
    "div", //? type of parent
    { id: "parent" }, //? giving id to parent
    React.createElement(
        "div", //? type of child
        { id: "child" }, //? giving id to child
        React.createElement("h1", {}, "I am h1 tag")) //final child of upper child
)

const master = React.createElement("div",
    { id: "master" },
    [
        React.createElement("div",
            {},
            "I am child One"
        ),
        React.createElement("div",
            {},
            "I am child Two"
        )
    ]
)


console.log(master)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(master);



