import { ExternalLink, Terminal, Code, Award, BarChart2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function CodingProfiles() {
  const profiles = [
    {
      name: 'GitHub',
      icon: <GithubIcon size={24} />,
      url: 'https://github.com/minshu2025',
      color: '#a855f7', // Purple
      desc: 'Source code repositories, personal projects, open-source learning.',
    },
    {
      name: 'LeetCode',
      icon: <Code size={24} />,
      url: 'https://leetcode.com/u/minshu640/',
      color: '#eab308', // Orange/Yellow
      desc: 'Algorithmic problem solving, data structures practice, logic building.',
    },
    {
      name: 'HackerRank',
      icon: <Award size={24} />,
      url: 'https://www.hackerrank.com/profile/dubeyminshu4',
      color: '#22c55e', // Green
      desc: 'Skill badges, problem solving in Java, SQL, and database concepts.',
    },
    {
      name: 'CodeChef',
      icon: <Terminal size={24} />,
      url: 'https://www.codechef.com/users/dubeyminshu4',
      color: '#f97316', // Orange
      desc: 'Participating in competitive coding contests and algorithmic challenges.',
    },
    {
      name: 'Kaggle',
      icon: <BarChart2 size={24} />,
      url: 'https://www.kaggle.com/dubeyminshu4',
      color: '#06b6d4', // Cyan
      desc: 'Exploring machine learning datasets, model prediction, and data science.',
    },
  ];

  return (
    <section id="profiles" className="profiles-section">
      <div className="container">
        <h2 className="section-title">Coding Profiles</h2>
        <p className="profiles-subtitle">
          Where I solve problems, write code, and continuously sharpen my programming skills.
        </p>

        <div className="profiles-grid">
          {profiles.map((profile, idx) => (
            <a
              key={idx}
              href={profile.url}
              target="_blank"
              rel="noreferrer"
              className="profile-card glass-card"
              style={{ '--accent-color': profile.color }}
            >
              <div className="profile-header">
                <div className="profile-icon-wrapper" style={{ color: profile.color, background: `${profile.color}15` }}>
                  {profile.icon}
                </div>
                <ExternalLink className="external-icon" size={16} />
              </div>
              <div className="profile-info">
                <h3 className="profile-name">{profile.name}</h3>
                <p className="profile-desc">{profile.desc}</p>
              </div>
              <div className="card-border-glow" style={{ background: `linear-gradient(90deg, transparent, ${profile.color}, transparent)` }}></div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .profiles-section {
          background: var(--bg-secondary);
        }

        .profiles-subtitle {
          text-align: center;
          color: var(--text-secondary);
          max-width: 600px;
          margin: -2rem auto 3.5rem;
          font-size: 1.05rem;
        }

        .profiles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 1.5rem;
          justify-content: center;
        }

        .profile-card {
          padding: 1.8rem;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          transition: var(--transition-smooth);
        }

        .profile-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.2rem;
        }

        .profile-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 12px;
        }

        .external-icon {
          color: var(--text-muted);
          transition: var(--transition-smooth);
        }

        .profile-card:hover .external-icon {
          color: var(--accent-color);
          transform: translate(2px, -2px);
        }

        .profile-name {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .profile-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .card-border-glow {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          opacity: 0;
          transition: var(--transition-smooth);
        }

        .profile-card:hover .card-border-glow {
          opacity: 1;
        }

        .profile-card:hover {
          border-color: var(--accent-color);
          box-shadow: 0 10px 25px -10px var(--accent-color);
          transform: translateY(-5px);
        }
      `}</style>
    </section>
  );
}
