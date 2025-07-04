import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-base-100 text-base-content transition-colors duration-300">
      <div className="max-w-screen-xl mx-auto px-4">

        <div className="flex justify-center font-bold text-xl mb-12 items-center gap-4">
          <div className="w-24 h-px bg-base-content"></div>
          <div className="py-2 px-5 rounded-lg bg-base-200 font-medium">
            About Me
          </div>
          <div className="w-24 h-px bg-base-content"></div>
        </div>
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Image */}
          <div className="md:col-span-2 flex justify-center">
            <img
              src="https://i.ibb.co/x81KHQb5/Yousuf-alli.png"
              alt="About Me"
              className="rounded-lg shadow-xl w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:col-span-3 space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-2">My Programming Journey</h3>
              <p className="text-base-content/70">
                My journey into programming began out of curiosity, which quickly evolved into a full-fledged passion. Starting with the basics of web development, I was fascinated by how lines of code could transform into interactive and functional websites. This led me to explore the MERN stack, and I fell in love with the power and flexibility of JavaScript for both frontend and backend development.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-primary mb-2">What I Love to Build</h3>
              <p className="text-base-content/70">
                I enjoy building applications that solve real-world problems and provide a seamless user experience. Whether it's a complex e-commerce platform or a simple utility app, I am driven by the challenge of turning an idea into a tangible product. I'm particularly interested in building scalable systems and working on projects that require creative problem-solving.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-primary mb-2">Beyond the Code</h3>
              <p className="text-base-content/70">
                Outside of programming, I'm an avid cricket fan and love to follow the matches. I also enjoy painting, which I find is a great way to express creativity in a different medium. These hobbies help me maintain a fresh perspective and bring a balanced approach to my work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
