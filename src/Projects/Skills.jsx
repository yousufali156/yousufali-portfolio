import React, { useEffect, useState } from 'react';

// Skills Data
const skills = {
    frontend: [
        { name: 'React', level: 95 },
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'HTML5 & CSS3', level: 98 },
        { name: 'Tailwind CSS', level: 92 },
    ],
    backend: [
        { name: 'Node.js', level: 88 },
        { name: 'Express.js', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'REST API', level: 90 },
    ],
    tools: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 75 },
        { name: 'Postman', level: 85 },
    ],
};

const SkillBar = ({ name, level }) => {
    const [filledLevel, setFilledLevel] = useState(0);
    const [displayLevel, setDisplayLevel] = useState(0);

    useEffect(() => {
        const fillTimeout = setTimeout(() => {
            setFilledLevel(level);
        }, 300); // delay before bar animation starts

        // Count-up animation
        let current = 0;
        const duration = 2000; // slower: 2 seconds
        const steps = level;
        const increment = level / steps;
        const intervalTime = duration / steps;

        const interval = setInterval(() => {
            current += increment;
            if (current >= level) {
                setDisplayLevel(level);
                clearInterval(interval);
            } else {
                setDisplayLevel(Math.floor(current));
            }
        }, intervalTime);

        return () => {
            clearTimeout(fillTimeout);
            clearInterval(interval);
        };
    }, [level]);

    return (
        <div className="mb-4">
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-gray-300">{name}</span>
                <span className="text-sm font-medium text-blue-400">{displayLevel}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                <div
                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-[2000ms] ease-in-out"
                    style={{ width: `${filledLevel}%` }}
                ></div>
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-gray-900 text-white">
            <div className="max-w-screen-xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold text-center mb-6 text-blue-400">Frontend</h3>
                        {skills.frontend.map(skill => <SkillBar key={skill.name} {...skill} />)}
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold text-center mb-6 text-blue-400">Backend</h3>
                        {skills.backend.map(skill => <SkillBar key={skill.name} {...skill} />)}
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold text-center mb-6 text-blue-400">Tools & Technologies</h3>
                        {skills.tools.map(skill => <SkillBar key={skill.name} {...skill} />)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
