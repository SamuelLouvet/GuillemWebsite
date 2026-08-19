import { LanguageProvider } from './context/LanguageContext.jsx';
import { VeilProvider } from './context/VeilContext.jsx';
import { LightboxProvider } from './context/LightboxContext.jsx';
import { ProjectModalProvider } from './context/ProjectModalContext.jsx';
import { useScrollFX } from './hooks/useScrollFX.js';

import Veil from './components/Veil.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import RecordingGallery from './components/RecordingGallery.jsx';
import Bio from './components/Bio.jsx';
import Career from './components/Career.jsx';
import RepertoireTicker from './components/RepertoireTicker.jsx';
import Projects from './components/Projects.jsx';
import ProjectModal from './components/ProjectModal.jsx';
import Agenda from './components/Agenda.jsx';
import Media from './components/Media.jsx';
import Contact from './components/Contact.jsx';
import VideoLightbox from './components/VideoLightbox.jsx';

function Page() {
  useScrollFX();
  return (
    <>
      <Veil />
      <Header />
      <main>
        <Hero />
        <RecordingGallery />
        <Bio />
        <Career />
        <RepertoireTicker />
        <Projects />
        <Agenda />
        <Media />
        <Contact />
      </main>
      <ProjectModal />
      <VideoLightbox />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <VeilProvider>
        <LightboxProvider>
          <ProjectModalProvider>
            <Page />
          </ProjectModalProvider>
        </LightboxProvider>
      </VeilProvider>
    </LanguageProvider>
  );
}
