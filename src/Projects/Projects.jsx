import React, { useState } from 'react';

const projects = [
	{
		id: 1,
		name: '🍇 Task Match\nFreelance Task Marketplace',
		image: 'https://i.ibb.co/LzX2741k/grapes-market-web-app.jpg',
		stack: [
			'React',
			'Node.js',
			'MongoDB',
			'React Router',
			'Tailwind CSS',
			'Firebase Hosting',
			'Vercel',
		],
		description: 'Task Match is a modern freelance task marketplace...',
		liveLink: 'https://grapes-market.web.app/',
		repoLinks: {
			frontend: 'https://github.com/yousufali156/Task-Match',
			backend: 'https://github.com/yousufali156/Task-Match-Server',
		},
		challenges:
			'Ensuring real-time data consistency and secure user authentication...',
		improvements:
			'Future plans include adding a recommendation engine...',
	},
	{
		id: 2,
		name: '📰 Dragon News \n A Modern Live News Portal',
		image: 'https://i.ibb.co/JFsPHD0L/dragon-news.jpg',
		stack: [
			'React',
			'Firebase',
			'Tailwind CSS',
			'DaisyUI',
			'React Router',
			'netlify',
		],
		description: 'Dragon News is a responsive and dynamic news portal...',
		liveLink: 'https://dragon-news-y.netlify.app/',
		repoLink: 'https://github.com/yousufali156/dragon-news',
		challenges: 'Implementing category-based dynamic routing...',
		improvements: 'Planning to add a comment and like system...',
	},
	{
		id: 3,
		name: '🚀 PortfoGen \n Portfolio Generator',
		image: 'https://i.ibb.co/V0r9DPV9/image.png',
		stack: [
			'Next.js',
			'GraphQL',
			'Vercel',
			'netlify',
			'Tailwind CSS',
			'DaisyUI',
		],
		description:
			'A dynamic portfolio generator that allows users to create and customize...',
		liveLink: 'https://yousuf-portfolio-generator.netlify.app/',
		repoLink: 'https://github.com/yousufali156/portfolio-generator',
		challenges:
			'Designing a flexible and modular template system...',
		improvements:
			'I plan to add more templates and third-party integrations...',
	},
];

const Projects = () => {
	const [selectedProject, setSelectedProject] = useState(null);

	const ProjectCard = ({ project, onSelect }) => (
		<div
			className="bg-base-200 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
			onClick={() => onSelect(project)}
		>
			<img
				src={project.image}
				alt={project.name}
				className="w-full h-48 object-cover"
			/>
			<div className="p-6">
				<h3 className="whitespace-pre-line text-2xl text-center font-bold mb-2 text-base-content">
					{project.name}
				</h3>
				<div className="flex flex-wrap gap-2 mb-4">
					{project.stack.map((tech) => (
						<span
							key={tech}
							className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-0.5 rounded-full"
						>
							{tech}
						</span>
					))}
				</div>
				<button
					onClick={() => onSelect(project)}
					className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg"
				>
					View Details
				</button>
			</div>
		</div>
	);

	const ProjectModal = ({ project, onClose }) => {
		if (!project) return null;

		return (
			<div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
				<div className="bg-base-100 rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto text-base-content">
					<div className="p-6">
						<div className="flex justify-between items-start">
							<h2 className="text-3xl font-bold mb-4 text-primary whitespace-pre-line">
								{project.name}
							</h2>
							<button
								onClick={onClose}
								className="text-base-content/60 hover:text-base-content text-2xl"
							>
								&times;
							</button>
						</div>
						<img
							src={project.image}
							alt={project.name}
							className="w-full h-64 object-cover rounded-lg mb-4"
						/>

						<div className="mb-4">
							<h4 className="font-semibold text-lg mb-2">
								Technology Stack:
							</h4>
							<div className="flex flex-wrap gap-2">
								{project.stack.map((tech) => (
									<span
										key={tech}
										className="bg-base-200 text-base-content text-sm px-3 py-1 rounded"
									>
										{tech}
									</span>
								))}
							</div>
						</div>

						<p className="text-base-content/80 mb-4">
							{project.description}
						</p>

						<div className="mb-4">
							<h4 className="font-semibold text-lg mb-2">
								Challenges Faced:
							</h4>
							<p className="text-base-content/80">
								{project.challenges}
							</p>
						</div>

						<div className="mb-6">
							<h4 className="font-semibold text-lg mb-2">
								Future Improvements:
							</h4>
							<p className="text-base-content/80">
								{project.improvements}
							</p>
						</div>

						<div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
							<a
								href={project.liveLink}
								target="_blank"
								rel="noopener noreferrer"
								className="flex-1 text-center bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg"
							>
								Live Link
							</a>
							{project.repoLinks ? (
								<>
									<a
										href={project.repoLinks.frontend}
										target="_blank"
										rel="noopener noreferrer"
										className="flex-1 text-center bg-base-300 hover:bg-base-200 text-base-content font-bold py-2 px-4 rounded-lg"
									>
										Frontend Repo
									</a>
									<a
										href={project.repoLinks.backend}
										target="_blank"
										rel="noopener noreferrer"
										className="flex-1 text-center bg-base-300 hover:bg-base-200 text-base-content font-bold py-2 px-4 rounded-lg"
									>
										Backend Repo
									</a>
								</>
							) : (
								<a
									href={project.repoLink}
									target="_blank"
									rel="noopener noreferrer"
									className="flex-1 text-center bg-base-300 hover:bg-base-200 text-base-content font-bold py-2 px-4 rounded-lg"
								>
									GitHub Repo
								</a>
							)}
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<section id="projects" className="py-20 bg-base-100 text-base-content transition-colors duration-300">
			<div className="max-w-screen-xl mx-auto px-4">
				<h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((p) => (
						<ProjectCard key={p.id} project={p} onSelect={setSelectedProject} />
					))}
				</div>
			</div>
			<ProjectModal
				project={selectedProject}
				onClose={() => setSelectedProject(null)}
			/>
		</section>
	);
};

export default Projects;
