import { useContext, useState } from "react";
import searchContext from "../utils/context";
import Restrauntcard, { withPromotedLabel } from "./Restrauntcard";
import { Link } from "react-router-dom";

const Search = () => {
  const restraunts = useContext(searchContext);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestrauntPromoted = withPromotedLabel(Restrauntcard);

  console.log(filteredList);

  return (
    <div>
      <div className="w-full  flex justify-center items-center">
        <input
          type="text"
          placeholder="Search for restraunts or food..."
          className="my-4 p-4 border-b-2 border-black w-8/12 focus:border-b-2 focus:outline-none "
          data-testid="searchid"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value.toLowerCase());
          }}
        />
        <button
          className="my-4  p-4  border-black border-b-2"
          onClick={() => {
            let searchlist = [];
            if (searchText.length != 0) {
              searchlist = restraunts.filter(
                (res) =>
                  res.info?.name.toLowerCase().includes(searchText) ||
                  res.info?.cuisines
                    .join(",")
                    .toLowerCase()
                    .includes(searchText)
              );
            }

            setFilteredList(searchlist);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap mx-auto justify-center items-center">
        {filteredList.map((restraunt) => (
          <Link to={"/restraunts/" + restraunt.info.id} key={restraunt.info.id}>
            {restraunt.info.avgRating > 4.4 ? (
              <RestrauntPromoted resData={restraunt} />
            ) : (
              <Restrauntcard resData={restraunt} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;
