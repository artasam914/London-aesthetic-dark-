import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";

interface NavbarProps {
  logo?: string;
  menuItems?: Array<{
    label: string;
    href: string;
    subItems?: Array<{ label: string; href: string }>;
  }>;
}

const Navbar = ({
  logo = "/logo.png",
  menuItems = [
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "About Us", href: "/about" },
    { label: "Practitioners", href: "/practitioners" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111] border-b border-gray-800 shadow-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="London Aesthetics Clinic" className="h-12" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {menuItems.map((item) => (
              <li key={item.label} className="relative group">
                {item.subItems ? (
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center text-gray-300 hover:text-amber-500 font-medium transition-colors"
                  >
                    {item.label}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-amber-500 font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                )}

                {item.subItems && (
                  <div
                    className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-[#181818] ring-1 ring-gray-800 ring-opacity-5 transition-opacity duration-150 ${openDropdown === item.label ? "opacity-100" : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"}`}
                  >
                    <div className="py-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-amber-900/30 hover:text-amber-500"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <Button
            className="bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-md"
            onClick={() => (window.location.pathname = "/contact")}
          >
            Book Appointment
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-amber-500 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#181818] border-t border-gray-800 py-4">
          <div className="container mx-auto px-4">
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li key={item.label}>
                  {item.subItems ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="flex items-center justify-between w-full text-gray-300 hover:text-amber-500 font-medium"
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                        />
                      </button>
                      {openDropdown === item.label && (
                        <div className="mt-2 pl-4 space-y-2">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.label}
                              to={subItem.href}
                              className="block text-gray-400 hover:text-amber-500"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block text-gray-300 hover:text-amber-500 font-medium"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-md"
                onClick={() => (window.location.pathname = "/contact")}
              >
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
