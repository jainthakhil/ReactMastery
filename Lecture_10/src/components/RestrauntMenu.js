import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestrauntMenu = () => {
    const { resId } = useParams()
    const resInfo = useRestaurantMenu(resId)
    // const [resInfo, setResInfo] = useState(null);
    // const [resMenu, setResMenu] = useState("")

    useEffect(() => {
        // fetchMenu();
        console.log(resInfo);

    }, [])


    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        console.log("fetch menu callled")

        // https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6903339&lng=77.40789079999999&restaurantId=1011207&catalog_qa=undefined&submitAction=ENTER#

        // https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6903339&lng=77.40789079999999&restaurantId=1011207&submitAction=ENTER

        const json = await data.json()
        // console.log(json.data.cards[2].card.card.info);
        console.log(json);

        // setResInfo(json.data?.cards[2]?.card?.card?.info)
        // console.log(json.data.cards[4]);
        // console.log(json.data.cards[6].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)

        console.log(json);

        const itemCards = resInfo?.json.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
        if (itemCards) console.log(itemCards)
        // setResMenu(itemCards);

        console.log(json.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR);
        // console.log(typeof itemCards)
        // setResInfo(itemCards)

        // {
        //     itemCards.map((item) =>
        //         console.log(item.card.info.name)
        //     )
        // }
    }

    if (resInfo === null) return <Shimmer />

    const itemCards = resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    if (itemCards) console.log(itemCards)


    const restroInfo = resInfo.data?.cards[2]?.card?.card?.info
    return (
        <div className="menu">
            <h1>{restroInfo?.name}</h1>
            <h3>{restroInfo?.cuisines.join(", ")}</h3>
            <h4>{restroInfo?.costForTwoMessage}</h4>
            <h4>Menu</h4>
            <ul>

                {
                    resInfo.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards?.map((item) =>
                        <li key={item.card.info.id}>{item.card.info.name}</li>
                    )
                }

            </ul>
        </div>
    )
}
export default RestrauntMenu