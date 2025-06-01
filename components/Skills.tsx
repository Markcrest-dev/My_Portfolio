'use client'

import { motion } from 'framer-motion'
import { 
  FiCode, 
  FiDatabase, 
  FiGlobe, 
  FiSmartphone,
  FiGitBranch,
  FiCloud
} from 'react-icons/fi'

const skillCategories = [
  {
    title: 'Frontend',
    icon: FiCode,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Backend',
    icon: FiDatabase,
    skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Express.js'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Mobile',
    icon: FiSmartphone,
    skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'DevOps',
    icon: FiCloud,
    skills: ['Docker', 'AWS', 'CI/CD', 'Kubernetes', 'Terraform'],
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Tools',
    icon: FiGitBranch,
    skills: ['Git', 'VS Code', 'Figma', 'Postman', 'Jest'],
    color: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Web Tech',
    icon: FiGlobe,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'REST APIs', 'GraphQL'],
    color: 'from-teal-500 to-blue-500'
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50 section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between p-2 rounded bg-gray-50 dark:bg-gray-700/50"
                  >
                    <span className="text-sm font-medium">{skill}</span>
                    <div className="w-16 h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${Math.floor(Math.random() * 30) + 70}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
