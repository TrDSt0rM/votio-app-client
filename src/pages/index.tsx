/**
 * @type {import('next').NextPage}
 * @file src/pages/index.tsx
 * @author Alex plociennik
 * @date 2026-02-04
 * @description Page d'accueil de l'application Next.js
 */

const API_URL: string = "http://localhost:8000";
import { useEffect, useState } from "react";
import { PollApi } from "../types/mod.ts"

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
            } catch (err){
                console.error(err);
            }
        })();
    }, []);

    return (
        <main className="flex">
            <h1>📊 Real-time polls</h1>
            <p>Click on a poll below to participate.</p>

            <ul>
                {Polls.length > 0 ? (
                    Polls.map((poll) => (
                        <li key={poll.id} className="mb-2">
                            <a href={`/polls/${poll.id}`} className="text-blue-500 hover:underline">
                                {poll.description}
                            </a>
                        </li>
                    ))
                ) : (
                    <p>Aucun sondage disponible.</p>
                )}
            </ul>
        </main>
    )
}