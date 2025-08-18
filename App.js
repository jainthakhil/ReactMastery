import React from "react";
import ReactDOM from "react-dom/client"

/*
const heading = React.createElement("h1", { id: "heading" }, "Namaste new react series 🚀")


//ref: JSX got transpiled before it reaches to JS engine - PARCEL responsible for it

const jsxheading = <h1 id="heading" tabIndex="2">JSX heading</h1>

const para = (
    <p className="para">
        Hello this is a paragraph which shows that if we write JSX in more than 1 line we need to wrap the code with () paranthesis
    </p>
);
*/

// Components
// Functional Components 
const HeadingComp = () => {
    return <h1>I am a heading component with return keyword</h1>
}

const HeadingComp2 = () => <h2>I am a heading 2 comp without return keyword</h2>

// both the heading comp are same, single line to return, return keyword is not mandatary

//fix: more than one line, must be wrapped with ()
const HeadingComp3 = () => (
    <div>
        <h1>I am a heading component</h1>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComp3 />)
