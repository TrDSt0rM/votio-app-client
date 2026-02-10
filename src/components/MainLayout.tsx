// src/components/MainLayout.tsx
import { Outlet } from "react-router";
import { Navbar } from "./Navbar.tsx";
import { Footer } from "./Footer.tsx";

export default function MainLayout() {
  return (
    <div className="layout-container">
      <Navbar />
      
      <main className="main-content">
        <Outlet /> {/* C'est ici que s'affichera index.tsx ou PollDetail.tsx */}
      </main>

      <Footer />
    </div>
  );
}