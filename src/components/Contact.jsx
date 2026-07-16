import { useState } from 'react';
import { Mail, MapPin, Send, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    fetch("https://formsubmit.co/ajax/dubeyminshu4@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        Name: formData.name,
        Email: formData.email,
        Subject: formData.subject,
        Message: formData.message
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success === "true" || data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    })
    .catch(() => {
      setStatus('error');
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-grid">
          {/* Contact Details */}
          <div className="contact-info">
            <h3 className="info-heading">Let's discuss a project or opportunity!</h3>
            <p className="info-desc">
              I am open to full-time engineering roles, freelance opportunities, or collaboration on software development projects. Drop me a line!
            </p>

            <div className="info-cards">
              <div className="info-card glass-card">
                <Mail className="info-icon" size={20} />
                <div className="info-details">
                  <span className="info-label">Email Me</span>
                  <a href="mailto:dubeyminshu4@gmail.com" className="info-value">dubeyminshu4@gmail.com</a>
                </div>
              </div>

              <div className="info-card glass-card">
                <MapPin className="info-icon" size={20} />
                <div className="info-details">
                  <span className="info-label">Location</span>
                  <span className="info-value">Ghaziabad, Uttar Pradesh, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container glass-card">
            {status === 'success' ? (
              <div className="form-success-state">
                <CheckCircle size={48} className="success-icon" />
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out, Minshu will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                {status === 'error' && (
                  <div className="form-error-banner">
                    <AlertCircle size={18} />
                    <span>Failed to send message. Please try again later.</span>
                  </div>
                )}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Project Inquiry / Job Opportunity"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="form-textarea"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn btn-primary btn-submit"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background: var(--bg-primary);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 4rem;
          align-items: flex-start;
        }

        .info-heading {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .info-desc {
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          font-size: 1.05rem;
        }

        .info-cards {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .info-card {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          padding: 1.2rem 1.5rem;
        }

        .info-icon {
          color: var(--color-primary);
        }

        .info-details {
          display: flex;
          flex-direction: column;
        }

        .info-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .info-value {
          font-size: 1.05rem;
          color: var(--text-primary);
          text-decoration: none;
          font-weight: 500;
          transition: var(--transition-smooth);
        }

        a.info-value:hover {
          color: var(--color-primary);
        }

        /* Contact Form */
        .contact-form-container {
          padding: 2.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .btn-submit {
          width: 100%;
          justify-content: center;
          border: none;
          margin-top: 1rem;
        }

        .form-error-banner {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.8rem 1.2rem;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.2);
          border-radius: 8px;
          color: #ef4444;
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
        }

        .form-success-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 3rem 0;
          gap: 1rem;
        }

        .success-icon {
          color: var(--color-primary);
          filter: drop-shadow(0 0 10px rgba(6, 182, 212, 0.4));
        }

        .form-success-state h3 {
          font-size: 1.5rem;
          font-weight: 700;
        }

        .form-success-state p {
          color: var(--text-secondary);
          max-width: 320px;
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 640px) {
          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .contact-form-container {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
