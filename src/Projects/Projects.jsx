import React, { useState } from 'react';


const projects = [
    {
        id: 1,
        name: 'E-commerce Platform',
        image: 'https://placehold.co/600x400/2563eb/ffffff?text=E-commerce',
        stack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        description: 'A full-featured e-commerce website with product listings, user authentication, shopping cart, and a secure payment gateway integration.',
        liveLink: '#',
        repoLink: '#',
        challenges: 'Implementing a secure and scalable payment system with Stripe was a major challenge. Ensuring data consistency across the distributed system required careful planning.',
        improvements: 'Future plans include adding a recommendation engine based on user behavior and implementing a seller dashboard for product management.',
    },
    {
        id: 2,
        name: 'Task Management App',
        image: 'https://placehold.co/600x400/10b981/ffffff?text=Task+Manager',
        stack: ['React', 'Firebase', 'Tailwind CSS'],
        description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and user-specific dashboards.',
        liveLink: '#',
        repoLink: '#',
        challenges: 'Achieving real-time synchronization between multiple users without conflicts was complex. Optimizing the drag-and-drop performance for a large number of tasks was also challenging.',
        improvements: 'Adding calendar integration and notification reminders are the next steps for this project.',
    },
    {
        id: 3,
        name: 'Portfolio Generator',
        image: 'https://placehold.co/600x400/f97316/ffffff?text=Portfolio+Gen',
        stack: ['Next.js', 'GraphQL', 'Vercel'],
        description: 'A dynamic portfolio generator that allows users to create and customize their personal portfolio websites by filling out a simple form.',
        liveLink: '#',
        repoLink: '#',
        challenges: 'Designing a flexible and modular template system that could adapt to various user inputs was the primary challenge. Ensuring good SEO performance for generated sites was also a key focus.',
        improvements: 'I plan to add more templates and third-party integrations, like a blog section via a headless CMS.',
    },
];



const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const ProjectCard = ({ project, onSelect }) => (
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
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
                            <h2 className="text-3xl font-bold mb-4 text-blue-400">{project.name}</h2>
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
                            <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg">GitHub Repo</a>
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

