import '../styles/Experience.css';

const experiences = [
  {
    role: 'Software Engineer',
    company: 'PowerX Technology',
    period: 'Feb 2026 – Present',
    points: [
      'Translate stakeholder requirements into technical designs and custom Odoo modules (Python, XML, PostgreSQL).',
      'Own features end to end, from development and testing to production release, in an Agile team.',
      'Manage AWS infrastructure and troubleshoot live systems to keep client ERPs stable and available.',
    ],
    tags: ['Odoo', 'Python', 'XML', 'PostgreSQL', 'AWS'],
  },
  {
    role: 'Associate Software Engineer',
    company: 'Eventistry',
    period: 'Nov 2023 – Jan 2026',
    points: [
      'Owned end-to-end product features in a fast-paced startup, consistently shipping within sprint commitments.',
      'Refactored core modules to improve performance, stability, and user experience.',
      'Partnered with designers and product owners to deliver clean, well-tested implementations.',
    ],
    tags: ['React.js', 'React Native', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    role: 'Associate Software Engineer',
    company: 'Emageia',
    period: 'Oct 2021 – Jun 2023',
    points: [
      'Designed feature logic, database stored procedures, and automated tests from client requirements.',
      'Evaluated and integrated third-party libraries, balancing performance and project constraints.',
      'Delivered fixes and enhancements for scheduled releases and maintenance patches.',
    ],
    tags: ['React.js', 'Node.js', 'TypeScript', 'Redux', 'MariaDB', 'Docker'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Emageia',
    period: 'Apr 2021 – Sep 2021',
    points: [
      'Took part in code reviews and researched tools that improved team productivity.',
      'Diagnosed and resolved customer-reported software issues.',
    ],
    tags: ['React.js', 'Node.js', 'Express', 'MariaDB', 'Git'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <p className="section-label">Where I&apos;ve worked</p>
        <h2 className="section-title">Experience</h2>
        <div className="section-divider" />

        <div className="timeline">
          {experiences.map(({ role, company, period, points, tags }, i) => (
            <div key={i} className="timeline__item">
              <div className="timeline__dot" />
              <div className="timeline__card">
                <div className="timeline__header">
                  <div>
                    <h3 className="timeline__role">{role}</h3>
                    <p className="timeline__company">{company}</p>
                  </div>
                  <span className="timeline__period">{period}</span>
                </div>
                <ul className="timeline__desc">
                  {points.map(point => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="timeline__tags">
                  {tags.map(tag => (
                    <span key={tag} className="timeline__tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
