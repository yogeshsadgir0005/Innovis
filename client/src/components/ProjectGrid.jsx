import { ArrowUpRight } from 'lucide-react';

export default function ProjectGrid({ projects }) {
  return <section className="venture-list"><div className="container">{projects.map((project, index) => <a href={project.url} target="_blank" rel="noreferrer" className={`venture-project venture-project--${project.tone}`} key={project.name}>
    <div className="venture-art">
      <div className="venture-art-header"><span>{String(index + 1).padStart(2, '0')}</span><span>View live project <ArrowUpRight size={17}/></span></div>
      <div className="client-preview-frame"><img className="client-preview" src={project.preview} alt={`${project.name} product preview`}/></div>
      <div className="venture-brand-row"><img className="client-card-logo" src={project.image} alt={`${project.name} logo`}/></div>
    </div>
    <div className="venture-copy"><span>{project.category}</span><h2>{project.name}</h2><p>{project.summary}</p></div>
  </a>)}</div></section>;
}
