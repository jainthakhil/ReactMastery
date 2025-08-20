<!--head LECTURE - 04 -->

# Starts with building a layout of a fully fledged app, thinking about the UI and design layout for a food ordering website

<!-- * styling in JSX -->
<!--? inline css styling in JSX accepts a JS object => style={} -->

<!-- todo: -->

{
const styleCard = {
backgroundColor: "yellow",
}

<div className="res-card" style={styleCard}>
            <h3>Jainth Foods</h3>
        </div>
}

<!-- note: props -->

making components dynamic can be achieved by using props,
props are nothing but arguments that are passed to a Functional Component.

# Props are Object that are passed to a functional component

<!--* ex -->
<!--? normal form  -->

1.  const RestrauntCard = (props) => {
    console.log(props); // return object
    return (
    <div className="res-card" style={styleCard}>
    <img className="res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIaUe-0wpJiG7OjK1SbmbRaY4Cy471floEWg&s" alt="res-logo" />
    <h3>{props.resName}</h3>
    <h4>{props.cousine} </h4>
    <h4>4.4 stars</h4>
    <h4>35 mins</h4>
    </div>
    )
    }

<!--todo: destructured form  -->

2.  const RestrauntCard = ({resName,cousine}) => {
    return (
    <div className="res-card" style={styleCard}>
    <img className="res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIaUe-0wpJiG7OjK1SbmbRaY4Cy471floEWg&s" alt="res-logo" />
    <h3>{props.resName}</h3>
    <h4>{props.cousine} </h4>
    <h4>4.4 stars</h4>
    <h4>35 mins</h4>
    </div>
    )
    }

<RestrauntCard 
 resName="Jainth Foods" cousine="North Indian, South Indian, Non-Veg"
  />

<!--head: Config Driven UI -->
<!--idea: UI is basically driven by a config{backend thing} like based on backend logic {config} different UI is built -->
