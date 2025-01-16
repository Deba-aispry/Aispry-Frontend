import React, { useState } from "react";
import { FaBars } from "react-icons/fa"; // Hamburger icon

import Submenu from "./Submenu";
import { NavMenuItems } from "../utility/NavMenuItems";

import logo from "../assets/logo.png";

const Navbar = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null); // For mobile submenus

  const toggleSubmenu = (index) => {
    // Toggle submenu visibility on mobile
    setOpenSubmenuIndex(openSubmenuIndex === index ? null : index);
  };

  return (
    <nav className="bg-gradient-to-r from-[#108dc7] to-[#ef8e38]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex-shrink-0">
            <img src={logo} alt="aiSpry-logo" className="h-16" />
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
                <button className="text-white text-md font-medium px-3 py-2 rounded-md transition duration-300 transform group-hover:scale-110">
                  {item.label}
                </button>

                {/* Submenu for desktop: Positioning outside the navbar */}
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
              <FaBars className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu (Sliding Drawer) */}
        <div
          className={`${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } fixed top-30 left-0 h-full w-3/4 bg-gradient-to-r from-[#108dc7] to-[#ef8e38] z-50 transition-transform duration-500 ease-in-out md:hidden`}
        >
          <div className="flex flex-col space-y-4 mt-10 px-6 py-4">
            {NavMenuItems.map((item, index) => (
              <div key={index} className="relative">
                <button
                  onClick={() => toggleSubmenu(index)} // Toggle submenu visibility on click
                  className="text-white text-sm font-medium px-3 py-2"
                >
                  {item.label}
                </button>

                {/* Conditionally render submenu items on mobile */}
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
