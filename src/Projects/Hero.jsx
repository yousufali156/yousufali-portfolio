import React from 'react';
import { Github, Linkedin, Twitter, Download } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
    return (
        <section id="home" className="pt-28 md:pt-32 pb-16 transition-colors duration-300">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 sm:px-6 lg:px-8">
                {/* Left Text Section */}
                <div className="text-center md:text-left select-text space-y-6">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                        Hi, I'm{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-blue-500 transition-all duration-300 cursor-pointer">
                            Yousuf Ali
                        </span>
                    </h1>

                    {/* Typewriter effect */}
                    <p className="text-lg sm:text-xl md:text-2xl font-semibold text-primary min-h-[60px]">
                        <Typewriter
                            words={[
                                'Continuous Learner!',
                                'MERN Stack Developer',
                                'React | Node.js | MongoDB',
                                '🚀 Transforming ideas into web apps!',
                            ]}
                            loop
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </p>

                    {/* Description */}
                    <div className="text-base-content/70 text-base sm:text-lg space-y-2">
                        <p>💻 I build modern, secure & SEO-friendly websites for various platforms.</p>
                        <p>⚙ Skilled in MERN stack, Firebase, and Tailwind to craft scalable solutions.</p>
                        <p>📱 Fully responsive, fast-loading & custom-built—perfect for your brand.</p>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center md:justify-start items-center gap-5 pt-4">
                        <a href="https://github.com/yousufali156" target="_blank" rel="noopener noreferrer"
                            className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition">
                            <Github size={28} />
                        </a>
                        <a href="https://linkedin.com/in/yousufali156" target="_blank" rel="noopener noreferrer"
                            className="text-gray-500 dark:text-gray-400 hover:text-blue-600 transition">
                            <Linkedin size={28} />
                        </a>
                        <a href="https://twitter.com/yousufali156" target="_blank" rel="noopener noreferrer"
                            className="text-gray-500 dark:text-gray-400 hover:text-sky-500 transition">
                            <Twitter size={28} />
                        </a>
                        <a href="https://wa.me/8801754954385" target="_blank" rel="noopener noreferrer"
                            className="text-gray-500 dark:text-gray-400 hover:text-green-500 transition">
                            <FaWhatsapp size={26} />
                        </a>
                    </div>

                    {/* Resume Download Button */}
                    <div>
                        <a
                            href="./resume.pdf"
                            download="Md_Yousuf_Ali_Resume.pdf"
                            className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:scale-105"
                        >
                            <Download size={20} /> Download Resume
                        </a>
                    </div>
                </div>

                {/* Right Image Section */}
                <div className="flex justify-center md:justify-end">
                    <div className="img-hover-zoom--brightness">
                        <img
                            src="https://i.ibb.co/wFRM3C9W/Yousuf-Ali-Web-Developer.png"
                            alt="Md. Yousuf Ali"
                            className="rounded-full border-4 border-blue-600 shadow-2xl w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
