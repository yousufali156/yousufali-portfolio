import { useEffect, useMemo, useState } from "react";
import { useTheme } from "../ThemeContext";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const { theme, toggleTheme } = useTheme();

  const navLinks = useMemo(() => [
    { href: '#home', label: '🏠 Home' },
    { href: '#about', label: '👤 About' },
    { href: '#skills', label: '🛠️ Skills' },
    { href: '#projects', label: '📁 Projects' },
    { href: '#contact', label: '📞 Contact' },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(`#${section.id}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  return (
    <nav className="bg-auto/60 backdrop-blur-sm fixed w-full z-50 top-0 start-0 border-b border-dashed border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-3">
          <img
            src="/yousuf-logo.png"
            alt="Yousuf Logo"
            className="h-10 w-10 rounded-full object-contain"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://i.ibb.co/wFRM3C9W/Yousuf-Ali-Web-Developer.png';
            }}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap transition-colors duration-300">
           Portfolio
          </span>
        </a>

        {/* Right Side Buttons */}
        <div className="flex items-center md:order-2 space-x-2 rtl:space-x-reverse">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-blue-400/60 dark:hover:bg-white/60 transition-colors"
          >
            {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Hire Me */}
          <a
            href="#contact"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-colors"
          >
            Hire Me
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-600 dark:text-gray-300 rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-4 md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700 transition-colors">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 px-4 rounded-lg transition-all duration-300
                    ${activeSection === link.href
                      ? 'bg-blue-600 text-white shadow-md'
                      : ' hover:text-blue-500 dark:hover:text-blue-400'
                    }`}
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
