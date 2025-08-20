import React from "react";
import ReactDOM from "react-dom/client"

/*
*Header
 *   -Logo
 *   -Nav Items
*Body 
 *   -Search
 *   -Restaurant Container
 *       -Restaurant Card 
 *          -Img
 *          -Name of Restraunt, Cuisine, DeliveryTime
*Footer
 *   -Copyright 
 *   -Links
 *   -Address 
 *   -Contact
*/

//fix=> inline style in JSX
const styleCard = {
    backgroundColor: "#f0f0f0",
}

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpfvLP_atF0C2ccpj3L2AL3l_pUNyavT6RUA&s" alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestrauntCard = (props) => {
    const { resName, cousine } = props;
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIaUe-0wpJiG7OjK1SbmbRaY4Cy471floEWg&s" alt="res-logo" />
            <h3>{resName}</h3>
            <h4>{cousine} </h4>
            <h4>4.4 stars</h4>
            <h4>35 mins</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <RestrauntCard resName="Jainth Foods" cousine="North Indian, South Indian, Non-Veg" />
                <RestrauntCard resName="Amrit Foods" cousine="South Indian, Non-Veg, Veg, Fast Food" />

            </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)
