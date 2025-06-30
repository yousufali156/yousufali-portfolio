import React from 'react';

const Education = () => {
    return (
        <section id="education" className="py-20 bg-base-100 text-base-content transition-colors duration-300">
            <div className="max-w-screen-xl mx-auto px-4">

                <div className="flex justify-center mb-12 font-bold text-xl items-center gap-4">
                    <div className="w-24 h-px bg-base-content"></div>
                    <div className="py-2 px-5 rounded-lg bg-base-200 font-medium">
                        Education & Achievement
                    </div>
                    <div className="w-24 h-px bg-base-content"></div>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="bg-base-200 p-6 rounded-lg shadow-lg border-l-4 border-primary">
                        <h3 className="text-2xl font-bold">Master of Social Science in Economics</h3>
                        <p className="text-lg text-primary font-semibold mt-1">
                            I completed my Master's in Economics from Govt. Azizul Haque College, Bogura
                        </p>
                        <p className="text-base-content/70 mt-2">Session: 2019–2020</p>
                        <p className="text-base-content/80 mt-4">
                            I'm Md. Yousuf Ali, completed my MSS in Economics with a strong foundation in
                            economic theory, statistics, and research. Now working as a Full Stack Developer,
                            combining analytical thinking with modern web technologies to build scalable
                            digital solutions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
