import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/Projects.css'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    // Scroll animations for Projects section
    const projectCards = document.querySelectorAll('.project-card')
    const sectionTitle = document.querySelector('.projects-section .section-title')

    // Animate section title
    if (sectionTitle) {
      gsap.fromTo(
        sectionTitle,
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: 'top 30%',
            scrub: 1
          }
        }
      )
    }

    // Animate project cards with stagger
    projectCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          delay: index * 0.15,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 1
          }
        }
      )
    })
  }, [])

  const projects = [
    {
      id: 1,
      title: 'Women Safety App',
      description: 'A comprehensive safety application that helps women stay secure with emergency alerts, real-time location sharing, and community support features.',
      tech: ['React', 'Node.js', 'MongoDB', 'Firebase'],
      color: '#667eea',
      image: 'https://miro.medium.com/v2/resize:fit:735/0*upPAQZE09Wm2MZjk.jpeg',
      link: 'https://sanrakshak-frontend.onrender.com/'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A showcase portfolio with 3D animations, smooth scrolling, and interactive elements to demonstrate web development skills.',
      tech: ['React', 'GSAP', 'Bootstrap', 'CSS'],
      color: '#764ba2',
      image: 'https://cdn.dribbble.com/users/23155/screenshots/303611/media/8cca14a9cddf56f3667e1a7097384219.jpg?resize=400x0',
      link: '/'
    },
    {
      id: 3,
      title: 'Food Reel',
      description: 'Social platform for food lovers featuring recipe sharing, restaurant reviews, and a community feed for culinary enthusiasts.',
      tech: ['React', 'Node.js', 'MongoDB', 'Redux'],
      color: '#f093fb',
      image: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg',
      link: 'https://foodreel-frontend.onrender.com/'
    },
    {
      id: 4,
      title: 'Weather App (Flutter)',
      description: 'Beautiful weather application built with Flutter offering real-time weather updates, forecasts, and interactive maps.',
      tech: ['Flutter', 'Dart', 'Weather API', 'Maps'],
      color: '#667eea',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQHO1KHuVJQgyEEfkNr8JfdD7sacQHUPEfHQ&s',
      link: 'https://github.com/vishu270/weather-app'
    }
  ]

  return (
    <section className="projects-section section-padding" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card" style={{ '--project-color': project.color }}>
              <div
                className="project-image"
                style={{
                  backgroundImage: project.image ? `url(${project.image})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
                role="img"
                aria-label={project.title}
              ></div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <button
                  className="project-btn"
                  onClick={() => {
                    if (project.link) window.open(project.link, project.link === '/' ? '_self' : '_blank')
                  }}
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
