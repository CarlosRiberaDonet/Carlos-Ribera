import styles from './css/Projects.module.css';
import magicImg from '../images/magic.png';

const projects = [
  {
    title: 'Magic Card Manager',
    description:
    'Aplicación de escritorio para búsqueda avanzada de cartas por nombre y edición, además de ordenar resultados por nombre, edición, idioma, número de coleccionista, rareza y precio. ' +
    'Gestión personalizada de listas de cartas y visualización detallada con imágenes. Actualizaciones automáticas desde API oficial vía REST.',
    technologies: ['JAVA', 'JSON', 'JAVA SWING'],
    link: 'https://github.com/CarlosRiberaDonet/MagicManager',
    image: magicImg,
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>Proyectos</h2>
        <div className={styles.projectList}>
          {projects.map((project, i) => (
            <article key={i} className={styles.project}>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className={styles.projectLink}
              >
                <div className={styles.info}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.description}>{project.description}</p>
                  <ul className={styles.techList}>
                    {project.technologies.map((tech, j) => (
                      <li key={j} className={styles.techItem}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.imageContainer}>
                  <img
                    src={project.image}
                    alt={`Vista previa de ${project.title}`}
                    className={styles.image}
                  />
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
