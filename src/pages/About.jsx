import PageWrapper from '../components/PageWrapper'

const stats = [
  { value: '30+', label: 'Projects Completed' },
  { value: '4+', label: 'Years Experience' },
  { value: '10+', label: 'Happy Clients' },
]

const About = () => {
  return (
    <PageWrapper>
      <section className="pt-28 pb-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Label */}
          <p className="font-mono text-sm text-muted mb-12 tracking-wider">
            ABOUT
          </p>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Photo */}
            <div>
              <div className="border-border rounded-sm overflow-hidden">
                <img
                  src="/Mark5.jpg"
                  alt="Mark Okafor — Full-Stack & Mobile Developer"
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-8">
              <div>
                <h1 className="font-display text-4xl font-600 text-text mb-6">
                  Full-Stack & Mobile Developer
                </h1>
                <p className="text-muted leading-relaxed mb-4">
                  I'm a passionate full-stack and mobile developer with over 4 years of
                  experience building web and mobile applications. I love turning complex
                  problems into simple, beautiful, and intuitive solutions — whether it's
                  a responsive website or a native mobile app.
                </p>
                <p className="text-muted leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies,
                  contributing to open-source projects, or sharing my knowledge through
                  blog posts and mentoring.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-6 border-t border-b border-border">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <span className="block font-display text-3xl font-600 text-accent">
                      {stat.value}
                    </span>
                    <span className="text-sm text-muted mt-1 block">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Currently */}
              <div>
                <h3 className="font-mono text-sm text-muted tracking-wider mb-3">
                  CURRENTLY
                </h3>
                <p className="text-text leading-relaxed">
                  Constantly building, learning, and levelling up my skills across the
                  <span className="text-accent"> full-stack & mobile</span> landscape.
                  I'm always an open learner — eager to explore new technologies, take on
                  fresh challenges, and collaborate on meaningful projects. Open to
                  freelance work, team projects, and exciting partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}

export default About
