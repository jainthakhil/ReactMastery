<!-- head: LECTURE 09  -->

<!-- * learn about single responsibility -->

<!-- ? creating custom hooks helps in single responsibility -->

<!-- note: custom hooks are helper functions -->

<!-- todo: there is an eventListener "online or offline" which is used to to know whether there is internet connection or not -->

<!-- fix: Lazy Loading -->
<!--* also known as on demand loading, loading a component into to app only when required, not just after the first app render -->
<!--note: for this Lazy from react is required, as well as the suspense -->
<!--? const About = lazy(()=> import('./components/About')) -->
<!--? lazy() accepts a callback funcion and import is a function inside it wwhich takes the path of component as parameter -->

{
path: "/about",
element: <Suspense fallback={<h1>Loading about page</h1>}> <About /></Suspense>
},

<!--? fall back is a condition when the component inside the Suspense is not loaded successfully it will be shown till then -->
<!--note: try to load big and heavy components using lazy and suspense -->
