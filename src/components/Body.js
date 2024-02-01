import { useEffect, useState, useContext } from "react";
import Restrauntcard, { withPromotedLabel } from "./Restrauntcard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import ItemScroll from "./ItemScroll";
import Footer from "./Footer";
import AppStore from "./AppStore";
import searchContext from "../utils/context";

const Body = () => {
  const restaurants = useContext(searchContext);

  const [restrauntList, setRestrauntList] = useState([]);

  const [filteredRestraunt, setFilteredRestraunt] = useState([]);

  const RestrauntPromoted = withPromotedLabel(Restrauntcard);

  const [cuisine, setCuisine] = useState();

  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9180626&lng=77.6156642&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setTitle(json?.data?.cards[2]?.card?.card?.title);

    setRestrauntList(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestraunt(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setCuisine(json.data?.cards[0]?.card?.card?.imageGridCards?.info);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false) {
    return <h1>Looks like you are offline</h1>;
  }

  return restrauntList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="w-full">
        <ItemScroll cuisinedata={cuisine} />
        <div className="h-[2px] w-[80%] bg-slate-200 mx-auto mt-10"></div>
      </div>
      <div className="font-bold text-2xl mt-6 w-[80%] mx-auto">{title}</div>
      <div className="flex m-5 items-start w-[80%] mx-auto">
        <button
          className="px-4  border-black border-[1px] rounded-full py-1 ml-3"
          onClick={() => {
            const newrestrauntList = restrauntList;
            setFilteredRestraunt(newrestrauntList);
          }}
        >
          No Filter
        </button>
        <button
          className="px-4  border-black border-[1px] rounded-full py-1 ml-3"
          onClick={() => {
            const newrestrauntList = restrauntList.filter(
              (res) => res.info.avgRating > 4.0
            );
            setFilteredRestraunt(newrestrauntList);
          }}
        >
          Ratings 4.0+
        </button>
        <button
          className="px-4  border-black border-[0.5px] rounded-full py-1 ml-3"
          onClick={() => {
            const newrestrauntList = restrauntList.filter(
              (res) => res.info?.sla?.lastMileTravel < 2.0
            );
            setFilteredRestraunt(newrestrauntList);
          }}
        >
          Fast Delivery
        </button>
        <button
          className="px-4  border-black border-[1px] rounded-full py-1 ml-3"
          onClick={() => {
            const newrestrauntList = restrauntList.filter(
              (res) => parseInt(res.info.costForTwo.substring(1, 4)) < 300
            );
            setFilteredRestraunt(newrestrauntList);
          }}
        >
          Less than Rs. 300
        </button>
        <button
          className="px-4  border-black border-[1px] rounded-full py-1 ml-3"
          onClick={() => {
            const newrestrauntList = restrauntList.filter(
              (res) =>
                parseInt(res.info.costForTwo.substring(1, 4)) > 300 &&
                parseInt(res.info.costForTwo.substring(1, 4)) < 600
            );
            setFilteredRestraunt(newrestrauntList);
          }}
        >
          Rs. 300-Rs. 600
        </button>
        <button
          className="px-4  border-black border-[1px] rounded-full py-1 ml-3"
          onClick={() => {
            const newrestrauntList = restrauntList.filter(
              (res) =>
                parseInt(
                  res.info.totalRatingsString.substring(
                    0,
                    res.info.totalRatingsString.length - 2
                  )
                ) > 1
            );
            setFilteredRestraunt(newrestrauntList);
          }}
        >
          Greater than 1k+ ratings
        </button>
      </div>
      <div className="flex flex-wrap mx-auto justify-center items-center ">
        {filteredRestraunt.map((restraunt) => (
          <Link to={"/restraunts/" + restraunt.info.id} key={restraunt.info.id}>
            {restraunt.info.avgRating > 4.4 ? (
              <RestrauntPromoted resData={restraunt} />
            ) : (
              <Restrauntcard resData={restraunt} />
            )}
          </Link>
        ))}
      </div>
      <AppStore />
      <Footer />
    </div>
  );
};

export default Body;
