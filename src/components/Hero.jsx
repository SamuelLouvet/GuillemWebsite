import heroImage from '../assets/images/toulouse-auditorium-1.jpg';
import NavLink from './NavLink.jsx';
import { useLightbox } from '../context/LightboxContext.jsx';
import '../styles/hero.css';

export default function Hero() {
  const { open } = useLightbox();

  return (
    <section id="top" className="hero">
      <div className="hero-media" data-par="0.05">
        <img src={heroImage} alt="Guillem Louvet de Montella en concert, auditorium de Toulouse" data-reveal-scale />
        <div className="hero-scrim" />
      </div>

      <div className="hero-content">
        <div className="eyebrow" data-reveal><span data-fr>Saison 2026 — 2027 · Récital &amp; création</span><span data-en>Season 2026 — 2027 · Recital &amp; premieres</span></div>
        <h1 className="hero-title" data-reveal>Guillem<br />Louvet de<br />Montella</h1>
        <div className="hero-lede" data-reveal>
          <p data-fr>Guitariste classique. Un répertoire tenu entre les <em>Suites</em> de Bach, l'école espagnole du XIX<sup>e</sup> siècle et la musique de notre temps.</p>
          <p data-en>Classical guitarist. A repertoire held between the Bach suites, the nineteenth-century Spanish school, and the music of our own time.</p>
        </div>
        <div className="hero-actions" data-reveal>
          <button type="button" className="btn btn-watch" onClick={() => open('main')}>
            <span className="btn-watch-icon">▶</span>
            <span data-fr>Regarder</span><span data-en>Watch</span>
          </button>
          <NavLink to="agenda" no="IV" title="Agenda" className="btn btn-outline">
            <span data-fr>Prochaines dates</span><span data-en>Upcoming dates</span>
          </NavLink>
          <NavLink to="projets" no="III" title="Projets" className="btn btn-ghost">
            <span data-fr>Projets</span><span data-en>Projects</span>
          </NavLink>
        </div>
      </div>

      <div className="marquee">
        <div className="marquee-track">
          <div className="marquee-set"><span>12.10 — Auditorium du Louvre, Paris</span><span className="dot">◆</span><span>04.11 — Palau de la Música, Barcelona</span><span className="dot">◆</span><span>19.11 — Wigmore Hall, London</span><span className="dot">◆</span><span>06.02 — Konzerthaus, Wien</span><span className="dot">◆</span></div>
          <div className="marquee-set" aria-hidden="true"><span>12.10 — Auditorium du Louvre, Paris</span><span className="dot">◆</span><span>04.11 — Palau de la Música, Barcelona</span><span className="dot">◆</span><span>19.11 — Wigmore Hall, London</span><span className="dot">◆</span><span>06.02 — Konzerthaus, Wien</span><span className="dot">◆</span></div>
        </div>
      </div>
    </section>
  );
}
