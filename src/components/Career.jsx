import seasonPhoto from '../assets/images/toulouse-season-announcement.jpg';
import { staggerDelay } from '../utils/stagger.js';
import '../styles/career.css';

const AWARDS = [
  { year: '2024', fr: 'Prix de la Critique musicale — révélation instrumentale', en: "Music Critics' Prize — instrumental discovery of the year" },
  { year: '2022', fr: 'Premier Prix, Concours international de guitare de Barcelone', en: 'First Prize, Barcelona International Guitar Competition' },
  { year: '2021', fr: "Lauréat de la Fondation Marguerite d'Ostal", en: "Laureate, Marguerite d'Ostal Foundation" },
  { year: '2019', fr: 'Mention spéciale du jury, Guitar Foundation of America', en: 'Special jury mention, Guitar Foundation of America' },
];

const HALLS = ['Wigmore Hall, London', 'Auditorium du Louvre, Paris', 'Palau de la Música Catalana', "Festival de La Roque-d'Anthéron", 'Rheingau Musik Festival'];

const TRAINING = [
  { fr: 'CNSMD de Paris — Master, mention très bien à l\'unanimité', en: "CNSMD Paris — Master's, unanimous distinction" },
  { fr: 'Hochschule für Musik Basel — Solistendiplom', en: 'Hochschule für Musik Basel — Solistendiplom' },
  { fr: 'Professeur, Conservatoire de Toulouse (depuis 2023)', en: 'Professor, Conservatoire de Toulouse (since 2023)' },
  { fr: 'Directeur artistique, Académie de Vallespir', en: 'Artistic director, Vallespir Academy' },
];

export default function Career() {
  return (
    <section id="parcours" className="section section-alt">
      <div className="section-head">
        <span className="section-no">II</span>
        <h2><span data-fr>Parcours &amp; distinctions</span><span data-en>Career &amp; distinctions</span></h2>
      </div>

      <figure className="season-photo photo-frame" data-reveal-scale>
        <img src={seasonPhoto} alt="Guillem Louvet de Montella et Rafaël Léger, annonce de la saison Toulouse Guitare 2023/2024" loading="lazy" />
        <figcaption>
          <span data-fr>Annonce de saison — avec Rafaël Léger</span><span data-en>Season announcement — with Rafaël Léger</span>
          <span className="season-photo-meta">Toulouse Guitare 2023/2024 · juin 2023</span>
        </figcaption>
      </figure>

      <div className="parcours-grid">
        <div>
          <h3 className="col-title"><span data-fr>Distinctions</span><span data-en>Awards</span></h3>
          <div className="award-list">
            {AWARDS.map((a, i) => (
              <div className={`award-row${i === AWARDS.length - 1 ? ' award-row-last' : ''}`} key={a.year + a.fr} data-reveal style={staggerDelay(i)}>
                <span className="award-year">{a.year}</span><span><span data-fr>{a.fr}</span><span data-en>{a.en}</span></span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="col-title"><span data-fr>Salles &amp; festivals</span><span data-en>Halls &amp; festivals</span></h3>
          <div className="plain-list">
            {HALLS.map((h, i) => (
              <div className={`plain-row${i === HALLS.length - 1 ? ' plain-row-last' : ''}`} key={h} data-reveal style={staggerDelay(i)}>{h}</div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="col-title"><span data-fr>Formation &amp; transmission</span><span data-en>Training &amp; teaching</span></h3>
          <div className="plain-list plain-list-loose">
            {TRAINING.map((t, i) => (
              <div className={`plain-row${i === TRAINING.length - 1 ? ' plain-row-last' : ''}`} key={t.fr} data-reveal style={staggerDelay(i)}>
                <span data-fr>{t.fr}</span><span data-en>{t.en}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
