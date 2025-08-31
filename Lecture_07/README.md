<!-- LECTURE 07 -->

<!-- note: property of useEffect() -->
<!--* when there is no dependency array [], then the call back fun will be called on every render.-->

useEffect(() => {
console.log("useEffect rendered")
}); ==> no dependency array

<!--* But if the dependency array is empty then the callback will be called just once on the initial render only   -->

useEffect(() => {
console.log("useEffect rendered")
}, []); ==>[] empty dependency array

<!--* And if there is something in the dependency array as a dependency then the callback will be called everytime the dependency changes -->

useEffect(() => {
console.log("useEffect rendered")
}, [btnName]); ==> some dependency in the dependency array

<!-- note: Never use hooks outside the body of the component it will not work and throw an error -->

<!-- note: Never use useState to make a local state variable inside the if else conditon -->

<!-- head: ROUTING IN REACT  -->
<!-- *we have to install react-router-dom into our app
*then we have to import createBrowserRouter from that,
*createBrowserRouter is used to create a configuration,
*This configuration is a list/array of objects, which tells that on which route which component will be rendered -->

appRouter= createBrowserRouter([
{
path:"/",
element: <AppLayout/>,
},
{
path:"/about",
element: <About/>,
}
])

<!--* RouterProvider is a component which is used to provide these Routes to our app. -->

<!--note: errorElement:<Error/> -->
<!--? Like the path and element inside the configuration we also have errorElement:<Error/> which shows this defined Error page when the route doesnt match -->

<!-- note: useRouteError -->
<!--* useRouteError hook is provided by react-router-dom, using this error we can get more info about the error and show on page to the user -->

<!-- note: children in routing -->
<!--* in the root route "/" mostly we have some addon path like /about , /contact so these are the children routes which can be handled as - -->

path: "/",
element: <AppLayout />,
errorElement: <Error />,
children: [
{
path: "/about",
element: <About />,
},
{
path: "/contact",
element: <Contact />

            }
        ]

<!-- note: condition based routing -->
<!--? which component should be rendered on which route can be done using "<Outlet />"  -->
<!--* like we have header and footer intact with all the pages and the content changes along with the routes so creating children routes and Outlet i can be achieved Outlet Component will automatically render the components according to the path -->
<div className="app">
            <Header />
            <Outlet />
        </div>

const appRouter = createBrowserRouter([
{
path: "/",
element: <AppLayout />,
children: [
{
path: "/",
element: <Body />,
},
{
path: "/about",
element: <About />,
},
{
path: "/contact",
element: <Contact />

            }
        ],
        errorElement: <Error />,
    },

])

<!-- note: never use anchor <a> tag for navigating to a route as this result in the reloading of the whole page which is not a good thing . -->
<!--* instead of this use <Link /> from react-router-dom -->

<!--? React web applications are called single page applications as there is a thing called client side routing. -->

<!-- dynamic routing  -->
<!--* :/param => data after the ":" colon is dynamic like here param is dynamic for says -->
<!--note: to access the dynamic route in the url we use a hook called useParam from react-router-dom -->

Behind the scene <Link/> component uses <a/> tag
