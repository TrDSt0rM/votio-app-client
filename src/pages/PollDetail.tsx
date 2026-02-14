/**
 * @type {import('next').NextPage}
 * @file src/pages/Poll.tsx
 * @author Alex plociennik
 * @date 2026-02-04
 * @description Page d'un poll par son id
 */

const API_URL: string = "http://localhost:8000";
import { useParams } from "react-router";
import { PollApi } from "../types/mod.ts";
import { useEffect, useState } from "react";

type PollState =
  | { status: "loading" }
  | { status: "error"; error: string }
  | { status: "loaded"; poll: PollApi };

export default function PollDetail() {
  const { selectedPoll } = useParams();

  const [pollState, setPollState] = useState<PollState>({ status: "loading" });

  useEffect(() => {
    if (!selectedPoll) return;

    setPollState({ status: "loading" });

    (async () => {
      try {
        const resp = await fetch(`${API_URL}/polls/${selectedPoll}`);
        if (!resp.ok) {
          const json = await resp.json();
          throw new Error(json.error?.message || `HTTP ${resp.status}`);
        }

        const json = await resp.json();
        // Attention : il faut valider les données reçues
        setPollState({ status: "loaded", poll: json.data });
      } catch (err) {
        setPollState({
          status: "error",
          error: err instanceof Error ? err.message : "Failed to load poll",
        });
      }
    })();
  }, [selectedPoll]); // Dépendance à `selectedPoll` : l'effet sera déclenché à nouveau lors d'une modification de l'état du sondage

  // 1. Si on charge
  if (pollState.status === "loading") {
    return (
      <>
        <h2>Chargement du sondage...</h2>
      </>
    );
  }

  // 2. Si on a une erreur
  if (pollState.status === "error") {
    return (
      <>
        <h2>Erreur</h2>
        <p>{pollState.error}</p>
        <a href="/">Retour à l'accueil</a>
      </>
    );
  }

  // 3. Si c'est chargé (status === "loaded")
  const poll = pollState.poll;
  //const { poll } = pollState;

  if (!poll) {
    return (
      <>
        <h2>Erreur</h2>
        <p>Sondage introuvable.</p>
        <a href="/">Retour à l'accueil</a>
      </>
    );
  }
  return (
    <>
      <h1>📊 {poll.title}</h1>
      <p>
        ID du sondage : <code>{selectedPoll}</code>
      </p>

      <div
        style={{ marginTop: "20px", border: "1px solid #ccc", padding: "15px" }}
      >
        <h3>Options de vote :</h3>
        {/* On suppose que ton objet poll a une liste d'options */}
        <p>
          <i>(L'interface de vote s'affichera ici)</i>
        </p>
      </div>

      <p style={{ marginTop: "20px" }}>
        <a href="/">← Retour à la liste</a>
      </p>
    </>
  );
}
