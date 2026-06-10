import { Download } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import { summary, qualities, experience, education } from '../data/resume'
import { skills } from '../data/skills'

const Resume = () => {
  return (
    <PageWrapper>
      <section className="pt-28 pb-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header & Download Button */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="font-mono text-sm text-muted mb-4 tracking-wider">
                RESUME
              </p>
              <h1 className="font-display text-4xl font-600 text-text">
                Experience & Education
              </h1>
            </div>
            
            <a
              href="/Mark_Okafor_Resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 bg-accent text-bg font-medium text-sm px-6 py-3 rounded transition-all duration-200 hover:brightness-110 shrink-0"
            >
              Download PDF
              <Download size={16} />
            </a>
          </div>

          <div className="space-y-20">
            {/* Professional Summary */}
            <div>
              <h2 className="font-display text-2xl font-500 text-text mb-8 border-b border-border pb-4">
                Professional Summary
              </h2>
              <div className="space-y-6 text-muted leading-relaxed">
                <p>{summary}</p>
                <p>{qualities}</p>
              </div>
            </div>

            {/* Experience Section */}
            <div>
              <h2 className="font-display text-2xl font-500 text-text mb-8 border-b border-border pb-4">
                Work Experience
              </h2>
              <div className="space-y-12">
                {experience.map((item) => (
                  <div key={item.id} className="relative pl-8 md:pl-0">
                    {/* Timeline dot (visible on mobile) */}
                    <div className="md:hidden absolute left-0 top-1.5 w-3 h-3 rounded-full bg-accent" />
                    
                    <div className="grid md:grid-cols-[1fr_3fr] gap-4 md:gap-8">
                      <div className="text-muted text-sm font-mono mt-1">
                        {item.duration}
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-text mb-1">{item.role}</h3>
                        <div className="text-accent mb-4">{item.company}</div>
                        <p className="text-muted leading-relaxed mb-4">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech) => (
                            <span key={tech} className="text-xs font-mono text-muted bg-surface px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <h2 className="font-display text-2xl font-500 text-text mb-8 border-b border-border pb-4">
                Education
              </h2>
              <div className="space-y-12">
                {education.map((item) => (
                  <div key={item.id} className="grid md:grid-cols-[1fr_3fr] gap-4 md:gap-8">
                    <div className="text-muted text-sm font-mono mt-1">
                      {item.duration}
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-text mb-1">{item.degree}</h3>
                      <div className="text-accent mb-4">{item.institution}</div>
                      <p className="text-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Section (Summary) */}
            <div>
              <h2 className="font-display text-2xl font-500 text-text mb-8 border-b border-border pb-4">
                Core Skills
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {skills.map((category) => (
                  <div key={category.category} className="bg-surface border border-border p-5 rounded hover:border-accent transition-colors duration-300">
                    <h3 className="text-sm font-medium text-text mb-3">{category.category}</h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {category.items.join(' • ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </PageWrapper>
  )
}

export default Resume
