import '../styles/contact.css';

export default function Contact() {
  return (
    <section id="contact" className="section section-dark">
      <div className="section-head">
        <span className="section-no">VI</span>
        <h2>Contact <span className="section-sub"><span data-fr>/ Enquiries</span><span data-en>/ Contact</span></span></h2>
      </div>
      <div className="contact-grid">
        <div data-reveal>
          <h3 className="col-title"><span data-fr>Diffusion &amp; concerts</span><span data-en>Bookings</span></h3>
          <p className="contact-text">Bureau de Concerts Almaviva<br />Élise Fabre<br /><a href="mailto:concerts@almaviva-bureau.com" className="contact-link">concerts@almaviva-bureau.com</a><br />+33 1 44 08 12 60</p>
        </div>
        <div data-reveal>
          <h3 className="col-title"><span data-fr>Presse</span><span data-en>Press</span></h3>
          <p className="contact-text"><a href="mailto:presse@glm-guitare.com" className="contact-link">presse@glm-guitare.com</a><br /><span data-fr>Dossier, biographies et photographies haute définition.</span><span data-en>Press kit, biographies and high-resolution photographs.</span></p>
          <a href="#contact" className="btn btn-press"><span data-fr>Dossier de presse ↓</span><span data-en>Press kit ↓</span></a>
        </div>
        <div data-reveal>
          <h3 className="col-title"><span data-fr>Académie &amp; masterclasses</span><span data-en>Academy &amp; masterclasses</span></h3>
          <p className="contact-text"><span data-fr>Académie de Vallespir — session de juillet.</span><span data-en>Vallespir Academy — July session.</span><br /><a href="mailto:academie@vallespir-guitare.org" className="contact-link">academie@vallespir-guitare.org</a></p>
        </div>
      </div>
      <div className="footer-bar">
        <span>Guillem Louvet de Montella</span><span>Vermell — direction retenue</span><span>© 2026</span>
      </div>
    </section>
  );
}
