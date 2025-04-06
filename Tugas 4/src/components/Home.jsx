import React, { useState } from 'react';
import backgroundImage from '../assets/background.png'; // Pastikan path dan ekstensi sesuai

function Home() {
  const [greetingVisible, setGreetingVisible] = useState(false);

  const handleHandClick = () => {
    setGreetingVisible(!greetingVisible);
  };

  return (
    <section
      className="h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto px-6 relative">
        <button
          onClick={handleHandClick}
          className="absolute top-6 right-6 text-black bg-transparent py-3 px-4 rounded-full shadow-none cursor-pointer focus:outline-none"
          style={{ fontSize: '2.5em' }} 
        >
          👋
        </button>

        {greetingVisible && (
          <div className="absolute top-6 right-20 bg-black text-white py-3 px-6 rounded-full shadow-md">
            <h1 className="text-xl font-semibold flex items-center space-x-2">
              👋<span>Hi I'm Marshelinda</span>
            </h1>
          </div>
        )}

      </div>
    </section>
  );
}

export default Home;