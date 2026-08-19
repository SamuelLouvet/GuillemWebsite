import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';
import { SEASONS } from '../data/seasons.js';
import { useMagnetic } from '../hooks/useMagnetic.js';
import { staggerDelay } from '../utils/stagger.js';
import '../styles/agenda.css';

export default function Agenda() {
  const { lang } = useLanguage();
  const [season, setSeason] = useState('s1');
  const s1Ref = useMagnetic(8);
  const s2Ref = useMagnetic(8);
  const dates = SEASONS[season].map((d) => ({
    date: d.date, city: d.city, venue: d.venue,
    programme: lang === 'en' ? d.en : d.fr,
    status: lang === 'en' ? d.statusEn : d.statusFr,
  }));

  return (
    <section id="agenda" className="section section-alt">
      <div className="section-head section-head-wrap">
        <span className="section-no">IV</span>
        <h2><span data-fr>Agenda</span><span data-en>Calendar</span></h2>
        <div className="season-switch">
          <button ref={s1Ref} type="button" className={`season-btn magnetic${season === 's1' ? ' active' : ''}`} onClick={() => setSeason('s1')}>2026 — 2027</button>
          <button ref={s2Ref} type="button" className={`season-btn magnetic${season === 's2' ? ' active' : ''}`} onClick={() => setSeason('s2')}>2027 — 2028</button>
        </div>
      </div>
      <div className="agenda-list">
        {dates.map((d, i) => (
          <div className="agenda-row" key={d.date + d.city} data-reveal style={staggerDelay(i, 55)}>
            <div className="agenda-date">{d.date}</div>
            <div className="agenda-city">{d.city}</div>
            <div className="agenda-venue">{d.venue}</div>
            <div className="agenda-programme">{d.programme}</div>
            <div className="agenda-status">{d.status}</div>
          </div>
        ))}
      </div>
      <p className="section-footnote"><span data-fr>Dates complémentaires et disponibilités auprès du bureau de concerts.</span><span data-en>Further dates and availability through the concert bureau.</span></p>
    </section>
  );
}
