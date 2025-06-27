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
            <li>C#</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Front-End</h3>
          <ul className={styles.list}>
            <li>HTML5</li>
            <li>CSS3</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Bases de Datos</h3>
          <ul className={styles.list}>
            <li>MySQL</li>
            <li>JDBC</li>
            <li>ORM (Hibernate)</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Herramientas</h3>
          <ul className={styles.list}>
            <li>Netbeans</li>
            <li>Unity</li>
            <li>VS Code</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
