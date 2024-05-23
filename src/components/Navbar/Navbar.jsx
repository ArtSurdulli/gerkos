import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../../img/secondlogo.png";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { t } = useTranslation();

  const navItems = [
    { id: 1, text: t("navbar-link-1"), to: "/" },
    { id: 2, text: t("navbar-link-2"), to: "/interested" },
    { id: 3, text: t("navbar-link-3"), to: "/for-companies" },
    { id: 4, text: t("navbar-link-6"), to: "/jobs" },
    { id: 5, text: t("navbar-link-4"), to: "/aboutus" },
    { id: 6, text: t("navbar-link-5"), to: "/contact" },
  ];

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 bg-white mt-0 ${
        scrolled ? "bg-white shadow-lg" : ""
      }`}
    >
      <div
        className={`flex justify-between items-center h-12 relative mx-auto px-4 transition-all duration-300 ${
          !scrolled ? "opacity-100 h-10 " : "opacity-0 h-0"
        }`}
      >
        <Link to="/" className="flex">
          <img className="mx-auto h-12" src={Logo} alt="Logo" />
        </Link>
        <div className="flex">
          <LanguageSelector />
        </div>
      </div>
      <div
        className={`bg-[#b1b8b18d] flex justify-between items-center h-16 relative mx-auto px-4 text-black ${
          scrolled ? "bg-white" : ""
        }`}
      >
        {scrolled && (
          <Link to="/" className="flex">
            <img className="mx-auto h-12" src={Logo} alt="Logo" />
          </Link>
        )}
        <ul className="flex hidden lg:flex xl:flex">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-4 text-xs rounded-xl m-2 cursor-pointer duration-300 text-black lg:text-sm	"
            >
              <Link to={item.to}>{item.text}</Link>
            </li>
          ))}
        </ul>
        {scrolled && (
          <div className="flex ml-auto md:ml-0 mr-2 ">
            {/* Use ml-auto for all screens, override for sm screens */}
            {scrolled && <LanguageSelector />}
          </div>
        )}
        <div
          onClick={handleNav}
          className={`block lg:hidden cursor-pointer ${
            scrolled ? "text-black" : ""
          }`}
        >
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
              ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r bg-[#f6f6f6] ease-in-out duration-500 z-99999 shadow-lg"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          <div className="row justify-between align-middle">
            <Link to="/" className="flex">
              <img className="mx-auto h-12" src={Logo} alt="Logo" />
            </Link>
            <div className="flex items-center justify-center text-black p-3 cursor-pointer">
              <AiOutlineClose size={20} onClick={closeNav} />
            </div>
          </div>
          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-4 border-b border-slate-500 rounded-xl duration-300 text-black cursor-pointer"
              onClick={closeNav} // Close menu on item click
            >
              <Link to={item.to}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
