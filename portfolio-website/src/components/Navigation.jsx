import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import './Navigation.css'

export default function Navigation({ scrollToSection, refs }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // No animations - navigation visible immediately
  }, [])

  const handleNavClick = (ref) => {
    setIsOpen(false)
    if (!ref) {
      // Scroll to top/home
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (scrollToSection && ref) {
      scrollToSection(ref)
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container-fluid px-4">
        <a className="navbar-brand" href="#home" onClick={(e) => { e.preventDefault(); handleNavClick(null) }}>
          {/* <span className="brand-icon">{'<'}</span> */}
          <span className="gradient-text">Vishal Portfolio</span>
          {/* <span className="brand-icon">{'/>'}</span> */}
        </a>
        <button 
          className="navbar-toggler" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={(e) => { e.preventDefault(); handleNavClick(null) }}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={(e) => { e.preventDefault(); handleNavClick(refs?.aboutRef) }}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={(e) => { e.preventDefault(); handleNavClick(refs?.projectsRef) }}>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills" onClick={(e) => { e.preventDefault(); handleNavClick(refs?.skillsRef) }}>
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#blog" onClick={(e) => { e.preventDefault(); handleNavClick(refs?.blogRef) }}>
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick(refs?.contactRef) }}>
                Contact
              </a>
            </li>
          </ul>
          <div className="social-links">
            <a
              className="social-link"
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0.297c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.304-5.467-1.332-5.467-5.931 0-1.31.468-2.381 1.235-3.221-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.98-.399 3-.405 1.02.006 2.043.139 3 .405 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.12 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.807 5.624-5.48 5.921.43.372.814 1.102.814 2.222 0 1.606-.015 2.901-.015 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>

            <a
              className="social-link"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.039-1.852-3.039-1.853 0-2.136 1.445-2.136 2.939v5.669h-3.554V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.369-1.85 3.602 0 4.268 2.37 4.268 5.455v6.286zM5.337 7.433c-1.144 0-2.069-.927-2.069-2.069 0-1.144.925-2.069 2.069-2.069 1.144 0 2.069.925 2.069 2.069 0 1.142-.925 2.069-2.069 2.069zM6.941 20.452H3.734V9h3.207v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.726v20.543C0 23.23.792 24 1.771 24h20.451C23.2 24 24 23.23 24 22.269V1.726C24 .771 23.2 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
