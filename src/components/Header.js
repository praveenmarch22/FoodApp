import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [loginButton, setLoginButton] = useState("Login");

  useEffect(() => {
    console.log("use effect is called");
  }, [loginButton]);

  return (
    <div className="container">
      <div className="logo-container">
        <img className="img" alt="logo" src={LOGO_URL} />
      </div>
      <div className="nav-bar">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
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
