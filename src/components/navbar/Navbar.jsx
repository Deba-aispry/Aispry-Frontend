import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Submenu from "./Submenu";
import { NavMenuItems } from "../utility/NavMenuItems";
import footerlogo from "../../assets/homePage/footerlogo.webp";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSubmenu = (index) => {
    setOpenSubmenuIndex(openSubmenuIndex === index ? null : index);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenSubmenuIndex(null); // Also close submenus
  };

  return (
    <nav
      className={`transition-all duration-300 ease-in-out ${
        isSticky ? "shadow-lg" : "bg-opacity-100"
      } bg-white sticky top-0 left-0 z-50`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        <div className="flex justify-between items-center py-6">
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src={footerlogo}
                alt="aiSpry-logo"
                className="h-full cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 items-center relative">
            {NavMenuItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredMenu(index)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <button
                  className="text-lg font-medium px-3 py-2 rounded-md transition duration-300 transform
                group-hover:text-[#f48220] group-hover:scale-110"
                >
                  {item.label}
                </button>

                {hoveredMenu === index && item.submenu.length > 0 && (
                  <Submenu items={item.submenu} />
                )}
              </div>
            ))}
            <button
              className="text-lg font-medium px-3 py-2 rounded-md transition duration-300 transform
            hover:text-[#f48220] hover:scale-110"
              onClick={() => {
                navigate("/resources");
                closeMobileMenu();
              }}
            >
              Resources
            </button>
            <button
              className="text-lg font-medium px-3 py-2 rounded-md transition duration-300 transform
            hover:text-[#f48220] hover:scale-110"
              onClick={() => {
                navigate("/how-we-works");
                closeMobileMenu();
              }}
            >
              How We Work
            </button>
            <button
              className="text-lg font-medium px-3 py-2 rounded-md transition duration-300 transform
            hover:text-[#f48220] hover:scale-110"
              onClick={() => {
                navigate("/about-us");
                closeMobileMenu();
              }}
            >
              About Us
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button
              className="text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div
                className={`transition-transform duration-300 ${
                  isMobileMenuOpen ? "rotate-90" : "rotate-0"
                }`}
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="w-8 h-8 text-pink-600" />
                ) : (
                  <FaBars className="w-8 h-8 text-pink-700" />
                )}
              </div>
            </button>
          </div>
        </div>

      
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeMobileMenu}
          ></div>
        )}

        {/* Mobile Menu Drawer */}
        <div
          className={`${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } fixed top-28 left-0 h-full w-3/4 bg-gray-100 z-50 rounded-r-lg transition-transform duration-500 ease-in-out md:hidden shadow-lg`}
        >
          <div className="flex flex-col space-y-4 mt-10 px-6 py-4">
        

            {NavMenuItems.map((item, index) => (
              <div key={index} className="relative">
                <button
                  onClick={() => toggleSubmenu(index)}
                  className=" text-xl font-semibold px-3 py-2 w-full text-left"
                >
                  {item.label}
                </button>

                {openSubmenuIndex === index && item.submenu.length > 0 && (
                  <div className="ml-2 shadow-2xl px-8 py-4 rounded-xl">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        className="block text-lg font-semibold  py-3"
                        onClick={closeMobileMenu} 
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Extra Menu Items */}
            <button
              className="text-xl font-semibold px-3 py-2 text-left"
              onClick={() => {
                navigate("/resources");
                closeMobileMenu();
              }}
            >
              Resources
            </button>
            <button
              className="text-xl font-semibold px-3 py-2 text-left"
              onClick={() => {
                navigate("/how-we-works");
                closeMobileMenu();
              }}
            >
              How We Work
            </button>
            <button
              className="text-xl font-semibold px-3 py-2 text-left"
              onClick={() => {
                navigate("/about-us");
                closeMobileMenu();
              }}
            >
              About Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
