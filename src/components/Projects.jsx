import '../styles/Projects.css';

const projects = [
    {
    title: 'HCIM-Pules : Human Resource Management System',
    description:
      'A Saas based web application with JWT authentication, role-based access control, resource management, dashboard analytics, budget tracking, and email notifications.',
    tags: ['Node.js', 'React.js', 'MariaDB', 'Redux'],
    github: 'https://github.com/AnjulaMadusanka/HCIM_Pulse',
    live: 'https://hcim.io/',
    featured: true,
  },
  {
    title: 'WLMS-Learning Management System',
    description:
      'A learning management system built with React, Node.js, and MongoDB, featuring user authentication, course management, and Stripe integration for payments.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/AnjulaMadusanka/WLMS',
    // live: '#',
    featured: true,
  },

  {
    title: 'Admin portal for LMS',
    description:
      'An admin portal for managing learning management system functionalities, with student application management, course administration, and email notifications.(Code not public due to company policy)',
    tags: ['React.js', 'TypeScript', 'Python', 'FastAPI','MySQL'],
    github: 'https://github.com/AnjulaMadusanka/TVI_Admin_login_portal',
    live: 'http://54.253.91.171/admin/',
    featured: false,
  },
  // {
  //   title: 'Chat Application',
  //   description:
  //     'A real-time chat app supporting multiple rooms, private messaging, and file sharing, powered by Socket.io and React.',
  //   tags: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
  //   github: 'https://github.com',
  //   live: null,
  //   featured: false,
  // },
  // {
  //   title: 'Portfolio Website',
  //   description:
  //     'This portfolio site — built with React and Vite, featuring smooth animations, responsive design, and a clean dark aesthetic.',
  //   tags: ['React', 'Vite', 'CSS3'],
  //   github: 'https://github.com',
  //   live: '#',
  //   featured: false,
  // },
  // {
  //   title: 'Inventory System',
  //   description:
  //     'A Spring Boot + React inventory management system with barcode scanning, stock alerts, reporting, and multi-user support.',
  //   tags: ['Java', 'Spring Boot', 'React', 'MySQL'],
  //   github: 'https://github.com',
  //   live: null,
  //   featured: false,
  // },
];

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <p className="section-label">Things I&apos;ve built</p>
        <h2 className="section-title">Projects</h2>
        <div className="section-divider" />

        <div className="projects__grid">
          {projects.map(({ title, description, tags, github, live, featured }) => (
            <div key={title} className={`project-card${featured ? ' project-card--featured' : ''}`}>
              {featured && <span className="project-card__badge">Featured</span>}
              <div className="project-card__body">
                <h3 className="project-card__title">{title}</h3>
                <p className="project-card__desc">{description}</p>
                <div className="project-card__tags">
                  {tags.map(tag => (
                    <span key={tag} className="project-card__tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="project-card__links">
                <a href={github} target="_blank" rel="noreferrer" className="project-card__link" aria-label="GitHub">
                  <GithubIcon /> Code
                </a>
                {live && (
                  <a href={live} target="_blank" rel="noreferrer" className="project-card__link" aria-label="Live demo">
                    <ExternalIcon /> Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
