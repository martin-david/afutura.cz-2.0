import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NAV_ITEMS = [
  { to: "/studio", label: "Studio" },
  { to: "/realizace", label: "Realizace" },
  { to: "/sluzby", label: "Služby" },
  { to: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Lock background scroll while the full-screen mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="font-display text-lg font-bold tracking-[0.08em] text-ink"
        >
          AFUTURA
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium uppercase tracking-[0.08em] transition-colors hover:text-clay ${
                  isActive ? "text-clay" : "text-ink-soft"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href="mailto:lenkadavid@afutura.cz"
            className="rounded-full border border-ink px-4 py-2 text-sm font-medium uppercase tracking-[0.05em] text-ink transition-colors hover:border-clay hover:text-clay"
          >
            Napište nám
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-ink transition-transform duration-200 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-ink transition-transform duration-200 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex h-[calc(100dvh-4rem)] flex-col justify-between border-t border-line bg-paper px-6 py-10 md:hidden">
          <ul className="space-y-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `font-display text-3xl font-semibold ${isActive ? "text-clay" : "text-ink"}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="space-y-1 text-sm text-ink-soft">
            <a href="tel:+420720364053" className="block hover:text-clay">
              +420 720 364 053
            </a>
            <a href="mailto:lenkadavid@afutura.cz" className="block hover:text-clay">
              lenkadavid@afutura.cz
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
