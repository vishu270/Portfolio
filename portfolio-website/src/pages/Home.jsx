import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/Home.css'
import profileImage from '../assets/profile1.png'

gsap.registerPlugin(ScrollTrigger)

export default function Home({ scrollToAbout, scrollToProjects, scrollToContact }) {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)
  const cubeRef = useRef(null)

  useEffect(() => {
    // No animations - all content visible immediately
    // Cube floating animation only (non-intrusive)
    if (cubeRef.current) {
      gsap.to(cubeRef.current, {
        y: -30,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut'
      })

      // Rotating cube animation
      gsap.to(cubeRef.current, {
        rotationX: 360,
        rotationY: 360,
        duration: 20,
        repeat: -1,
        ease: 'none'
      })
    }

    // Mouse movement parallax
    const handleMouseMove = (e) => {
      if (!cubeRef.current) return
      const { clientX, clientY } = e
      const moveX = (clientX - window.innerWidth / 2) * 0.02
      const moveY = (clientY - window.innerHeight / 2) * 0.02

      gsap.to(cubeRef.current, {
        x: moveX,
        y: moveY,
        duration: 0.3,
        overwrite: 'auto'
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="animated-gradient"></div>
        <div className="stars"></div>
      </div>

      <div className="hero-content">
        <div className="row align-items-center">
          <div className="col-lg-6 hero-text">
            <h1 ref={titleRef} className="hero-title">
              Hey, I'm <span className="gradient-text">Vishal Chauhan</span>
            </h1>
            <p ref={subtitleRef} className="hero-subtitle">
              A passionate Full-Stack MERN Developer & UI/UX Designer crafting beautiful, functional web experiences with cutting-edge technologies. Specialized in React, Node.js, MongoDB, and creating stunning user interfaces.
            </p>
            <div ref={ctaRef} className="cta-buttons">
              <button
                className="cta-btn btn btn-primary"
                onClick={() => {
                  if (typeof scrollToProjects === 'function') {
                    scrollToProjects()
                  } else {
                    window.location.href = '/#projects'
                  }
                }}
              >
                View My Work
              </button>

              <button
                className="cta-btn btn btn-outline-primary"
                onClick={() => {
                  if (typeof scrollToContact === 'function') {
                    scrollToContact()
                  } else {
                    window.location.href = '/#contact'
                  }
                }}
              >
                Get In Touch
              </button>
            </div>
            
            <div className="social-icons-hero" style={{marginTop:"30px"}}>
              <a
                className="social-icon-btn"
                href="https://github.com/vishu270"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M12 0.297C5.37 0.297 0 5.667 0 12.297c0 5.292 3.438 9.788 8.205 11.387.6.111.82-.261.82-.579 0-.287-.011-1.244-.017-2.25-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.809 1.304 3.494.997.108-.775.419-1.304.762-1.604-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.235-3.221-.124-.303-.535-1.526.117-3.176 0 0 1.008-.322 3.3 1.23a11.47 11.47 0 013.003-.404c1.018.005 2.043.137 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.654 1.65.243 2.873.12 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.804 5.622-5.475 5.921.43.372.814 1.103.814 2.222 0 1.604-.015 2.896-.015 3.29 0 .321.216.694.825.576C20.565 22.08 24 17.584 24 12.297c0-6.63-5.373-12-12-12"/>
                </svg>
              </a>

              <a
              style={{marginLeft:"15px"}}
                className="social-icon-btn"
                href="https://www.linkedin.com/in/vishal-chauhan-71a696313/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.036-1.849-3.036-1.85 0-2.133 1.445-2.133 2.94v5.665H9.356V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.369-1.849 3.603 0 4.269 2.372 4.269 5.455v6.285zM5.337 7.433a2.062 2.062 0 11.001-4.125 2.062 2.062 0 01-.001 4.125zM6.935 20.452H3.74V9h3.195v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="col-lg-6 hero-3d">
            <div className="cube-container">
              <div ref={cubeRef} className="cube">
                <div className="cube-face face-1 profile-face">
                  <div className="face-inner">
                    <img 
                      src={profileImage} 
                      alt="Vishal Chauhan Profile" 
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
                <div className="cube-face face-2 profile-face">
                  <div className="face-inner">
                    <img 
                      src={profileImage} 
                      alt="Vishal Chauhan Profile" 
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
                <div className="cube-face face-3 profile-face">
                  <div className="face-inner">
                    <img 
                      src={profileImage} 
                      alt="Vishal Chauhan Profile" 
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
                <div className="cube-face face-4 profile-face">
                  <div className="face-inner">
                    <img 
                      src={profileImage} 
                      alt="Vishal Chauhan Profile" 
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
                <div className="cube-face face-5 profile-face">
                  <div className="face-inner">
                    <img 
                      src={profileImage} 
                      alt="Vishal Chauhan Profile" 
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
                <div className="cube-face face-6 profile-face">
                  <div className="face-inner">
                    <img 
                      src={profileImage} 
                      alt="Vishal Chauhan Profile" 
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll to explore</p>
      </div>
    </section>
  )
}
