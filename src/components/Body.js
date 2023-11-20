import { useState } from "react";
import Restrauntcard from "../Restrauntcard";
import resList from "../utils/reslist";

const Body = () => {
  const arr = useState(resList);
  const [restrauntList, setRestrauntList] = arr;

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-all"
          onClick={() => {
            setRestrauntList(resList);
          }}
        >
          All
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const newrestrauntList = restrauntList.filter(
              (res) => res.info.avgRating > 4.1
            );
            setRestrauntList(newrestrauntList);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {restrauntList.map((restraunt) => (
          <Restrauntcard key={restraunt.id} resData={restraunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
