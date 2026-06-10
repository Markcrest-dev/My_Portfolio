import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'

const NotFound = () => {
  return (
    <PageWrapper>
      <section className="min-h-[80dvh] flex flex-col justify-center items-center px-6 text-center">
        <h1 className="font-display text-8xl md:text-9xl font-bold text-accent mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-text mb-6">
          Page Not Found
        </h2>
        <p className="text-muted max-w-md mb-10">
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 border border-accent text-accent font-medium text-sm px-8 py-3 rounded transition-all duration-300 hover:bg-accent hover:text-bg"
        >
          Return Home
        </Link>
      </section>
    </PageWrapper>
  )
}

export default NotFound
