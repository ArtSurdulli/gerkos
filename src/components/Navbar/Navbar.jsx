import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../../img/secondlogo.png";
import GermanIcon from "../../img/german.png";
import KosovoIcon from "../../img/kosovo.png";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Close function to handle closing the mobile menu
  const closeNav = () => {
    setNav(false);
  };

  const { t } = useTranslation();

  // Array containing navigation items
  const navItems = [
    { id: 1, text: t("navbar-link-1"), to: "/" },
    { id: 2, text: t("navbar-link-2"), to: "/interested" },
    { id: 3, text: t("navbar-link-3"), to: "/for-companies" },
    { id: 4, text: t("navbar-link-4"), to: "/aboutus" },
    { id: 5, text: t("navbar-link-5"), to: "/contact" },
    { id: 5, text: t("navbar-link-6"), to: "/jobs" },
  ];

  return (
    <>
      <div className="flex justify-between items-center h-10 relative mx-auto px-4 mt-3">
        <Link to="/" className="flex ">
          <img className="mx-auto h-12" src={Logo} alt="" />
        </Link>

        <div className="flex mr-5">
          {/* <img className="mx-auto h-6" src={KosovoIcon} alt="" />
          <img className="mx-auto " src={GermanIcon} alt="" /> */}
          <LanguageSelector />
        </div>
      </div>
      <div className="bg-[#b1b8b18d] flex justify-between items-center h-16 relative mx-auto px-4 mt-3 text-white">
        <ul className="hidden md:flex">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-4  rounded-xl m-2 cursor-pointer duration-300 text-black"
            >
              <Link to={item.to}>{item.text}</Link>
            </li>
          ))}
        </ul>

        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose size={20} onClick={closeNav} />
          ) : (
            <AiOutlineMenu size={20} />
          )}
        </div>

        <ul
          style={{ zIndex: "9999999" }}
          className={
            nav
              ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r  bg-[#d3d5d3] ease-in-out duration-500 z-99999"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          <div className="flex justify-end p-4">
            <AiOutlineClose size={20} onClick={closeNav} />
          </div>

          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-4 border-b rounded-xl  duration-300 text-black cursor-pointer "
              onClick={closeNav} // Close menu on item click
            >
              <Link to={item.to}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
