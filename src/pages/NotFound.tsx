import { Link } from "react-router-dom";
import Container from "@/components/ui/Container";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function NotFound() {
  useDocumentTitle("Stránka nenalezena — Afutura");

  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="font-display text-sm uppercase tracking-[0.3em] text-clay">404</p>
      <h1 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
        Stránka nenalezena
      </h1>
      <p className="mt-3 max-w-md text-ink-soft">
        Omlouváme se, hledaná stránka neexistuje nebo byla přesunuta.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-full bg-ink px-6 py-3 text-sm font-medium uppercase tracking-[0.08em] text-paper transition-colors hover:bg-clay"
      >
        Zpět na úvod
      </Link>
    </Container>
  );
}
