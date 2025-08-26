import { useState, useEffect } from "react";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestraunt, setListOfRestraunt] = useState([]);
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=29.5189085&lng=77.71015299999999&carousel=true&third_party_vendor=1");

        const json = await data.json();

        const resData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestraunt(resData)

    }
    console.log("Body rendered")
    return listOfRestraunt.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button onClick={() => {
                        const filteredRes = listOfRestraunt.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))

                        setListOfRestraunt(filteredRes)
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestraunt.filter((item) => item.info.avgRating > 4)
                    setListOfRestraunt(filteredList)
                }}>
                    Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    listOfRestraunt.map((item) => {
                        return <RestrauntCard key={item.info.id} resData={item.info} />
                    })
                }

            </div>
        </div>
    )
}

export default Body;