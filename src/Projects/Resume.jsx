import React from 'react';

const Resume = () => {
    return (
        <div className=" transition-colors duration-300">
            <h2 className="text-4xl font-bold text-center mb-12">My Resume</h2>
            <p className="text-lg text-base-content/70 mb-10 max-w-2xl mx-auto">You can download my resume using the link below:</p>
            <div className="flex justify-center">
                <a href="https://drive.google.com/file/d/1F2f7nPiAnxnL2dVu3nMfZoo7Wd1vySuG/view?usp=sharing" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700" download>Download Resume</a>
            </div>
        </div>
    );
};

export default Resume;