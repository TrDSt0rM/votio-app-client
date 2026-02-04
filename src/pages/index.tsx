/**
 * @type {import('next').NextPage}
 * @file src/pages/index.tsx
 * @author Alex plociennik
 * @date 2026-02-04
 * @description Page d'accueil de l'application Next.js
 */

import { BrowserRouter, Route, Routes } from "react-router";

import Index from "./pages/index.tsx";
import Poll from "./pages/Poll.tsx";
import "./App.css";

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/polls/:selectedPoll" element={<Poll />} />
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default App;