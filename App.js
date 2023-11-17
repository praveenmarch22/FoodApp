import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="container">
      <div className="logo-container">
        <img
          className="img"
          alt="logo"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/25539c29532269.55f7d6a0a8c71.jpg"
        />
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

const Restrauntcard = (props) => {
  console.log(props);
  return (
    <div className="res-card">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/arvgaf7i7yj6o3pwyhfu"
        className="res-image"
      />
      <h4>{props.resName}</h4>
      <h5>{props.cuisine}</h5>
      <h5>4.4 stars</h5>
      <h5>34 minutes</h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        <Restrauntcard
          resName="Meghana Foods"
          cuisine="Biryani, South Indian,Asian"
        />
        <Restrauntcard resName="KFC" cuisine="Burgers, Fried Chicken" />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
