import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/Blog.css'

gsap.registerPlugin(ScrollTrigger)

export default function Blog() {
  const sectionRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    // Scroll animations for Blog section
    const blogCards = document.querySelectorAll('.blog-card')
    const sectionTitle = document.querySelector('.blog-section .section-title')

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

    // Animate blog cards with stagger
    blogCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
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

  const blogs = [
    {
      id: 1,
      title: 'Getting Started with GSAP Animations',
      excerpt: 'Learn how to create stunning 3D animations using GSAP. A comprehensive guide from basics to advanced techniques.',
      date: 'Feb 15, 2024',
      category: 'Animation',
      readTime: '8 min read',
      content: 'GSAP (GreenSock Animation Platform) is a powerful JavaScript animation library that allows developers to create smooth, performant animations. Starting with GSAP is easy - begin by understanding the core methods like gsap.to(), gsap.from(), and gsap.fromTo(). These methods enable you to animate CSS properties, DOM elements, and even custom JavaScript objects. As you progress, explore advanced features like timelines, easing functions, and plugins like ScrollTrigger for scroll-based animations. GSAP excels in creating complex, multi-stage animations that would be difficult with CSS alone. With its extensive documentation and active community, GSAP is perfect for developers looking to add professional-grade animations to their projects.'
    },
    {
      id: 2,
      title: 'Building Real-time Applications with React & Firebase',
      excerpt: 'Discover how to build scalable real-time applications using React and Firebase. Perfect for beginners and intermediate developers.',
      date: 'Feb 10, 2024',
      category: 'React',
      readTime: '10 min read',
      content: 'Firebase provides a real-time database and cloud services that integrate seamlessly with React applications. To build real-time apps, start by setting up Firebase authentication for user management. Then, use Firebase Realtime Database or Firestore for storing and syncing data in real-time. React hooks like useEffect and useState work perfectly with Firebase listeners to update your UI whenever data changes. Implement efficient queries to minimize bandwidth usage, and use Firebase security rules to protect your data. Popular patterns include chat applications, collaborative tools, and live dashboards. Firebase also offers hosting, cloud functions, and storage services, making it a complete backend solution for modern React applications.'
    },
    {
      id: 3,
      title: 'MERN Stack Best Practices',
      excerpt: 'Explore the best practices for building full-stack applications with MongoDB, Express, React, and Node.js.',
      date: 'Feb 5, 2024',
      category: 'Backend',
      readTime: '12 min read',
      content: 'The MERN stack combines MongoDB, Express, React, and Node.js for full-stack JavaScript development. Best practices include: 1) Separate concerns with clear folder structures (models, controllers, routes, services), 2) Use environment variables for configuration, 3) Implement proper error handling and logging, 4) Write middleware for authentication and validation, 5) Use MongoDB indexes for performance, 6) Implement API versioning for scalability, 7) Use async/await for cleaner asynchronous code, 8) Test thoroughly with unit and integration tests. On the frontend, use React hooks effectively, manage state with Context API or Redux, and optimize performance with code splitting. Follow RESTful API design principles and implement proper caching strategies. Security is paramount - validate all inputs, use HTTPS, implement rate limiting, and keep dependencies updated.'
    },
    {
      id: 4,
      title: 'Mobile Development with Flutter',
      excerpt: 'A deep dive into Flutter development. Learn how to build beautiful cross-platform mobile applications with ease.',
      date: 'Jan 28, 2024',
      category: 'Mobile',
      readTime: '9 min read',
      content: 'Flutter, built on Dart, enables developers to create beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. Flutter\'s hot reload feature accelerates development by reflecting code changes instantly without full restarts. The widget-based architecture makes UI development intuitive - everything in Flutter is a widget. Material Design and Cupertino widgets provide platform-specific aesthetics. Use Provider or Riverpod for state management, and leverage Firebase for backend services. Flutter\'s strong performance comes from Dart compilation to native code. With extensive packages available through pub.dev, you can quickly add features like maps, camera access, and local storage. The active community ensures ample tutorials and support for developers at all levels.'
    },
    {
      id: 5,
      title: 'Performance Optimization Tips for React Apps',
      excerpt: 'Optimize your React applications for better performance. Learn about lazy loading, memoization, and code splitting.',
      date: 'Jan 20, 2024',
      category: 'Performance',
      readTime: '11 min read',
      content: 'React performance optimization requires a multi-faceted approach. Start with React.memo for preventing unnecessary re-renders of functional components. Use useMemo and useCallback to memoize expensive computations and callbacks. Implement code splitting with React.lazy and Suspense to load components only when needed. Monitor your app with React DevTools Profiler to identify performance bottlenecks. Use virtualization for long lists with libraries like react-window. Optimize images with appropriate formats and sizes. Implement proper key strategies in lists to help React identify which items have changed. Use production builds for deployment to enable tree-shaking and minification. Consider using Web Workers for heavy computations. Profile bundle size with tools like webpack-bundle-analyzer and eliminate unused dependencies. These practices ensure your React applications remain fast and responsive even as they grow in complexity.'
    },
    {
      id: 6,
      title: 'Web Design Trends in 2024',
      excerpt: 'Explore the latest web design trends and techniques that are shaping the future of web development.',
      date: 'Jan 15, 2024',
      category: 'Design',
      readTime: '7 min read',
      content: 'Web design in 2024 emphasizes user experience, accessibility, and performance. Key trends include: 1) Minimalist design with plenty of whitespace, 2) Dark mode as a standard feature, 3) Micro-interactions for enhanced user engagement, 4) Variable fonts for better typography control, 5) Glassmorphism and neumorphism for modern aesthetics, 6) AI-powered personalization, 7) Enhanced accessibility features (WCAG compliance), 8) Mobile-first responsive design. Performance remains critical - Core Web Vitals directly impact SEO rankings. Animations should be purposeful and performant, not distracting. Color psychology influences user behavior and brand perception. Consistency across all devices ensures a seamless experience. Voice interfaces are becoming increasingly important. Designers now work closely with developers to ensure designs are implementable and performant. Staying updated with these trends helps create websites that are not only beautiful but also effective at converting users.'
    }
  ]

  const getCategoryColor = (category) => {
    const colors = {
      'Animation': '#667eea',
      'React': '#764ba2',
      'Backend': '#f093fb',
      'Mobile': '#667eea',
      'Performance': '#764ba2',
      'Design': '#f093fb'
    }
    return colors[category] || '#667eea'
  }

  return (
    <section className="blog-section section-padding" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Latest Blog Posts</h2>

        <div className="blog-intro">
          <p>Stay updated with my latest articles on web development, design, and technology trends.</p>
        </div>

        <div className="blog-grid">
          {blogs.map((blog) => (
            <article key={blog.id} className="blog-card">
              <div className="blog-header">
                <div 
                  className="blog-category" 
                  style={{ backgroundColor: getCategoryColor(blog.category) }}
                >
                  {blog.category}
                </div>
                <span className="blog-date">{blog.date}</span>
              </div>

              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-excerpt">{blog.excerpt}</p>

              <div className="blog-footer">
                <span className="read-time">{blog.readTime}</span>
                <button 
                  className="read-btn"
                  onClick={() => navigate(`/blog/${blog.id}`)}
                >
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-cta">
          <h3>Subscribe to My Newsletter</h3>
          <p>Get the latest posts delivered right to your inbox</p>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email" 
              required
            />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  )
}
