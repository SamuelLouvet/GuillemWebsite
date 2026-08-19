import { PROJECTS } from '../data/projects.js';
import { COVERS } from '../data/covers.js';
import { useProjectModal } from '../context/ProjectModalContext.jsx';
import { staggerDelay } from '../utils/stagger.js';
import '../styles/projects.css';

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI'];

const DESCRIPTIONS = [
  <>J. S. Bach — BWV 995, 996, 1006a</>,
  <>Britten · Takemitsu · Ohana</>,
  <><span data-fr>Six commandes pour six cordes</span><span data-en>Six commissions for six strings</span></>,
  <><span data-fr>Études &amp; Fantaisies, op. 6 &amp; 31</span><span data-en>Studies &amp; Fantasias, op. 6 &amp; 31</span></>,
];

const METAS = [
  <>Album · 2025 · Ostinato</>,
  <><span data-fr>Récital · tournée 2026</span><span data-en>Recital · 2026 tour</span></>,
  <><span data-fr>Création · 2026 — 2028</span><span data-en>Premieres · 2026 — 2028</span></>,
  <><span data-fr>Album · à paraître 2027</span><span data-en>Album · 2027 release</span></>,
];

export default function Projects() {
  const { open } = useProjectModal();

  return (
    <section id="projets" className="section">
      <div className="section-head section-head-tight">
        <span className="section-no">III</span>
        <h2><span data-fr>Projets</span><span data-en>Projects</span></h2>
      </div>
      <p className="section-intro"><span data-fr>Enregistrements, cycles de concerts et commandes. Sélectionner une entrée pour le détail du programme.</span><span data-en>Recordings, concert cycles and commissions. Select an entry for the full programme.</span></p>
      <div className="project-grid">
        {PROJECTS.map((p, i) => {
          const cover = p.cover ? COVERS[p.cover] : null;
          return (
            <button
              type="button"
              key={p.title}
              className={`project-card${cover ? ' has-cover' : ''}`}
              data-reveal
              style={staggerDelay(i)}
              onClick={() => open(i)}
            >
              {cover ? (
                <img className="project-card-img" src={cover} alt={p.title} loading="lazy" />
              ) : (
                <span className="project-card-numeral" aria-hidden="true">{ROMAN[i]}</span>
              )}
              <span className="project-card-scrim" />
              <span className="project-card-body">
                <span className="project-card-top">
                  <span className="project-no">{p.no}</span>
                  <span className="project-meta">{METAS[i]}</span>
                </span>
                <span className="project-card-name">{p.title}</span>
                <span className="project-desc">{DESCRIPTIONS[i]}</span>
                <span className="project-link"><span data-fr>Programme</span><span data-en>Programme</span> <span className="project-link-arrow">→</span></span>
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
