/**
 * @file ThemeToggle.tsx
 * @author Alex Plociennik
 * @date 2026-01-24
 * @description Composant de bouton pour changer le thème (clair/sombre)
 */

/**
 * @file ThemeToggle.tsx
 * @description Gestion du thème clair/sombre sans dépendance externe
 */
"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  // 1. On initialise l'état
  // On vérifie d'abord s'il y a une préférence sauvegardée ou celle du système
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) return savedTheme;
      return globalThis.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  });

  // 2. À chaque changement de thème, on met à jour le DOM
  useEffect(() => {
    const root = document.documentElement; // Cible la balise <html>

    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // 3. Fonction pour basculer
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="toggle-theme"
      aria-label="Changer le thème"
      title={
        theme === "dark" ? "Passer en mode clair" : "Passer en mode sombre"
      }
    >
      {theme === "dark" ? (
        /* --- ICÔNE SOLEIL (Mode Sombre Actif) --- */
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        /* --- ICÔNE LUNE (Mode Clair Actif) --- */
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}
