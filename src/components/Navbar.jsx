import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#hero" className="navbar__logo">
          <span className="navbar__logo-bracket">&lt;</span>
          AM
          <span className="navbar__logo-bracket">/&gt;</span>
        </a>

        <nav className={`navbar__nav${menuOpen ? ' navbar__nav--open' : ''}`}>
          {links.map(({ label, href }) => (
            <a key={label} href={href} className="navbar__link" onClick={handleNavClick}>
              {label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary navbar__cta" onClick={handleNavClick}>
            Hire Me
          </a>
        </nav>

        <button
          className={`navbar__burger${menuOpen ? ' navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
