import { useRef } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import './App.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'

function HomePage() {
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const skillsRef = useRef(null)
  const blogRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app-wrapper">
      <Navigation scrollToSection={scrollToSection} refs={{ aboutRef, projectsRef, skillsRef, blogRef, contactRef }} />
      <main className="app-main">
        <section id="home">
          <Home scrollToAbout={() => scrollToSection(aboutRef)} scrollToProjects={() => scrollToSection(projectsRef)} scrollToContact={() => scrollToSection(contactRef)} />
        </section>
        <section id="about" ref={aboutRef}>
          <About />
        </section>
        <section id="projects" ref={projectsRef}>
          <Projects />
        </section>
        <section id="skills" ref={skillsRef}>
          <Skills />
        </section>
        <section id="blog" ref={blogRef}>
          <Blog />
        </section>
        <section id="contact" ref={contactRef}>
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<><Navigation scrollToSection={() => {}} refs={{}} /><BlogPost /><Footer /></>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
