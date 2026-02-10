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
        <footer className="mt-8 w-full border-t border-light-lvl-2 bg-light-lvl-1 py-10 text-light-lvl-3 dark:border-dark-lvl-2 dark:bg-dark-lvl-1 dark:text-dark-lvl-3">
            <div className="font-tech px-4 text-center">
              <p className="mb-2">
                © 2026 - Alex Plociennik. Tous droits réservés.
              </p>
              <p className="text-sm">
                Construit avec{" "}
                <span className="font-semibold text-pastel-light-blue dark:text-pastel-blue">
                  React
                </span>
                ,
                <span className="font-semibold text-pastel-light-blue dark:text-pastel-blue">
                  {" "}
                  TypeScript
                </span>{" "}
                &
                <span className="font-semibold text-pastel-light-blue dark:text-pastel-blue">
                  {" "}
                  Vite
                </span>
                .
              </p>
            </div>
          </footer>
    );
}