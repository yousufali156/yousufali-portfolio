import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css';
import Navbar from "./Projects/Navbar";
import Hero from "./Projects/Hero";
import About from "./Projects/About";
import Skills from "./Projects/Skills";
import Education from "./Projects/Education";
import Projects from "./Projects/Projects";
import Contact from "./Projects/Contact";
import Footer from "./Projects/Footer";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen font-sans transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
