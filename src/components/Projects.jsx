import { useState } from 'react';
import { ExternalLink, Folder } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Web', 'Game', 'Python/ML'];

  const projectsData = [
    {
      title: 'Hostel Complaint Management System',
      category: 'Web',
      desc: 'Developed a web-based Hostel Complaint Management System that allows students to submit complaints online and enables administrators to track, manage, and resolve issues efficiently.',
      tags: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
      github: 'https://github.com/minshu2025/hostel-complaint-system',
      live: '#',
    },
    {
      title: 'College Management System',
      category: 'Web',
      desc: 'Developed a College Management System with separate portals for students, faculty, and administrators. Supports admissions management, user dashboards, and secure profile updating.',
      tags: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
      github: 'https://github.com/minshu2025/Student-Management-System',
      live: '#',
    },
    {
      title: 'Car Coin Collector Game',
      category: 'Game',
      desc: 'Developed a 2D car game using Unity where players control a car to collect coins within a limited time. Designed the game environment using Unity assets and timer-based gameplay logic.',
      tags: ['Unity', 'C#', 'Unity Assets', 'Visual Studio'],
      github: null,
      live: '#',
    },
    {
      title: 'Leaf Disease Prediction System',
      category: 'Python/ML',
      desc: 'Collaborated on a Team Project that uses machine learning to identify plant diseases from leaf images. Users upload leaf images and receive accurate disease predictions.',
      tags: ['Python', 'Flask', 'TensorFlow', 'OpenCV', 'HTML', 'CSS'],
      github: null,
      live: '#',
    },
  ];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        {/* Category Filters */}
        <div className="filters-container">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="project-card glass-card">
              <div className="project-header">
                <Folder className="folder-icon" size={32} />
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="proj-link" aria-label="GitHub Link">
                      <GithubIcon size={20} />
                    </a>
                  )}
                </div>
              </div>

              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
              </div>

              <div className="project-tags">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-section {
          background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
        }

        .filters-container {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3.5rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.6rem 1.5rem;
          border-radius: 50px;
          border: 1px solid var(--border-color);
          background: rgba(255, 255, 255, 0.02);
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .filter-btn:hover {
          color: var(--text-primary);
          border-color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.05);
        }

        .filter-btn.active {
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          color: white;
          border: none;
          box-shadow: 0 4px 15px rgba(6, 182, 212, 0.35);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
        }

        .project-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-between;
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .folder-icon {
          color: var(--color-primary);
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .proj-link {
          color: var(--text-secondary);
          transition: var(--transition-smooth);
        }

        .proj-link:hover {
          color: var(--color-primary);
          transform: translateY(-2px);
        }

        .project-info {
          flex-grow: 1;
          margin-bottom: 1.5rem;
        }

        .project-category {
          font-size: 0.75rem;
          color: var(--color-secondary);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: 0.5rem;
        }

        .project-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.8rem;
        }

        .project-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: auto;
        }

        .tag {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.25rem 0.6rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          color: var(--text-secondary);
        }

        .project-card:hover {
          border-color: var(--border-glow);
          box-shadow: 0 15px 30px -10px var(--color-primary-glow);
        }

        @media (max-width: 640px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
