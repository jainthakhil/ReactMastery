<!--head LECTURE - 05 -->

# refactoring the code, make separate file for separate work

<!--* creation of "src" folder -->
<!--* creating components folder insided src, we will put all our react components inside this components folder -->

<!--? while importing components it is not mandatory to use extension after the comp name as .js, .jsx . we can use only the name of components   -->

{

<!-- note: NEVER keep Hard Coded Data into the APP or Component, {ex- url strings, array of objects, etc}  -->

<!--idea: put hard coded data into a new folder like utils, commons, configs, {utils recommended}, under which a js file with {small letter name} constants.js, should present which contain the actual data  -->

<!--? while storing data in the utils folder in a js file, always try to give CAPITAL_LETTER name to the constants. -->

}

<!--fix: we can have only single export default in a js file, with export default we can export only one const only, to tackle this we should use named export like "export const const_name", import { CDN_URL } from "../utils/constants"; -->

<!--? when we use named export then, while importing, the name must be wrapped with {}. ex => import { CDN_URL } from "../utils/constants";    -->
<!--? when we use default export then while importing, the name must be simple with no bracket over it. ex => import Header from "./components/Header"; -->

<!--head:         React HOOKS         -->

{

<!--* Normal js utility functions, -->

<!--* hooks is fundamentally is javascript function, given us by react, that function has some logic written behind the scene -->
<!--? useState(), useEffect() -->

}

# const [listOfRestraunt, setListOfRestraunt] = useState(resList);

<!--* first parameter is the variable that holds the actual data, second parameter if the updator function which update the value inside the variable -->
<!--note: whenever a state variable got update, React re-renders the component -->

<!--? core Algorithms of React -->

{

<!--head: Reconciliation / React Fiber-->
<!--* introduced in React 16 -->
<!--note: When something changes on the UI, it is Reconciliation -->
<!--* Virtual DOM - Representation of actual DOM / normal JS Object -->

    <!--head: Diff Algo -->
    <!--* It finds out the difference bw updated Virtual DOM and the previous virtual DOM, and if diff is found then it update the DOM  -->

    <!--? reconciliation=> -->
    <!--note The algorithm React uses to diff one tree with another to determine which parts need to be changed.-->
    <!--? update  -->
    <!--note A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render. -->

    <!--todo: Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM." A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app. -->

}
