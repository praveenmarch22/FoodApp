import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartitems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex-col ">
      <p className=" text-center m-2 p-2 text-xl font-bold ">Cart</p>
      <p
        className=" text-center m-2 p-2 text-lg cursor-pointer"
        onClick={handleClearCart}
      >
        Clear
      </p>
      <div className="w-6/12 m-1 p-1 mx-auto">
        <ItemList items={cartitems} />
      </div>
    </div>
  );
};

export default Cart;
