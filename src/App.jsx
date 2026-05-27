import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// Pages
import ContactUs from "./pages/ContactUs";
import HomePage from "./pages/HomePage";
import TutoringPage from "./pages/TutoringPage";
import ConsultingPage from "./pages/ConsultingPage";
import SqueezePage from "./pages/SqueezePage";
import DeliveryPage from "./pages/DeliveryPage";
import WebinarPage from "./pages/WebinarPage";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Pages WITH Navbar/Footer */}
        <Route path="/" element={<LayoutWithNav><HomePage /></LayoutWithNav>} />
        <Route path="/tutoring" element={<LayoutWithNav><TutoringPage /></LayoutWithNav>} />
        <Route path="/consulting" element={<LayoutWithNav><ConsultingPage /></LayoutWithNav>} />
        <Route path="/contact" element={<LayoutWithNav><ContactUs /></LayoutWithNav>} />
        {/* Clean Pages WITHOUT Navbar/Footer */}
        <Route path="/blueprint" element={<SqueezePage />} />
        <Route path="/delivery" element={<DeliveryPage />} />
        <Route path="/webinar" element={<WebinarPage />} />
      </Routes>
    </Router>
  );
}

function LayoutWithNav({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}