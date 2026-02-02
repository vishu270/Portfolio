import { useEffect } from 'react'
import { gsap } from 'gsap'
import './Footer.css'

export default function Footer() {
  useEffect(() => {
    // No animations - footer visible immediately
  }, [])

  const currentYear = new Date().getFullYear()

  const handleNavClick = (e, hash) => {
    e.preventDefault()
    const element = document.querySelector(hash)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = hash
    }
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <h5>Quick Links</h5>
              <ul>
                <li><a href="#home" onClick={(e) => handleNavClick(e, '#home')}>Home</a></li>
                <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a></li>
                <li><a href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>Projects</a></li>
                <li><a href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>Skills</a></li>
              </ul>
            </div>
            <div className="col-md-4 mb-4">
              <h5>Connect With Me</h5>
              <div className="social-links">
                <a href="https://github.com/vishu270" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/vishal-chauhan-71a696313/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="mailto:vishalchauhan270724@gmail.com">Email</a>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <h5>Contact</h5>
              <p>Email: <a href="mailto:vishalchauhan270724@gmail.com">vishalchauhan270724@gmail.com</a></p>
              <p>Phone: <a href="tel:+919324696429">+91 9324696429</a></p>
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
