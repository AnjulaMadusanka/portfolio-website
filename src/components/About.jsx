import '../styles/About.css';
import aboutImg from '../assets/about_me.png';

const yearsOfExperience = new Date().getFullYear() - 2021;

const stats = [
  { value: `${yearsOfExperience}+`, label: 'Years Experience' },
  { value: '20+', label: 'Projects Built' },
  { value: '10+', label: 'Technologies' },
  { value: '100%', label: 'Dedication' },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <p className="section-label">Get to know me</p>
        <h2 className="section-title">About Me</h2>
        <div className="section-divider" />

        <div className="about__grid">
          <div className="about__avatar-wrap">
            <div className="about__avatar">
              <img src={aboutImg} alt="Anjula Madusanka" className="about__avatar-img" />
            </div>
            <div className="about__avatar-ring" aria-hidden="true" />
          </div>

          <div className="about__body">
            <p className="about__text">
              I&apos;m <strong>Anjula Madusanka</strong>, a passionate software engineer who loves
              turning complex problems into elegant, efficient solutions. I have a strong
              foundation in both frontend and backend development, with a focus on building
              applications that are not only functional but also delightful to use.
            </p>
            <p className="about__text">
              When I&apos;m not writing code, I enjoy exploring new technologies, contributing to
              open-source projects, and continuously leveling up my skills. I believe great
              software is built at the intersection of technical excellence and thoughtful design.
            </p>

            <div className="about__stats">
              {stats.map(({ value, label }) => (
                <div key={label} className="about__stat">
                  <span className="about__stat-value">{value}</span>
                  <span className="about__stat-label">{label}</span>
                </div>
              ))}
            </div>

            <div className="about__actions">
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
