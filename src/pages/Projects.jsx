import PageWrapper from '../components/PageWrapper'
import { projects } from '../data/projects'

const Projects = () => {
  return (
    <PageWrapper>
      <section className="pt-28 pb-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Label */}
          <p className="font-mono text-sm text-muted mb-4 tracking-wider">
            PROJECTS
          </p>
          <h1 className="font-display text-4xl font-600 text-text mb-12">
            Things I've built
          </h1>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group bg-surface border border-border rounded p-6 transition-all duration-300 hover:border-accent"
              >
                <h3 className="text-lg font-display font-medium text-text mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-3 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs text-muted"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex gap-6 pt-4 border-t border-border">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-text transition-colors duration-200"
                  >
                    Code ↗
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-text transition-colors duration-200"
                  >
                    Demo ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}

export default Projects
