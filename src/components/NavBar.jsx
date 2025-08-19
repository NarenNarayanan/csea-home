import { useState } from "react";
import logo from "../assets/logo.png"; // adjust if path differs

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 h-16">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="CSEA Logo" className="h-10 w-auto mr-2" />
          <span className="font-bold text-xl text-blue-600">CSEA</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <a href="/" className="hover:text-blue-400">Home</a>
          <a href="/events" className="hover:text-blue-400">Events</a>
          <a href="/about" className="hover:text-blue-400">About</a>
          <a href="/contact" className="hover:text-blue-400">Contact</a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col gap-1 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-3 flex flex-col gap-3">
          <a href="/" className="hover:text-blue-400">Home</a>
          <a href="/events" className="hover:text-blue-400">Events</a>
          <a href="/about" className="hover:text-blue-400">About</a>
          <a href="/contact" className="hover:text-blue-400">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
