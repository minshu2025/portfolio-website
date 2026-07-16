import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="logo">
          <Code2 className="logo-icon" size={24} />
          <span>Minshu<span className="dot">.</span></span>
        </a>

        {/* Desktop Menu */}
        <div className="nav-menu">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary btn-nav">Hire Me</a>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`mobile-nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <a href="#contact" className="btn btn-primary btn-mobile-nav" onClick={() => setIsOpen(false)}>
          Hire Me
        </a>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          background: transparent;
          border-bottom: 1px solid transparent;
          transition: var(--transition-smooth);
        }

        .navbar.scrolled {
          padding: 1rem 0;
          background: rgba(3, 7, 18, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border-color);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-primary);
          text-decoration: none;
          letter-spacing: -0.02em;
        }

        .logo-icon {
          color: var(--color-primary);
        }

        .logo .dot {
          color: var(--color-secondary);
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: 2.2rem;
        }

        .nav-link {
          position: relative;
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: var(--transition-smooth);
          padding: 0.3rem 0;
        }

        .nav-link:hover, .nav-link.active {
          color: var(--text-primary);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
          transition: var(--transition-smooth);
        }

        .nav-link:hover::after, .nav-link.active::after {
          width: 100%;
        }

        .btn-nav {
          padding: 0.5rem 1.2rem;
          font-size: 0.85rem;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }

        /* Mobile Menu */
        .mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 250px;
          height: 100vh;
          background: rgba(11, 15, 25, 0.98);
          backdrop-filter: blur(20px);
          border-left: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          padding: 6rem 2rem 2rem;
          gap: 1.8rem;
          z-index: 999;
          transition: var(--transition-smooth);
        }

        .mobile-menu.open {
          right: 0;
        }

        .mobile-nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 600;
          transition: var(--transition-smooth);
        }

        .mobile-nav-link:hover, .mobile-nav-link.active {
          color: var(--color-primary);
          padding-left: 0.5rem;
        }

        .btn-mobile-nav {
          margin-top: 2rem;
          text-align: center;
        }

        @media (max-width: 768px) {
          .nav-menu {
            display: none;
          }
          .mobile-toggle {
            display: block;
            z-index: 1001;
          }
        }
      `}</style>
    </nav>
  );
}
