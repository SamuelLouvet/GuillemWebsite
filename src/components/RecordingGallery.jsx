import photo1 from '../assets/images/cite-musique-1.jpg';
import photo2 from '../assets/images/cite-musique-2.jpg';
import '../styles/recording-gallery.css';

export default function RecordingGallery() {
  return (
    <section className="recording-gallery">
      <figure data-reveal-scale>
        <img src={photo1} alt="Séance d'enregistrement sur une guitare romantique d'Étienne Laprevotte, Cité de la musique, Paris" loading="lazy" />
      </figure>
      <figure data-reveal-scale>
        <img src={photo2} alt="Séance d'enregistrement sur une guitare romantique d'Étienne Laprevotte, Cité de la musique, Paris" loading="lazy" />
      </figure>
      <figcaption data-reveal>
        <span className="rg-label"><span data-fr>Guitare romantique d'Étienne Laprevotte — Musée de la musique</span><span data-en>Étienne Laprevotte romantic guitar — Musée de la musique</span></span>
        <span className="rg-place"><span data-fr>Cité de la musique, Paris · septembre 2025 — © Augustin Chabridon</span><span data-en>Cité de la musique, Paris · September 2025 — © Augustin Chabridon</span></span>
      </figcaption>
    </section>
  );
}
