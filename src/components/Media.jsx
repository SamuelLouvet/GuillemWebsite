import { useEffect, useRef } from 'react';
import MuxPlayer from './LazyMuxPlayer.jsx';
import { useLightbox } from '../context/LightboxContext.jsx';
import { VIDEOS, muxThumbnail } from '../data/videos.js';
import '../styles/media.css';

const AUDIO_TRACKS = [
  { title: 'Bach — Sarabande, BWV 996', dur: '3′58″', bars: [40, 80, 55, 95, 35, 70, 45] },
  { title: 'Sor — Étude op. 6 n° 11', dur: '4′06″', bars: [60, 35, 85, 50, 75, 40, 90] },
  { title: 'Takemitsu — In the Woods', dur: '9′10″', bars: [30, 65, 45, 80, 55, 95, 40] },
];

const VIDEO_ROWS = [
  { key: 'main', no: 'N° 01' },
  { key: 'secondary', no: 'N° 02' },
  { key: 'tertiary', no: 'N° 03' },
];

function BackgroundLeadVideo({ video }) {
  const wrapperRef = useRef(null);
  const playerRef = useRef(null);
  const { open } = useLightbox();

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && playerRef.current) {
          playerRef.current.muted = false;
          io.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="media-hero" ref={wrapperRef}>
      <MuxPlayer
        ref={playerRef}
        playbackId={video.playbackId}
        startTime={video.startTime}
        poster={muxThumbnail(video.playbackId, video.startTime)}
        accentColor="#C9A24C"
        autoPlay="muted"
        loop
        metadataVideoTitle={video.titleFr}
        style={{ width: '100%', height: '100%' }}
      />
      <div className="media-hero-scrim" />
      <button type="button" className="media-hero-caption" onClick={() => open('main')}>
        <span className="lead-badge"><span data-fr>À l'affiche</span><span data-en>Featured</span></span>
        <span className="media-hero-title"><span data-fr>{video.titleFr}</span><span data-en>{video.titleEn}</span></span>
        <span className="media-hero-meta"><span data-fr>{video.metaFr}</span><span data-en>{video.metaEn}</span></span>
      </button>
    </div>
  );
}

function VideoRow({ item, video }) {
  const { open } = useLightbox();
  return (
    <button type="button" className="video-row" onClick={() => open(item.key)}>
      <span className="video-row-no">{item.no}</span>
      <span className="video-row-thumb">
        <img src={muxThumbnail(video.playbackId, video.startTime)} alt="" loading="lazy" />
      </span>
      <span className="video-row-title"><span data-fr>{video.titleFr}</span><span data-en>{video.titleEn}</span></span>
      <span className="video-row-meta"><span data-fr>{video.metaFr}</span><span data-en>{video.metaEn}</span></span>
      <span className="video-row-link"><span data-fr>Voir ▸</span><span data-en>Watch ▸</span></span>
    </button>
  );
}

export default function Media() {
  return (
    <section id="medias" className="section media-section">
      <div className="section-head">
        <span className="section-no">V</span>
        <h2><span data-fr>Médias</span><span data-en>Media</span></h2>
      </div>

      <BackgroundLeadVideo video={VIDEOS.main} />

      <div className="video-list" data-reveal>
        {VIDEO_ROWS.map((item) => (
          <VideoRow key={item.key} item={item} video={VIDEOS[item.key]} />
        ))}
      </div>

      <h3 className="col-title col-title-spaced"><span data-fr>Extraits sonores</span><span data-en>Audio excerpts</span></h3>
      <div className="audio-list">
        {AUDIO_TRACKS.map((t, i) => (
          <div className={`audio-row${i === AUDIO_TRACKS.length - 1 ? ' audio-row-last' : ''}`} key={t.title}>
            <span className="audio-title">{t.title}</span>
            <span className="audio-bars">{t.bars.map((h, j) => <span key={j} style={{ height: `${h}%` }} />)}</span>
            <span className="audio-dur">{t.dur}</span>
            <a href="#medias" className="audio-link"><span data-fr>Écouter ▸</span><span data-en>Listen ▸</span></a>
          </div>
        ))}
      </div>
    </section>
  );
}
