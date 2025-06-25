import styles from './css/AboutMe.module.css';
import profileImg from '../images/profile.png';
export default function AboutMe() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={profileImg} alt="Foto de perfil" className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Sobre mí</h2>
          <p className={styles.text}>
            Soy un desarrollador back-end especializado en Java y bases de datos. Apasionado por construir sistemas robustos, escalables y eficientes.
          </p>
        </div>
      </div>
    </section>
  );
}
