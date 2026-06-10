import { Mail, Phone, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/Icons'
import PageWrapper from '../components/PageWrapper'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'cokafor169@gmail.com',
    href: 'mailto:cokafor169@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+234 816 468 5389',
    href: 'tel:+2348164685389',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Lagos, Nigeria',
    href: null,
  },
]

const socialLinks = [
  {
    icon: GithubIcon,
    label: 'GitHub',
    href: 'https://github.com/Markcrest-dev',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mark-40aty5',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:cokafor169@gmail.com',
  },
]

const Contact = () => {
  return (
    <PageWrapper>
      <section className="pt-28 pb-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Label */}
          <p className="font-mono text-sm text-muted mb-4 tracking-wider">
             CONTACT
          </p>
          <h1 className="font-display text-4xl font-600 text-text mb-12">
            Get in touch
          </h1>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                {contactInfo.map((item) => {
                  const content = (
                    <div className="flex items-center gap-4 group" key={item.label}>
                      <div className="p-3 rounded border border-border text-muted group-hover:border-accent group-hover:text-accent transition-all duration-200">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-muted uppercase tracking-wider font-mono">
                          {item.label}
                        </p>
                        <p className="text-text text-sm mt-0.5">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  )

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block hover:translate-x-1 transition-transform duration-200"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  )
                })}
              </div>

              {/* Social Links */}
              <div>
                <p className="font-mono text-xs text-muted tracking-wider uppercase mb-4">
                  SOCIALS
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded text-muted hover:border-accent hover:text-accent transition-all duration-200"
                      aria-label={social.label}
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column — Message */}
            <div className="bg-surface border border-border rounded p-8">
              <h3 className="font-display text-xl font-medium text-text mb-4">
                Let's work together
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                I'm always interested in new opportunities and exciting projects.
                Whether you need a full-stack web application, a mobile app, or
                UI/UX design work — I'd love to hear about it.
              </p>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Based in Nigeria and available for remote work worldwide.
                Let's build something great.
              </p>
              <a
                href="mailto:cokafor169@gmail.com"
                className="inline-flex items-center gap-2 bg-accent text-bg font-medium text-sm px-6 py-3 rounded transition-all duration-200 hover:brightness-110"
              >
                <Mail size={16} />
                Send me an email
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}

export default Contact
