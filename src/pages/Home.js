import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'casa-horizonte',
    title: 'Casa Horizonte Norte',
    imageClass: 'project-image-1',
    description:
      'A stepped hillside house overlooking the valley, with concrete terraces, deep eaves, and timber interiors that frame the morning light.',
    meta: 'Residential · 320 m² · 2024 · Lo Barnechea',
  },
  {
    id: 'galeria-linea',
    title: 'Galería Línea Sur',
    imageClass: 'project-image-2',
    description:
      'A linear gallery inserted into a narrow urban site, using skylights and perforated metal to bring soft, even light to artworks.',
    meta: 'Cultural · 850 m² · 2023 · Lastarria',
  },
  {
    id: 'eje-norte',
    title: 'Edificio Eje Norte',
    imageClass: 'project-image-3',
    description:
      'Conversion of an industrial warehouse into flexible studios and offices, preserving the steel structure and introducing planted patios.',
    meta: 'Commercial · 540 m² · 2022 · Independencia',
  },
];

export const Home = () => {
  return (
    <>
      <main className="bento">
        <section id="home" className="bento-cell bento-hero">
          <p className="bento-kicker">Arqui2 — Design & Construction</p>
          <h1>From first sketch to finished building.</h1>
          <p className="bento-subtitle">
            Arqui2 is a design and construction firm based in Santiago, delivering
            residential, cultural, and commercial projects with clear geometry,
            simple materials, and precise daylight.
          </p>
          <div className="bento-actions">
            <Link to="/portfolio" className="btn-primary">View projects</Link>
            <a href="#about" className="btn-ghost">About</a>
          </div>
        </section>

        <section id="projects" className="bento-cell bento-projects-header">
          <h2>Selected projects</h2>
          <p>Built and ongoing work that explores topography, climate, and urban context.</p>
        </section>

        {projects.map((project) => (
          <article className="bento-cell bento-project" key={project.id}>
            <div className={`bento-project-image ${project.imageClass}`} />
            <div className="bento-project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="bento-project-meta">{project.meta}</p>
            </div>
          </article>
        ))}

        <section id="about" className="bento-cell bento-about">
          <h2>About Arqui2</h2>
          <p>
            Arqui2 is a design and construction firm working across housing,
            cultural spaces, and small public projects. Each commission begins
            with a careful reading of site, city, and everyday use.
          </p>
          <p>
            From early concept drawings to detailed documents and site supervision,
            we collaborate with clients, engineers, and contractors to deliver
            simple, buildable solutions that age well over time.
          </p>
        </section>

        <div className="bento-cell bento-services">
          <h3>Services</h3>
          <ul>
            <li>Architectural design for housing and mixed-use</li>
            <li>Cultural and exhibition spaces</li>
            <li>Renovations and adaptive reuse</li>
            <li>Interior architecture</li>
            <li>Construction management</li>
          </ul>
        </div>

        <div className="bento-cell bento-contact">
          <h3>Contact</h3>
          <p>contacto@arqui2.studio</p>
          <p>Santiago, Chile</p>
        </div>
      </main>

      <footer className="footer bento-footer">
        <p>© {new Date().getFullYear()} Arqui2. All rights reserved.</p>
        <p>Designed by <a href="mailto:liadesben@gmail.com" style={{ color: 'inherit' }}>liadesben@gmail.com</a></p>
      </footer>
    </>
  );
};
