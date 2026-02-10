/**
 * @types Composant de la barre de navigation
 * @file client/src/components/Navbar.tsx
 * @author Alex plociennik
 * @date 2026-02-10
 * @description Composant de la barre de navigation
 */

//import { useState } from "react";

/**
 * Retourne le composant de la barre de navigation.
 * @returns Le composant de la barre de navigation
 */
export function Navbar() {

    //const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <a href="/">Accueil</a>
            <a href="#about">About Me</a>
        </nav>
    );
}