// Projects.jsx
import { useState } from 'react';
import styles from './css/Projects.module.css';
import { FaGithub } from 'react-icons/fa';
import cinehub from '../images/cinehub.png';
import magic from '../images/magic.png';
import otro from '../images/otro.png';

const projects = [
  {
    title: 'CineHub',
    description:
      'CineHub es una aplicación web que centraliza la exploración de películas y filmografías, resolviendo la dispersión de información mediante el consumo estructurado de la API TMDB.' +
      'Backend: Java con Spring Boot. Gestiona filtros, paginación y validación de parámetros, ofreciendo una capa de datos limpia y desacoplada. Manejo de errores implementado para robustez y escalabilidad.' +
      'Frontend: JavaScript, HTML y CSS. Consume el backend y presenta la información de forma dinámica, permitiendo búsqueda, detalles y visualización de tráilers.' + 
      'Lo que demuestra: separación frontend/backend, diseño orientado a servicios, consumo controlado de APIs externas y simulación de un entorno profesional de desarrollo web.',
    technologies: ['Java', 'Spring Boot', 'JavaScript', 'HTML', 'CSS', 'JSON', 'REST API'],
    link: 'https://github.com/CarlosRiberaDonet/CineHub',
    image: cinehub,
  },
   {
    title: 'Website',
    description: 'EneaCoachingProfesional es una plataforma web de contenido profesional que organiza recursos y material de desarrollo para usuarios.' +
    'Frontend: React, HTML y CSS.' +
    'Rol: Desarrollo de componentes reutilizables y dinámicos, integración de contenido y diseño responsivo para asegurar una experiencia de usuario consistente en distintos dispositivos.' +
    'Lo que demuestra: capacidad para entregar un producto funcional a un cliente real, diseño de componentes escalables, adaptación a requisitos de UX y colaboración en un entorno profesional.' ,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/CarlosRiberaDonet/web-eneacoachingprofesional',
    image: otro,
  },
  {
    title: 'Magic Card Manager',
    description:
      'MagicManager es una aplicación de escritorio para gestionar y explorar un catálogo de más de 500.000 cartas de Magic: The Gathering, diseñada para facilitar la búsqueda y visualización eficiente de información.' +
      'Backend/Procesamiento de datos: Integración de API externa en JSON, almacenamiento local optimizado y uso de estructuras de datos avanzadas para mejorar rendimiento. ' +
      'Lo que demuestra: capacidad para manejar grandes volúmenes de datos, organizar información de manera eficiente y diseñar interfaces gráficas funcionales, mostrando disciplina técnica y estructuración lógica de software.',
    technologies: ['Java', 'JSON', 'Java Swing', 'REST API'],
    link: 'https://github.com/CarlosRiberaDonet/MagicManager',
    image: magic,
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);

  const prevProject = () => setIndex((index - 1 + projects.length) % projects.length);
  const nextProject = () => setIndex((index + 1) % projects.length);

  const project = projects[index];

  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>Proyectos</h2>
      <div className={styles.container}>
        <button
          onClick={prevProject}
          className={styles.navButton}
          aria-label="Proyecto anterior"
        >
          ‹
        </button>
        <article className={styles.projectCard}>
  <h3 className={styles.projectTitle}>{project.title}</h3>
  <img
    src={project.image}
    alt={`Vista previa de ${project.title}`}
    className={styles.image}
  />
  <ul className={styles.techList}>
    {project.technologies.map((tech, i) => (
      <li key={i} className={styles.techItem}>
        {tech}
      </li>
    ))}
  </ul>
  <p className={styles.description}>{project.description}</p>
    <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.githubLink}
    aria-label={`GitHub - ${project.title}`}
  >
    <FaGithub size={48} />
  </a>
</article>
        <button
          onClick={nextProject}
          className={styles.navButton}
          aria-label="Proyecto siguiente"
        >
          ›
        </button>
      </div>
    </section>
  );
}

