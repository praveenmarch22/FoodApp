import { CDN_URL } from "../utils/constants.js";

const ItemList = (itemss) => {
  const { items } = itemss;
  return (
    <div className="">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="text-left border-b-2 p-2 m-2 flex justify-between"
        >
          <div className="w-9/12">
            <div className="text-base">
              <span className="font-semibold ">{item.card.info.name} - </span>
              <span>
                {" "}
                ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div>
            {item.card.info.imageId ? (
              <button className="bg-black text-white px-2 py-1 ml-9 mt-[62px] absolute rounded-lg">
                Add
              </button>
            ) : (
              <button className="bg-black text-white px-2 py-1 mr-[30px] rounded-lg">
                Add
              </button>
            )}

            {item.card.info.imageId ? (
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-[118px] h-[96px]"
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
