import { useState, useEffect } from "react";

const useFetchData = () => {
    const [fetchedData, setFetchedData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=29.5189085&lng=77.71015299999999&carousel=true&third_party_vendor=1");

        // https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=29.5189085&lng=77.71015299999999&carousel=true&third_party_vendor=1
        //  gzb
        // https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.6903339&lng=77.40789079999999&carousel=true&third_party_vendor=1

        const json = await data.json();

        const resData = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        // console.log(resData);
        setFetchedData(resData)
    }
    console.log(fetchedData)
    return fetchedData;
}

export default useFetchData