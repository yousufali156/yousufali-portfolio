import React from 'react';

// Social Links Data
const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/yousufali156', icon: (props) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg> },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yousufali156', icon: (props) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg> },
    { name: 'Twitter', url: 'https://twitter.com/yousufali156', icon: (props) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.793 4.649-.65.177-1.353.23-2.064.044.64 1.932 2.502 3.332 4.718 3.37-1.734 1.359-3.92 2.165-6.299 2.165-.411 0-.816-.024-1.214-.072 2.146 1.385 4.695 2.199 7.448 2.199 8.919 0 13.784-7.396 13.784-13.785 0-.21 0-.42-.015-.629.947-.684 1.768-1.54 2.42-2.515z" /></svg> },
    { name: 'Facebook', url: 'https://facebook.com/yousufali156', icon: (props) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg> },
];

const Hero = () => {
    return (
        <section id="home" className="bg-gray-900 text-white pt-32 pb-16">
            <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-8 items-center px-4">
                <div className="text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
                        Md. Yousuf Ali
                    </h1>
                    <p className="text-xl md:text-2xl mb-6 text-blue-400 font-semibold">
                        MERN Stack Developer
                    </p>
                    <p className="text-lg text-gray-300 mb-8 max-w-max mx-auto md:mx-0">
                        <p>💻 I build modern, secure & SEO-friendly websites for various platforms.</p>
                        <p>⚙ Skilled in MERN stack, Firebase, and Tailwind to craft scalable solutions.</p>
                        <p>📱 Fully responsive, fast-loading & custom-built—perfect for your brand.</p>
                    </p>
                    <div className="flex justify-center md:justify-start space-x-4 mb-8">
                        {socialLinks.map(link => (
                            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                                <link.icon className="w-8 h-8" />
                            </a>
                        ))}
                    </div>
                    <div>
                        <a href="./resume.pdf" download="Md_Yousuf_Ali_Resume.pdf" className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition-transform duration-300 hover:scale-105">
                            Download Resume
                        </a>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img src="/Yousuf Ali Web Developer.png" alt="Md. Yousuf Ali" className="rounded-full border-4 border-blue-600 shadow-2xl w-64 h-64 md:w-80 md:h-80 object-cover" />
                </div>
            </div>
        </section>
    );
};

export default Hero;