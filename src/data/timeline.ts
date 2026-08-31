export interface TimelineImage {
  src: string;
  alt: string;
}

export type TimelineEntryKind = "vzdelani" | "prace" | "skolni-projekt";

export interface TimelineEntry {
  id: string;
  /** Displayed period, e.g. "2009–2010" or "2018–dosud". */
  period: string;
  title: string;
  /** Organization, role, school studio or supervisor credit line. */
  subtitle?: string;
  kind: TimelineEntryKind;
  /** Short, curated copy — condensed highlights, not an exhaustive list. */
  description: string[];
  /**
   * Real curated photography, already cropped and enhanced by
   * `scripts/process-images.mjs` into `/images/kariera/<slug>/<slug>-<n>.jpg`.
   * Entries without real photography (most of the professional roles below)
   * render as plain text cards.
   */
  images?: TimelineImage[];
  /** Optional call-to-action, e.g. linking the current studio to Realizace. */
  link?: { to: string; label: string };
}

/**
 * Chronological career timeline for Ing. arch. Lenka David (Kvasničková):
 * university, each employer/role since 2007, four academic design-studio
 * projects (with real curated renders), and the studio she runs today.
 * Sourced from her LinkedIn résumé and the design-studio boards attached to
 * GitHub issue #4 — condensed and translated into Czech to match the rest
 * of the site.
 */
