'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Learn more about my background, experience, and what drives my passion for development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Full-Stack Developer</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm a passionate full-stack developer with over 4 years of experience in creating 
              web applications. I love turning complex problems into simple, beautiful, and 
              intuitive solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing my knowledge through blog posts and mentoring.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h4 className="font-semibold text-primary-600 dark:text-primary-400">30+</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-600 dark:text-primary-400">4+</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Years Experience</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-600 dark:text-primary-400">10+</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-600 dark:text-primary-400">100%</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Satisfaction Rate</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
