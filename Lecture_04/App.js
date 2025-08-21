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

const resList = [
    {
        "id": "140666",
        "name": "Burger King",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/de585efd-2b23-4ccc-873e-8339528dc60d_140666.jpg",
        "locality": "ASJ Grand Plaza Mall",
        "areaName": "Dwarika Puri",
        "costForTwo": "₹350 for two",
        "cuisines": [
            "Burgers",
            "American"
        ],
        "avgRating": 4.4,
        "parentId": "166",
        "avgRatingString": "4.4",
        "totalRatingsString": "7.9K+",
        "sla": {
            "deliveryTime": 26,
            "lastMileTravel": 6.8,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "6.8 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-08-21 23:59:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹59"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"

    },
    {
        "id": "238539",
        "name": "New Yadgar Restaurant",
        "cloudinaryImageId": "sruj73mc6emxd6r19sto",
        "locality": "Meenakshi Chowk",
        "areaName": "Khalapar",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "Mughlai"
        ],
        "avgRating": 4.5,
        "parentId": "148383",
        "avgRatingString": "4.5",
        "totalRatingsString": "4.1K+",
        "sla": {
            "deliveryTime": 26,
            "lastMileTravel": 6.1,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "6.1 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-08-21 23:59:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                    "description": "OnlyOnSwiggy"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "OnlyOnSwiggy",
                                "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹69"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"

    },
    {
        "id": "136863",
        "name": "Radhika snacks & kathi rolls",
        "cloudinaryImageId": "l9lu9spztatsralx2zbh",
        "locality": "Gandhi colony",
        "areaName": "Dwarkapuri",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "rolls",
            "Momos"
        ],
        "avgRating": 4.4,
        "veg": true,
        "parentId": "164414",
        "avgRatingString": "4.4",
        "totalRatingsString": "1.6K+",
        "sla": {
            "deliveryTime": 24,
            "lastMileTravel": 6.1,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "6.1 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-08-21 22:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "pureveg",
                                "imageId": "v1695133679/badges/Pure_Veg111.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹77"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"

    },
    {
        "id": "243535",
        "name": "Rol Gol",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/9/92c98489-2404-4834-be7c-d8fd753173fc_243535.sss.jpg",
        "locality": "Gandhi Colony",
        "areaName": "Kamla farm road",
        "costForTwo": "₹250 for two",
        "cuisines": [
            "rolls"
        ],
        "avgRating": 4.2,
        "parentId": "170654",
        "avgRatingString": "4.2",
        "totalRatingsString": "3.4K+",
        "sla": {
            "deliveryTime": 28,
            "lastMileTravel": 6.1,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "6.1 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-08-21 23:00:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹99"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    {
        "id": "386224",
        "name": "Hotel Green Apple",
        "cloudinaryImageId": "yqwkgmdemghbz4mzvbge",
        "locality": "Roorkee Rd ",
        "areaName": "Swarup Plaza",
        "costForTwo": "₹350 for two",
        "cuisines": [
            "North Indian",
            "Chinese"
        ],
        "avgRating": 3.9,
        "veg": true,
        "parentId": "13076",
        "avgRatingString": "3.9",
        "totalRatingsString": "534",
        "sla": {
            "deliveryTime": 27,
            "lastMileTravel": 5.6,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "5.6 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-08-21 23:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "pureveg",
                                "imageId": "v1695133679/badges/Pure_Veg111.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "65% OFF",
            "subHeader": "UPTO ₹130"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    {
        "id": "671996",
        "name": "Veer Ji Malai Chaap Wale",
        "cloudinaryImageId": "ad148e396d6603cba2fa8f62f062da50",
        "locality": "Dwarikapuri",
        "areaName": "Dwarkapuri Road",
        "costForTwo": "₹350 for two",
        "cuisines": [
            "Indian",
            "South Indian"
        ],
        "avgRating": 4.2,
        "veg": true,
        "parentId": "12056",
        "avgRatingString": "4.2",
        "totalRatingsString": "602",
        "sla": {
            "deliveryTime": 30,
            "lastMileTravel": 6.1,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "6.1 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-08-21 23:00:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹50 OFF",
            "subHeader": "ABOVE ₹299",
            "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    {
        "id": "613652",
        "name": "Rajmahal Restaurant",
        "cloudinaryImageId": "ilautxtm7p3tf9cibcnc",
        "locality": "Gandhi Colony",
        "areaName": "Town Hall Road",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "North Indian",
            "Indian",
            "Chinese",
            "Beverages"
        ],
        "avgRating": 4.1,
        "veg": true,
        "parentId": "165739",
        "avgRatingString": "4.1",
        "totalRatingsString": "2.8K+",
        "sla": {
            "deliveryTime": 27,
            "lastMileTravel": 6.2,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "6.2 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-08-21 23:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
                    "description": "Delivery!"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "Delivery!",
                                "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹66"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    }
]

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
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData;
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/" + cloudinaryImageId} alt="res-logo" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")} </h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{resData?.sla.deliveryTime} mins</h4>
        </div>)

}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                {
                    resList.map((item) => {
                        return <RestrauntCard key={item.id} resData={item} />
                    })
                }

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
