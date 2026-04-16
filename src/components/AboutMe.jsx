import styles from './css/AboutMe.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profileImg from '../images/profile.png';

export default function AboutMe() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>¡Hola, soy Carlos Ribera!</h1>
          <h2 className={styles.title}>
            Soy Desarrollador Back-End especializado en Java y Spring Boot
          </h2>
          <p className={styles.description}>
            Desarrollador de software con experiencia en Java, Spring Boot y bases de datos relacionales (SQL/MySQL), 
            enfocado en construir aplicaciones backend robustas. Experiencia en aplicaciones de escritorio (Swing/JavaFX),
            Android y proyectos interactivos con Unity, con integración frontend–backend mediante APIs REST y control de versiones con Git.
            Aplicación de buenas prácticas y arquitectura por capas en proyectos reales.
          </p>
          <div className={styles.links}>
            <a href="https://github.com/CarlosRiberaDonet" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className={styles.icon} />
            </a>
            <a href="https://www.linkedin.com/in/carlos-r-335390276" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className={styles.icon} />
            </a>
          </div>
          <div className={styles.buttons}>
            <a href="/Carlos-Ribera/Ribera-Donet-Carlos-CV.pdf" download className={styles.button}>Descargar CV</a>
            <a href="#contact" className={styles.buttonSecondary}>Contacto</a>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={profileImg} alt="Carlos Ribera" className={styles.image} />
        </div>
      </div>
    </section>
  );
}

