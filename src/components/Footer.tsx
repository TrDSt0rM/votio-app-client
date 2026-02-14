/**
 * @types Composant du footer
 * @file client/src/components/Footer.tsx
 * @author Alex plociennik
 * @date 2026-02-10
 * @description Composant du footer
 */

/**
 * Retourne le composant du footer des pages.
 * @returns Le composant du footer des pages
 */
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">© 2026 - Votio. Tous droits réservés.</p>
        <p className="footer__text-tech-stack">
          Construit avec <span className="footer__tech-stack">React</span>,{" "}
          <span className="footer__tech-stack">TypeScript</span> &{" "}
          <span className="footer__tech-stack">Vite</span>.
        </p>
      </div>
    </footer>
  );
}
