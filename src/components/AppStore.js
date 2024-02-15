import { APP_URL } from "../utils/constants";

const AppStore = () => {
  return (
    <div className=" flex  flex-wrap w-full h-[130px] bg-gray-200 justify-center items-center">
      <div>
        <p className=" font-bold text-3xl text-gray-800">
          For better experience,download
        </p>
        <p className="font-bold text-3xl text-gray-800">the Swiggy app now</p>
      </div>
      <div className="my-1 flex">
        <img
          src={APP_URL + "play_store.png"}
          className="w-[200px] h-[60px] ml-5 cursor-pointer"
        />
        <img
          src={APP_URL + "app_store.png"}
          className="w-[200px] h-[60px] cursor-pointer ml-4"
        />
      </div>
    </div>
  );
};

export default AppStore;
