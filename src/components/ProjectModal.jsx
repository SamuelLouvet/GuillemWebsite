import { useLanguage } from '../context/LanguageContext.jsx';
import { useProjectModal } from '../context/ProjectModalContext.jsx';
import { PROJECTS } from '../data/projects.js';
import { COVERS } from '../data/covers.js';
import '../styles/project-modal.css';

export default function ProjectModal() {
  const { lang } = useLanguage();
  const { openIndex, close } = useProjectModal();
  if (openIndex < 0) return null;

  const p = PROJECTS[openIndex];
  const loc = lang === 'en' ? p.en : p.fr;
  const cover = p.cover ? COVERS[p.cover] : null;

  return (
    <div className="modal open" onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
      <div className="modal-inner">
        <div className="modal-head">
          <span className="modal-eyebrow">{p.no} · {p.kind}</span>
          <button type="button" className="btn btn-solid modal-close" onClick={close}>
            {lang === 'en' ? 'Close ✕' : 'Fermer ✕'}
          </button>
        </div>
        <div className="modal-grid">
          <div>
            <h2 className="modal-title">{p.title}</h2>
            <p className="modal-note">{loc.note}</p>
            <div className="modal-tracks">
              <h3 className="col-title">Programme</h3>
              {p.tracks.map((t) => (
                <div className="modal-track" key={t.n + t.title}>
                  <span className="modal-track-n">{t.n}</span><span>{t.title}</span><span className="modal-track-dur">{t.dur}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            {cover ? (
              <div className="photo-frame modal-cover">
                <img src={cover} alt={p.title} />
              </div>
            ) : (
              <div className="slot-frame">
                <div className="slot" style={{ aspectRatio: '1/1' }} data-label="Pochette / visuel du projet" />
              </div>
            )}
            <div className="modal-credits">
              {loc.credits.map((c) => (
                <div className="modal-credit" key={c.k}>
                  <span className="modal-credit-k">{c.k}</span><span>{c.v}</span>
                </div>
              ))}
            </div>
            <blockquote className="pull-quote modal-quote">{loc.quote}</blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
