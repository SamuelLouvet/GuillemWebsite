import { MailIcon, InstagramIcon, YoutubeIcon } from './icons/SocialIcons.jsx';
import '../styles/contact.css';

const LINKS = [
  { key: 'mail', Icon: MailIcon, label: 'guillem.ldm@gmail.com', href: 'mailto:guillem.ldm@gmail.com', external: false },
  { key: 'instagram', Icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/guillemlouvet?igsh=MWk2NHZlaHh1ZGsxMA==', external: true },
  { key: 'youtube', Icon: YoutubeIcon, label: 'YouTube', href: 'https://www.youtube.com/@guilleml4169', external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="section section-dark">
      <div className="section-head">
        <span className="section-no">VI</span>
        <h2>Contact <span className="section-sub"><span data-fr>/ Enquiries</span><span data-en>/ Contact</span></span></h2>
      </div>
      <div className="contact-links" data-reveal>
        {LINKS.map(({ key, Icon, label, href, external }) => (
          <a
            key={key}
            href={href}
            className="contact-tile"
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            <Icon className="contact-tile-icon" />
            <span className="contact-tile-label">{label}</span>
          </a>
        ))}
      </div>
      <div className="footer-bar">
        <span>Guillem Louvet de Montella</span><span>Vermell — direction retenue</span><span>© 2026</span>
      </div>
    </section>
  );
}
