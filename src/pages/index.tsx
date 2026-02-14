/**
 * @type {import('next').NextPage}
 * @file src/pages/index.tsx
 * @author Alex plociennik
 * @date 2026-02-04
 * @description Page d'accueil de l'application Next.js
 */

const API_URL: string = "http://localhost:8000";
import { useEffect, useState } from "react";
import { PollApi } from "../types/mod.ts";

export default function Index() {
  const [Polls, setPolls] = useState<PollApi[]>([]);

  useEffect(() => {
    (async () => {
      try {
        // Appel au server pour récupérer les sondages
        const response = await fetch(`${API_URL}/polls/`);

        // Vérification du type de contenu avant de parser
        const contentType = response.headers.get("content-type");

        // gestion des erreurs : si la réponse n'est pas ok (entre 200 et 299),
        // on essaie de parser le message d'erreur s'il est au format JSON, sinon on affiche un message générique
        if (!response.ok) {
          if (contentType && contentType.includes("application/json")) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Erreur API");
          } else {
            throw new Error(`Erreur serveur: ${response.status}`);
          }
        }

        const data: PollApi[] = await response.json();

        setPolls(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <>
      <section className="hero">
        <h1 className="hero__title">Bienvenue sur Votio</h1>
        <h2 className="hero__subtitle">
          {" "}
          Participez à des sondages en temps réel !
        </h2>
        <p className="hero__description">
          Créez, partagez et participez à des sondages interactifs en temps
          réel.
        </p>
        <div className="hero__btn">
          <a href="#polls" className="hero__btn-link">
            Voir les sondages
          </a>
          <a href="#about-me" className="hero__btn-link">
            À propos de Votio
          </a>
        </div>
      </section>
      <section id="polls" className="polls">
        <h1 className="polls__title">📊 Real-time polls</h1>
        <p>Click on a poll below to participate.</p>

        <ul>
          {Polls.length > 0 ? (
            Polls.map((poll) => (
              <li key={poll.id} className="mb-2">
                <a
                  href={`/polls/${poll.id}`}
                  className="text-blue-500 hover:underline"
                >
                  {poll.description}
                </a>
              </li>
            ))
          ) : (
            <p>Aucun sondage disponible.</p>
          )}
        </ul>
      </section>
      <section id="about-me" className="about-me">
        <h2 className="about-me__title">À propos de Votio</h2>
        <div className="about-me__description">
          <p className="about-me__texte">
            Votio est une plateforme de sondages en temps réel qui permet aux
            utilisateurs de créer, partager et participer à des sondages
            interactifs. Notre mission est de rendre la collecte d'opinions
            facile et accessible à tous.
          </p>
        </div>
      </section>
    </>
  );
}
