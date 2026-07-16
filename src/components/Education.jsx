import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';

export default function Education() {
  const educationData = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Inderprastha Engineering College (IPEC), Ghaziabad',
      details: 'Affiliated to Dr. A.P.J. Abdul Kalam Technical University (AKTU)',
      period: '2025 – Present',
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Amity University Patna',
      details: 'Focused on programming fundamentals, databases, and system analysis.',
      period: '2022 – 2025',
    },
  ];

  const certificationsData = [
    {
      title: 'Cloud Computing',
      provider: 'NPTEL',
      type: 'Certification',
    },
    {
      title: 'Foundation of Cloud IoT Edge ML',
      provider: 'NPTEL',
      type: 'Certification',
    },
    {
      title: 'Python for AI & Data Science',
      provider: 'CDAC',
      type: 'Professional Training',
    },
    {
      title: 'Game Development using Unity',
      provider: 'CodroidHub',
      type: 'Professional Training',
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education & Certifications</h2>

        <div className="edu-cert-grid">
          {/* Education Timeline */}
          <div className="education-col">
            <div className="col-header">
              <GraduationCap className="header-icon" size={24} />
              <h3>Education</h3>
            </div>

            <div className="timeline">
              {educationData.map((item, idx) => (
                <div key={idx} className="timeline-item glass-card">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-date">
                      <Calendar size={14} />
                      <span>{item.period}</span>
                    </div>
                    <h4 className="timeline-degree">{item.degree}</h4>
                    <span className="timeline-institution">{item.institution}</span>
                    <p className="timeline-details">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="certifications-col">
            <div className="col-header">
              <Award className="header-icon" size={24} />
              <h3>Certifications</h3>
            </div>

            <div className="certifications-list">
              {certificationsData.map((cert, idx) => (
                <div key={idx} className="cert-card glass-card">
                  <div className="cert-badge-wrapper">
                    <BookOpen size={18} />
                  </div>
                  <div className="cert-info">
                    <span className="cert-provider">{cert.provider}</span>
                    <h4 className="cert-title">{cert.title}</h4>
                    <span className="cert-type">{cert.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .education-section {
          background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
        }

        .edu-cert-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
          align-items: flex-start;
        }

        .col-header {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 2rem;
        }

        .header-icon {
          color: var(--color-primary);
        }

        .col-header h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        /* Timeline Styles */
        .timeline {
          position: relative;
          border-left: 2px solid var(--border-color);
          padding-left: 2rem;
          margin-left: 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .timeline-item {
          padding: 1.8rem;
          position: relative;
        }

        .timeline-dot {
          position: absolute;
          left: -2.35rem;
          top: 2rem;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--color-primary);
          border: 4px solid var(--bg-primary);
          box-shadow: 0 0 10px var(--color-primary);
        }

        .timeline-date {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-secondary);
          margin-bottom: 0.6rem;
        }

        .timeline-degree {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.3rem;
        }

        .timeline-institution {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-secondary);
          display: block;
          margin-bottom: 0.5rem;
        }

        .timeline-details {
          font-size: 0.88rem;
          color: var(--text-muted);
        }

        /* Certifications Styles */
        .certifications-list {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .cert-card {
          display: flex;
          gap: 1.2rem;
          padding: 1.2rem 1.5rem;
          align-items: center;
        }

        .cert-badge-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.2);
          color: var(--color-secondary);
        }

        .cert-card:hover .cert-badge-wrapper {
          background: var(--color-secondary);
          color: white;
          box-shadow: 0 0 12px rgba(139, 92, 246, 0.4);
        }

        .cert-info {
          display: flex;
          flex-direction: column;
        }

        .cert-provider {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .cert-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0.1rem 0;
        }

        .cert-type {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        @media (max-width: 1024px) {
          .edu-cert-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }
      `}</style>
    </section>
  );
}
