import '../styles/Skills.css';

const categories = [
  {
    name: 'Languages',
    icon: '💻',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL', 'PHP'],
  },
  {
    name: 'Frontend',
    icon: '🖥',
    skills: ['React.js', 'Next.js', 'React Native', 'Redux', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    name: 'Backend',
    icon: '⚙️',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'WebSockets', 'Odoo ERP', 'XML', 'Spring Boot', 'Laravel'],
  },
  {
    name: 'Databases',
    icon: '🗄',
    skills: ['PostgreSQL', 'MySQL', 'MariaDB', 'MongoDB', 'Redis', 'Firebase'],
  },
  {
    name: 'Cloud & DevOps',
    icon: '☁️',
    skills: ['AWS (EC2, S3)', 'Docker', 'CI/CD', 'Git', 'Linux', 'Azure'],
  },
  {
    name: 'AI & Practices',
    icon: '🤖',
    skills: ['OpenAI API', 'Claude', 'GitHub Copilot', 'Cursor', 'Gemini', 'Agile/Scrum', 'TDD', 'Code Review', 'Clean Code'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <p className="section-label">What I work with</p>
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="section-divider" />

        <div className="skills__grid">
          {categories.map(({ name, icon, skills }) => (
            <div key={name} className="skills__card">
              <div className="skills__card-header">
                <span className="skills__icon" aria-hidden="true">{icon}</span>
                <h3 className="skills__category">{name}</h3>
              </div>
              <div className="skills__tags">
                {skills.map(skill => (
                  <span key={skill} className="skills__tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
