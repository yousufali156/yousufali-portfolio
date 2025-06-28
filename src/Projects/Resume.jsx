import React from 'react';

const Resume = () => {
    return (
        <div>
            <h2 className="text-4xl font-bold text-center mb-12">My Resume</h2>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">You can download my resume using the link below:</p>
            <div className="flex justify-center">
                <a href="/path/to/your/resume.pdf" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700" download>Download Resume</a>
            </div>
        </div>
    );
};

export default Resume;