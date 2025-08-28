import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestrauntMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams()
    console.log(resId);

    useEffect(() => {
        fetchMenu();

    }, [])

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);

        // https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6903339&lng=77.40789079999999&restaurantId=1011207&catalog_qa=undefined&submitAction=ENTER#

        const json = await data.json()
        console.log(json.data.cards[2].card.card.info);
        setResInfo(json.data.cards[2].card.card.info)
        console.log(json.data.cards[4]);


    }

    if (resInfo === null) return <Shimmer />

    return (
        <div className="menu">
            <h1>{resInfo?.name}</h1>
            <h2>{resInfo?.cuisines.join(", ")}</h2>
            <h3>{resInfo?.costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {resInfo?.cuisines.map((item) => <li key={item.id}>{item}</li>)}
            </ul>
        </div>
    )
}
export default RestrauntMenu