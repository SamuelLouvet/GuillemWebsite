import photo1 from '../assets/images/cite-musique-1.jpg';
import photo2 from '../assets/images/cite-musique-2.jpg';
import '../styles/recording-gallery.css';

export default function RecordingGallery() {
  return (
    <section className="recording-gallery">
      <figure data-reveal-scale>
        <img src={photo1} alt="Séance d'enregistrement à la Cité de la Musique, Paris" loading="lazy" />
      </figure>
      <figure data-reveal-scale>
        <img src={photo2} alt="Séance d'enregistrement à la Cité de la Musique, Paris" loading="lazy" />
      </figure>
      <figcaption data-reveal>
        <span className="rg-label"><span data-fr>Séance d'enregistrement</span><span data-en>Recording session</span></span>
        <span className="rg-place">Cité de la Musique, Paris</span>
      </figcaption>
    </section>
  );
}
