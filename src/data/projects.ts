export interface Project {
  id: string;
  /**
   * URL-safe, ASCII kebab-case identifier used as the permalink segment at
   * `/realizace/:slug`. Keep stable once published — it's a public URL.
   */
  slug: string;
  title: string;
  location: string;
  category: string;
  year: string;
  variant: number;
  /** Longer copy shown on the project detail page. */
  description: string[];
  /**
   * Number of gallery images to render on the detail page. Placeholder art
   * stands in for real photography for now.
   *
   * Naming convention for real photography (to replace `PlaceholderArt`
   * later): files should live at `/images/realizace/<slug>/<slug>-<n>.jpg`
   * (n = 1, 2, 3, …) and each `<img>` should use a descriptive, keyword-rich
   * alt text such as `"{title} – {location} – fotografie {n}"` for SEO.
   */
  imageCount: number;
}

// Placeholder catalogue. Real projects, photography and copy will replace
// these entries in a later iteration.
export const projects: Project[] = [
  {
    id: "01",
    slug: "rodinny-dum-i",
    title: "Rodinný dům I",
    location: "Řevnice",
    category: "Novostavba",
    year: "2024",
    variant: 1,
    imageCount: 5,
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam, quis nostrud exercitation.",
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ],
  },
  {
    id: "02",
    slug: "rekonstrukce-vily",
    title: "Rekonstrukce vily",
    location: "Praha — Vinohrady",
    category: "Rekonstrukce",
    year: "2023",
    variant: 2,
    imageCount: 4,
    description: [
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum, sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      "Accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    ],
  },
  {
    id: "03",
    slug: "rodinny-dum-ii",
    title: "Rodinný dům II",
    location: "Dobřichovice",
    category: "Novostavba",
    year: "2023",
    variant: 3,
    imageCount: 6,
    description: [
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore.",
    ],
  },
  {
    id: "04",
    slug: "podkrovni-byt",
    title: "Podkrovní byt",
    location: "Praha — Karlín",
    category: "Interiér",
    year: "2022",
    variant: 4,
    imageCount: 3,
    description: [
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
    ],
  },
  {
    id: "05",
    slug: "prestavba-stodoly",
    title: "Přestavba stodoly",
    location: "Mníšek pod Brdy",
    category: "Rekonstrukce",
    year: "2022",
    variant: 5,
    imageCount: 5,
    description: [
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.",
      "Sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    ],
  },
  {
    id: "06",
    slug: "rodinny-dum-iii",
    title: "Rodinný dům III",
    location: "Černošice",
    category: "Novostavba",
    year: "2021",
    variant: 6,
    imageCount: 4,
    description: [
      "Et harum quidem rerum facilis est et expedita distinctio, nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus.",
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
    ],
  },
];

/**
 * Builds the ordered, numbered gallery for a project's detail page. The
 * first entry doubles as the page's main/hero image. Alt text is
 * descriptive and numbered for SEO, matching the real-photo naming
 * convention documented on `Project.imageCount` above.
 */
export function getProjectImages(project: Project) {
  return Array.from({ length: project.imageCount }, (_, i) => ({
    variant: ((project.variant - 1 + i * 2) % 6) + 1,
    alt: `${project.title} – ${project.location} – fotografie ${i + 1}`,
  }));
}
