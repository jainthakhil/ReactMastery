import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
const useRestaurantMenu = (resId) => {
    console.log("custom hook called");

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json()
        setResInfo(json.data?.cards[2]?.card?.card?.info)
    }
    return resInfo;
}

export default useRestaurantMenu;