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
            Desarrollador backend especializado en Java y Spring Boot. Diseño e implemento aplicaciones backend con APIs REST, bases de datos SQL
            e integración de servicios externos. Actualmente desarrollo proyectos propios donde trabajo en la sincronización de datos entre 
            múltiples APIs, el diseño de modelos de datos relacionales y la optimización de consultas 
            sobre SQL.
            Mi experiencia previa en sistemas e infraestructura IT me ha proporcionado una sólida capacidad para analizar problemas complejos,
             diagnosticar incidencias y desarrollar soluciones.
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