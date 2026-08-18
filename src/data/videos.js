// Mux playback IDs supplied for the site. `main` is featured in the hero
// watch-trigger and as the large autoplaying lead card in the Médias
// section; `secondary` / `tertiary` are the two smaller click-to-play
// cards alongside it. All start mid-performance rather than at 0.
export const VIDEOS = {
  main: {
    playbackId: 'd7TJEv8Rth7LpSLrm9RL01nmYKNIVFzoO2VS4bb00AEoU',
    startTime: 135, // 2:15
    titleFr: 'Preludio, BWV 1006a',
    titleEn: 'Preludio, BWV 1006a',
    metaFr: 'Extrait — captation live',
    metaEn: 'Excerpt — live recording',
  },
  secondary: {
    playbackId: 'eKEB65rL8Df01CKHKihU7U83cbF013VZlWGnYFKymMyDQ',
    startTime: 135, // 2:15
    titleFr: 'Étude en travail',
    titleEn: 'Étude, in rehearsal',
    metaFr: 'Extrait — captation live',
    metaEn: 'Excerpt — live recording',
  },
  tertiary: {
    playbackId: 'FvZ3Lm01vM01ztb17DPjYZ5nWvLUU01Kk00uss5twgYBwHQ',
    startTime: 144, // 2:24
    titleFr: 'Nadia Berque — Bourdon',
    titleEn: 'Nadia Berque — Bourdon',
    metaFr: 'Extrait — captation live',
    metaEn: 'Excerpt — live recording',
  },
};

export function muxThumbnail(playbackId, time) {
  return `https://image.mux.com/${playbackId}/thumbnail.jpg?time=${time}&width=1200`;
}
