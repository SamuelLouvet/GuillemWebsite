import MuxPlayer from './LazyMuxPlayer.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';
import { useLightbox } from '../context/LightboxContext.jsx';
import { VIDEOS, muxThumbnail } from '../data/videos.js';
import '../styles/lightbox.css';

export default function VideoLightbox() {
  const { videoKey, close } = useLightbox();
  const { lang } = useLanguage();
  if (!videoKey) return null;
  const video = VIDEOS[videoKey];

  return (
    <div className="lightbox" onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
      <button type="button" className="lightbox-close" onClick={close} aria-label="Close">✕</button>
      <div className="lightbox-stage">
        <MuxPlayer
          playbackId={video.playbackId}
          startTime={video.startTime}
          autoPlay
          streamType="on-demand"
          poster={muxThumbnail(video.playbackId, video.startTime)}
          accentColor="#C9A24C"
          metadataVideoTitle={lang === 'en' ? video.titleEn : video.titleFr}
          style={{ '--controls-backdrop-color': 'rgba(10,9,8,.7)' }}
        />
      </div>
    </div>
  );
}
