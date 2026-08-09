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
            Construyo aplicaciones backend completas, desde el diseño de la API y el modelo de datos hasta el despliegue
            en producción. En Magic Investor proceso más de 500K registros e integré tres APIs externas, 
            reduciendo consultas de 10-12 segundos a pocos milisegundos. 
            6 años previos en infraestructura IT completan mi perfil técnico.
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