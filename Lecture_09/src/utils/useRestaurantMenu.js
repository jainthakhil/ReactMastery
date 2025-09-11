import { useEffect } from "react";
const useRestaurantMenu = (resId) => {

    useEffect(() => {
        fetchData()
    }, [])

    // const fetchData = async () => {
    //     const data = await fetch()
    // }

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.6903339&lng=77.40789079999999&carousel=true&third_party_vendor=1");

        const json = await data.json();

        const resData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(resData);


        setListOfRestraunt(resData)
        setSearchedRes(resData)

    }
    return resInfo;
}

export default useRestaurantMenu;