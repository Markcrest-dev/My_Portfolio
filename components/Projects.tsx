'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiCode, FiStar } from 'react-icons/fi'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and order processing.',
    image: '🛒',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: '📋',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true
  },
  {
    title: 'Countdown App',
    description: 'A responsive weather dashboard that displays current conditions and forecasts using OpenWeather API with beautiful data visualizations.',
    image: '🌤️',
    technologies: ['Javascript', 'CSS3'],
    github: 'https://github.com/Markcrest-dev/Countdown.git',
    demo: 'https://countdown-two-tan.vercel.app',
    featured: false
  },
  {
    title: 'Quiz App',
    description: 'A social media platform with real-time messaging, post sharing, and user profiles. Built with modern web technologies.',
    image: '📱',
    technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
    github: 'https://github.com/Markcrest-dev/StudyStorm.git',
    demo: 'https://studystorm.netlify.app',
    featured: false
  },
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features dark mode, animations, and optimized performance.',
    image: '💼',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false
  },
  {
    title: 'Tourist Website',
    description: 'An intelligent chatbot powered by OpenAI API with natural language processing and context-aware responses.',
    image: '🤖',
    technologies: ['Python', 'OpenAI API', 'Flask', 'React'],
    github: 'https://github.com/Markcrest-dev/Tourism.git',
    demo: 'https://tourism-eight-umber.vercel.app',
    featured: true
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:scale-105 relative"
            >
              {project.featured && (
                <div className="absolute -top-2 -right-2 bg-primary-500 text-white p-2 rounded-full">
                  <FiStar className="w-4 h-4" />
                </div>
              )}
              
              <div className="text-6xl mb-4 text-center">{project.image}</div>
              
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  <FiGithub className="w-4 h-4" />
                  <span className="text-sm">Code</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  <FiExternalLink className="w-4 h-4" />
                  <span className="text-sm">Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
