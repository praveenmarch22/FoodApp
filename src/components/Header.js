import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginButton, setLoginButton] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="container">
      <div className="logo-container">
        <img className="img" alt="logo" src={LOGO_URL} />
      </div>
      <div className="nav-bar">
        <ul>
          <li>onlineStatus:{onlineStatus ? "💚" : "💝"}</li>
          <li>
            {" "}
            <Link to={"/"}>Home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to={"/about"}>About us</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to={"/contact"}>Contact us</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to={"/grocery"}>Grocery</Link>{" "}
          </li>
          <li>Cart</li>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
