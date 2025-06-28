import React, { useState } from 'react';

const projects = [
    {
        id: 1,
        name: "🍇 Task Match\nFreelance Task Marketplace",
        image: 'https://i.ibb.co/LzX2741k/grapes-market-web-app.jpg',
        stack: ['React', 'Node.js', 'MongoDB', 'React Router', 'Tailwind CSS', 'Firebase Hosting', 'Vercel'],
        description: 'Task Match is a modern freelance task marketplace that connects clients with talented freelancers. Clients can easily post short-term tasks with details like budget, deadline, and description, while freelancers can browse, bid, and secure jobs that match their skills. The platform features secure authentication, real-time bidding, personalized dashboards, and protected routes — offering a seamless experience for both clients and freelancers. Built with React, Tailwind CSS, Firebase, and MongoDB, Task Match delivers a fast, reliable, and scalable solution for microtask hiring.',
        liveLink: 'https://grapes-market.web.app/',
        repoLinks: {
            frontend: 'https://github.com/yousufali156/Task-Match',
            backend: 'https://github.com/yousufali156/Task-Match-Server',
        },
        challenges: 'Ensuring real-time data consistency and secure user authentication were key challenges. Managing bid concurrency and providing seamless user feedback required careful implementation',
        improvements: 'Future plans include adding a recommendation engine based on user behavior and implementing a seller dashboard for product management.',
    },
    {
        id: 2,
        name: '📰 Dragon News \n A Modern Live News Portal',
        image: 'https://i.ibb.co/JFsPHD0L/dragon-news.jpg',
        stack: ['React', 'Firebase', 'Tailwind CSS', 'DaisyUI', 'React Router', 'netlify'],
        description: 'Dragon News is a responsive and dynamic news portal built with React.js, featuring category-based news browsing, Firebase authentication (Google, GitHub, Facebook), and real-time date display. With a clean UI powered by Tailwind CSS and DaisyUI, it delivers a seamless reading experience across devices. Users can explore 29+ categories, interact with a social sidebar, and enjoy features like dark mode and breaking news marquees. Ideal for modern digital journalism platforms.',
        liveLink: 'https://dragon-news-y.netlify.app/',
        repoLink: 'https://github.com/yousufali156/dragon-news',
        challenges: 'Implementing category-based dynamic routing and maintaining clean state management across 29+ news categories was a key challenge. Ensuring seamless authentication via multiple providers (Google, GitHub, Facebook) and achieving responsive layout consistency across all devices required careful attention to UI logic and testing.',
        improvements: 'Planning to add a comment and like system for each news article, implement lazy loading for better performance, and integrate a dashboard for admin news management and analytics in future updates.',
    },
    {
        id: 3,
        name: '🚀 PortfoGen \n Portfolio Generator',
        image: 'https://i.ibb.co/V0r9DPV9/image.png',
        stack: ['Next.js', 'GraphQL', 'Vercel', 'netlify', 'Tailwind CSS', 'DaisyUI'],
        description: 'A dynamic portfolio generator that allows users to create and customize their personal portfolio websites by filling out a simple form.',
        liveLink: 'https://yousuf-portfolio-generator.netlify.app/',
        repoLink: 'https://github.com/yousufali156/portfolio-generator',
        challenges: 'Designing a flexible and modular template system that could adapt to various user inputs was the primary challenge. Ensuring good SEO performance for generated sites was also a key focus.',
        improvements: 'I plan to add more templates and third-party integrations, like a blog section via a headless CMS.',
    },
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const ProjectCard = ({ project, onSelect }) => (
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer" onClick={() => onSelect(project)}>
            <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
            <div className="p-6">
                <h3 className="whitespace-pre-line text-2xl text-center font-bold mb-2">{project.name}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map(tech => (
                        <span key={tech} className="bg-blue-900/50 text-blue-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">{tech}</span>
                    ))}
                </div>
                <button onClick={() => onSelect(project)} className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg">
                    View Details
                </button>
            </div>
        </div>
    );

    const ProjectModal = ({ project, onClose }) => {
        if (!project) return null;

        return (
            <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
                <div className="bg-gray-800 rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                    <div className="p-6">
                        <div className="flex justify-between items-start">
                            <h2 className="text-3xl font-bold mb-4 text-blue-400 whitespace-pre-line">{project.name}</h2>
                            <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">&times;</button>
                        </div>
                        <img src={project.image} alt={project.name} className="w-full h-64 object-cover rounded-lg mb-4" />

                        <div className="mb-4">
                            <h4 className="font-semibold text-lg mb-2">Technology Stack:</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.stack.map(tech => <span key={tech} className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded">{tech}</span>)}
                            </div>
                        </div>

                        <p className="text-gray-300 mb-4">{project.description}</p>

                        <div className="mb-4">
                            <h4 className="font-semibold text-lg mb-2">Challenges Faced:</h4>
                            <p className="text-gray-300">{project.challenges}</p>
                        </div>

                        <div className="mb-6">
                            <h4 className="font-semibold text-lg mb-2">Future Improvements:</h4>
                            <p className="text-gray-300">{project.improvements}</p>
                        </div>

                        <div className="flex space-x-4">
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg">Live Link</a>
                            {project.repoLinks ? (
                                <>
                                    <a href={project.repoLinks.frontend} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg">
                                        Frontend Repo
                                    </a>
                                    <a href={project.repoLinks.backend} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg">
                                        Backend Repo
                                    </a>
                                </>
                            ) : (
                                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg">GitHub Repo</a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section id="projects" className="py-20 bg-gray-900 text-white">
            <div className="max-w-screen-xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(p => <ProjectCard key={p.id} project={p} onSelect={setSelectedProject} />)}
                </div>
            </div>
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </section>
    );
};

export default Projects;
