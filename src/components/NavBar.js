import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const NavBar = () => {
  const cartTotalItems = useSelector((store) => store.cart.cartTotalQuantity);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <>
        <ul className="hidden md:flex justify-between font-semibold text-xl ">
          <li
            className="px-4 py-2 text-black   hover:text-gray-400"
            onClick={() => setShowMenu(false)}
          >
            <Link to={"/"}>Home</Link>
          </li>
          <li
            className="px-4 py-2 text-black hover:text-gray-400"
            onClick={() => setShowMenu(false)}
          >
            <Link to={"/search"}>Search</Link>
          </li>

          <li
            className="px-4 py-2 text-black  hover:text-gray-400"
            onClick={() => setShowMenu(false)}
          >
            <Link to={"/contact"}>Contact us</Link>
          </li>
          <li
            className="px-4 py-2 text-black  hover:text-gray-400"
            onClick={() => setShowMenu(false)}
          >
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li
            className="px-4 py-2 text-black flex  hover:text-gray-400"
            onClick={() => setShowMenu(false)}
          >
            <Link to={"/cart"}> Cart-({cartTotalItems} items)</Link>
          </li>
        </ul>
        <div className=" my-auto mr-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 cursor-pointer hover:bg-gray-300 hover:rounded-full duration-200 hover:p-3"
            onClick={() => setShowMenu(!showMenu)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </>

      {showMenu && (
        <ul className="flex flex-col  basis-full pl-8 text-lg ">
          <li
            className="px-4 py-2 text-black   hover:text-gray-400"
            onClick={() => setShowMenu(false)}
          >
            <Link to={"/"}>Home</Link>
          </li>
          <li
            className="px-4 py-2 text-black hover:text-gray-400"
            onClick={() => setShowMenu(false)}
          >
            <Link to={"/search"}>Search</Link>
          </li>
          <li
            className="px-4 py-2 text-black  hover:text-gray-400"
            onClick={() => setShowMenu(false)}
          >
            <Link to={"/about"}>About</Link>
          </li>
          <li
            className="px-4 py-2 text-black  hover:text-gray-400"
            onClick={() => setShowMenu(false)}
          >
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li
            className="px-4 py-2 text-black  hover:text-gray-400"
            onClick={() => setShowMenu(false)}
          >
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li
            className="px-4 py-2 text-black flex  hover:text-gray-400"
            onClick={() => setShowMenu(false)}
          >
            <Link to={"/cart"}> Cart-({cartTotalItems} items)</Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default NavBar;