export const timeline: TimelineEntry[] = [
  {
    id: "cvut",
    period: "2006–2012",
    title: "ČVUT Praha, Fakulta stavební",
    subtitle: "Architektura a pozemní stavitelství — Ing. arch.",
    kind: "vzdelani",
    description: [
      "Magisterské studium architektury a pozemního stavitelství na Fakultě stavební ČVUT v Praze.",
    ],
  },
  {
    id: "bytovy-dum-slavojova",
    period: "2009",
    title: "Bytový dům Slavojova",
    subtitle: "Ateliér ATT1 — Ing. arch. Ludmila Čajková, Ing. Jan Černoch, Ing. arch. Radek Zykan",
    kind: "skolni-projekt",
    description: [
      "Novostavba do proluky v bloku na Slavojově ulici v Praze — vestavba moderního bytového domu mezi dvě historické budovy s citlivým hmotovým i materiálovým napojením na okolní zástavbu.",
    ],
    images: [
      {
        src: "/images/kariera/bytovy-dum-slavojova/bytovy-dum-slavojova-1.jpg",
        alt: "Bytový dům Slavojova – vizualizace pohledu z ulice mezi historickými domy",
      },
      {
        src: "/images/kariera/bytovy-dum-slavojova/bytovy-dum-slavojova-2.jpg",
        alt: "Bytový dům Slavojova – pohled na střechy a dvorní trakt bloku",
      },
    ],
  },
  {
    id: "s-projekt-praha",
    period: "2007–2010",
    title: "S-PROJEKT PRAHA s.r.o.",
    subtitle: "Projektantka pozemních staveb",
    kind: "prace",
    description: [
      "Projekční praxe už během posledních ročníků studia — průmyslové stavby, administrativní budovy a rodinné domy ve spolupráci s Ing. Michalem Klimtem a Jindřichem Hříbalem.",
    ],
  },
  {
    id: "golfovy-klub-benatky",
    period: "2009–2010",
    title: "Golfový klub Benátky nad Jizerou",
    subtitle: "Ateliér ATT3 — Ing. arch. Stupka, Ing. arch. Filsak, Ing. arch. Holub",
    kind: "skolni-projekt",
    description: [
      "Návrh klubovny osmnáctijamkového golfového hřiště — recepce, restaurace s letní terasou, VIP salónek a ubytování pro hráče. Nosná konstrukce z pohledového betonu v kombinaci se dřevem a fasádou z ytongových tvárnic.",
    ],
    images: [
      {
        src: "/images/kariera/golfovy-klub-benatky/golfovy-klub-benatky-1.jpg",
        alt: "Golfový klub Benátky nad Jizerou – vizualizace klubovny od hřiště",
      },
    ],
  },
  {
    id: "dum-na-vode",
    period: "2009–2010",
    title: "Dům na vodě",
    subtitle: "Bakalářská práce — vedoucí Ing. Ing. arch. Petr Šikola",
    kind: "skolni-projekt",
    description: [
      "Koncept plovoucího domu na Vltavě u Veslařského ostrova — modulární dřevěná stavba ve variantách ateliéru, rekreačního i prodejního využití.",
    ],
    images: [
      {
        src: "/images/kariera/dum-na-vode/dum-na-vode-1.jpg",
        alt: "Dům na vodě – vizualizace plovoucího domu na Vltavě",
      },
    ],
  },
  {
    id: "czech-consult",
    period: "2010–2011",
    title: "CZECH Consult, spol. s r.o.",
    subtitle: "Projektantka pozemních staveb",
    kind: "prace",
    description: ["Bytové a rodinné domy ve spolupráci s Ing. arch. Borkem Strádalem."],
  },
  {
    id: "domyjinak",
    period: "2011",
    title: "DOMYJINAK",
    subtitle: "Architektka",
    kind: "prace",
    description: [
      "Krátkodobá spolupráce s Ing. arch. Ing. Janem Černochem a Ing. arch. Ing. Petrem Šikolou.",
    ],
  },
  {
    id: "modusatelier",
    period: "2011–dosud",
    title: "MODUSatelier.cz",
    subtitle: "Architektka",
    kind: "prace",
    description: [
      "Bytové domy a luxusní rodinné domy, administrativní a školské budovy, kaple a kostely — ve spolupráci s Doc. Ing. akad. arch. Jiřím Mojžíšem a Ing. arch. Kristinou Stejskalovou.",
    ],
  },
  {
    id: "vlastni-praxe",
    period: "2011–dosud",
    title: "Vlastní projekční praxe",
    subtitle: "Architektka, OSVČ",
    kind: "prace",
    description: [
      "Desítky samostatných studií, projektů a realizací — např. vila Řevnice, rodinné domy Brandýs, Svinaře a Slivenec, tenisová hala Černošice, interiéry OC DBK, rozhledna na Babce, obnova Domu Bratří Čapků v Budislavi nebo soutěžní návrh kostela v Líšni.",
    ],
  },
  {
    id: "galerie-martinsky-vrch",
    period: "2012",
    title: "Diplomový projekt: Galerie Martinský vrch",
    subtitle: "Diplomová práce — konzultant Ing. Stanislav Frolík, Ph.D.",
    kind: "skolni-projekt",
    description: [
      "Přestavba bývalých kasáren v Nitře na galerii současného umění s výstavními sály, kavárnou a VIP salónkem — závěrečný diplomový projekt na téma citlivé konverze vojenského areálu.",
    ],
    images: [
      {
        src: "/images/kariera/galerie-martinsky-vrch/galerie-martinsky-vrch-1.jpg",
        alt: "Galerie Martinský vrch – vizualizace interiéru baru galerie",
      },
      {
        src: "/images/kariera/galerie-martinsky-vrch/galerie-martinsky-vrch-2.jpg",
        alt: "Galerie Martinský vrch – vizualizace pohledu od schodiště",
      },
    ],
  },
  {
    id: "afutura",
    period: "2018–dosud",
    title: "Afutura s.r.o.",
    subtitle: "Architektka, hlavní inženýrka projektu (HIP)",
    kind: "prace",
    description: [
      "Vlastní stavební firma — architektonické návrhy, projekční činnost a stavební realizace na klíč od první studie po předání klíčů, ve spolupráci s týmem odborníků.",
    ],
    link: { to: "/realizace", label: "Prohlédnout realizace →" },
  },
];
