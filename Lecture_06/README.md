<!-- head: LECTURE 06 -->

<!--? 1). Monolith Architecture {Everything in a single Unit} -->

All application components—such as the user interface, business logic, and data access layers—are built as a single, unified unit within a single codebase and deployed as one indivisible deployment unit.

<!--? 2). Microservice {single responsibility principle} -->

Small, independently deployable services, are combined together to form a big project, each service has its own job.
Microservices are framework independent, any service can be written in any tech stack
All the services can be deployed on different ports and can be used same domain.

<!-- note: Approach used to render Webpage in React ->  -->

# PAGE LOADS ==> RENDER ==> API_CALL ==> RE-RENDER

<!--? useEffect hook -->

useEffect is used to handle the side effects, it takes two arguments, first is a callback function and other is dependency array.
The callback fun is called after the component renders, first the component is rendered and when the render cycle finishes the useEffects callback function is called

<!--* CORS - Cross Origin Resource Sharing -->

this error occurs when the client and source origin are mis match

<!--head: optional chaining -->

# const resData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

if any part of the chain before "?." operator evaluates to null or undefined, the entire expression immediately short circuits and evaluates to undefined, instead of throwing TypeError. it eliminates the need of explicitly null or indefined check at each level of a nested object

<!--? Improving UX while component is rendering and taking time -->

use conditional rendering like while the data is not present in the state we can render elements like loading... and a Industry standard which is called "shimmer UI" or skeleton UI

<!--* return listOfRestraunt.length === 0 ? <Shimmer /> : <MainComp />  -->

this means if listOfRestraunt.length is = 0 then render Shimmer otherwise render MainComp, this is helpful when a comp is taking long time to render and getting data up till we can show something other to improve the UX

<!--? Why state Variable instead of normal JS variable -->

# Normal JS variable do not make any changes in the UI as they do not re-render the component automatically because react doesnt have any track of the variable whether its value changed or not, whereas state Variable via useState enable automatic re-rendering of components when their values change because they are special variable that react has a track.

<!--? what happens when a state variable changes through updator fun and how the value changes? -->
<!-- note: when a state variable changes the updator function call the component function once again but with the new value it provided, that means a new tree of that comp is build and it finds the DIFF bw old DOM tree and new DOM tree. And with what the difference react found it updates that thing, as changing the state variable caused a re render of the component but with new instance of data -->

<!--? how input field work in React -->
<!--* first we have to make a local state variable to hold the value using useState(), then we have to bind the value of the input with the local variable, after that we have to make a onChange handler function to change the value of the state variable and then the value inside the input can change  -->
<!-- note: Everytime the value inside the input changes even when we just type one sinle letter the component get re rendered -->
