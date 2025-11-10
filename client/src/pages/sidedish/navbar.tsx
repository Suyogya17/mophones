import React, { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Shop", href: "#", current: false },
  { name: "About", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] md:w-[80%] bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-xl">
      <div className="flex justify-between items-center px-6 py-3">

        {/* CTA Button */}
        <button className="hidden md:flex items-center gap-2 bg-purple-600/90 hover:bg-purple-700 transition text-white px-4 py-2 rounded-xl font-semibold shadow-md">
          <ShoppingBag size={18} />
          Shop Now
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
       

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-white">
          {navigation.map((item) => (
            <li
              key={item.name}
              className={classNames(
                item.current
                  ? "text-purple-200 underline decoration-purple-400"
                  : "hover:text-purple-300 transition",
                "cursor-pointer"
              )}
            >
              {item.name}
            </li>
          ))}
        </ul>
           {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide drop-shadow-lg">
          MoPhones
        </h1>
        
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4 text-white font-medium">
          {navigation.map((item) => (
            <li
              key={item.name}
              className={classNames(
                item.current
                  ? "text-purple-200 underline decoration-purple-400"
                  : "hover:text-purple-300 transition cursor-pointer"
              )}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <div className="flex justify-center mb-4">
          <button className="bg-purple-600/90 hover:bg-purple-700 transition text-white px-6 py-2 rounded-xl font-semibold shadow-md">
            Shop Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
