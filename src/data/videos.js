// Mux playback IDs supplied for the site. `main` is featured in the hero
// watch-trigger and as the large autoplaying lead card in the Médias
// section; `secondary` / `tertiary` are the two smaller click-to-play
// cards alongside it. All start mid-performance rather than at 0.
export const VIDEOS = {
  main: {
    playbackId: 'd7TJEv8Rth7LpSLrm9RL01nmYKNIVFzoO2VS4bb00AEoU',
    startTime: 135, // 2:15
    titleFr: 'Epicentro',
    titleEn: 'Epicentro',
    metaFr: 'Benoît Albert (comp. et interprète) — mai 2026',
    metaEn: 'Benoît Albert (composer & performer) — May 2026',
  },
  secondary: {
    playbackId: 'eKEB65rL8Df01CKHKihU7U83cbF013VZlWGnYFKymMyDQ',
    startTime: 135, // 2:15
    titleFr: 'Il trovatore',
    titleEn: 'Il trovatore',
    metaFr: 'J. K. Mertz — fantaisie sur des thèmes de Verdi',
    metaEn: 'J. K. Mertz — fantasy on themes from Verdi',
  },
  tertiary: {
    playbackId: 'FvZ3Lm01vM01ztb17DPjYZ5nWvLUU01Kk00uss5twgYBwHQ',
    startTime: 144, // 2:24
    titleFr: 'Harmonie du soir',
    titleEn: 'Harmonie du soir',
    metaFr: 'J. K. Mertz — Soirées Parisiennes de la Guitare, fév. 2026 — © Florian Mandrillon',
    metaEn: 'J. K. Mertz — Les Soirées Parisiennes de la Guitare, Feb 2026 — © Florian Mandrillon',
  },
};

export function muxThumbnail(playbackId, time) {
  return `https://image.mux.com/${playbackId}/thumbnail.jpg?time=${time}&width=1200`;
}
