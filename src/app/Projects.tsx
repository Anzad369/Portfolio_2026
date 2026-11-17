'use client';

import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveDemoLink: string;
  githubLink: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Currency Sage',
    description: 'Real-time currency converter using React and exchange rate APIs.',
    image: '/images/currency_sage.png',
    tags: ['React', 'API', 'JavaScript'],
    liveDemoLink: '#',
    githubLink: '#',
  },
  {
    id: 2,
    title: 'GRAINS',
    description: 'Blockchain-based agricultural supply chain tracking using React and Ethereum smart contracts for trust and transparency.',
    image: '/images/GRAINS.png',
    tags: ['React', 'Blockchain', 'Ethereum', 'Solidity'],
    liveDemoLink: '#',
    githubLink: '#',
  },
  {
    id: 3,
    title: 'One Click Resume Builder',
    description: 'Simple React app to create and download professionally formatted resumes in PDF format.',
    image: '/images/resume_builder.png',
    tags: ['React', 'PDF'],
    liveDemoLink: '#',
    githubLink: 'https://github.com/Anzad369/resume-builder',
  },
  {
    id: 4,
    title: 'PhotoStudio',
    description: 'Next.js portfolio website for photographers with Tailwind CSS and Framer Motion animations.',
    image: '/images/photography.png',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    liveDemoLink: 'photography-website-dusky.vercel.app',
    githubLink: 'https://github.com/Anzad369/photography-website',
  },
  {
    id: 5,
    title: 'AI Travel Planner',
    description: 'Trip planner application that leverages NVIDIA large language models and Leaflet.js, deployed with cloud for scalability.',
    image: '/images/travel.png',
    tags: ['Next.js', 'AI', 'Cloud', 'NVIDIA'],
    liveDemoLink: '#',
    githubLink: 'https://github.com/Anzad369/travel-planner',
  },
];

const filters = ['All', 'React', 'Next.js', 'AI', 'Blockchain', 'Cloud'];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 10 } },
  hover: {
    scale: 1.03,
    boxShadow: '0 10px 20px rgba(0,0,0,0.12)',
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
};

const buttonVariants: Variants = {
  hover: {
    scale: 1.05,
    boxShadow: '0 0 8px rgba(79,70,229,0.7)',
  },
  tap: {
    scale: 0.95,
  },
};

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [showAll, setShowAll] = useState(false);

  const filteredProjectsAll = projectsData.filter((project) =>
    activeFilter === 'All' ? true : project.tags.includes(activeFilter)
  );

  const filteredProjects = showAll ? filteredProjectsAll : filteredProjectsAll.slice(0, 3);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center mb-6 text-indigo-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        {/* Filters */}
        <div className="flex flex-wrap justify-center mb-12 gap-3" role="group" aria-label="Project filters">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition duration-300 focus:outline-none ${
                activeFilter === filter
                  ? 'bg-indigo-600 text-white shadow-md hover:brightness-110'
                  : 'bg-white text-indigo-700 hover:bg-indigo-100'
              }`}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              aria-pressed={activeFilter === filter}
              aria-label={`Filter projects by ${filter}`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="bg-white rounded-xl overflow-hidden cursor-pointer"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  whileHover="hover"
                  layout
                  tabIndex={0}
                  role="article"
                  aria-label={`Project: ${project.title}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover rounded-t-xl"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-indigo-700 hover:text-indigo-900 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 mb-5">{project.description}</p>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-semibold"
                          aria-label={`Tag: ${tag}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-5">
                      <a
                        href={project.liveDemoLink}
                        className="text-indigo-600 hover:text-indigo-900 font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Live demo of ${project.title}`}
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.githubLink}
                        className="text-gray-600 hover:text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`GitHub repository of ${project.title}`}
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.p
                className="col-span-full text-center text-gray-600 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                No projects found for this filter.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Toggle View All / Show Less */}
        <motion.div className="text-center mt-14">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 border border-indigo-700 text-indigo-700 rounded-full font-semibold hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            aria-expanded={showAll}
            aria-label={showAll ? 'Show less projects' : 'View all projects'}
          >
            {showAll ? 'Show Less' : 'View All Projects'}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
