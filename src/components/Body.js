import { useEffect, useState } from "react";
import Restrauntcard from "./Restrauntcard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [restrauntList, setRestrauntList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const [filteredRestraunt, setFilteredRestraunt] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9180626&lng=77.6156642&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setRestrauntList(
      json.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestraunt(
      json.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return restrauntList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="search.."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
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
          className="filter-btn"
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
      <div className="res-container">
        {filteredRestraunt.map((restraunt) => (
          <Link to={"/restraunts/" + restraunt.info.id} key={restraunt.info.id}>
            <Restrauntcard resData={restraunt} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
