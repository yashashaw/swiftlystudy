import { useState } from "react";
import "./styles/global.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// Pages
import HomePage from "./pages/HomePage";
import TutoringPage from "./pages/TutoringPage";
import ConsultingPage from "./pages/ConsultingPage";
import SqueezePage from "./pages/SqueezePage";
import DeliveryPage from "./pages/DeliveryPage";

export default function App() {
  const [page, setPage] = useState("home");

  const noNav = page === "squeeze" || page === "delivery";

  return (
    <div>
      {!noNav && <NavBar onNavigate={setPage} currentPage={page} />}

      {page === "home"      && <HomePage      onNavigate={setPage} />}
      {page === "tutoring"  && <TutoringPage  onNavigate={setPage} />}
      {page === "consulting"&& <ConsultingPage onNavigate={setPage} />}
      {page === "squeeze"   && <SqueezePage   onNavigate={setPage} />}
      {page === "delivery"  && <DeliveryPage  onNavigate={setPage} />}

      {!noNav && <Footer />}
    </div>
  );
}
