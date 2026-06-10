import PageWrapper from '../components/PageWrapper'
import { skills } from '../data/skills'

const Skills = () => {
  return (
    <PageWrapper>
      <section className="pt-28 pb-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Label */}
          <p className="font-mono text-sm text-muted mb-4 tracking-wider">
            // SKILLS & TECHNOLOGIES
          </p>
          <h1 className="font-display text-4xl font-600 text-text mb-12">
            What I work with
          </h1>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {skills.map((category) => (
              <div key={category.category}>
                <h3 className="font-mono text-xs text-muted tracking-widest mb-5 uppercase">
                  // {category.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-surface border border-border text-text text-sm rounded transition-all duration-200 cursor-default hover:border-accent hover:text-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}

export default Skills
