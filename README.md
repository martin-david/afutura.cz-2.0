# afutura.cz

Prezentační web architektonického a stavebního ateliéru **Afutura s.r.o.** (Ing. arch. Lenka
David) — architektonické návrhy, projekční činnost a stavební realizace rodinných domů a
rekonstrukcí.

> **Stav projektu:** toto je úvodní verze webu — obsahuje ukázkový design a texty typu
> _lorem ipsum_. Reálné texty, fotografie a realizované projekty budou doplněny v další fázi.

## Tech stack

- [Vite](https://vite.dev/) + [React](https://react.dev/) + TypeScript
- [React Router](https://reactrouter.com/) (klientský routing)
- [Tailwind CSS v4](https://tailwindcss.com/) (přes `@tailwindcss/vite`, bez `tailwind.config.js`
  — theme je definován přímo v `src/index.css`)
- ESLint + Prettier

## Vývoj

```bash
npm install
npm run dev       # dev server na http://localhost:5173
npm run build      # produkční build do ./dist
npm run preview    # náhled produkčního buildu
npm run lint        # ESLint
npm run format      # Prettier --write
```

## Struktura projektu

```
src/
  components/
    layout/   # Header, Footer, Layout, ScrollToTop
    ui/       # znovupoužitelné bloky (Container, karty, placeholder grafika, ...)
  data/       # zatím statická placeholder data (služby, realizace)
  hooks/      # drobné vlastní hooky
  pages/      # jednotlivé stránky napojené na routy v App.tsx
public/       # statické soubory, favicon, robots.txt, GitHub Pages SPA fallback (404.html)
```

Cesty lze importovat pomocí aliasu `@/...` (např. `@/components/ui/Container`), který míří do
`src/`.

## Nasazení na GitHub Pages

Web je nasazován jako čistě statická SPA aplikace na GitHub Pages s vlastní doménou
[afutura.cz](https://afutura.cz) (soubor `CNAME`).

Workflow `.github/workflows/deploy.yml`:

1. Na **každý push i pull request do `develop`** se spustí job `build` (`npm ci`, `npm run
lint`, `npm run build`) — ověří, že web jde sestavit, i pro nesloučené PR.
2. Job `deploy` běží **jen při push na `develop`** (tj. i po sloučení pull requestu), nikdy pro
   samotný pull request — vygenerovaný obsah `dist/` se pomocí
   [`peaceiris/actions-gh-pages`](https://github.com/peaceiris/actions-gh-pages) publikuje do
   větve `gh-pages`.

### Jednorázové nastavení v GitHub repozitáři

Po prvním úspěšném běhu workflow (větev `gh-pages` bude existovat) je potřeba v nastavení
repozitáře jednou ručně nastavit zdroj GitHub Pages:

1. **Settings → Pages**
2. **Source**: `Deploy from a branch`
3. **Branch**: `gh-pages` / `/(root)`
4. Uložit — GitHub Pages pak automaticky použije `CNAME` a bude sloužit z `gh-pages` po každém
   dalším nasazení.

Klientský routing (React Router) na GitHub Pages funguje díky standardnímu triku
[spa-github-pages](https://github.com/rafgraph/spa-github-pages): `public/404.html` zakóduje
požadovanou cestu do query stringu a přesměruje na `index.html`, kde se cesta obnoví ještě před
tím, než se router připojí.

## Poznámka k obsahu

Veškerý obsah kromě kontaktních údajů a základního popisu činnosti je zástupný (`lorem ipsum`)
a bude nahrazen reálnými texty, fotografiemi realizací a případnými referencemi v dalších
iteracích projektu.
