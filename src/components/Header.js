import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

import { useSelector } from "react-redux";

const Header = () => {
  const [loginButton, setLoginButton] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const cartTotalItems = useSelector((store) => store.cart.cartTotalQuantity);

  return (
    <div className="flex justify-between shadow-lg text-gray-600 ">
      <div className="logo-container">
        <img
          className=" w-[80px] ml-12 mt-1 mb-1 transition-transform transform-gpu hover:scale-90"
          alt="logo"
          src={LOGO_URL}
        />
      </div>
      <div className="flex flex-wrap font-bold ">
        <ul className="flex items-center  mr-5">
          <li className="px-4">onlineStatus:{onlineStatus ? "💚" : "💝"}</li>
          <li className="px-4">
            {" "}
            <Link to={"/search"}>Search</Link>{" "}
          </li>
          <li className="px-4 ">
            {" "}
            <Link to={"/"}>Home</Link>{" "}
          </li>
          <li className="px-4">
            {" "}
            <Link to={"/about"}>About us</Link>{" "}
          </li>
          <li className="px-4">
            {" "}
            <Link to={"/contact"}>Contact us</Link>{" "}
          </li>
          <li className="px-4">
            {" "}
            <Link to={"/grocery"}>Grocery</Link>{" "}
          </li>
          <li className="px-4 flex">
            {" "}
            <Link to={"/cart"}> Cart-({cartTotalItems} items)</Link>{" "}
          </li>
          <li className="px-4">
            <button
              className="login"
              onClick={() => {
                loginButton == "Login"
                  ? setLoginButton("Logout")
                  : setLoginButton("Login");
              }}
            >
              {loginButton}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
