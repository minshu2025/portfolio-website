import { useState, useEffect } from 'react';
import { ArrowRight, Download, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Hero() {
  const titles = ['MCA Student', 'Full Stack Developer', 'Java Developer', 'Spring Boot Developer', 'React Developer', 'Problem Solver', 'Open Source Learner'];
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentFullText = titles[titleIndex];
    const typingSpeed = isDeleting ? 40 : 100;

    if (!isDeleting && displayText === currentFullText) {
      // Wait before starting to delete
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    } else {
      timer = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentFullText.substring(0, displayText.length - 1)
            : currentFullText.substring(0, displayText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="welcome-tag">
            <Terminal size={16} />
            <span>Welcome to my workspace</span>
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text glow-text">Minshu</span>
          </h1>
          <h2 className="hero-subtitle">
            I am a <span className="typewriter-text">{displayText}</span>
            <span className="cursor"></span>
          </h2>
          <p className="hero-desc">
            Passionate about turning ideas into real-world applications. I specialize in Java, Spring Boot, React, and MySQL, with a focus on building scalable, efficient, and user-friendly web solutions while continuously learning and growing as a developer.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="/resume.pdf" download className="btn btn-secondary">
              Download Resume <Download size={18} />
            </a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/minshu2025" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="GitHub">
              <GithubIcon size={20} />
            </a>
            <a href="https://www.linkedin.com/in/minshu-kumar-b71601282" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="LinkedIn">
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>

        {/* Premium Coding IDE Mockup on the right */}
        <div className="hero-visual">
          <div className="ide-window glass-card">
            <div className="ide-header">
              <div className="ide-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="ide-title">MinshuController.java</div>
            </div>
            <div className="ide-body">
              <pre>
                <code>
                  <span className="code-keyword">@RestController</span><br />
                  <span className="code-keyword">@RequestMapping</span>(<span className="code-string">"/api"</span>)<br />
                  <span className="code-keyword">public class</span> <span className="code-function">MinshuController</span> &#123;<br /><br />
                  &nbsp;&nbsp;<span className="code-keyword">@GetMapping</span>(<span className="code-string">"/status"</span>)<br />
                  &nbsp;&nbsp;<span className="code-keyword">public</span> Map&lt;String, Object&gt; <span className="code-function">getStatus</span>() &#123;<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;return Map.of(<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">"name"</span>, <span className="code-string">"Minshu"</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">"degree"</span>, <span className="code-string">"MCA"</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">"passion"</span>, <span className="code-string">"Coding"</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">"ready"</span>, <span className="code-boolean">true</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;);<br />
                  &nbsp;&nbsp;&#125;<br />
                  &#125;
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 100px;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
        }

        .welcome-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.2);
          border-radius: 50px;
          color: var(--color-primary);
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1rem;
          letter-spacing: -0.03em;
        }

        .hero-subtitle {
          font-size: 2rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          min-height: 3rem;
        }

        .typewriter-text {
          color: var(--color-primary);
        }

        .hero-desc {
          font-size: 1.15rem;
          color: var(--text-secondary);
          max-width: 580px;
          margin-bottom: 2.5rem;
        }

        .hero-actions {
          display: flex;
          gap: 1.2rem;
          margin-bottom: 3rem;
        }

        .hero-socials {
          display: flex;
          gap: 1rem;
        }

        .social-icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          transition: var(--transition-smooth);
          text-decoration: none;
        }

        .social-icon-btn:hover {
          color: var(--color-primary);
          background: rgba(6, 182, 212, 0.1);
          border-color: var(--color-primary);
          transform: translateY(-3px);
        }

        /* IDE Window */
        .hero-visual {
          perspective: 1000px;
        }

        .ide-window {
          transform: rotateY(-5deg) rotateX(5deg);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          overflow: hidden;
          max-width: 480px;
        }

        .ide-header {
          display: flex;
          align-items: center;
          padding: 1rem 1.2rem;
          background: rgba(3, 7, 18, 0.4);
          border-bottom: 1px solid var(--border-color);
        }

        .ide-dots {
          display: flex;
          gap: 0.4rem;
        }

        .ide-dots .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .ide-dots .dot.red { background: #ef4444; }
        .ide-dots .dot.yellow { background: #f59e0b; }
        .ide-dots .dot.green { background: #10b981; }

        .ide-title {
          margin-left: 1.5rem;
          font-size: 0.8rem;
          color: var(--text-muted);
          font-family: monospace;
        }

        .ide-body {
          padding: 1.5rem;
          font-family: 'Courier New', Courier, monospace;
          font-size: 0.9rem;
          line-height: 1.6;
          color: #a7f3d0;
          text-align: left;
        }

        .code-keyword { color: #f472b6; }
        .code-string { color: #34d399; }
        .code-boolean { color: #fb7185; }
        .code-function { color: #60a5fa; }

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }

          .welcome-tag {
            justify-content: center;
          }

          .hero-desc {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-actions {
            justify-content: center;
          }

          .hero-socials {
            justify-content: center;
          }

          .hero-visual {
            display: flex;
            justify-content: center;
          }

          .ide-window {
            transform: none;
            width: 100%;
          }
        }

        @media (max-width: 640px) {
          .hero-title {
            font-size: 2.8rem;
          }
          .hero-subtitle {
            font-size: 1.5rem;
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .hero-actions .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
