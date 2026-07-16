import { Code, Globe, Database, Cpu } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: <Code className="pillar-icon" size={24} />,
      title: 'Java Development',
      desc: 'Building applications using Core Java and Object-Oriented Programming concepts.',
    },
    {
      icon: <Globe className="pillar-icon" size={24} />,
      title: 'Web Development',
      desc: 'Creating responsive websites using HTML, CSS, JavaScript, and PHP.',
    },
    {
      icon: <Database className="pillar-icon" size={24} />,
      title: 'Database Management',
      desc: 'Designing and managing relational databases using MySQL.',
    },
    {
      icon: <Cpu className="pillar-icon" size={24} />,
      title: 'Problem Solving',
      desc: 'Improving logical thinking by solving programming and database problems.',
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-grid">
          <div className="about-bio">
            <h3 className="bio-heading">Building solutions that blend logic & user experience</h3>
            <p className="bio-text">
              I am Minshu Dubey, an MCA student at Inderprastha Engineering College (IPEC), Ghaziabad, affiliated with AKTU. I am passionate about Full Stack Development and enjoy building scalable web applications using Java, Spring Boot, React, MySQL, and modern web technologies.
            </p>
            <p className="bio-text">
              I continuously improve my skills by working on real-world projects, solving coding problems, and learning new technologies to build robust, efficient, and user-friendly web solutions.
            </p>
            <div className="stats-strip">
              <div className="stat-item">
                <span className="stat-number">4+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Certifications</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4+</span>
                <span className="stat-label">Years of Learning</span>
              </div>
            </div>
          </div>

          <div className="about-pillars">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="pillar-card glass-card">
                <div className="pillar-icon-wrapper">
                  {pillar.icon}
                </div>
                <div className="pillar-info">
                  <h4 className="pillar-title">{pillar.title}</h4>
                  <p className="pillar-desc">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 5rem;
          align-items: center;
        }

        .bio-heading {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
          line-height: 1.3;
        }

        .bio-text {
          color: var(--text-secondary);
          font-size: 1.05rem;
          margin-bottom: 1.5rem;
        }

        .stats-strip {
          display: flex;
          gap: 3rem;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
        }

        .stat-item {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--color-primary);
          line-height: 1;
          margin-bottom: 0.3rem;
        }

        .stat-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Pillars column */
        .about-pillars {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .pillar-card {
          display: flex;
          gap: 1.2rem;
          padding: 1.5rem;
          align-items: flex-start;
        }

        .pillar-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.8rem;
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 12px;
          color: var(--color-secondary);
        }

        .pillar-card:hover .pillar-icon-wrapper {
          background: var(--color-secondary);
          color: white;
          transform: scale(1.05);
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.4);
        }

        .pillar-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.3rem;
        }

        .pillar-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          
          .stats-strip {
            justify-content: space-around;
          }
        }

        @media (max-width: 640px) {
          .stats-strip {
            gap: 1.5rem;
          }
          .stat-number {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </section>
  );
}
