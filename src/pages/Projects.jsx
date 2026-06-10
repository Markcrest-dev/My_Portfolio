import { useState } from 'react'
import PageWrapper from '../components/PageWrapper'
import { projects } from '../data/projects'

const ITEMS_PER_PAGE = 6

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE)
  const currentProjects = projects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

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
            {currentProjects.map((project) => (
              <div
                key={project.title}
                className="group flex flex-col justify-between bg-surface border border-border rounded p-6 transition-all duration-300 hover:border-accent"
              >
                <div>
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <h3 className="text-lg font-display font-medium text-text">
                      {project.title}
                    </h3>
                    <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider px-2 py-1 border border-border rounded text-muted">
                      {project.type}
                    </span>
                  </div>
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
                </div>

                {/* Action Links */}
                <div className="flex gap-6 pt-4 border-t border-border mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted hover:text-text transition-colors duration-200"
                    >
                      Code ↗
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted hover:text-text transition-colors duration-200"
                    >
                      Demo ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-12 gap-6">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`font-mono text-sm transition-colors duration-200 ${
                  currentPage === 1
                    ? 'text-muted/50 cursor-not-allowed'
                    : 'text-text hover:text-accent'
                }`}
              >
                ← Prev
              </button>
              
              <span className="font-mono text-sm text-muted">
                {currentPage} / {totalPages}
              </span>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`font-mono text-sm transition-colors duration-200 ${
                  currentPage === totalPages
                    ? 'text-muted/50 cursor-not-allowed'
                    : 'text-text hover:text-accent'
                }`}
              >
                Next →
              </button>
            </div>
          )}
        </div>
      </section>
    </PageWrapper>
  )
}

export default Projects
