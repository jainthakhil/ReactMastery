import { useState } from "react";
import RestrauntCard from "./RestrauntCard";
import resList from "../utils/mockData";

const Body = () => {
    let restrauntList = resList;
    const [listOfRestraunt, setListOfRestraunt] = useState(resList);

    return (
        <div className="body">
            <div className="filter">
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