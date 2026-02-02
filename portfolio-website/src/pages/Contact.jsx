import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import emailjs from '@emailjs/browser'
import '../styles/Contact.css'

gsap.registerPlugin(ScrollTrigger)

// NOTE: To enable sending emails from the contact form you must create
// an EmailJS account (https://www.emailjs.com/) and obtain the following
// identifiers. Replace the placeholders below with your own values.
// Vite exposes client env vars via import.meta.env and they must be prefixed with VITE_
// NOTE: we intentionally do NOT read the env values here with fallbacks, to avoid
// accidentally considering placeholder defaults as valid. The real values will be
// read at runtime inside handleSubmit so we can reliably detect missing keys.

export default function Contact() {
  const sectionRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  useEffect(() => {
    // No animations - all content visible immediately
    // Initialize EmailJS if public key is available so errors are easier to diagnose
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    if (PUBLIC_KEY) {
      try {
        emailjs.init(PUBLIC_KEY)
        // eslint-disable-next-line no-console
        console.log('EmailJS initialized')
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('Failed to initialize EmailJS', err)
      }
    } else {
      // eslint-disable-next-line no-console
      console.log('EmailJS public key not found in import.meta.env')
    }
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Use EmailJS to send the form content to your email address.
    // Ensure you have configured the VITE_EMAILJS_* env vars (see README).

    // Read env vars at runtime (Vite exposes them on import.meta.env)
    const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    // Runtime guard: only check if any key is missing/empty
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      alert('Email service not configured. Please contact vishalchauhan270724@gmail.com directly.')
      return
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'vishalchauhan270724@gmail.com'
    }

    setSending(true)
    try {
      // send; emailjs.init was attempted in useEffect above
      const result = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      // eslint-disable-next-line no-console
      console.log('EmailJS send result:', result)
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 3500)
    } catch (err) {
      // Provide more detailed feedback for debugging
      // eslint-disable-next-line no-console
      console.error('EmailJS error:', err)
      const msg = err && (err.text || err.message || err.status)
      alert('There was an error sending your message. ' + (msg ? `Server response: ${msg}. ` : '') + 'Please try again or email vishalchauhan270724@gmail.com directly.')
    } finally {
      setSending(false)
    }

  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'vishalchauhan270724@gmail.com',
      link: 'mailto:vishalchauhan270724@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91 9324696429',
      link: 'tel:+919324696429'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'India',
      link: '#'
    },
    {
      icon: '🔗',
      title: 'LinkedIn',
      value: 'linkedin.com/in/vishal-chauhan-71a696313',
      link: 'https://www.linkedin.com/in/vishal-chauhan-71a696313/'
    }
  ]

  return (
    <section className="contact-section section-padding" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-intro">
          <p>Have an interesting project or opportunity? I'd love to hear from you! Let's connect and create something amazing together.</p>
        </div>

        <div className="row">
          <div className="col-lg-5">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <div className="contact-cards">
                {contactInfo.map((info, idx) => (
                  <a 
                    key={idx} 
                    href={info.link}
                    className="contact-card"
                  >
                    <div className="contact-icon">{info.icon}</div>
                    <div className="contact-details">
                      <h4>{info.title}</h4>
                      <p>{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="social-media">
                <h4>Follow Me</h4>
                <div className="social-icons">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">
                    <span>GitHub</span>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
                    <span>Twitter</span>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Tell me more about your project..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn" disabled={sending}>
                {sending ? 'Sending...' : 'Send Message'}
              </button>

              {submitted && (
                <div className="success-message">
                  ✓ Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
