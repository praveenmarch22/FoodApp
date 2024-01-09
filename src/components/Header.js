import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginButton, setLoginButton] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between border-b-4">
      <div className="logo-container">
        <img className=" w-[140px] " alt="logo" src={LOGO_URL} />
      </div>
      <div className="flex flex-wrap">
        <ul className="flex items-center ">
          <li className="px-4">onlineStatus:{onlineStatus ? "💚" : "💝"}</li>
          <li className="px-4">
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
          <li className="px-4">Cart</li>
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
