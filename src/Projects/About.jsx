import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-800 text-white">
            <div className="max-w-screen-xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
                <div className="grid md:grid-cols-5 gap-12 items-center">
                    <div className="md:col-span-2 flex justify-center">
                        <img src="https://i.ibb.co/x81KHQb5/Yousuf-alli.png" alt="About Me" className="rounded-lg shadow-xl w-full h-full  object-cover" />
                    </div>
                    <div className="md:col-span-3">
                        <h3 className="text-2xl font-semibold mb-4 text-blue-400">My Programming Journey</h3>
                        <p className="text-gray-300 mb-4">
                            My journey into programming began out of curiosity, which quickly evolved into a full-fledged passion. Starting with the basics of web development, I was fascinated by how lines of code could transform into interactive and functional websites. This led me to explore the MERN stack, and I fell in love with the power and flexibility of JavaScript for both frontend and backend development.
                        </p>
                        <h3 className="text-2xl font-semibold mb-4 text-blue-400">What I Love to Build</h3>
                        <p className="text-gray-300 mb-4">
                            I enjoy building applications that solve real-world problems and provide a seamless user experience. Whether it's a complex e-commerce platform or a simple utility app, I am driven by the challenge of turning an idea into a tangible product. I'm particularly interested in building scalable systems and working on projects that require creative problem-solving.
                        </p>
                        <h3 className="text-2xl font-semibold mb-4 text-blue-400">Beyond the Code</h3>
                        <p className="text-gray-300">
                            Outside of programming, I'm an avid cricket fan and love to follow the matches. I also enjoy painting, which I find is a great way to express creativity in a different medium. These hobbies help me maintain a fresh perspective and bring a balanced approach to my work.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;