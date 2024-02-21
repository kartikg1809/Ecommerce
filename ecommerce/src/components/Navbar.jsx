import React, { useState } from "react";
import { FaSearch, FaUserAlt, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import logo from "/logo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [useMenu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!useMenu);
  };

  const categories = [
    { title: "Electronics", path: "/category/Electronics" },
    { title: "Clothing", path: "/category/Clothing" },
    { title: "Jewelry", path: "/category/Jewelry" },
    { title: "Home & Living", path: "/category/Home&Living" },
    { title: "Toys & Entertainment", path: "/category/Toys&Entertainment" },
    { title: "Arts & Collections", path: "/category/Arts&Collections" },
  ];

  return (
    <header className="max-w-screen-2xl xl:px-28 px-4">
      <nav className="flex justify-between items-center container medium:py-4 pt-6 pb-3">
        <FaSearch className="text-black w-5 h-5 cursor-pointer hidden md:block" />
        <Link to="/">
          <img className="w-64" src={logo} alt="" />
        </Link>
        <div className="text-lg text-black sm:flex items-center gap-4 hidden">
          <Link to="/account" className="flex items-center gap-2">
            <FaUserAlt />
            Account
          </Link>
          <Link to="/cart" className="flex items-center gap-2">
            <FaShoppingCart />
            Cart
          </Link>
        </div>
        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {useMenu ? <FaTimes className="w-5 h-5 text-black" /> : <FaBars className="w-5 h-5 text-black" />}
          </button>
        </div>
      </nav>
      <br />
      <div>
        <ul className="lg:flex items-center justify-between font-primary text-black hidden">
          {categories.map(({ title, path }) => (
            <li key={title}>
              <Link to={path} className="hover:text-orange-500">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul className={`bg-black font-primary text-white rounded px-4 py-2 ${useMenu ? "" : "hidden"}`}>
          {categories.map(({ title, path }) => (
            <li key={title}>
              <Link to={path} className="hover:text-orange-500">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
