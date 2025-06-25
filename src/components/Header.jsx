import { useState } from 'react';
import styles from './css/Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        Carlos Ribera<span className={styles.subtitle}> / Back-End Developer</span>
      </div>
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
        <ul className={styles.navList}>
          <li><a href="#about" className={styles.navLink}>Sobre mí</a></li>
          <li><a href="#skills" className={styles.navLink}>Tecnologías</a></li>
          <li><a href="#projects" className={styles.navLink}>Proyectos</a></li>
          <li><a href="#cv" className={styles.navLink}>CV</a></li>
          <li><a href="#contact" className={styles.navLink}>Contacto</a></li>
        </ul>
      </nav>
      <button
        className={styles.menuToggle}
        aria-label="Abrir menú"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
    </header>
  );
}

