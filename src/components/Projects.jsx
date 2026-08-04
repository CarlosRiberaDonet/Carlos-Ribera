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
      'Sistema de gestión de más de 500.000 cartas de Magic: The Gathering construido a partir de la integración de múltiples fuentes de datos externas.',

    problem:
      'Las APIs presentaban estructuras y niveles de información incompatibles entre sí. Scryfall ofrecía datos completos de las cartas, pero sin precios ni una relación consistente con CardMarket. CardMarket aportaba precios, pero solo para una parte del catálogo mediante identificadores no universales. CardTrader añadía información adicional, aunque con un modelo de datos distinto que no encajaba de forma directa con el resto.',

    solution:
      'Se diseñó un sistema de normalización y correlación de datos para construir un puente entre Scryfall, CardMarket y CardTrader. Se implementó una base de datos propia que unifica entidades de cartas, variantes y precios, resolviendo inconsistencias entre identificadores y permitiendo consultas consistentes.',

    highlights: [
      'Integración de 3 APIs heterogéneas (Scryfall, CardMarket, CardTrader)',
      'Resolución de inconsistencias de identificadores',
      'Construcción de base de datos unificada',
      'Normalización de datos de múltiples formatos',
      'Sistema propio de correlación entre fuentes externas'
    ],
    technologies: ['Java', 'Spring Boot', 'MySQL', 'REST API', 'JSON', 'Docker'],
    link: '',
    webLink: 'https://magic-investor.duckdns.org/',
    image: magic,
  },

  {
    title: 'iFix Repair Manager',

    overview:
      'Aplicación de escritorio desarrollada para la gestión integral de un taller de reparación de dispositivos electrónicos. Centraliza clientes, dispositivos, reparaciones, facturación y documentación legal sobre una base de datos MySQL compartida en red local.',

    problem:
      'El taller necesitaba sustituir la gestión manual por una aplicación capaz de gestionar simultáneamente clientes, dispositivos y reparaciones desde varios equipos, garantizando la integridad de los datos y automatizando procesos como la emisión de facturas, recibos y el seguimiento del estado de las reparaciones.',

    solution:
      'Se diseñó una arquitectura de escritorio basada en Java Swing, JDBC y MySQL, implementando un modelo relacional normalizado y una arquitectura en capas (DAO, Controller y presentación). El sistema permite gestionar el ciclo completo de una reparación, incluyendo múltiples intervenciones técnicas, generación automática de documentación en PDF y acceso concurrente a una base de datos compartida.',

    highlights: [
      'Arquitectura en capas (DAO, Controller y Swing)',
      'Modelo relacional normalizado en MySQL con relaciones N:M',
      'Acceso a datos mediante JDBC y SQL puro',
      'Gestión completa de clientes, dispositivos y reparaciones',
      'Búsqueda y filtrado dinámico mediante múltiples criterios',
      'Generación automática de facturas y recibos en PDF con cálculo de IVA',
      'Funcionamiento multiusuario sobre red local'
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
      'Sistema de búsqueda de películas con backend en Spring Boot y consumo de TMDB.',

    problem:
      'Gestión compleja de filtros dinámicos y normalización de datos provenientes de una API externa.',

    solution:
      'Backend en Spring Boot con API REST propia que centraliza la lógica de filtrado y transformación.',

    highlights: [
      'API REST propia',
      'Filtros dinámicos',
      'Arquitectura en capas',
      'Integración con TMDB'
    ],

    technologies: ['Java', 'Spring Boot', 'REST API', 'JSON', 'JavaScript', 'Docker'],
    link: 'https://github.com/CarlosRiberaDonet/CineHub',
    webLink: 'https://cine-hub.duckdns.org/',
    image: cinehub,
  },

  {
    title: 'Website Cliente',

    overview:
      'Aplicación web en React desarrollada para cliente real con diseño responsive.',

    problem:
      'Necesidad de construir una interfaz mantenible y escalable para un entorno real.',

    solution:
      'Arquitectura basada en componentes reutilizables y diseño responsive.',

    highlights: [
      'Proyecto real para cliente',
      'Componentes reutilizables',
      'Diseño responsive',
      'Separación clara de UI',
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