import { Cpu, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Cpu size={20} />,
      skills: [
        { name: 'Java', level: 'Core & OOPs', desc: 'Core Java, OOPs Concepts, Collections, JDBC' },
        { name: 'C', level: 'Logic Building', desc: 'Programming fundamentals, logic building, pointers' },
        { name: 'PHP', level: 'Web Backend', desc: 'Server-side scripting, dynamic web apps, database integration' },
        { name: 'SQL', level: 'Queries & DDL', desc: 'Relational query writing, schema design, database commands' },
        { name: 'HTML5 & CSS3', level: 'Responsive Layouts', desc: 'Semantic layouts, Flexbox, CSS Grid, responsive design' },
        { name: 'JavaScript', level: 'DOM & Scripting', desc: 'DOM manipulation, Event handling, client-side scripting' },
      ],
    },
    {
      title: 'Tools & Databases',
      icon: <Wrench size={20} />,
      skills: [
        { name: 'MySQL', level: 'RDBMS', desc: 'Relational database management, table creation, relations' },
        { name: 'MySQL Workbench', level: 'Visual Tool', desc: 'Database administration, ER diagrams, visual query tools' },
        { name: 'IntelliJ IDEA', level: 'Preferred IDE', desc: 'Java & Spring Boot development IDE, debugging, maven' },
        { name: 'Eclipse IDE', level: 'Java IDE', desc: 'Java development environment, workspace configurations' },
        { name: 'VS Code', level: 'Code Editor', desc: 'Web development, extensions, code formatting & shortcuts' },
        { name: 'XAMPP', level: 'Local Stack', desc: 'Local server environment, Apache server, phpMyAdmin, MySQL' },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">My Technical Skills</h2>
        
        <div className="categories-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="category-block">
              <div className="category-header">
                <span className="category-icon-wrapper">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>

              <div className="skills-grid">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-card glass-card">
                    <div className="skill-meta">
                      <h4 className="skill-name">{skill.name}</h4>
                      <span className="skill-badge">{skill.level}</span>
                    </div>
                    <p className="skill-desc">{skill.desc}</p>
                    <div className="skill-glow-accent"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section {
          background: var(--bg-secondary);
        }

        .categories-grid {
          display: flex;
          flex-direction: column;
          gap: 3.5rem;
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1.8rem;
          padding-bottom: 0.8rem;
          border-bottom: 1px solid var(--border-color);
        }

        .category-icon-wrapper {
          color: var(--color-primary);
          display: flex;
          align-items: center;
        }

        .category-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .skill-card {
          padding: 1.5rem;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .skill-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .skill-name {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .skill-badge {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.2rem 0.6rem;
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.25);
          color: var(--color-primary);
          border-radius: 50px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .skill-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .skill-glow-accent {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--color-primary), transparent);
          opacity: 0;
          transition: var(--transition-smooth);
        }

        .skill-card:hover .skill-glow-accent {
          opacity: 1;
        }

        .skill-card:hover {
          border-color: rgba(6, 182, 212, 0.3);
          box-shadow: 0 10px 25px -10px rgba(6, 182, 212, 0.15);
        }

        @media (max-width: 640px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
