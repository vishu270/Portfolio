import { useEffect } from 'react'
import { gsap } from 'gsap'
import './Footer.css'

export default function Footer() {
  useEffect(() => {
    // No animations - footer visible immediately
  }, [])

  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <h5>Quick Links</h5>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/skills">Skills</a></li>
              </ul>
            </div>
            <div className="col-md-4 mb-4">
              <h5>Connect With Me</h5>
              <div className="social-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <h5>Contact</h5>
              <p>Email: vishal@example.com</p>
              <p>Phone: +91 (98765) 43210</p>
            </div>
          </div>
          <hr className="footer-divider" />
          <div className="footer-bottom">
            <p>&copy; {currentYear} All Rights Reserved. Designed & Developed with ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
