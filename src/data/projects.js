export const PROJECTS = [
  {
    no: 'N° 01', kind: 'Album · 2025', title: 'Suites',
    fr: {
      note: "Trois transcriptions de Bach réunies en un seul geste : la Suite BWV 995 d'après la troisième suite pour violoncelle, la Suite BWV 996 et la Partita BWV 1006a, enregistrées à l'abbaye de Sylvanès sur une guitare Fleta de 1974.",
      quote: '« Un Bach de chambre, mesuré, où chaque voix garde son autonomie. »',
      credits: [
        { k: 'Label', v: 'Éditions Ostinato — OST 214' },
        { k: 'Prise de son', v: 'Marion Delclaux' },
        { k: 'Lieu', v: 'Abbaye de Sylvanès, juin 2024' },
        { k: 'Instrument', v: 'Ignacio Fleta, 1974' },
      ],
    },
    en: {
      note: 'Three Bach transcriptions gathered in a single gesture — the BWV 995 suite after the third cello suite, the BWV 996 suite and the BWV 1006a partita — recorded at the abbey of Sylvanès on a 1974 Fleta guitar.',
      quote: '“A chamber Bach, measured, each voice keeping its independence.”',
      credits: [
        { k: 'Label', v: 'Éditions Ostinato — OST 214' },
        { k: 'Engineer', v: 'Marion Delclaux' },
        { k: 'Venue', v: 'Abbey of Sylvanès, June 2024' },
        { k: 'Instrument', v: 'Ignacio Fleta, 1974' },
      ],
    },
    tracks: [
      { n: '01', title: 'Suite BWV 995 — Prélude', dur: '6′41″' },
      { n: '02', title: 'Suite BWV 995 — Allemande', dur: '4′12″' },
      { n: '03', title: 'Suite BWV 996 — Sarabande', dur: '3′58″' },
      { n: '04', title: 'Partita BWV 1006a — Preludio', dur: '4′03″' },
      { n: '05', title: 'Partita BWV 1006a — Gavotte en rondeau', dur: '3′19″' },
    ],
    cover: 'cite-musique-2',
  },
  {
    no: 'N° 02', kind: 'Récital · 2026', title: 'Nocturnal',
    fr: {
      note: "Un récital construit autour du Nocturnal after John Dowland de Britten, mis en regard des miniatures de Takemitsu et du Tiento d'Ohana. Le programme se joue en continu, sans applaudissements intermédiaires, dans une salle progressivement assombrie.",
      quote: '« La nuit comme forme musicale, tenue de bout en bout. »',
      credits: [
        { k: 'Durée', v: '62 minutes, sans entracte' },
        { k: 'Lumière', v: 'Conception Anouk Prévost' },
        { k: 'Disponible', v: 'Saisons 2026 — 2028' },
        { k: 'Effectif', v: 'Guitare seule' },
      ],
    },
    en: {
      note: "A recital built around Britten's Nocturnal after John Dowland, set against Takemitsu miniatures and Ohana's Tiento, played without pause in a progressively darkened hall.",
      quote: '“Night as a musical form, held from end to end.”',
      credits: [
        { k: 'Duration', v: '62 minutes, no interval' },
        { k: 'Lighting', v: 'Anouk Prévost' },
        { k: 'Available', v: '2026 — 2028 seasons' },
        { k: 'Forces', v: 'Solo guitar' },
      ],
    },
    tracks: [
      { n: '01', title: 'Britten — Nocturnal after John Dowland, op. 70', dur: '18′30″' },
      { n: '02', title: 'Takemitsu — In the Woods', dur: '9′10″' },
      { n: '03', title: 'Ohana — Tiento', dur: '5′47″' },
      { n: '04', title: 'Dowland — Come, heavy sleep', dur: '4′22″' },
    ],
    cover: 'toulouse-auditorium-1',
  },
  {
    no: 'N° 03', kind: 'Création · 2026 — 2028', title: 'Six pour six',
    fr: {
      note: 'Un cycle de six commandes passées à six compositrices et compositeurs, une pièce par corde. Chaque création est donnée dans la ville de son auteur puis reprise intégralement en 2028, avec une édition des partitions en libre accès.',
      quote: '« Faire entrer six écritures d’aujourd’hui dans un seul instrument. »',
      credits: [
        { k: 'Coproduction', v: 'Festival de Vallespir · Fondation d’Ostal' },
        { k: 'Édition', v: 'Partitions en libre accès' },
        { k: 'Résidence', v: 'Chartreuse de Villeneuve' },
      ],
    },
    en: {
      note: "A cycle of six commissions from six composers — one work per string. Each is premiered in its composer's city, then performed complete in 2028, with the scores published in open access.",
      quote: '“Bringing six of today’s voices into a single instrument.”',
      credits: [
        { k: 'Co-production', v: 'Vallespir Festival · d’Ostal Foundation' },
        { k: 'Scores', v: 'Open access' },
        { k: 'Residency', v: 'Chartreuse de Villeneuve' },
      ],
    },
    tracks: [
      { n: 'I', title: 'Nadia Berque — Bourdon', dur: '2026' },
      { n: 'II', title: 'Tomás Riera — Cordal', dur: '2026' },
      { n: 'III', title: 'Inès Aouad — Tastes', dur: '2027' },
      { n: 'IV', title: 'Jonas Weiler — Chanterelle', dur: '2027' },
      { n: 'V', title: 'Livia Sorel — Harmonique', dur: '2028' },
      { n: 'VI', title: 'Marc Estève — Aigu', dur: '2028' },
    ],
    cover: 'cite-musique-1',
  },
  {
    no: 'N° 04', kind: 'Album · 2027', title: 'Fernando Sor',
    fr: {
      note: "Les Études op. 6 et op. 31 et la Fantaisie élégiaque, enregistrées sur une guitare romantique de Lacôte (1836) accordée au diapason d'époque, avec un livret consacré au geste pédagogique de Sor.",
      quote: '« Sor pédagogue, rendu à sa dimension de compositeur. »',
      credits: [
        { k: 'Label', v: 'Éditions Ostinato' },
        { k: 'Instrument', v: 'René Lacôte, Paris 1836' },
        { k: 'Livret', v: 'Texte de Camille Trentin' },
      ],
    },
    en: {
      note: "The op. 6 and op. 31 studies and the Fantaisie élégiaque, recorded on an 1836 Lacôte romantic guitar at period pitch, with a booklet on Sor's pedagogical writing.",
      quote: '“Sor the teacher, restored to his stature as a composer.”',
      credits: [
        { k: 'Label', v: 'Éditions Ostinato' },
        { k: 'Instrument', v: 'René Lacôte, Paris 1836' },
        { k: 'Booklet', v: 'Text by Camille Trentin' },
      ],
    },
    tracks: [
      { n: '01', title: 'Douze Études, op. 6 — n° 8, 9, 11', dur: '11′04″' },
      { n: '02', title: 'Vingt-quatre Études, op. 31 — sélection', dur: '14′38″' },
      { n: '03', title: 'Fantaisie élégiaque, op. 59', dur: '16′55″' },
    ],
    cover: 'toulouse-auditorium-2',
  },
];
