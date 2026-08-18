import '../styles/career.css';

export default function Career() {
  return (
    <section id="parcours" className="section section-alt">
      <div className="section-head">
        <span className="section-no">II</span>
        <h2><span data-fr>Parcours &amp; distinctions</span><span data-en>Career &amp; distinctions</span></h2>
      </div>
      <div className="parcours-grid">
        <div>
          <h3 className="col-title"><span data-fr>Distinctions</span><span data-en>Awards</span></h3>
          <div className="award-list" data-reveal>
            <div className="award-row"><span className="award-year">2024</span><span><span data-fr>Prix de la Critique musicale — révélation instrumentale</span><span data-en>Music Critics' Prize — instrumental discovery of the year</span></span></div>
            <div className="award-row"><span className="award-year">2022</span><span><span data-fr>Premier Prix, Concours international de guitare de Barcelone</span><span data-en>First Prize, Barcelona International Guitar Competition</span></span></div>
            <div className="award-row"><span className="award-year">2021</span><span><span data-fr>Lauréat de la Fondation Marguerite d'Ostal</span><span data-en>Laureate, Marguerite d'Ostal Foundation</span></span></div>
            <div className="award-row award-row-last"><span className="award-year">2019</span><span><span data-fr>Mention spéciale du jury, Guitar Foundation of America</span><span data-en>Special jury mention, Guitar Foundation of America</span></span></div>
          </div>
        </div>
        <div>
          <h3 className="col-title"><span data-fr>Salles &amp; festivals</span><span data-en>Halls &amp; festivals</span></h3>
          <div className="plain-list" data-reveal>
            <div className="plain-row">Wigmore Hall, London</div>
            <div className="plain-row">Auditorium du Louvre, Paris</div>
            <div className="plain-row">Palau de la Música Catalana</div>
            <div className="plain-row">Festival de La Roque-d'Anthéron</div>
            <div className="plain-row plain-row-last">Rheingau Musik Festival</div>
          </div>
        </div>
        <div>
          <h3 className="col-title"><span data-fr>Formation &amp; transmission</span><span data-en>Training &amp; teaching</span></h3>
          <div className="plain-list plain-list-loose" data-reveal>
            <div className="plain-row"><span data-fr>CNSMD de Paris — Master, mention très bien à l'unanimité</span><span data-en>CNSMD Paris — Master's, unanimous distinction</span></div>
            <div className="plain-row">Hochschule für Musik Basel — Solistendiplom</div>
            <div className="plain-row"><span data-fr>Professeur, Conservatoire de Toulouse (depuis 2023)</span><span data-en>Professor, Conservatoire de Toulouse (since 2023)</span></div>
            <div className="plain-row plain-row-last"><span data-fr>Directeur artistique, Académie de Vallespir</span><span data-en>Artistic director, Vallespir Academy</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
