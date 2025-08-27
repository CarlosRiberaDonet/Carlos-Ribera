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
      'CineHub es una aplicación web que consume la API de TMDB para mostrar información actualizada sobre películas y series.' +
      'El backend está desarrollado en Java con Spring Boot, gestionando la lógica de negocio y las solicitudes a la API,' +
      'mientras que el frontend utiliza JavaScript, HTML y CSS para presentar la información de forma dinámica y visualmente atractiva. CineHub permite explorar títulos,' + 
      'ver detalles y trailers.',
    technologies: ['Java', 'Spring Boot', 'JavaScript', 'HTML', 'CSS', 'JSON', 'REST API'],
    link: 'https://github.com/CarlosRiberaDonet/peliculasonlinehd',
    image: cinehub,
  },
  {
    title: 'Magic Card Manager',
    description:
      'Aplicación de escritorio para búsqueda avanzada de cartas por nombre y edición, además de ordenar resultados por nombre, edición, idioma, número de coleccionista,' +
      ' rareza y precio. Gestión personalizada de listas de cartas y visualización detallada con imágenes. Actualizaciones automáticas desde API oficial vía REST.',
    technologies: ['Java', 'JSON', 'Java Swing', 'REST API'],
    link: 'https://github.com/CarlosRiberaDonet/MagicManager',
    image: magic,
  },
  {
    title: 'Website',
    description: 'Desarrollo completo de la web de EneaCoachingProfesional, incluyendo diseño responsivo, integración de contenido y optimización para experiencia de usuario.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/CarlosRiberaDonet/web-eneacoachingprofesional',
    image: otro,
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

