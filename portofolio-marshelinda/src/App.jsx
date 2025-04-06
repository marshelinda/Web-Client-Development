import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar'; // Pastikan path sesuai

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={openSidebar}
        className="fixed top-6 right-6 bg-black text-white p-2 rounded focus:outline-none z-40"
      >
        ☰
      </button>

      {/* Landing Page Content */}
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Education />
        <Contact /> 
        <Footer />
      </div>

      {/* Sidebar Components */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </div>
  );
}

export default App;