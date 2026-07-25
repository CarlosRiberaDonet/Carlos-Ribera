import styles from './css/Technologies.module.css';

export default function Technologies() {
  return (
    <section id="technologies" className={styles.techSection}>
      <h2 className={styles.title}>Tecnologías</h2>
      <div className={styles.container}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Back-End</h3>
          <ul className={styles.list}>
            <li>Java</li>
            <li>Spring Boot</li>
            <li>SQL</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Front-End</h3>
          <ul className={styles.list}>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Herramientas</h3>
          <ul className={styles.list}>
            <li>Git/GitHub</li>
            <li>IntelliJ IDEA</li>
            <li>Android Studio</li>
            <li>Visual Studio Code</li>
            <li>MySQL</li>
            <li>Postman</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Frameworks</h3>
          <ul className={styles.list}>
            <li>Spring Boot</li>
            <li>Hibernate</li>
            <li>JPA</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
