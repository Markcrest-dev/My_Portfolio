import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import { projects } from '../data/projects'

const Home = () => {
  // Show first 2 projects as "selected work" teaser
  const featured = projects.slice(0, 2)

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="min-h-screen flex items-center px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Info */}
          <div className="max-w-2xl">
            <p className="font-mono text-sm text-muted mb-4 tracking-wider">
              FULL-STACK DEVELOPER
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-600 text-text leading-tight mb-6">
              Mark<br />Okafor
            </h1>
            <p className="text-muted text-lg leading-relaxed mb-10 max-w-lg">
              Full-stack developer with 4+ years of experience crafting clean, performant web applications and intuitive digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 bg-accent text-bg font-medium text-sm px-6 py-3 rounded transition-all duration-200 hover:brightness-110"
              >
                View Projects
                <ArrowUpRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border border-border text-text font-medium text-sm px-6 py-3 rounded transition-all duration-200 hover:border-accent hover:text-accent"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Right — Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Accent glow behind image */}
              <div
                className="absolute -inset-1 rounded-full opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-70"
                style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)' }}
              />
              {/* Image container */}
              <div
                className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-border transition-all duration-500 group-hover:border-accent"
                style={{ animation: 'heroFloat 6s ease-in-out infinite' }}
              >
                <img
                  src="/Mark5.jpg"
                  alt="Mark Okafor — Full-Stack Developer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work Divider */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="border-t border-border pt-16">
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-mono text-sm text-muted tracking-wider">
                SELECTED WORK
              </h2>
              <Link
                to="/projects"
                className="text-sm text-muted hover:text-accent transition-colors duration-200 flex items-center gap-1"
              >
                View all <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {featured.map((project) => (
                <div
                  key={project.title}
                  className="group bg-surface border border-border rounded p-6 transition-all duration-300 hover:border-accent"
                >
                  <h3 className="text-lg font-display font-medium text-text mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs text-muted"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-6 mt-5 pt-4 border-t border-border">
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
        </div>
      </section>
    </PageWrapper>
  )
}

export default Home
