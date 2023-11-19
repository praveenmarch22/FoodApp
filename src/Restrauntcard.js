import { CDN_URL } from "./utils/constants";

const Restrauntcard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } =
    resData?.info;

  return (
    <div className="res-card">
      <img src={CDN_URL + cloudinaryImageId} className="res-image" />
      <h4>{name}</h4>
      <h5>{cuisines.join(",")}</h5>
      <h5>{avgRating}</h5>
      <h5>{deliveryTime}</h5>
    </div>
  );
};

export default Restrauntcard;
