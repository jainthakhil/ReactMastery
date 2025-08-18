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

<!--* JSX is a convention that is used to merge html and js code in a single file -->
<!--note: JSX is not html in javaScript JSX is html like syntax -->

<!--todo:a) const heading = React.createElement("h1", { id: "heading" }, "Namaste new react series 🚀") -->

<!--todo:b) const jsxheading = <h1 id="heading">JSX heading</h1> -->
<!--? botha a ad b are equivalent -->

<!--* logging both const will result the same javaScript object  -->

<!--* const jsxheading = <h1 id="heading">JSX heading</h1> => this is a valid js we can say but it is not pure JS -->

<!--note: Browser doesnot understand JSX, it is transpiled before reaching to js engine and this thing is done by a package called BABEL its work is to convert the JSX into a form that js engine can understand (converting to React code) -->

<!--idea: JS engine only understands ECMASCRIPT (ES6) and its versions -->

<!--note: JSX => React.createElement => ReactElement- JS Object => HTMLElement(render) -->

<!--? in JSX we write className instead of class thats what we can say that JSX is not HTML in JS {we use camelCase in JSX} -->
