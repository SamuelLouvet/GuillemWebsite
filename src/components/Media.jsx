import { useEffect, useRef } from 'react';
import MuxPlayer from './LazyMuxPlayer.jsx';
import { VIDEOS, muxThumbnail } from '../data/videos.js';
import '../styles/media.css';

const AUDIO_TRACKS = [
  { title: 'Bach — Sarabande, BWV 996', dur: '3′58″', bars: [40, 80, 55, 95, 35, 70, 45] },
  { title: 'Sor — Étude op. 6 n° 11', dur: '4′06″', bars: [60, 35, 85, 50, 75, 40, 90] },
  { title: 'Takemitsu — In the Woods', dur: '9′10″', bars: [30, 65, 45, 80, 55, 95, 40] },
];

function LeadVideo({ video }) {
  const wrapperRef = useRef(null);
  const playerRef = useRef(null);

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
    <figure className="media-figure media-figure-lead" data-reveal>
      <div className="media-thumb media-thumb-lead" ref={wrapperRef}>
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
        <span className="lead-badge"><span data-fr>À l'affiche</span><span data-en>Featured</span></span>
      </div>
      <figcaption>
        <span className="media-title"><span data-fr>{video.titleFr}</span><span data-en>{video.titleEn}</span></span>
        <span className="media-meta"><span data-fr>{video.metaFr}</span><span data-en>{video.metaEn}</span></span>
      </figcaption>
    </figure>
  );
}

function VideoCard({ video }) {
  return (
    <figure className="media-figure" data-reveal>
      <div className="media-thumb">
        <MuxPlayer
          playbackId={video.playbackId}
          startTime={video.startTime}
          poster={muxThumbnail(video.playbackId, video.startTime)}
          accentColor="#C9A24C"
          preload="metadata"
          metadataVideoTitle={video.titleFr}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <figcaption>
        <span className="media-title"><span data-fr>{video.titleFr}</span><span data-en>{video.titleEn}</span></span>
        <span className="media-meta"><span data-fr>{video.metaFr}</span><span data-en>{video.metaEn}</span></span>
      </figcaption>
    </figure>
  );
}

export default function Media() {
  return (
    <section id="medias" className="section">
      <div className="section-head">
        <span className="section-no">V</span>
        <h2><span data-fr>Médias</span><span data-en>Media</span></h2>
      </div>
      <LeadVideo video={VIDEOS.main} />
      <div className="media-grid">
        <VideoCard video={VIDEOS.secondary} />
        <VideoCard video={VIDEOS.tertiary} />
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
