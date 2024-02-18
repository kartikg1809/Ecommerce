import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import logo from "/logo.png";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingCart, FaBars,FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [useMenu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!useMenu);
  };
  const categories = [
    { title: "Electronics", path: "/" },
    { title: "Clothing", path: "/" },
    { title: "Jewelry", path: "/" },
    { title: "Home & Living", path: "/" },
    { title: "Toys & Entertainment", path: "/" },
    { title: "Arts & Collections", path: "/" },
  ];
  return (
    <header className="max-w-screen-2xl xl:px-28 px-4">
      <nav className="flex justify-between items-center container medium:py-4 pt-6 pb-3">
        <FaSearch className="text-black w-5 h-5 cursor-pointer hidden md:block" />
        <a href="/">
          <img className="w-64" src={logo} alt="" />
        </a>
        <div className="text-lg tex-black sm:flex items-center gap-4 hidden">
          <a href="/" className="flex items-center gap-2">
            <FaUserAlt />
            Account
          </a>
          <a href="/" className="flex items-center gap-2">
            <FaShoppingCart />
            Cart
          </a>
        </div>
        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {useMenu ? <FaTimes  className="w-5 h-5 text-black"/>: <FaBars className="w-5 h-5 text-black" />}
          </button>
        </div>
      </nav>
      <br />
      <div>
        <ul className="lg:flex items-center justify-between font-primary text-black hidden">
          {categories.map(({ title, path }) => (
            <li key={title}>
              <a to="/" className="hover:text-orange-500">
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
        <div>
        <ul className={`bg-black font-primary text-white rounded px-4 py-2 ${useMenu ? "" : "hidden"}`}>
        {categories.map(({ title, path }) => (
        <li key={title}>
            <a to="/" className="hover:text-orange-500">
            {title}
            </a>
        </li>
        ))}
    </ul>
    </div>
    </header>
  );
};
