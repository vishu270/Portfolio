import { useEffect } from 'react'
import { gsap } from 'gsap'
import './ResumeDownload.css'

export default function ResumeDownload() {
  useEffect(() => {
    // Animate resume section on load
    const resumeSection = document.querySelector('.resume-download-section')
    if (resumeSection) {
      gsap.fromTo(
        resumeSection,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out'
        }
      )
    }
  }, [])

  return (
    <section className="resume-download-section">
      <div className="resume-container">
        <div className="resume-content">
          <h2>Download My Resume</h2>
          <p>Get my complete resume to learn more about my skills, experience, and projects</p>
          <a href="/resume.pdf" download="Vishal-Chauhan-Resume.pdf" className="resume-download-btn">
            📄 Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
