import { LOGO_URL } from "../utils/constants";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
