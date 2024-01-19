import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="flex justify-between bg-red-500 shadow-lg">
      <div className="logo-container">
        <img className="h-28 p-2" src={LOGO_URL} />
      </div>
      <div className="py-11">
        <ul className="flex">
          <li className="px-2 text-white hover:text-black hover:bg-white rounded-2xl">
            Online status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-2 text-white hover:text-black hover:bg-white rounded-2xl">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 text-white hover:text-black hover:bg-white rounded-2xl">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2 text-white hover:text-black hover:bg-white rounded-2xl">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2 text-white hover:text-black hover:bg-white rounded-2xl">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-2 text-white hover:text-black hover:bg-white rounded-2xl">
            <Link to="/cart">Cart-({cartItems.length} Items)</Link>
          </li>
          <button
            className="px-2 text-white hover:text-black hover:bg-white rounded-2xl"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
