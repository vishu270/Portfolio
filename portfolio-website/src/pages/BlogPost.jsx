import { useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import '../styles/BlogPost.css'

export default function BlogPost() {
  const { id } = useParams()
  const navigate = useNavigate()
  const contentRef = useRef(null)

  // Blog posts data - same as in Blog.jsx
  const blogs = [
    {
      id: 1,
      title: 'Getting Started with GSAP Animations',
      excerpt: 'Learn how to create stunning 3D animations using GSAP. A comprehensive guide from basics to advanced techniques.',
      date: 'Feb 15, 2024',
      category: 'Animation',
      readTime: '8 min read',
      image: 'https://cdn.mos.cms.futurecdn.net/252USFwhUaVeFm664hWzFA.jpg',
      content: 'GSAP (GreenSock Animation Platform) is a powerful JavaScript animation library that allows developers to create smooth, performant animations. Starting with GSAP is easy - begin by understanding the core methods like gsap.to(), gsap.from(), and gsap.fromTo(). These methods enable you to animate CSS properties, DOM elements, and even custom JavaScript objects. As you progress, explore advanced features like timelines, easing functions, and plugins like ScrollTrigger for scroll-based animations. GSAP excels in creating complex, multi-stage animations that would be difficult with CSS alone. With its extensive documentation and active community, GSAP is perfect for developers looking to add professional-grade animations to their projects.'
    },
    {
      id: 2,
      title: 'Building Real-time Applications with React & Firebase',
      excerpt: 'Discover how to build scalable real-time applications using React and Firebase. Perfect for beginners and intermediate developers.',
      date: 'Feb 10, 2024',
      category: 'React',
      readTime: '10 min read',
      image: 'https://external-preview.redd.it/RkoQme9RLo-39gy6W3jEpWdwGD3YmxNmQsMz_AgXox8.jpg?auto=webp&s=4ff71ac1f8688acf94bf292a2ebbb57026b0d8c0',
      content: 'Firebase provides a real-time database and cloud services that integrate seamlessly with React applications. To build real-time apps, start by setting up Firebase authentication for user management. Then, use Firebase Realtime Database or Firestore for storing and syncing data in real-time. React hooks like useEffect and useState work perfectly with Firebase listeners to update your UI whenever data changes. Implement efficient queries to minimize bandwidth usage, and use Firebase security rules to protect your data. Popular patterns include chat applications, collaborative tools, and live dashboards. Firebase also offers hosting, cloud functions, and storage services, making it a complete backend solution for modern React applications.'
    },
    {
      id: 3,
      title: 'MERN Stack Best Practices',
      excerpt: 'Explore the best practices for building full-stack applications with MongoDB, Express, React, and Node.js.',
      date: 'Feb 5, 2024',
      category: 'Backend',
      readTime: '12 min read',
      image: 'https://wallpaperaccess.com/full/8901684.jpg',
      content: 'The MERN stack combines MongoDB, Express, React, and Node.js for full-stack JavaScript development. Best practices include: 1) Separate concerns with clear folder structures (models, controllers, routes, services), 2) Use environment variables for configuration, 3) Implement proper error handling and logging, 4) Write middleware for authentication and validation, 5) Use MongoDB indexes for performance, 6) Implement API versioning for scalability, 7) Use async/await for cleaner asynchronous code, 8) Test thoroughly with unit and integration tests. On the frontend, use React hooks effectively, manage state with Context API or Redux, and optimize performance with code splitting. Follow RESTful API design principles and implement proper caching strategies. Security is paramount - validate all inputs, use HTTPS, implement rate limiting, and keep dependencies updated.'
    },
    {
      id: 4,
      title: 'Mobile Development with Flutter',
      excerpt: 'A deep dive into Flutter development. Learn how to build beautiful cross-platform mobile applications with ease.',
      date: 'Jan 28, 2024',
      category: 'Mobile',
      readTime: '9 min read',
      image: 'https://tse2.mm.bing.net/th/id/OIP.xoyL8SRfMjJYP51fLTxfsQHaDg?rs=1&pid=ImgDetMain&o=7&rm=3',
      content: 'Flutter, built on Dart, enables developers to create beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. Flutter\'s hot reload feature accelerates development by reflecting code changes instantly without full restarts. The widget-based architecture makes UI development intuitive - everything in Flutter is a widget. Material Design and Cupertino widgets provide platform-specific aesthetics. Use Provider or Riverpod for state management, and leverage Firebase for backend services. Flutter\'s strong performance comes from Dart compilation to native code. With extensive packages available through pub.dev, you can quickly add features like maps, camera access, and local storage. The active community ensures ample tutorials and support for developers at all levels.'
    },
    {
      id: 5,
      title: 'Performance Optimization Tips for React Apps',
      excerpt: 'Optimize your React applications for better performance. Learn about lazy loading, memoization, and code splitting.',
      date: 'Jan 20, 2024',
      category: 'Performance',
      readTime: '11 min read',
      image: 'https://tse2.mm.bing.net/th/id/OIP.Y4f_U4tU68h9AP0X7mDlwQHaDv?rs=1&pid=ImgDetMain&o=7&rm=3',
      content: 'React performance optimization requires a multi-faceted approach. Start with React.memo for preventing unnecessary re-renders of functional components. Use useMemo and useCallback to memoize expensive computations and callbacks. Implement code splitting with React.lazy and Suspense to load components only when needed. Monitor your app with React DevTools Profiler to identify performance bottlenecks. Use virtualization for long lists with libraries like react-window. Optimize images with appropriate formats and sizes. Implement proper key strategies in lists to help React identify which items have changed. Use production builds for deployment to enable tree-shaking and minification. Consider using Web Workers for heavy computations. Profile bundle size with tools like webpack-bundle-analyzer and eliminate unused dependencies. These practices ensure your React applications remain fast and responsive even as they grow in complexity.'
    },
    {
      id: 6,
      title: 'Web Design Trends in 2024',
      excerpt: 'Explore the latest web design trends and techniques that are shaping the future of web development.',
      date: 'Jan 15, 2024',
      category: 'Design',
      readTime: '7 min read',
      image: 'https://www.onlineinnovations.com/images/cmsimages/big/news-124-575-article_image.png',
      content: 'Web design in 2024 emphasizes user experience, accessibility, and performance. Key trends include: 1) Minimalist design with plenty of whitespace, 2) Dark mode as a standard feature, 3) Micro-interactions for enhanced user engagement, 4) Variable fonts for better typography control, 5) Glassmorphism and neumorphism for modern aesthetics, 6) AI-powered personalization, 7) Enhanced accessibility features (WCAG compliance), 8) Mobile-first responsive design. Performance remains critical - Core Web Vitals directly impact SEO rankings. Animations should be purposeful and performant, not distracting. Color psychology influences user behavior and brand perception. Consistency across all devices ensures a seamless experience. Voice interfaces are becoming increasingly important. Designers now work closely with developers to ensure designs are implementable and performant. Staying updated with these trends helps create websites that are not only beautiful but also effective at converting users.'
    }
  ]

  const blog = blogs.find(b => b.id === parseInt(id))

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

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0)

    // Animate content
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
    }
  }, [id])

  if (!blog) {
    return (
      <section className="blog-post-section">
        <div className="container">
          <div className="not-found">
            <h2>Blog Post Not Found</h2>
            <p>Sorry, the blog post you're looking for doesn't exist.</p>
            <button className="btn btn-primary" onClick={() => navigate('/#blog')}>
              Back to Blog
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="blog-post-section" ref={contentRef}>
      <div className="container">
        <button className="back-btn" onClick={() => navigate('/#blog')}>
          ← Back to Blog
        </button>

        <article className="blog-post-container">
          <div className="post-header">
            <div className="post-meta">
              <div
                className="post-category"
                style={{ backgroundColor: getCategoryColor(blog.category) }}
              >
                {blog.category}
              </div>
              <span className="post-date">{blog.date}</span>
              <span className="post-read-time">{blog.readTime}</span>
            </div>

            <h1 className="post-title">{blog.title}</h1>

            <div className="post-featured">
              <div className="featured-placeholder">
                {blog.image ? (
                  <img src={blog.image} alt={blog.title} />
                ) : (
                  <>Image of {blog.title.split(' ')[0]}</>
                )}
              </div>
            </div>
          </div>

          <div className="post-content">
            <p>{blog.content}</p>

            <div className="post-footer">
              <div className="related-posts">
                <h3>More Articles</h3>
                <div className="related-links">
                  {blogs
                    .filter(b => b.id !== blog.id && b.category === blog.category)
                    .slice(0, 2)
                    .map(relatedBlog => (
                      <button
                        key={relatedBlog.id}
                        className="related-link"
                        onClick={() => navigate(`/blog/${relatedBlog.id}`)}
                      >
                        {relatedBlog.title}
                        <span className="arrow">→</span>
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
