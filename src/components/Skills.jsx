import '../styles/Skills.css';

const categories = [
  {
    name: 'Frontend',
    icon: '🖥',
    skills: ['React','React-Native','Redux','XML', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    name: 'Backend',
    icon: '⚙️',
    skills: ['Node.js', 'Express', 'Java','Spring Boot', 'PHP','Laravel', 'REST APIs', 'Python','FastAPI'],
  },
  {
    name: 'Database',
    icon: '🗄',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Firebase'],
  },
  {
    name: 'Tools & DevOps',
    icon: '🔧',
    skills: ['AWS','Azure','Git', 'Docker', 'Linux', 'CI/CD'],
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
