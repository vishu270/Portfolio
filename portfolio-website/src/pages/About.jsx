import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/About.css'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    // Scroll animations for About section
    const contentElements = document.querySelectorAll('.about-content-text p, .about-content-text h3')
    const timelineItems = document.querySelectorAll('.timeline-item')
    const aboutImage = document.querySelector('.about-image-wrapper')

    // Animate about image
    if (aboutImage) {
      gsap.fromTo(
        aboutImage,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: 'center center',
            scrub: 1
          }
        }
      )
    }

    // Animate content text
    contentElements.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: 'center center',
            scrub: 1
          }
        }
      )
    })

    // Animate timeline items
    timelineItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.15,
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1
          }
        }
      )
    })
  }, [])

  return (
    <section className="about-section section-padding" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title about-title">About Me</h2>

        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-image-wrapper">
              <div className="about-image glass">
                <img src="/src/assets/profile.png" alt="Vishal Chauhan" />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-content-text" ref={contentRef}>
              <h3>Who Am I?</h3>
              <p>
                I'm Vishal Chauhan, a passionate full-stack developer with expertise in the MERN stack (MongoDB, Express, React, Node.js). With a keen eye for design and a love for creating seamless digital experiences, I craft solutions that solve problems and delight users.
              </p>
              <p>
                My journey in tech started with curiosity about how things work, which evolved into a career dedicated to building impactful applications. I specialize in creating responsive web applications, beautiful UIs, and robust backend systems. I also have hands-on experience with C programming and Flutter for mobile development.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I'm always eager to learn, collaborate, and create innovative solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="timeline">
          <h3>My Journey</h3>
          <div className="timeline-items">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>2024 - Internship at Compozent</h4>
                <p>Interned at Compozent, working on Flutter & Dart mobile development. Gained hands-on experience building cross-platform applications with modern mobile technologies.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>2025 - Internship at House IoT</h4>
                <p>Completed internship at House IoT, working on IoT solutions and smart home technologies. Expanded my knowledge in embedded systems and connected devices.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>2026 - Full-Stack Development</h4>
                <p>Deepened expertise in MERN stack (MongoDB, Express, React, Node.js) and focused on building robust web applications.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>2027 - Professional Growth</h4>
                <p>Leveraging internship experience and technical skills to work on innovative projects and contribute to the tech community.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
