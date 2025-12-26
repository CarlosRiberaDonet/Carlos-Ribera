import styles from './css/Education.module.css';

const educationData = [
  { year: '2023 – 2025', degree: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma, Stucom' },
  { year: '2025', degree: 'Big Data and Business Intelligence, CMA' },
  { year: '2025', degree: 'Curso Ciberseguridad, Cesur' },
  { year: '2024', degree: 'Curso Avanzado en Programación de Videojuegos con Unity y C#, Udemy' },
  { year: '2016', degree: 'Mantenimiento Electrónico, Ceipro' },
  { year: '2013 – 2015', degree: 'Técnico en Sistemas Microinformáticos y Redes, CFP C.A.J' },
  { year: '2006', degree: 'Curso Programador de Aplicaciones Informáticas, CFP CAJ' },
];

export default function EducationTimeline() {
  return (
    <section id="education" className={styles.section}>
      <h2 className={styles.title}>Educación</h2>
      <div className={styles.timeline}>
        {educationData.map(({ year, degree }, i) => (
          <div
            key={i}
            className={`${styles.timelineItem} ${i % 2 === 0 ? styles.left : styles.right}`}
          >
            <div className={styles.content}>
              <div className={styles.year}>{year}</div>
              <p className={styles.degree}>{degree}</p>
            </div>
          </div>
        ))}
        <div className={styles.line} />
      </div>
    </section>
  );
}
