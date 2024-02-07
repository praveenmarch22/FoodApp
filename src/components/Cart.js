import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  clearCart,
  removeItem,
  decreaseItemQuantity,
  getTotals,
} from "../utils/cartSlice";
import { IMG_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Cart = () => {
  const cart = useSelector((store) => store.cart);
  const items = useSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleDecreaseItemQuantity = (item) => {
    dispatch(decreaseItemQuantity(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };
  if (items.length == 0) {
    return (
      <div className="text-center">
        <div className=" font-bold text-xl mt-[150px] mb-5">
          Looks like cart is empty. Add some items to it.
        </div>
        <Link to={"/"}>
          <div className=" w-2/12 mx-auto flex justify-center items-center font-bold text-xl rounded-2xl bg-slate-200 text-slate-950 p-3">
            <div className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex-col w-full ">
      <p className=" text-center m-2 p-2 text-xl font-bold ">Cart</p>
      <div className=" w-9/12 flex items-end justify-end mx-auto font-bold">
        <p
          className=" m-2 p-2 text-md cursor-pointer bg-black rounded-lg text-white hover:bg-white hover:text-black"
          onClick={handleClearCart}
        >
          Clear Cart
        </p>
      </div>
      <div className="w-[73%] m-1 p-1 mx-auto ">
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className=" w-full flex mt-2 justify-between items-center border-b-2 pb-3"
          >
            <div className="flex w-[70%]">
              <div className=" mr-2 ">
                <img
                  src={IMG_URL + item.card.info.imageId}
                  className="w-[175px] h-[100px] object-cover "
                />
              </div>
              <div className="mr-2 mt-2">
                <div className="font-semibold text-lg overflow-hidden overflow-ellipsis ">
                  {item.card.info.name}
                </div>
                <div className="font-medium text-gray-700">
                  ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </div>
                <div
                  className="font-normal text-gray-500 cursor-pointer"
                  onClick={() => handleRemoveItem(item)}
                >
                  Remove
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center w-[25%] text-center ">
              <div
                className="border-t-2 border-b-2 border-l-2 border-black w-[30px] text-center cursor-pointer"
                onClick={() => handleDecreaseItemQuantity(item)}
              >
                -
              </div>
              <div className="border-t-2 border-b-2 border-black  w-[30px] text-center">
                {item.cartQuantity}
              </div>
              <div
                className="border-t-2 border-b-2 border-r-2 border-black  w-[30px] text-center cursor-pointer"
                onClick={() => handleAddItem(item)}
              >
                +
              </div>
            </div>
            <div className="font-bold text-gray-900 w-[10%] text-end">
              ₹
              {item.card.info.price
                ? (item.card.info.price / 100) * item.cartQuantity
                : (item.card.info.defaultPrice / 100) * item.cartQuantity}
            </div>
          </div>
        ))}
      </div>
      <div className="w-[85%] mt-5 flex justify-end">
        <div className="font-bold text-lg  w-[250px] mb-4  ">
          <div className="mb-6 flex justify-between">
            {" "}
            <span>Subtotal </span> <span>₹{cart.cartTotalAmount}</span>
          </div>
          <p className="text-sm text-gray-500 ml-2">
            Taxes will be added at the checkout.
          </p>
          <button className=" mb-8 w-[250px] h-[40px] bg-blue-400 font-semibold text-base text-center rounded-lg">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
