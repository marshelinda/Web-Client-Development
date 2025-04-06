import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto flex justify-between items-center mb-8">
        {/* Left Side */}
        <div className="text-lg">
          <h2 className="font-semibold text-white">Have something in mind?</h2>
          <p className="text-white-400">Let's collaborate on your next project.</p>
        </div>

        {/* Right Side */}
        <div>
        <a href="#contact" className="inline-block bg-white text-black font-semibold py-3 px-6 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white">
          Get in touch
        </a>
        </div>
      </div>

      <div className="container mx-auto flex justify-between items-center text-sm text-white-400">
        {/* Copyright atau info build */}
        <div>
          Designed & Developed by Ayush
        </div>

        {/* Social Media Link */}
        <div className="flex items-center space-x-4">
          <a href="https://www.linkedin.com/in/marshelinda-rukmana" className="hover:text-white-400">LinkedIn</a>
          <a href="https://www.twitter.com/marshelindaaa" className="hover:text-white-400">Twitter</a>
          <a href="https://www.instagram.com/marshelindaa" className="hover:text-white-400">Instagram</a>
          <a href="https://www.webflow.com/home" className="hover:text-white-400">Webflow</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;