import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
  return (
    <Router>
      <Routes>
        {/* Pages WITH Navbar/Footer */}
        <Route path="/" element={<LayoutWithNav><HomePage /></LayoutWithNav>} />
        <Route path="/tutoring" element={<LayoutWithNav><TutoringPage /></LayoutWithNav>} />
        <Route path="/consulting" element={<LayoutWithNav><ConsultingPage /></LayoutWithNav>} />

        {/* Clean Pages WITHOUT Navbar/Footer */}
        <Route path="/blueprint" element={<SqueezePage />} />
        <Route path="/delivery" element={<DeliveryPage />} />
      </Routes>
    </Router>
  );
}

// Simple wrapper to keep Nav/Footer on main pages but hide them on Squeeze/Delivery
function LayoutWithNav({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}