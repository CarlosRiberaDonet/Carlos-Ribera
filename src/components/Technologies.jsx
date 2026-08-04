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
            <li>SQL</li>
            <li>Spring Boot</li>
            <li>REST APIs</li>
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
          <h3 className={styles.cardTitle}>Base de Datos</h3>
          <ul className={styles.list}>
            <li>MySQL</li>
            <li>JPA / Hibernate</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>DevOps y Despliegue</h3>
          <ul className={styles.list}>
            <li>Docker</li>
            <li>Docker Compose</li>
            <li>Nginx Proxy Manager</li>
          </ul>
        </div> 
      </div>
    </section>
  );
}
