export const projects = [
  {
    id: 'casa-horizonte',
    title: 'Casa Horizonte Norte',
    imageClass: 'project-image-1',
    category: 'Residential',
    area: '320 m²',
    year: '2024',
    location: 'Lo Barnechea',
    description:
      'A stepped hillside house overlooking the valley, with concrete terraces, deep eaves, and timber interiors that frame the morning light.',
    fullDescription:
      'The house is organized as a series of horizontal planes that follow the natural slope of the terrain. Concrete retaining walls define each terrace, while deep overhanging eaves protect interior spaces from the harsh afternoon sun. Timber ceilings and built-in joinery bring warmth to the structural concrete, creating a home that feels grounded in its landscape.',
  },
  {
    id: 'galeria-linea',
    title: 'Galería Línea Sur',
    imageClass: 'project-image-2',
    category: 'Cultural',
    area: '850 m²',
    year: '2023',
    location: 'Lastarria',
    description:
      'A linear gallery inserted into a narrow urban site, using skylights and perforated metal to bring soft, even light to artworks.',
    fullDescription:
      'The gallery occupies a long, narrow plot between two party walls in the Lastarria neighborhood. A continuous skylight running the full length of the space provides diffuse, north-facing daylight. Perforated metal screens mediate between the gallery interior and the street, offering controlled views while maintaining a sense of urban connection.',
  },
  {
    id: 'eje-norte',
    title: 'Edificio Eje Norte',
    imageClass: 'project-image-3',
    category: 'Commercial',
    area: '540 m²',
    year: '2022',
    location: 'Independencia',
    description:
      'Conversion of an industrial warehouse into flexible studios and offices, preserving the steel structure and introducing planted patios.',
    fullDescription:
      'The original steel frame of the 1960s warehouse was retained and celebrated as the main architectural element. New interventions — planted patios cut into the floor plate, lightweight mezzanines, and translucent polycarbonate infill — bring light and nature into the deep plan while respecting the industrial character of the building.',
  },
  {
    id: 'casa-piedra',
    title: 'Casa Piedra Blanca',
    imageClass: 'project-image-4',
    category: 'Residential',
    area: '210 m²',
    year: '2023',
    location: 'Pirque',
    description:
      'A compact rural house built with rammed earth walls and a folded steel roof, designed for passive cooling in the dry Central Valley.',
    fullDescription:
      'Set among vineyards in the Maipo Valley, the house uses thick rammed earth walls to moderate the extreme temperature swings of the Chilean Central Valley. A folded Corten steel roof collects rainwater and shades the south-facing terraces. The interior is organized around a single large room that opens fully to the landscape.',
  },
  {
    id: 'pabellon-parque',
    title: 'Pabellón Parque Forestal',
    imageClass: 'project-image-5',
    category: 'Cultural',
    area: '120 m²',
    year: '2022',
    location: 'Parque Forestal',
    description:
      'A temporary pavilion built from cross-laminated timber panels, designed to host outdoor concerts and dismantled without waste.',
    fullDescription:
      'The pavilion was designed for complete disassembly and reuse. All CLT panels are bolted, not glued or nailed, allowing them to be unbolted and repurposed at the end of the season. The structure creates a sheltered outdoor room beneath the park\'s existing tree canopy, with an angled roof plane that directs sound toward the audience.',
  },
  {
    id: 'oficinas-matta',
    title: 'Oficinas Matta',
    imageClass: 'project-image-6',
    category: 'Commercial',
    area: '380 m²',
    year: '2021',
    location: 'Barrio Italia',
    description:
      'Renovation of a 1940s house into open-plan creative offices, retaining the original mosaic floors and timber roof structure.',
    fullDescription:
      'The original house on Avenida Matta was carefully dismantled and rebuilt around its best elements: the geometric mosaic floor tiles, the exposed timber roof trusses, and the rhythm of French windows onto the street. A new mezzanine level is suspended from the roof structure, leaving the original floor plane fully legible.',
  },
];

export const Portfolio = () => {
  return (
    <>
      <main className="portfolio-main">
        <header className="portfolio-header">
          <p className="bento-kicker">Arqui2 — Portfolio</p>
          <h1>All projects</h1>
          <p className="portfolio-intro">
            A complete record of built work, from 2021 to the present.
          </p>
        </header>

        <div className="portfolio-grid">
          {projects.map((project) => (
            <article className="portfolio-card" key={project.id}>
              <div className={`portfolio-card-image ${project.imageClass}`} />
              <div className="portfolio-card-body">
                <span className="portfolio-card-category">{project.category}</span>
                <h2>{project.title}</h2>
                <p className="portfolio-card-desc">{project.description}</p>
                <p className="portfolio-card-full">{project.fullDescription}</p>
                <p className="portfolio-card-meta">
                  {project.area} · {project.year} · {project.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer className="footer bento-footer">
        <p>© {new Date().getFullYear()} Arqui2. All rights reserved.</p>
      </footer>
    </>
  );
};
