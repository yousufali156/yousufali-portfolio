import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  // 🧠 ScrollSpy Logic
  useEffect(() => {
    const sectionIds = navLinks.map(link => link.href);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.querySelector(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="bg-gray-900 backdrop-blur-sm fixed w-full z-20 top-0 start-0 border-b border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        <a href="#home" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/yousuf-logo.png"
            alt="Yousuf Logo"
            className="h-10 w-15 rounded-full object-contain"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            My Portfolio
          </span>
        </a>

        <div className="flex md:order-2">
          <button onClick={() => window.location.href = '#contact'} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">Hire Me</button>
          <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" viewBox="0 0 17 14"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" /></svg>
          </button>
        </div>

        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-700 rounded-lg bg-gray-800 md:bg-transparent md:space-x-8 md:flex-row md:mt-0 md:border-0">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`block py-2 px-3 rounded md:p-0
                    ${activeSection === link.href
                      ? 'text-blue-500 font-semibold'
                      : 'text-gray-300'}
                    hover:bg-blue-700 hover:text-white md:hover:bg-transparent md:hover:text-blue-500`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
