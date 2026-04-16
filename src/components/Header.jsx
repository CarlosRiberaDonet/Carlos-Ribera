import { useState, useEffect } from 'react';
import styles from './css/Header.module.css';

const sections = [
  { id: 'about', label: 'Sobre mí' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'technologies', label: 'Tecnologías' },
  { id: 'education', label: 'Educación' },
  { id: 'contact', label: 'Contacto' }
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('');
  const [navOpen, setNavOpen] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const scrollPos = window.scrollY + 80;
    let current = '';
    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (!el) continue;
      if (el.offsetTop <= scrollPos) {
        current = section.id;
      }
    }
    // Extra: si estás al fondo de la página, fuerza que "contact" esté activo
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      current = 'contact';
    }
    setActiveSection(current);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        Carlos Ribera<span className={styles.subtitle}>| Back-End Developer</span>
      </div>

      <nav className={`${styles.nav} ${navOpen ? styles.open : ''}`}>
        <ul className={styles.navList}>
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`${styles.navLink} ${activeSection === id ? styles.active : ''}`}
                onClick={() => setNavOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        className={styles.menuToggle}
        onClick={() => setNavOpen(!navOpen)}
        aria-label="Toggle navigation"
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
    </header>
  );
}

