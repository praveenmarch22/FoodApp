import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestrauntMenu = () => {
  const [resMenu, setResmenu] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(MENU_URL + resId);
    const menu = await data.json();
    setResmenu(menu);
  };
  if (resMenu === null) return <Shimmer />;

  const { name, cuisines, areaName } =
    resMenu?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <p>{areaName}</p>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}- Rs.{item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestrauntMenu;
