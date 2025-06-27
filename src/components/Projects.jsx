// Projects.jsx
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import styles from './css/Projects.module.css';
import magic from '../images/magic.png';
import otro from '../images/otro.png';

const projects = [
  {
    title: 'Magic Card Manager',
    description:
      'Aplicación de escritorio para búsqueda avanzada de cartas por nombre y edición, además de ordenar resultados por nombre, edición, idioma, número de coleccionista, rareza y precio. Gestión personalizada de listas de cartas y visualización detallada con imágenes. Actualizaciones automáticas desde API oficial vía REST.',
    technologies: ['JAVA', 'JSON', 'JAVA SWING'],
    link: 'https://github.com/CarlosRiberaDonet/MagicManager',
    image: magic,
  },
  {
    title: 'Segundo Proyecto',
    description: 'Otro proyecto con funcionalidades distintas y un diseño limpio y responsivo.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/CarlosRiberaDonet/SegundoProyecto',
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
          <img
            src={project.image}
            alt={`Vista previa de ${project.title}`}
            className={styles.image}
          />
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className={styles.githubLink}
            aria-label={`GitHub - ${project.title}`}
          >
            <FaGithub />
          </a>
          <ul className={styles.techList}>
            {project.technologies.map((tech, i) => (
              <li key={i} className={styles.techItem}>
                {tech}
              </li>
            ))}
          </ul>
          <p className={styles.description}>{project.description}</p>
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

