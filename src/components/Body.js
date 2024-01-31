import { useEffect, useState, useContext } from "react";
import Restrauntcard, { withPromotedLabel } from "./Restrauntcard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/context";
import ItemScroll from "./ItemScroll";
import Footer from "./Footer";
import AppStore from "./AppStore";

const Body = () => {
  const [restrauntList, setRestrauntList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const [filteredRestraunt, setFilteredRestraunt] = useState([]);

  const RestrauntPromoted = withPromotedLabel(Restrauntcard);

  const [cuisine, setCuisine] = useState();

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9180626&lng=77.6156642&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);

    setRestrauntList(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestraunt(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setCuisine(json.data?.cards[0]?.card?.card?.imageGridCards?.info);
  };

  const { setUser, username } = useContext(userContext);

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

      <div className="flex m-5 pl-[500px]">
        <div className="px-4">
          <input
            type="text"
            className="border-black border-[2px] rounded-lg"
            placeholder="search.."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4"
            onClick={() => {
              const filteredList = restrauntList.filter((res) =>
                res.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestraunt(filteredList);
            }}
          >
            search
          </button>
        </div>
        <button
          className="px-4 bg-green-200 border-black border-[2px] rounded-lg"
          onClick={() => {
            const newrestrauntList = restrauntList.filter(
              (res) => res.info.avgRating > 4.1
            );
            setFilteredRestraunt(newrestrauntList);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="flex flex-wrap mx-auto justify-center items-center">
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
