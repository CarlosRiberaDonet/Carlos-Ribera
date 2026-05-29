import styles from './css/AboutMe.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profileImg from '../images/profile.png';

export default function AboutMe() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>

        <div className={styles.textContent}>
          <h1 className={styles.title}>¡Hola, soy Carlos Ribera!</h1>

          <h2 className={styles.subtitle}>
            Backend developer 
          </h2>

          <p className={styles.description}>
            Desarrollador backend Java centrado en Spring Boot, APIs REST y bases de datos SQL. Actualmente desarrollo proyectos propios orientados a integración de APIs externas, autenticación con JWT y modelado de datos. He trabajado en aplicaciones que consumen y sincronizan información desde múltiples fuentes externas, gestionando persistencia, lógica de negocio y consultas optimizadas sobre MySQL. Cuento además con experiencia previa en sistemas e infraestructura IT, diagnóstico de incidencias y administración básica de entornos Windows y Linux.
          </p>
        </div>

        <div className={styles.side}>

          <div className={styles.photoWrap}>
            <img src={profileImg} alt="Carlos Ribera" className={styles.image} />
          </div>

          <div className={styles.links}>
            <a href="https://github.com/CarlosRiberaDonet" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/carlos-r-335390276" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>

            <a href="/Carlos-Ribera/Ribera-Donet-Carlos-CV.pdf" download>
              CV
            </a>

            <a href="#contact">
              Contacto
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}