/**
 * @type {import('next').NextPage}
 * @file src/pages/Poll.tsx
 * @author Alex plociennik
 * @date 2026-02-04
 * @description Page d'un poll par son id
 */

import { useParams } from "react-router/internal/react-server-client";
import { Poll } from "../types/mod.ts"

export default async function PollDetail({
    params,
}: {
    params: { id: string };
}) {
    const { selectedPoll } = await params;
    const poll = polls.find((p) => p.id === selectedPoll);

    return (
        <main className="">
            {/* PAGE REACT */}
        </main>
    );
}