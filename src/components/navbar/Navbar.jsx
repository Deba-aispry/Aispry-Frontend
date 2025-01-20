import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; 
import Submenu from "./Submenu";
import { NavMenuItems } from "../utility/NavMenuItems";
import logo from "../../assets/homePage/logo.png";

const Navbar = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

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

  return (
    <nav
      className={`transition-all duration-300 ease-in-out ${
        isSticky ? "bg-opacity-90 shadow-lg scale-100" : "bg-opacity-100"
      } bg-[#081118] sticky top-0 left-0  z-50`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        <div className="flex justify-between items-center py-6">
          <div className="flex-shrink-0">
            <img src={logo} alt="aiSpry-logo" className="h-full" />
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
                <button className="text-white text-lg font-medium px-3 py-2 rounded-md transition duration-300 transform group-hover:scale-110">
                  {item.label}
                </button>

                {hoveredMenu === index && item.submenu.length > 0 && (
                  <Submenu items={item.submenu} />
                )}
              </div>
            ))}
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
                  <FaTimes className="w-7 h-7 text-pink-600" />
                ) : (
                  <FaBars className="w-7 h-7" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } fixed top-30 left-0 h-full w-3/4 bg-gradient-to-r from-[#108dc7] to-[#ef8e38] z-50 transition-transform duration-500 ease-in-out md:hidden`}
        >
          <div className="flex flex-col space-y-4 mt-10 px-6 py-4">
            {NavMenuItems.map((item, index) => (
              <div key={index} className="relative">
                <button
                  onClick={() => toggleSubmenu(index)}
                  className="text-white text-sm font-medium px-3 py-2"
                >
                  {item.label}
                </button>

                {openSubmenuIndex === index && item.submenu.length > 0 && (
                  <div>
                    <Submenu items={item.submenu} />
                  </div>        
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
