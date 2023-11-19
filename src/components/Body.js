import Restrauntcard from "../Restrauntcard";
import resList from "../utils/reslist";

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        {resList.map((restraunt) => (
          <Restrauntcard key={restraunt.info.id} resData={restraunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
