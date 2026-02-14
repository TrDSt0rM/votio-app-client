/**
 * @types Composant de la barre de navigation
 * @file client/src/components/Navbar.tsx
 * @author Alex plociennik
 * @date 2026-02-10
 * @description Composant de la barre de navigation
 */

"use client";
import { useState } from "react";
import { Link } from "react-router";
import { navLinks } from "../data/navigation.ts";
import { ThemeToggle } from "./ThemeToggle.tsx";

/**
 * Retourne le composant de la barre de navigation.
 * @returns Le composant de la barre de navigation
 */
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* LOGO */}
        <Link
          to="/"
          className="navbar__logo"
          onClick={() => {
            setIsOpen(false); // On ferme le menu mobile (tu l'avais déjà)
            globalThis.scrollTo({ top: 0, behavior: "smooth" }); // On force le scroll en haut
          }}
        >
          <img src="/vite.svg" alt="Logo" className="navbar__logo--image" />
          <span className="navbar__logo--text">Votio</span>
        </Link>

        {/* MENU BUREAU */}
        <div className="navbar__menu--desktop">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="navbar__menu--btn">
              {link.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* ACTIONS MOBILE (Thème + Burger) */}
        <div className="navbar__actions-mobile">
          {/* On duplique le ThemeToggle ici pour qu'il soit aussi dispo sur mobile */}
          <ThemeToggle />

          <button
            type="button" // Important pour Deno/React
            className="navbar__burger-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Ouvrir le menu"
          >
            {isOpen ? (
              /* Icône Croix (Fermer) */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              /* Icône Burger (Ouvrir) */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* LE MENU DÉROULANT */}
      {isOpen && (
        <div className="navbar__mobile-menu">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="navbar__mobile-link"
              onClick={() => setIsOpen(false)} // Ferme le menu au clic
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
