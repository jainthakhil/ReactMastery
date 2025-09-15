import { useState, useEffect } from "react";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useFetchData from "../utils/useFetchData";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestraunt, setListOfRestraunt] = useState([]);
    const [searchText, setSearchText] = useState("")
    const [searchedRes, setSearchedRes] = useState([]);

    const fetchedData = useFetchData();
    const onlineStatus = useOnlineStatus();

    useEffect(() => {
        // setListOfRestraunt(fetchedData)
        // console.log(fetchedData);
        fetchData();
        // fetchedData
    }, [])

    // console.log(fetchedData);

    // https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.6903339&lng=77.40789079999999&carousel=true&third_party_vendor=1

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.6903339&lng=77.40789079999999&carousel=true&third_party_vendor=1");

        const json = await data.json();

        const resData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(data.json);
        setListOfRestraunt(resData)
        setSearchedRes(resData)
    }

    console.log("Body rendered")
    if (!onlineStatus) {
        return <h1>Oops look like you are offline, plaese connect to internet</h1>
    }
    return listOfRestraunt.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button onClick={() => {
                        const filteredRes = listOfRestraunt.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))

                        // setListOfRestraunt(filteredRes)
                        setSearchedRes(filteredRes)

                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestraunt.filter((item) => item.info.avgRating > 4)
                    setListOfRestraunt(filteredList)
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    searchedRes.map((item) =>
                        <Link to={"restaurants/" + item.info.id} key={item.info.id}>
                            <RestrauntCard resData={item.info} />

                        </Link>

                    )
                }

            </div>
        </div>
    )
}

export default Body;