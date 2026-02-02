import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/Skills.css'

gsap.registerPlugin(ScrollTrigger)

export default function Skills() {
  const sectionRef = useRef(null)

  useEffect(() => {
    // Progress bars visible immediately without animation
  }, [])

  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 90, icon: '⚛️' },
        { name: 'JavaScript', level: 85, icon: '📜' },
        { name: 'HTML/CSS', level: 90, icon: '🎨' },
        { name: 'Bootstrap', level: 85, icon: '🛠️' }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 85, icon: '🟢' },
        { name: 'Express', level: 85, icon: '⚡' },
        { name: 'MongoDB', level: 80, icon: '🍃' }
      ]
    },
    {
      category: 'Other Languages',
      skills: [
        { name: 'C', level: 75, icon: '📝' },
        { name: 'Flutter', level: 75, icon: '📱' },
        { name: 'SQL', level: 80, icon: '💾' }
      ]
    },
    {
      category: 'Tools & Technologies',
      skills: [
        { name: 'Git/GitHub', level: 85, icon: '🔀' },
        { name: 'Figma', level: 70, icon: '✏️' },
        { name: 'Postman', level: 85, icon: '🚀' }
      ]
    }
  ]

  return (
    <section className="skills-section section-padding" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>

        <div className="skills-intro">
          <p>I have a comprehensive skill set spanning full-stack development with modern technologies and frameworks.</p>
        </div>

        <div className="skills-container">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="skill-card">
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <div className="skill-info">
                        <h4>{skill.name}</h4>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="progress-container">
                      <div 
                        className="progress-bar" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-highlight">
          <h3>Tech Stack Highlights</h3>
          <div className="tech-stack">
            <div className="stack-item mern">
              <h4>MERN Stack</h4>
              <p>MongoDB • Express • React • Node.js</p>
            </div>
            <div className="stack-item frontend">
              <h4>Frontend</h4>
              <p>React • GSAP • Bootstrap • CSS3</p>
            </div>
            <div className="stack-item backend">
              <h4>Backend</h4>
              <p>Node.js • Express • MongoDB • Firebase</p>
            </div>
            <div className="stack-item mobile">
              <h4>Mobile</h4>
              <p>Flutter • Dart • Cross-platform</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
