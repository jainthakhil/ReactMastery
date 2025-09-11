import { CDN_URL } from "../utils/constants";

//fix=> inline style in JSX
const styleCard = {
    backgroundColor: "#f0f0f0",
}

const styleImg = {
    height: "50%",
    width: "100%",
    objectFit: "cover"
}
const RestrauntCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla: { deliveryTime } } = resData;
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" style={styleImg} src={CDN_URL + cloudinaryImageId} alt="res-logo" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")} </h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} mins</h4>
        </div>)

}

export default RestrauntCard