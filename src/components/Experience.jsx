import '../styles/Experience.css';

const experiences = [
  {
    role: 'Software Engineer',
    company: 'PowerX / LearnX',
    period: '2026 – Present',
    desc: 'Developed and maintained ERP modules using Odoo, including inventory, HR, and Finance. Implemented new features and optimize performance, resulting in a 30% increase in efficiency.',
    tags: ['XML', 'Python', 'PostgreSQL', 'AWS', 'MySQL'],
  },
  {
    role: 'Associate Software Engineer',
    company: 'Eventistry Agency',
    period: '2024 – 2026',
    desc: 'Built REST APIs and React frontends for client projects. Collaborated closely with stakeholders to deliver pixel-perfect UIs on tight deadlines.',
    tags: ['React.js','React-Native', 'Express', 'MongoDB', 'Figma'],
  },
  {
    role: 'Associate Software Engineer',
    company: 'Emageia',
    period: '2021 – 2024',
    desc: 'Created SaaS applications using modern web technologies like React.js, Node.js, focusing on user experience and performance optimization.',
    tags: ['React.js', 'Node.js', 'Typescript', 'Redux', 'MariaDB','Docker'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Emageia',
    period: '2021 – 2021',
    desc: 'Assisted in developing web applications and gained hands-on experience with full-stack development, contributing to both frontend and backend tasks.',
    tags: ['React.js', 'Node.js', 'Express', 'MariaDB', 'Git'],
  }
];

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <p className="section-label">Where I&apos;ve worked</p>
        <h2 className="section-title">Experience</h2>
        <div className="section-divider" />

        <div className="timeline">
          {experiences.map(({ role, company, period, desc, tags }, i) => (
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
                <p className="timeline__desc">{desc}</p>
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
