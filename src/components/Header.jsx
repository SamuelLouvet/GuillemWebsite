import { useLanguage } from '../context/LanguageContext.jsx';
import NavLink from './NavLink.jsx';
import '../styles/header.css';

const NAV = [
  { to: 'bio', no: 'I', title: 'Biographie', fr: 'Biographie', en: 'Biography' },
  { to: 'parcours', no: 'II', title: 'Parcours', fr: 'Parcours', en: 'Career' },
  { to: 'projets', no: 'III', title: 'Projets', fr: 'Projets', en: 'Projects' },
  { to: 'agenda', no: 'IV', title: 'Agenda', fr: 'Agenda', en: 'Calendar' },
  { to: 'medias', no: 'V', title: 'Médias', fr: 'Médias', en: 'Media' },
];

export default function Header() {
  const { lang, setLang } = useLanguage();

  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink to="top" no="—" title="Guillem Louvet de Montella" className="brand">
          <span className="brand-mark">GLM</span>
          <span className="brand-sub"><span data-fr>Guitare classique</span><span data-en>Classical guitar</span></span>
        </NavLink>
        <nav className="main-nav">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} no={item.no} title={item.title} className="nav-link">
              {item.no} · <span data-fr>{item.fr}</span><span data-en>{item.en}</span>
            </NavLink>
          ))}
          <NavLink to="contact" no="VI" title="Contact" className="nav-link">VI · Contact</NavLink>
        </nav>
        <div className="lang-switch">
          <button type="button" className={`lang-btn${lang === 'fr' ? ' active' : ''}`} onClick={() => setLang('fr')}>FR</button>
          <span className="lang-sep">/</span>
          <button type="button" className={`lang-btn${lang === 'en' ? ' active' : ''}`} onClick={() => setLang('en')}>EN</button>
        </div>
      </div>
      <div className="progress-track"><div className="progress-bar" id="progressBar" /></div>
    </header>
  );
}
