import ItemList from "./ItemList";

const RestrauntCategory = ({ data, showItems, setShowIndex }) => {
  const handler = () => {
    setShowIndex();
  };
  return (
    <div className="w-8/12  text-[20px]  mx-auto my-5  shadow-md">
      <div
        className=" flex justify-between font-bold cursor-pointer"
        onClick={handler}
      >
        <span>
          {data?.title}({data?.itemCards?.length})
        </span>
        <span
          className={`ease-in duration-300 ${showItems ? "rotate-180" : ""}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </div>
      {showItems && <ItemList key={data?.title} items={data.itemCards} />}
    </div>
  );
};

export default RestrauntCategory;
