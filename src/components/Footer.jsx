// src/components/Footer.jsx
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './css/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} Carlos Ribera Donet. Todos los derechos reservados.</p>
        <div className={styles.links}>
          <a href="https://github.com/CarlosRiberaDonet" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/in/carlos-r-335390276" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className={styles.icon} />
          </a>
          <a href="mailto:carlosriberadonet@gmail.com">carlosriberadonet@gmail.com</a>
        </div>
      </div>
    </footer>
  );
}
