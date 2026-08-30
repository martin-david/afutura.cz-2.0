import { useState } from "react";
import type { FormEvent } from "react";
import Container from "@/components/ui/Container";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function Contact() {
  useDocumentTitle("Kontakt — Afutura");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <header className="border-b border-line py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clay">Kontakt</p>
          <h1 className="mt-4 max-w-2xl text-balance font-display text-4xl font-bold text-ink sm:text-5xl">
            Pojďme probrat váš projekt
          </h1>
          <p className="mt-4 max-w-xl text-ink-soft">
            V případě zájmu o architektonické, projekční či stavební práce se na nás obraťte na
            e-mailu níže.
          </p>
        </Container>
      </header>

      <section className="py-16">
        <Container className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-10">
            <div>
              <h2 className="font-display text-xl font-semibold text-ink">
                Ing. arch. Lenka David
              </h2>
              <p className="text-ink-soft">Architektka a stavební inženýrka</p>
              <ul className="mt-4 space-y-2 text-ink">
                <li>
                  <a href="tel:+420720364053" className="hover:text-clay">
                    Mobil: +420 720 364 053
                  </a>
                </li>
                <li>
                  <a href="mailto:lenkadavid@afutura.cz" className="hover:text-clay">
                    lenkadavid@afutura.cz
                  </a>
                </li>
                <li className="text-ink-soft">Řevnice</li>
              </ul>
            </div>

            <div className="border-t border-line pt-8">
              <h2 className="font-display text-xl font-semibold text-ink">Afutura s.r.o.</h2>
              <ul className="mt-4 space-y-1 text-ink-soft">
                <li>Rybná 716/24, Staré Město</li>
                <li>110 00 Praha 1</li>
                <li className="pt-2">IČ: 07018720</li>
                <li>DIČ: CZ07018720</li>
              </ul>
            </div>

            <p className="border-t border-line pt-8 text-sm leading-relaxed text-ink-soft">
              V případě zájmu o architektonické, projekční či stavební práce se na nás obraťte na{" "}
              <a href="mailto:lenkadavid@afutura.cz" className="font-medium text-clay">
                lenkadavid@afutura.cz
              </a>
              .
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 border border-line bg-paper-dim p-8">
            <div>
              <label
                htmlFor="name"
                className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-soft"
              >
                Jméno
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="mt-2 w-full border border-line bg-paper px-4 py-3 text-ink outline-none focus:border-clay"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-soft"
              >
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-2 w-full border border-line bg-paper px-4 py-3 text-ink outline-none focus:border-clay"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-soft"
              >
                Zpráva
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-2 w-full border border-line bg-paper px-4 py-3 text-ink outline-none focus:border-clay"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-ink px-7 py-3 text-sm font-medium uppercase tracking-[0.08em] text-paper transition-colors hover:bg-clay"
            >
              Odeslat zprávu
            </button>
            {submitted && (
              <p className="text-sm text-clay">
                Děkujeme za zprávu. Formulář zatím slouží jako ukázka — napište nám prosím přímo na
                e-mail výše.
              </p>
            )}
            <p className="text-xs text-stone">
              Poznámka: formulář bude v další fázi napojen na e-mailové odeslání.
            </p>
          </form>
        </Container>
      </section>
    </>
  );
}
