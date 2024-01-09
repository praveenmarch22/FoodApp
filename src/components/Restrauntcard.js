import { CDN_URL } from "../utils/constants";

const Restrauntcard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } =
    resData?.info;

  return (
    <div className="w-[300px] bg-gray-100 p-3 m-3 h-[390px] break-words">
      <img
        src={CDN_URL + cloudinaryImageId}
        className="w-[100%] h-[200px] rounded-lg"
      />
      <h4 className="font-bold mb-3">{name}</h4>
      <h5>{cuisines.join(",")}</h5>
      <h5>{avgRating} stars </h5>
      <h5>{deliveryTime}</h5>
    </div>
  );
};

export default Restrauntcard;
