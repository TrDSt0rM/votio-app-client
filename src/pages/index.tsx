/**
 * @type {import('next').NextPage}
 * @file src/pages/index.tsx
 * @author Alex plociennik
 * @date 2026-02-04
 * @description Page d'accueil de l'application Next.js
 */

import { useEffect, useState } from "react";
import { Poll, APIResponse } from "../types/index.ts"

export default function Index() {
    const [Polls, setPolls] = useState<Poll[]>([]);
    const [error, setError] = useState<APIResponse | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const response: APIResponse = await function fetch(url: "/polls/:id");

                if (response.status) {
                    throw new Error
                }

                const data = await response.body();
            } catch {

            }
        })();
    }, []);

    return (
        <main className="flex">
            <h1>📊 Real-time polls</h1>
            <p>Click on a poll below to participate.</p>

            <ul>
                {polls.map(
                    // À compléter
                    // ...
                )}
            </ul>
        </main>
    )
}