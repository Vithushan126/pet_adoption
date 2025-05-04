import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronRight, Menu, Search, X, CircleUserRound } from "lucide-react";
import Logo from "../../assets/logo.png";
import { headerText } from "../../utils/headerLinks";

const Navbar = React.memo(() => {
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [navState, setNavState] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (url) => {
    navigate(url);
    setIsOpen(false);
  };

  // Track scroll position
  useEffect(() => {
    const onNavScroll = () => {
      setNavState(window.scrollY > 180);
    };

    window.addEventListener("scroll", onNavScroll);
    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Desktop dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }

      // Mobile dropdown
      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target)
      ) {
        setIsMobileDropdownOpen(false);
      }

      // Mobile menu
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`w-full z-50  shadow-lg  top-0 left-0 transition-all duration-300 text-text-color bg-white ${
        navState ? "fixed " : "relative"
      } `}
    >
      <div className="h-[100px] py-10 flex justify-center items-center bg-opacity-80 ">
        {/* header links */}
        <div className="max-w-[1100px] w-full flex justify-between items-center h-full font-medium text-lg  px-2 md:px-4">
          <div className="flex flex-row items-center space-x-12">
            <img
              src={Logo}
              alt="Logo"
              className="w-24 h-14 cursor-pointer bg-opacity-100 "
              onClick={() => handleNavigation("/")}
            />
            <div className="hidden lg:flex space-x-8">
              {headerText.map((item, index) => (
                <span
                  key={index}
                  className={`cursor-pointer font-normal hover:text-main-color font-semibold transition-transform duration-300 hover:scale-105 ${
                    location.pathname === item.url ? "text-main-color" : ""
                  }`}
                  onClick={() => handleNavigation(item?.url)}
                >
                  {item.text}
                </span>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex space-x-8 items-center ml-8">
            <button
              className="flex flex-row space-x-2 items-center focus:outline-none"
              onClick={() => handleNavigation("/login")}
            >
              <CircleUserRound className="h-6 w-6 font-normal" />
              <span className="text-lg font-normal">Login</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button ref={buttonRef} className="p-2 focus:outline-none ">
              {isOpen ? (
                <X
                  className="h-6 w-6 hover:cursor-pointer"
                  onClick={toggleMenu}
                />
              ) : (
                <div className="flex flex-row space-x-4 items-center text-sm ">
                  <div
                    className="flex flex-row space-x-2 items-center focus:outline-none font-normal"
                    onClick={() => handleNavigation("/login")}
                  >
                    <CircleUserRound className="h-4 w-4" />
                    <span className="font-normal">Login</span>
                  </div>
                  <Menu
                    className="h-4 w-4 hover:cursor-pointer"
                    onClick={toggleMenu}
                  />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div
          ref={menuRef} // Attach ref to dropdown menu
          className="lg:hidden bg-white bg-opacity-95 shadow-lg p-1 md:px-4 "
        >
          <div className="flex flex-row justify-between py-2">
            <div className="font-normal">Search</div>
            <div className="opacity-50 font-normal">
              <Search />
            </div>
          </div>
          <div className="border-t border-gray opacity-10"></div>
          <div className="py-2 space-y-2">
            {headerText.map((item, index) => (
              <div
                key={index}
                className="block text-darkBlue hover:text-primaryColor cursor-pointer py-2 text-lg font-semibold"
                onClick={() => handleNavigation(item?.url)}
              >
                <div className="flex flex-row justify-between ">
                  <div className="flex flex-row items-center space-x-2">
                    <div className="opacity-50">{item.icon}</div>
                    <div className="">{item.text}</div>
                  </div>
                  <div className="opacity-50">
                    <ChevronRight />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
});

export default Navbar;
