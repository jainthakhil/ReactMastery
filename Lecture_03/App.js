import React from "react";
import ReactDOM from "react-dom/client"

/*
const heading = React.createElement("h1", { id: "heading" }, "Namaste new react series 🚀")


//ref: JSX got transpiled before it reaches to JS engine - PARCEL responsible for it

const jsxheading = <h1 id="heading" tabIndex="2">JSX heading</h1>

*/
const para = (
    <p className="para">
        Hello this is a paragraph which shows that if we write JSX in more than 1 line we need to wrap the code with () paranthesis
    </p>
);


const HeadingComp = () => {
    return <h1>I am a heading component with return keyword</h1>
}

const HeadingComp2 = () => <h2>I am a heading 2 comp without return keyword</h2>

// component composition 
const HeadingComp3 = () => (
    <div>
        <h1>I am a heading component having more than 1 line without return keyword</h1>
        <HeadingComp2></HeadingComp2>
        {para} //? writing js code inside the JSX
        {console.log("this is a log from a comp")}
        {HeadingComp()}
    </div>
)



const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComp3 />)
