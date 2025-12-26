import { useState, useEffect } from 'react';
import styles from './css/AboutMe.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profileImg from '../images/profile.png';

const dynamicTexts = [
  'Desarrollador',
  'Creativo',
  'Técnico Informático',
  'Resolutivo',
  
];

export default function AboutMe() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (charIndex < dynamicTexts[currentIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + dynamicTexts[currentIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 30);
      } else {
        timeout = setTimeout(() => setTyping(false), 1500);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, 10);
      } else {
        setTyping(true);
        setCurrentIndex((prev) => (prev + 1) % dynamicTexts.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIndex, typing, currentIndex]);

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>¡Hola, soy Carlos Ribera!</h1>
          <h2 className={styles.dynamicText}>
            <span className={styles.static}>Soy </span>
            <span className={styles.typed}>{displayedText}</span>
            <span className={styles.cursor}>|</span>
          </h2>
          <p className={styles.description}>
            Desarrollador de software con experiencia en Java y gestión de bases de datos relacionales (SQL, MySQL), 
            enfocado en construir aplicaciones backend robustas. He desarrollado aplicaciones de escritorio con Swing y JavaFX,
            aplicaciones móviles con Android Studio y proyectos interactivos con Unity. 
            También trabajo en integración frontend–backend mediante consumo de APIs REST y uso de Git para control de versiones.
            Busco ampliar mi perfil técnico en desarrollo multiplataforma y web, 
            aplicando buenas prácticas y arquitectura por capas en proyectos reales.
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
