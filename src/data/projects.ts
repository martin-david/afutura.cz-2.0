export interface Project {
  id: string;
  title: string;
  location: string;
  category: string;
  year: string;
  variant: number;
}

// Placeholder catalogue. Real projects, photography and copy will replace
// these entries in a later iteration.
export const projects: Project[] = [
  {
    id: "01",
    title: "Rodinný dům I",
    location: "Řevnice",
    category: "Novostavba",
    year: "2024",
    variant: 1,
  },
  {
    id: "02",
    title: "Rekonstrukce vily",
    location: "Praha — Vinohrady",
    category: "Rekonstrukce",
    year: "2023",
    variant: 2,
  },
  {
    id: "03",
    title: "Rodinný dům II",
    location: "Dobřichovice",
    category: "Novostavba",
    year: "2023",
    variant: 3,
  },
  {
    id: "04",
    title: "Podkrovní byt",
    location: "Praha — Karlín",
    category: "Interiér",
    year: "2022",
    variant: 4,
  },
  {
    id: "05",
    title: "Přestavba stodoly",
    location: "Mníšek pod Brdy",
    category: "Rekonstrukce",
    year: "2022",
    variant: 5,
  },
  {
    id: "06",
    title: "Rodinný dům III",
    location: "Černošice",
    category: "Novostavba",
    year: "2021",
    variant: 6,
  },
];
