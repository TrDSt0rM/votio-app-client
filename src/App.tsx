/**
 * @type {import('next').NextPage}
 * @file src/App.tsx
 * @author Alex plociennik
 * @date 2026-02-04
 * @description Composant principal de l'application React avec routage
 */

import { BrowserRouter, Route, Routes } from "react-router";

import Index from "./pages/index.tsx";
import PollDetail from "./pages/PollDetail.tsx";
import "./App.css";
import MainLayout from "./components/MainLayout.tsx";

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}> 
            <Route path="/" element={<Index />} />
            <Route path="/polls/:selectedPoll" element={<PollDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default App;