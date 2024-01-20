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
    <div className="flex justify-between bg-white shadow-lg fixed top-0 w-full z-[1] ">
      <div className="flex">
        <img className="h-28 p-2" src={LOGO_URL} />
        <span  className=" m-2 py-6 logo-container flex text-gray-900 font-bold text-4xl italic">Swad Safarii...</span>
      </div>
      <div className="py-11">
        <ul className="flex">
          <li className="px-2 text-gray-800 text-xl font-semibold hover:text-orange-500">
            Online status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-2 text-gray-800 text-xl font-semibold hover:text-orange-500">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 text-gray-800 text-xl font-semibold hover:text-orange-500">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2 text-gray-800 text-xl font-semibold hover:text-orange-500">
            <Link to="/faq">FAQ</Link>
          </li>
          <li className="px-2 text-gray-800 text-xl font-semibold hover:text-orange-500">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-2 text-gray-800 text-xl font-semibold hover:text-orange-500">
            <Link to="/cart">Cart-({cartItems.length} Items)</Link>
          </li>
          <button
            className="px-2 text-gray-800 text-xl font-semibold hover:text-orange-500"
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
