import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import RestrauntCategory from "./RestrauntCategory";
import { useState } from "react";

const RestrauntMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestrauntMenu(resId);

  const [showIndex, setShowIndex] = useState();

  if (resMenu === null) return <Shimmer />;

  const { name, cuisines, areaName } =
    resMenu?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  const categories =
    resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-3">{name}</h1>
      <p className="text-base">{cuisines.join(", ")}</p>
      <p>{areaName}</p>
      {categories.map((category, index) => (
        <RestrauntCategory
          data={category?.card?.card}
          showItems={showIndex == index ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestrauntMenu;
