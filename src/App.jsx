import React from 'react'
import './App.css'

import Navbar from "./Projects/Navbar";
import Hero from "./Projects/Hero";
import About from "./Projects/About";
import Skills from "./Projects/Skills";
import Education from "./Projects/Education";
import Projects from "./Projects/Projects";
import Contact from "./Projects/Contact";
import Footer from "./Projects/Footer";



export default function App() {
  return (
    <div className="bg-gray-900 text-white">
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



