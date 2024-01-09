import ItemList from "./ItemList";
import { useState } from "react";

const RestrauntCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const handler = () => {
    setShowItems(!showItems);
  };
  return (
    <div className="w-6/12  text-[18px] bg-gray-100 mx-auto my-2 shadow-md">
      <div
        className=" flex justify-between font-bold cursor-pointer"
        onClick={handler}
      >
        <span>
          {data?.title}({data?.itemCards?.length})
        </span>
        <span
          className={`transition-transform transform ease-in duration-300 ${
            showItems ? "rotate-180" : ""
          }`}
        >
          🔽
        </span>
      </div>
      {showItems && <ItemList key={data?.title} items={data.itemCards} />}
    </div>
  );
};

export default RestrauntCategory;
