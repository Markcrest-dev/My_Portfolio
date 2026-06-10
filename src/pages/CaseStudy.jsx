import { useParams, Navigate, Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import PageWrapper from '../components/PageWrapper'
import { projects } from '../data/projects'

const CaseStudy = () => {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  return (
    <PageWrapper>
      <article className="pt-28 pb-24 px-6 lg:px-8 max-w-4xl mx-auto">
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors duration-200 mb-12"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>
        
        <header className="mb-12">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6">
            {project.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted mb-8">
            <span className="font-mono tracking-wider uppercase border border-border px-3 py-1 rounded">
              {project.type}
            </span>
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-text transition-colors duration-200"
              >
                <Github size={16} />
                Source Code
              </a>
            )}
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-text transition-colors duration-200"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
          <div className="flex flex-wrap gap-3">
            {project.tech.map(t => (
              <span key={t} className="font-mono text-xs text-accent bg-accent/10 px-2 py-1 rounded">
                #{t}
              </span>
            ))}
          </div>
        </header>

        <div className="markdown-body text-muted leading-relaxed space-y-6 
            [&>h1]:text-3xl [&>h1]:font-display [&>h1]:text-text [&>h1]:mb-6 [&>h1]:mt-12
            [&>h2]:text-2xl [&>h2]:font-display [&>h2]:text-text [&>h2]:mb-4 [&>h2]:mt-10
            [&>h3]:text-xl [&>h3]:font-display [&>h3]:text-text [&>h3]:mb-3 [&>h3]:mt-8
            [&>p]:mb-4
            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul>li]:mb-2
            [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-4 [&>ol>li]:mb-2
            [&_strong]:text-text [&_strong]:font-semibold
            [&_a]:text-accent [&_a]:underline [&_a:hover]:text-text
        ">
          <ReactMarkdown>
            {project.caseStudy}
          </ReactMarkdown>
        </div>
      </article>
    </PageWrapper>
  )
}

export default CaseStudy
