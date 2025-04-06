import React from 'react';

function Sidebar({ isOpen, onClose }) {
  return (
    <div
      className={`fixed top-0 right-0 bg-black text-white p-8 z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      style={{ width: 'auto' }} 
    >
      <div className="flex justify-end mb-4">
        <button onClick={onClose} className="bg-black-800 rounded-full w-8 h-8 flex items-center justify-center focus:outline-none">
          <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82-2.83-2.83a1 1 0 1 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.82 2.82 2.82 2.82z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      <nav className="mb-4">
        <ul>
          <li><a href="#home" className="block py-2 text-lg hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="block py-2 text-lg hover:text-gray-400">About</a></li>
          <li><a href="#projects" className="block py-2 text-lg hover:text-gray-400">Projects</a></li>
          <li><a href="#contact" className="block py-2 text-lg hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>

      <div className="mt-auto">
        <a href="https://www.linkedin.com/in/marshelinda-rukmana/" className="text-sm text-white-400 hover:text-white mr-2">LinkedIn</a>
        <a href="https://www.twitter.com/marshelindaaa" className="text-sm text-white-400 hover:text-white mr-2">Twitter</a>
        <a href="https://www.instagram.com/marshelindaa" className="text-sm text-white-400 hover:text-white mr-2">Instagram</a>
        <a href="https://www.webflow.com/home" className="text-sm text-white-400 hover:text-white">Webflow</a>
      </div>
    </div>
  );
}

export default Sidebar;