import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
]

const socialLinks = [
  {
    href: 'https://github.com/Markcrest-dev',
    icon: GithubIcon,
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/mark-40aty5',
    icon: LinkedinIcon,
    label: 'LinkedIn',
  },
  {
    href: 'mailto:cokafor169@gmail.com',
    icon: Mail,
    label: 'Email',
  },
]

const Footer = () => {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <Link to="/" className="text-lg font-display font-medium text-accent">
            Macrest
          </Link>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-text transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Mark Okafor — Available for remote work
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
