import React, { useState, useEffect, useRef } from 'react';

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const contactSectionRef = useRef(null);

  useEffect(() => {
    const handleHashChange = () => {
      const newIsVisible = window.location.hash === '#contact';
      console.log('Hash changed:', window.location.hash, 'isVisible:', newIsVisible);
      setIsVisible(newIsVisible);
    };

    console.log('Contact component mounted');
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      console.log('Contact component unmounted');
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <section
      id="contact"
      className={`fixed top-0 right-0 h-screen bg-gray-100 w-1/2 shadow-md transform transition-transform duration-300 ease-in-out z-50 ${
        isVisible ? 'translate-x-0' : 'translate-x-full'
      }`}
      ref={contactSectionRef}
    >
      <div className="p-6 relative h-full flex flex-col md:flex-row">
        {/* Left Side (Contact Details & Social) */}
        <div className="md:w-1/2 pr-4 flex flex-col justify-center h-full">
          <div>
            <h4 className="font-semibold text-lg text-gray-800 mb-2">Contact Details</h4>
            <p className="text-gray-600 mb-1">marshelinda@gmail.com</p>
            <p className="text-gray-600">+62 85882930501</p>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold text-lg text-gray-800 mb-2">Social</h4>
            <ul className="list-none">
              <li><a href='https://www.linkedin.com/in/marshelinda-rukmana' className="text-black-500 hover:underline">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/marshelindaa" className="text-black-500 hover:underline">Instagram</a></li>
              <li><a href="https://www.twitter.com/marshelindaaa" className="text-black-400 hover:underline">Twitter</a></li>
              <li><a href="https://www.webflow.com/home" className="text-black-500 hover:underline">Webflow</a></li>
              <li><a href="https://www.figma.com/home" className="text-black-500 hover:underline">Figma</a></li>
            </ul>
          </div>
          <button
            onClick={() => {
              window.location.hash = '';
              setIsVisible(false);
            }}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none md:hidden"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82-2.83-2.83a1 1 0 1 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.82 2.82 2.82 2.82z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Right Side (Contact Form) */}
        <div className="md:w-1/2 pl-4">
          <h3 className="font-semibold text-xl text-gray-800 mb-4">Let's collaborate on your next project</h3>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="James Robert" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="ayush.barnwal@brightscout.com" />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">Subject</label>
              <input type="text" id="subject" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="For web design work Enquire" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
              <textarea id="message" rows="4" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Type your Message"></textarea>
            </div>
            <button type="submit" className="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
          </form>
          <button
            onClick={() => {
              window.location.hash = '';
              setIsVisible(false);
            }}
            className="hidden md:block absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82-2.83-2.83a1 1 0 1 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.82 2.82 2.82 2.82z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;