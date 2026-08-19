import { useMemo, useState } from 'react';
import { PROJECTS } from '../data/projects.js';
import { COVERS } from '../data/covers.js';
import { useProjectModal } from '../context/ProjectModalContext.jsx';
import '../styles/projects.css';

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI'];
const N = PROJECTS.length;
// Must equal 360/N so the arrangement closes into a real circle — with
// any other step the "previous" and "next" items land at different
// distances from the front, breaking the left/right symmetry.
const STEP = 360 / N;

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

function normalize(deg) {
  let a = deg % 360;
  if (a > 180) a -= 360;
  if (a < -180) a += 360;
  return a;
}

export default function Projects() {
  const { open } = useProjectModal();
  const [step, setStep] = useState(0);
  const activeIndex = ((step % N) + N) % N;

  const goTo = (i) => {
    const current = ((step % N) + N) % N;
    let diff = i - current;
    if (diff > N / 2) diff -= N;
    if (diff < -N / 2) diff += N;
    setStep(step + diff);
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') setStep((s) => s + 1);
    if (e.key === 'ArrowLeft') setStep((s) => s - 1);
  };

  const p = PROJECTS[activeIndex];

  const items = useMemo(() => PROJECTS.map((proj, i) => {
    const angle = (i - step) * STEP;
    const norm = normalize(angle);
    const abs = Math.abs(norm);
    const visible = abs <= 130;
    const isActive = abs < 2;
    const opacity = visible ? Math.max(0.18, 1 - abs / 140) : 0;
    const scale = visible ? 1 - Math.min(abs / 200, 0.4) : 0.55;
    return { proj, i, angle, abs, visible, isActive, opacity, scale };
  }), [step]);

  return (
    <section id="projets" className="section">
      <div className="section-head section-head-tight">
        <span className="section-no">III</span>
        <h2><span data-fr>Projets</span><span data-en>Projects</span></h2>
      </div>
      <div className="orbit" onKeyDown={onKeyDown} tabIndex={0} role="group" aria-label="Projects carousel">
        <div className="orbit-arc" style={{ '--n': N }}>
          {items.map(({ proj, i, angle, isActive, visible, opacity, scale }) => {
            const cover = proj.cover ? COVERS[proj.cover] : null;
            return (
              <button
                type="button"
                key={proj.title}
                className={`orbit-item${isActive ? ' is-active' : ''}`}
                style={{ '--angle': `${angle}deg`, opacity, scale: String(scale), pointerEvents: visible ? 'auto' : 'none' }}
                onClick={() => (isActive ? open(i) : goTo(i))}
                aria-current={isActive}
                aria-label={proj.title}
              >
                {cover ? (
                  <img src={cover} alt="" loading="lazy" />
                ) : (
                  <span className="orbit-item-numeral" aria-hidden="true">{ROMAN[i]}</span>
                )}
              </button>
            );
          })}
        </div>

        <div className="orbit-center">
          <button type="button" className="orbit-nav orbit-prev" onClick={() => setStep((s) => s - 1)} aria-label="Previous project">‹</button>
          <div className="orbit-desc" key={activeIndex}>
            <span className="orbit-desc-top">
              <span className="project-no">{p.no}</span>
              <span className="project-meta">{METAS[activeIndex]}</span>
            </span>
            <span className="orbit-desc-name">{p.title}</span>
            <span className="project-desc">{DESCRIPTIONS[activeIndex]}</span>
            <button type="button" className="project-link" onClick={() => open(activeIndex)}>
              <span data-fr>Programme</span><span data-en>Programme</span> <span className="project-link-arrow">→</span>
            </button>
          </div>
          <button type="button" className="orbit-nav orbit-next" onClick={() => setStep((s) => s + 1)} aria-label="Next project">›</button>
        </div>

        <div className="orbit-dots">
          {PROJECTS.map((proj, i) => (
            <button
              type="button"
              key={proj.title}
              className={`orbit-dot${i === activeIndex ? ' active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={proj.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
