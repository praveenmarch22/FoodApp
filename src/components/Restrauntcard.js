import { CDN_URL } from "../utils/constants";

const Restrauntcard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, areaName } = resData?.info;

  return (
    <div className="w-[300px] bg-gray-100 p-3 m-3 h-[390px] break-words">
      <img
        src={CDN_URL + cloudinaryImageId}
        className="w-[100%] h-[200px] rounded-lg"
      />
      <h4 className="font-bold mb-3">{name}</h4>
      <p className=" text-sm ">{cuisines.join(",")}</p>
      <h5>{areaName}</h5>
    </div>
  );
};

export const withPromotedLabel = (Restrauntcard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-2 m-2">Promoted</label>
        <Restrauntcard {...props} />
      </div>
    );
  };
};

export default Restrauntcard;
