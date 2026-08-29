export interface Service {
  id: string;
  index: string;
  title: string;
  summary: string;
  description: string;
}

export const services: Service[] = [
  {
    id: "architektura",
    index: "01",
    title: "Architektonické návrhy",
    summary:
      "Studie a návrhy rodinných domů, rekonstrukcí a přestaveb šité na míru pozemku i klientovi.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt, augue at cursus congue, velit erat porta est, in vulputate nunc justo nec justo. Suspendisse potenti.",
  },
  {
    id: "projekce",
    index: "02",
    title: "Projekční činnost",
    summary: "Kompletní dokumentace pro územní řízení, stavební povolení i provedení stavby.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor. Cras mattis consectetur purus sit amet fermentum. Integer posuere erat a ante venenatis.",
  },
  {
    id: "stavby",
    index: "03",
    title: "Stavební realizace",
    summary: "Realizace novostaveb i rekonstrukcí vlastní stavební činností, od základů po klíč.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.",
  },
];
