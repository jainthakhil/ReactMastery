//! syntax ==>
//* const elementName = React.createElement("tagName", {attribute section like id and class}, "content for the element also known as children ");

//? this element is nothing but a javaScript Object
//? props are the set of children and attribute
//? attr like - class id etc and childrent is the content inside the element 
/*
const para = React.createElement("p", { id: "paragraph", class: "para" }, "Hello and welcome to react learning!"); //create an element using React
const root = ReactDOM.createRoot(document.getElementById("root")); // creating root element using ReactDOM
root.render(para); // rendering the element inside the root
*/
//* React.createElement() creates a JavaScript Object which takes tagName, children and attributes  

//? render() method takes this object and converting it into the desired html tag which browser understands and put it on the DOM

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

//todo: creating sibling elements in react
//* more than one elements on the same heirarchy level
const master = React.createElement("div",
    { id: "master" },
    [
        React.createElement("div",
            { class: "children" },
            "I am child One"
        ),
        React.createElement("div",
            { class: "children" },
            "I am child Two"
        )
    ]
)
console.log(master)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(master);



