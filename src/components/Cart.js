import { useDispatch, useSelector } from "react-redux";

import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex-col w-full ">
      <p className=" text-center m-2 p-2 text-xl font-bold ">Cart</p>
      <div className="w-[50%] text-end mx-auto font-bold">
        <p
          className=" m-2 p-2 text-lg cursor-pointer"
          onClick={handleClearCart}
        >
          Clear
        </p>
      </div>
      <div className="w-6/12 m-1 p-1 mx-auto">
        <ItemList items={items} />
      </div>
    </div>
  );
};

export default Cart;
