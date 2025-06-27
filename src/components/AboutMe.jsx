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
            Soy desarrollador con conocimientos en Java y bases de datos, enfocado en construir aplicaciones backend robustas.
            Tengo experiencia en sistemas y redes, y estoy expandiendo habilidades en desarrollo de aplicaciones multiplataforma y web para ampliar mi perfil técnico.
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
            <a href="/Carlos-Ribera/CV_CarlosRibera.pdf" download className={styles.button}>Descargar CV</a>

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
