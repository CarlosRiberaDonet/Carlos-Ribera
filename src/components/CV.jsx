// CV.jsx
import styles from './css/CV.module.css';

// Importa los iconos SVG o usa react-icons si tienes instalado
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const cvData = {
  name: 'Carlos Ribera Donet',
  title: 'Programador Junior',
  contact: {
    email: 'carlosriberadonet@gmail.com',
    phone: '638662620',
    linkedin: 'https://linkedin.com/in/carlos-r-335390276',
    github: 'https://github.com/CarlosRibera',
  },
  stack: [
    'Java', 'C#', 'JDBC', 'Hibernate', 'MySQL', 'eXist-db', 'XML', 'HTML', 'CSS'
  ],
  education: [
    { year: '2023 – actualidad', degree: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma, Stucom' },
    { year: '2025', degree: 'Big Data and Business Intelligence, CMA' },
    { year: '2025', degree: 'Curso Ciberseguridad, Cesur' },
    { year: '2024', degree: 'Curso Avanzado en Programación de Videojuegos con Unity y C#, Udemy' },
    { year: '2015', degree: 'Técnico en Sistemas Microinformáticos y Redes, CFP C.A.J' },
    { year: '2006', degree: 'Curso Programador de Aplicaciones Informáticas, CFP CAJ' },
  ],
  languages: [
    { language: 'Español', level: 'Nativo' },
    { language: 'Inglés', level: 'B1' },
  ],
  profile: `Desarrollador de software con formación en DAM. Experiencia en desarrollo de aplicaciones de escritorio con Java (Swing, JavaFX) y C# (.NET), y en gestión de bases de datos relacionales con MySQL. Participación en proyectos propios y colaborativos, aplicando control de versiones con Git, patrones de diseño y buenas prácticas. Formación previa en soporte técnico, con capacidad demostrada en diagnóstico y resolución de incidencias hardware/software.`,
  projects: [
    {
      title: 'MagicManager',
      description:
        'Aplicación Java para gestionar y visualizar un catálogo de más de 500.000 cartas de Magic: The Gathering. Integración de una API externa para obtener y procesar datos en formato JSON, almacenándolos localmente. Interfaz gráfica interactiva desarrollada con Java Swing y JavaFX. Implementación de estructuras de datos avanzadas, optimizando la eficiencia.'
    },
    {
      title: 'EneaCoachingProfesional – Plataforma Web',
      description:
        'Desarrollo frontend con React, HTML y CSS para una web multimedia. Componentes reutilizables y dinámicos, integración de contenido optimizada y diseño responsivo para una experiencia de usuario fluida en cualquier dispositivo.'
    },
    {
      title: 'iFix – Gestor de Reparaciones de Telefonía e Informática',
      description:
        'Aplicación de escritorio en Java (Swing & MySQL) para la gestión integral de talleres de reparación: clientes, dispositivos y reparaciones. Incluye operaciones CRUD, validaciones y una interfaz intuitiva.'
    },
  ],
  experience: [
    {
      role: 'Profesor Particular (Independiente)',
      period: '2024 – actualidad',
      place: 'Valencia',
      details: [
        'Impartición de clases particulares de Java, redes y administración de sistemas a estudiantes en formación.'
      ],
    },
    {
      role: 'Técnico Informático (Independiente)',
      period: '2021 – actualidad',
      place: 'Valencia',
      details: [
        'Mantenimiento y soporte técnico de hardware y software para pequeñas empresas y particulares.',
        'Instalación, configuración y optimización de redes locales.',
        'Diagnóstico y reparación de dispositivos electrónicos.'
      ],
    },
    {
      role: 'Técnico Informático, Iriparo',
      period: '2017 – 2021',
      place: 'Valencia, Barcelona',
      details: [
        'Diagnóstico y reparación de equipos informáticos.',
        'Administración y gestión de sistemas operativos.',
        'Reparación de dispositivos electrónicos.'
      ],
    },
    {
      role: 'Técnico Informático, Futursat',
      period: '2016 – 2017',
      place: 'Valencia',
      details: [
        'Mantenimiento y reparación de hardware y software en entorno oficina.',
        'Reparación de dispositivos electrónicos.',
        'Microsoldadura.'
      ],
    },
    {
      role: 'Técnico Informático, Asiger Vistabella',
      period: '2015 – 2016',
      place: 'Valencia',
      details: [
        'Instalación, configuración y mantenimiento de equipos cliente y servidores.',
        'Configuración y administración de redes locales.',
        'Resolución de problemas técnicos y atención al personal sanitario.'
      ],
    },
  ],
};

export default function CV() {
  return (
    <section id="cv" className={styles.cvSection}>
      <h2 className={styles.title}>Currículum</h2>
      
      <div className={styles.header}>
        <h1 className={styles.name}>{cvData.name}</h1>
        <h3 className={styles.role}>{cvData.title}</h3>
        <div className={styles.contact}>
          <a href={`mailto:${cvData.contact.email}`} className={styles.email}>{cvData.contact.email}</a>
          <span className={styles.phone}>{cvData.contact.phone}</span>
          <a href={cvData.contact.linkedin} target="_blank" rel="noreferrer" className={styles.iconLink}><FaLinkedin size={20} /></a>
          <a href={cvData.contact.github} target="_blank" rel="noreferrer" className={styles.iconLink}><FaGithub size={20} /></a>
        </div>
      </div>

      <section className={styles.section}>
        <h3>Perfil</h3>
        <p>{cvData.profile}</p>
      </section>

      <section className={styles.section}>
        <h3>Experiencia Profesional</h3>
        {cvData.experience.map(({ role, period, place, details }, i) => (
          <article key={i} className={styles.job}>
            <h4>{role}</h4>
            <p className={styles.periodPlace}>{period} | {place}</p>
            <ul>
              {details.map((detail, j) => (
                <li key={j}>{detail}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className={styles.section}>
        <h3>Tecnologías</h3>
        <ul className={styles.techStack}>
          {cvData.stack.map((tech, i) => (
            <li key={i} className={styles.techItem}>{tech}</li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h3>Educación</h3>
        <ul className={styles.list}>
          {cvData.education.map(({ year, degree }, i) => (
            <li key={i}>
              <span className={styles.year}>{year}</span> — {degree}
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
