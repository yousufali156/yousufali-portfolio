import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Detect scroll
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Detect theme (DaisyUI)
  useEffect(() => {
    const html = document.documentElement;
    const observer = new MutationObserver(() => {
      setIsDark(html.getAttribute("data-theme") === "dark");
    });
    observer.observe(html, { attributes: true, attributeFilter: ["data-theme"] });

    // Initial check
    setIsDark(html.getAttribute("data-theme") === "dark");

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-6 bg-base-100 text-base-content transition-colors duration-300">
      <div className="max-w-screen-xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Md. Yousuf Ali. All Rights Reserved.</p>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-500 ease-out
          ${
            isVisible
              ? "opacity-100 translate-y-0 animate-bounce"
              : "opacity-0 translate-y-10 pointer-events-none"
          }
          ${isDark ? "bg-green-600 hover:bg-green-700" : "bg-blue-500 hover:bg-blue-600"}
          text-white
        `}
      >
        <ArrowUp
          className={`w-5 h-5 ${
            isDark ? "text-white" : "text-white"
          } transition-colors duration-300`}
        />
      </button>
    </footer>
  );
};

export default Footer;
