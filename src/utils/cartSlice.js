import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const findIndex = state.cartItems.findIndex(
        (item) => item.card.info.id === action.payload.card.info.id
      );

      if (findIndex >= 0) {
        state.cartItems[findIndex].cartQuantity += 1;
        toast.info("Item quantity is increased", {
          position: "bottom-center",
          autoClose: 1000,
        });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success("Item is added to cart", {
          position: "bottom-center",
          autoClose: 1000,
        });
      }
      state.cartTotalQuantity += 1;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeItem: (state, action) => {
      const findIndex = state.cartItems.findIndex(
        (item) => item.card.info.id === action.payload.card.info.id
      );

      toast.error("Item removed from cart", {
        position: "bottom-center",
        autoClose: 1000,
      });
      state.cartTotalQuantity -= state.cartItems[findIndex].cartQuantity;
      state.cartItems.splice(findIndex, 1);

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseItemQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.card.info.id === action.payload.card.info.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        state.cartTotalQuantity -= 1;
      } else {
        const findIndex = state.cartItems.findIndex(
          (item) => item.card.info.id === action.payload.card.info.id
        );
        state.cartTotalQuantity -= 1;
        state.cartItems.splice(findIndex, 1);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

      toast.error("Item quantity is decreased", {
        position: "bottom-center",
        autoClose: 1000,
      });
    },
    getTotals: (state, action) => {
      let { totalAmount, totalQuantity } = state.cartItems.reduce(
        (cartTotals, cartItem) => {
          cartTotals.totalQuantity += cartItem.cartQuantity;
          cartTotals.totalAmount +=
            cartItem.cartQuantity * (cartItem.card.info.price / 100);
          return cartTotals;
        },
        {
          totalAmount: 0,
          totalQuantity: 0,
        }
      );
      state.cartTotalAmount = totalAmount;
      state.cartTotalQuantity = totalQuantity;
    },
    clearCart: (state, action) => {
      state.cartItems.length = 0;
      state.cartTotalQuantity = 0;
      localStorage.removeItem("cartItems");
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  decreaseItemQuantity,
  getTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
