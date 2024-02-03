import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import userContext from "../utils/context";

const Restrauntcard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, areaName, avgRatingString } =
    resData?.info;

  const { username } = useContext(userContext);

  return (
    <div className="w-[280px]  p-3 m-3 h-[300px] relative transition-transform transform-gpu hover:scale-90">
      {resData?.info?.aggregatedDiscountInfoV3?.header ? (
        <label className="absolute bg-transparent text-xl text-white p-2 rounded-lg w-[256px] font-extrabold bg-gradient-to-t from-black top-[140px]">
          {resData?.info?.aggregatedDiscountInfoV3?.header}{" "}
          {resData?.info?.aggregatedDiscountInfoV3?.subHeader}
        </label>
      ) : (
        <label className="absolute bg-transparent text-xl text-white p-2 rounded-b-lg w-[256px] h-[30px] font-extrabold bg-gradient-to-t from-black top-[152px]"></label>
      )}
      <img
        src={CDN_URL + cloudinaryImageId}
        className="w-full h-[170px] object-cover rounded-lg shadow-inner overflow-hidden"
        alt={name}
      />
      <div className=" w-11/12">
        <h4 className="font-bold mb-0 mt-3 overflow-hidden overflow-ellipsis whitespace-nowrap text-xl ml-2">
          {name}
        </h4>
        <div className="ml-2 flex">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="green"
            role="img"
            aria-hidden="true"
            stroke-color="rgba(2, 6, 12, 0.92)"
          >
            <circle cx="10" cy="10" r="9" fill="green"></circle>
            <path
              d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
              fill="white"
            ></path>
          </svg>
          <p className="ml-1">
            {avgRatingString} {resData?.info?.sla?.slaString}
          </p>
        </div>
        <p className="text-sm overflow-hidden overflow-ellipsis whitespace-nowrap ml-2 font-sans font-light">
          {cuisines.join(",")}
        </p>
        <h5 className="ml-2 font-sans font-light">{areaName}</h5>
      </div>
    </div>
  );
};

export const withPromotedLabel = (Restrauntcard) => {
  return (props) => {
    return (
      <div className="transition-transform transform-gpu hover:scale-90">
        <label className="absolute bg-black text-white p-2 m-2 z-40">
          Promoted
        </label>
        <Restrauntcard {...props} />
      </div>
    );
  };
};

export default Restrauntcard;
