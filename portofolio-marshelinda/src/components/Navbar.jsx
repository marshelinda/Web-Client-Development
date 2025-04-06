import React from 'react';

function Navbar() {
  return (
    <nav className="absolute top-6 left-6 right-6"> {/* Extend right for full width if needed */}
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left Side: Username */}
        <div className="text-black-700">Marshelinda Rukmana</div>

        {/* Right Side: Navigation Links */}
        <div className="flex items-center space-x-4">
          <a href="#about" className="text-black-800 hover:text-primary">About</a>
          <a href="#projects" className="text-black-800 hover:text-primary">Projects</a>
          <a href="#contact" className="text-black-800 hover:text-primary">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;