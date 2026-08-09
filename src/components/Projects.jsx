import { useState } from 'react';
import styles from './css/Projects.module.css';
import { FaGithub } from 'react-icons/fa';

import cinehub from '../images/cinehub.png';
import magic from '../images/magic.png';
import ifix from '../images/ifix.png';
import otro from '../images/otro.png';

const projects = [
  {
    title: 'Magic Card Manager',

    overview:
      'Plataforma de gestión de colecciones y análisis de precios de cartas de Magic: The Gathering, construida sobre más de 500.000 registros procedentes de múltiples fuentes externas.',

    problem:
      'Scryfall, CardMarket y CardTrader utilizan estructuras, identificadores y niveles de información diferentes. Scryfall proporciona los datos principales de las cartas, mientras que CardMarket y CardTrader aportan información de precios con identificadores que no siempre permiten relacionar directamente los registros entre fuentes.',

    solution:
      'Diseñé un modelo de datos propio y un sistema de normalización y correlación que unifica la información de las tres fuentes. El backend desacopla los proveedores externos mediante una API REST propia y permite consultar los datos mediante filtros dinámicos.',

    highlights: [
      'Integración y normalización de 3 APIs externas: Scryfall, CardMarket y CardTrader.',
      'Sistema propio de correlación para relacionar registros sin identificadores comunes.',
      'Construcción de base de datos unificada',
      'Importación de más de 500.000 registros desde un JSON de más de 3 GB mediante procesamiento en streaming con Jackson.',
      'Persistencia híbrida con JPA/Hibernate y JDBC según las necesidades de cada consulta.',
      'Consultas dinámicas con hasta 8 filtros combinables.',
      'Optimización SQL que redujo tiempos de respuesta de 10-12 segundos a pocos milisegundos.',
      'API REST propia con 14 endpoints.',
      'Autenticación y autorización mediante Spring Security y JWT.',
      'Dockerización y despliegue en Oracle Cloud mediante Docker Compose, proxy inverso y SSL.',
    ],
    technologies: ['Java', 'Spring Boot', 'MySQL', 'REST API', 'JPA/Hibernate','JSON', 'JDBC', 'Jackson','Docker'],
    link: '',
    webLink: 'https://magic-investor.duckdns.org/',
    image: magic,
  },

  {
    title: 'iFix Repair Manager',

    overview:
      'Aplicación de escritorio para la gestión de un taller de reparación de dispositivos electrónicos. Centraliza clientes, dispositivos, reparaciones, facturación y documentación sobre una base de datos MySQL compartida en red local.',

    problem:
      'El taller necesitaba sustituir la gestión manual por una aplicación multiusuario capaz de gestionar simultáneamente clientes, dispositivos y reparaciones desde varios puestos, manteniendo la integridad de los datos y automatizando la generación de documentación.',

    solution:
      'Diseñé una arquitectura en capas basada en Java Swing, JDBC y MySQL, con separación entre acceso a datos, lógica de aplicación y presentación. El modelo relacional permite gestionar múltiples reparaciones e intervenciones asociadas a cada dispositivo, mientras que la aplicación soporta acceso concurrente desde varios puestos sobre una base de datos compartida.',

    highlights: [
      'Arquitectura en capas (DAO, Controller y Swing)',
      'Modelo relacional normalizado en MySQL con relaciones N e integridad referencial.',
      'Acceso a datos mediante JDBC y SQL puro',
      'Gestión de clientes, dispositivos, reparaciones y estados del proceso.',
      'Búsqueda y filtrado dinámico mediante múltiples criterios',
      'Acceso concurrente desde varios puestos sobre una base de datos MySQL compartida en red local.',
      'Generación automática de facturas y recibos en PDF, incluyendo cálculo de IVA.',
      'Gestión de documentación asociada a las reparaciones.'
    ],

    technologies: [
      'Java',
      'Swing',
      'JDBC',
      'MySQL',
      'iText PDF',
      'Maven'
    ],

    link: 'https://github.com/CarlosRiberaDonet/iFix-Repair-Manager',
    image: ifix,
  },

  {
    title: 'CineHub',

    overview:
      'Aplicación web para consultar películas y series, desarrollada como Trabajo de Fin de Grado y calificada con un 10. El backend actúa como intermediario entre el frontend y la API externa de TMDB.',

    problem:
      'El frontend dependía directamente de la estructura y los datos proporcionados por TMDB, mientras que las búsquedas requerían combinar diferentes criterios de filtrado y transformar las respuestas externas a un modelo propio.',

    solution:
      'Diseñé un backend con Spring Boot y una API REST propia que desacopla el frontend de TMDB. El servidor centraliza la lógica de búsqueda, transforma las respuestas externas y las expone mediante un modelo de datos propio.',

    highlights: [
      'API REST propia con 7 endpoints.',
      'Integración con la API de TMDB mediante consumo de servicios externos.',
      'Transformación de respuestas JSON externas a un modelo de datos propio.',
      'Filtros dinámicos para búsquedas combinando múltiples criterios.',
      'Arquitectura en capas para separar controladores, lógica de negocio y acceso a datos.',
      'Persistencia de usuarios y credenciales en MySQL.',
      'Autenticación y almacenamiento seguro de contraseñas.',
      'Aplicación desplegada y mantenida en producción durante casi un año.',
      'Dockerización y despliegue en Oracle Cloud con dominio propio y SSL.'
    ],

    technologies: ['Java', 'Spring Boot', 'REST API', 'JSON', 'JavaScript', 'Docker'],
    link: 'https://github.com/CarlosRiberaDonet/CineHub',
    webLink: 'https://cine-hub.duckdns.org/',
    image: cinehub,
  },

  {
    title: 'Website Eneacoaching Profesional',

    overview:
    'Sitio web desarrollado en React para un cliente real, desde la definición de requisitos hasta la publicación y mantenimiento en producción. Proyecto entregado en aproximadamente un mes.',
    problem:
    'El cliente necesitaba una presencia web profesional que pudiera presentar sus servicios de forma clara en distintos dispositivos y facilitar su visibilidad en buscadores.',
    solution:
      'Desarrollé una interfaz responsive basada en componentes reutilizables, coordinando directamente con el cliente los requisitos, diseño y evolución del sitio. Tras su publicación, alcanzó la primera página de Google en aproximadamente tres meses.',

    highlights: [
      'Proyecto desarrollado para cliente real.',
      'Desarrollo con React y componentes reutilizables.',
      'Diseño responsive adaptado a distintos dispositivos.',
      'Definición de requisitos y coordinación directa con el cliente.',
      'Publicación y mantenimiento en producción.',
      'Optimización orientada a SEO.',
      'Primera página de Google alcanzada en aproximadamente 3 meses.'
    ],

    technologies: ['React', 'HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/CarlosRiberaDonet/web-eneacoachingprofesional',
    webLink: 'https://eneacoachingprofesional.es/',
    image: otro,
  }
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const project = projects[index];

  const prev = () =>
    setIndex((i) => (i - 1 + projects.length) % projects.length);

  const next = () =>
    setIndex((i) => (i + 1) % projects.length);

  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>Proyectos</h2>

      <div className={styles.container}>
        <button className={styles.navButton} onClick={prev}>
          ‹
        </button>

        <article key={project.title} className={styles.card}>
          <div className={styles.left}>

            <h3 className={styles.projectTitle}>
              {project.title}
            </h3>

            <div className={styles.block}>
              <h4>Contexto</h4>
              <p>{project.overview}</p>
            </div>

            <div className={styles.block}>
              <h4>Problema</h4>
              <p>{project.problem}</p>
            </div>

            <div className={styles.block}>
              <h4>Solución</h4>
              <p>{project.solution}</p>
            </div>

            <ul className={styles.highlights}>
              {project.highlights.map((item, i) => (
                <li key={i} className={styles.highlightItem}>
                  {item}
                </li>
              ))}
            </ul>

            <div className={styles.techGrid}>
              {project.technologies.map((t, i) => (
                <span key={i} className={styles.tech}>
                  {t}
                </span>
              ))}
            </div>

            <div className={styles.links}>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className={styles.github}
              >
                <FaGithub size={28} />
                Código
              </a>

              {project.webLink && (
                <a
                  href={project.webLink}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.demo}
                >
                  Demo
                </a>
              )}
            </div>

          </div>

          <div className={styles.right}>
            {project.webLink ? (
              <a
                href={project.webLink}
                target="_blank"
                rel="noreferrer"
                className={styles.imageLink}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.image}
                />
              </a>
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className={styles.image}
              />
            )}
          </div>
        </article>

        <button className={styles.navButton} onClick={next}>
          ›
        </button>
      </div>
    </section>
  );
}