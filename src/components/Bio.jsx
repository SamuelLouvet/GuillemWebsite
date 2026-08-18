import portrait from '../assets/images/toulouse-auditorium-2.jpg';
import '../styles/bio.css';

export default function Bio() {
  return (
    <section id="bio" className="section">
      <div className="section-head">
        <span className="section-no">I</span>
        <h2><span data-fr>Biographie</span><span data-en>Biography</span></h2>
        <span className="section-rule" data-reveal></span>
      </div>
      <div className="bio-grid">
        <div className="bio-text" data-reveal>
          <div data-fr>
            <p><span className="dropcap">N</span>é à Perpignan en 1993, Guillem Louvet de Montella étudie la guitare auprès d'Ariane Vidal-Roth avant d'intégrer le Conservatoire national supérieur de musique de Paris, dont il sort avec la mention très bien à l'unanimité, puis la Hochschule für Musik de Bâle.</p>
            <p>Son jeu, salué pour sa clarté de plan sonore et sa retenue expressive, s'attache autant à la rhétorique des <em>Suites</em> de Bach qu'aux écritures contemporaines qu'il commande et défend. Il partage la scène avec le Quatuor Aubade et la mezzo-soprano Clémence Bar.</p>
            <p>Il enseigne au Conservatoire de Toulouse et dirige depuis 2024 l'académie d'été de Vallespir, consacrée au répertoire de la guitare romantique.</p>
          </div>
          <div data-en>
            <p><span className="dropcap">B</span>orn in Perpignan in 1993, Guillem Louvet de Montella studied with Ariane Vidal-Roth before entering the Conservatoire national supérieur de musique de Paris, graduating with unanimous distinction, and later the Hochschule für Musik Basel.</p>
            <p>His playing — praised for its clarity of voicing and expressive restraint — attends as closely to the rhetoric of the Bach <em>Suites</em> as to the contemporary works he commissions and champions. He appears with the Aubade Quartet and mezzo-soprano Clémence Bar.</p>
            <p>He teaches at the Conservatoire de Toulouse and has directed the Vallespir summer academy, devoted to the romantic guitar, since 2024.</p>
          </div>
        </div>
        <div className="bio-aside" data-reveal>
          <div className="bio-aside-top">
            <div className="bio-portrait photo-frame">
              <img src={portrait} alt="Guillem Louvet de Montella en concert" loading="lazy" />
            </div>
            <div className="bio-facts">
              <span data-fr>Instrument</span><span data-en>Instrument</span><br /><span className="ink">Fleta, 1974</span><br />
              <span data-fr>Guitare romantique</span><span data-en>Romantic guitar</span><br /><span className="ink">Lacôte, 1836</span><br />
              <span data-fr>Base</span><span data-en>Based in</span><br /><span className="ink">Paris · Perpignan</span>
            </div>
          </div>
          <blockquote className="pull-quote">
            <span data-fr>« Une articulation d'orfèvre, et le silence tenu comme une matière. »</span><span data-en>“A goldsmith's articulation, and silence held as a material.”</span>
            <span className="quote-source">Diapason</span>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
