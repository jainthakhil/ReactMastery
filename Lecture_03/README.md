<!--* create a script in package.json -->

<!--todo: script for starting our project in dev mode {dev build script} -->
<!--? "start": "parcel index.html" -->

<!-- todo: script for starting app in production mode -->
<!--? "build":"parcel build index.html" -->

<!--* command for runnig the app is npm run start and a shortcut is npm start -->

<!--! deleting everything from App.js and writing everything new code -->

<!--? const heading = React.createElement("h1", { id: "heading" }, "Namaste new react series") -->
<!--* React.createElement will create an object in short react element is an object and when we render this element to DOM it becomes HTML element-->

<!--todo: INTRO TO JSX -->

<!--? 1) Itroduced to get rid of the clumsy code we used to write earlier to create html elements like above -->
<!--? 2) big thing to note that JSX is not a part of React, JSX is not a mandatary thing to write React Code. -->
<!--? 3) JSX just make devlopers life easy   -->

<!-- fix: JSX is a convention that is used to merge html and js code in a single file -->
<!--note: JSX is not html in javaScript JSX is html like syntax -->

<!--todo:a) const heading = React.createElement("h1", { id: "heading" }, "Namaste new react series 🚀") -->

<!--todo:b) const jsxheading = <h1 id="heading">JSX heading</h1> -->
<!--? botha a ad b are equivalent -->

<!--* logging both const will result the same javaScript object  -->

<!--ref const jsxheading = <h1 id="heading">JSX heading</h1> => this is a valid js we can say but it is not pure JS -->

<!--note: Browser does not understand JSX, it is transpiled before reaching to js engine and this thing is done by a package called BABEL its work is to convert the JSX into a form that js engine can understand (converting to React code) -->

<!--idea: JS engine only understands ECMASCRIPT (ES6) and its versions -->

<!--fix: JSX => Babel transpiles it to React.createElement => ReactElement- JS Object => HTMLElement(render) -->

<!--? in JSX we write "className" instead of "class" thats what we can say that JSX is not HTML in JS {we use camelCase in JSX} -->

<!--head: React Component -->
<!--idea: Types- -->

    1). Class Based Components
    2). Functional Components

<!--fix React Functional Component -->
<!--* A function that return JSX code is a react functional Component -->

<!--? const HeadingComp = ()=>{
    return <h1>I am a heading component</h1>
} -->

<!--? const HeadingComp = ()=> <h1>I am a heading component</h1> -->

<!--* Both the type of defining comp is valid as it is a behaviour of JS arrow functions, when there is not {} curly use then no return is required but when {} used then return is mandatary -->

<!--todo: if single line JSX is returned from the function without {} then no need to wrap the JSX with (), but it there are multiple lines of JSX then we need to wrap it with () as -
const HeadingComp3 = () => (
    <div>
        <h1>I am a heading component having more than 1 line without return keyword</h1>
    </div>
)
-->
<!--note: without return is used only when there is not const etc in the comp -->
