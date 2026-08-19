import '../styles/repertoire-ticker.css';

const NAMES = ['Bach', 'Sor', 'Mertz', 'Tárrega', 'Britten', 'Takemitsu', 'Ohana', 'Dowland', 'Albéniz', 'Albert'];

function NameSet() {
  return (
    <div className="ticker-set">
      {NAMES.map((n) => (
        <span key={n}>{n}<span className="ticker-dot">◆</span></span>
      ))}
    </div>
  );
}

function Row({ reverse }) {
  return (
    <div className={`ticker-track${reverse ? ' ticker-track-reverse' : ''}`}>
      <NameSet />
      <NameSet />
    </div>
  );
}

export default function RepertoireTicker() {
  return (
    <div className="repertoire-ticker" aria-hidden="true">
      <Row />
      <Row reverse />
    </div>
  );
}
