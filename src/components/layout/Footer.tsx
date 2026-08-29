import { Link } from "react-router-dom";

const NAV_ITEMS = [
  { to: "/studio", label: "Studio" },
  { to: "/realizace", label: "Realizace" },
  { to: "/sluzby", label: "Služby" },
  { to: "/kontakt", label: "Kontakt" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-bold tracking-[0.08em]">AFUTURA</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/70">
              Architektonický a stavební ateliér Ing. arch. Lenky David — návrhy, projekty a
              realizace rodinných domů a rekonstrukcí.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/50">
              Navigace
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-paper/80 transition-colors hover:text-clay">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/50">
              Kontakt
            </p>
            <ul className="mt-4 space-y-2 text-sm text-paper/80">
              <li>Ing. arch. Lenka David</li>
              <li>
                <a href="tel:+420720364053" className="hover:text-clay">
                  +420 720 364 053
                </a>
              </li>
              <li>
                <a href="mailto:lenkadavid@afutura.cz" className="hover:text-clay">
                  lenkadavid@afutura.cz
                </a>
              </li>
              <li className="pt-2 text-paper/60">Afutura s.r.o.</li>
              <li className="text-paper/60">Rybná 716/24, Staré Město</li>
              <li className="text-paper/60">110 00 Praha 1</li>
              <li className="pt-2 text-paper/50">IČ: 07018720 · DIČ: CZ07018720</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-paper/10 pt-8 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Afutura s.r.o. Všechna práva vyhrazena.</p>
          <p>Řevnice, Česká republika</p>
        </div>
      </div>
    </footer>
  );
}
