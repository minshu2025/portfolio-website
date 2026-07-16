import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            <span>Minshu<span className="dot">.</span></span>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-socials">
            <a href="https://github.com/minshu2025" target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href="https://www.linkedin.com/in/minshu-kumar-b71601282" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Minshu. Crafted with passion & precision. All rights reserved.
          </p>
          <button onClick={handleScrollTop} className="scroll-top-btn" aria-label="Scroll to top">
            Back to top <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .footer {
          background: #02040a;
          border-top: 1px solid var(--border-color);
          padding: 4rem 0 2.5rem;
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid var(--border-color);
          flex-wrap: wrap;
          gap: 2rem;
        }

        .footer-logo {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .footer-logo .dot {
          color: var(--color-primary);
        }

        .footer-links {
          display: flex;
          gap: 2rem;
        }

        .footer-links a {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.95rem;
          transition: var(--transition-smooth);
        }

        .footer-links a:hover {
          color: var(--color-primary);
        }

        .footer-socials {
          display: flex;
          gap: 1rem;
        }

        .footer-socials a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          transition: var(--transition-smooth);
        }

        .footer-socials a:hover {
          color: var(--color-primary);
          background: rgba(6, 182, 212, 0.08);
          border-color: var(--color-primary);
          transform: translateY(-2px);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 2rem;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .copyright {
          font-size: 0.88rem;
          color: var(--text-muted);
        }

        .scroll-top-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .scroll-top-btn:hover {
          color: var(--color-primary);
        }

        @media (max-width: 768px) {
          .footer-top {
            flex-direction: column;
            text-align: center;
            gap: 1.5rem;
          }
          .footer-links {
            flex-direction: column;
            gap: 1rem;
          }
          .footer-bottom {
            flex-direction: column-reverse;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
