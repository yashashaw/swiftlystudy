import { useState, useEffect } from "react";
import { COLORS } from "../constants";
import GradCap from "./GradCap";

export default function NavBar({ onNavigate, currentPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navLinks = [
    { label: "Home",       page: "home"       },
    { label: "Tutoring",   page: "tutoring"   },
    { label: "Consulting", page: "consulting" },
  ];

  const go = (page) => {
    onNavigate(page);
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(10,22,40,0.97)" : "rgba(10,22,40,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid rgba(201,151,58,0.2)`,
        transition: "all 0.35s ease",
        padding: "0 5vw",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 68,
      }}>
        <button
          onClick={() => go("home")}
          style={{ display: "flex", alignItems: "center", gap: 10, background: "none", border: "none", cursor: "pointer", padding: 0 }}
        >
          <GradCap />
          <span style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700, fontSize: 22, color: COLORS.white,
            letterSpacing: "-0.02em",
          }}>Swiftly Study</span>
        </button>

        {/* Desktop nav */}
        <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="desktop-nav">
          {navLinks.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => go(page)}
              style={{
                color: currentPage === page ? COLORS.goldLight : "rgba(255,255,255,0.75)",
                background: "none", border: "none", cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500,
                letterSpacing: "0.04em", transition: "color 0.2s", whiteSpace: "nowrap",
                padding: 0,
              }}
              onMouseOver={e => e.target.style.color = COLORS.goldLight}
              onMouseOut={e => e.target.style.color = currentPage === page ? COLORS.goldLight : "rgba(255,255,255,0.75)"}
            >{label}</button>
          ))}
          <button
            onClick={() => go("squeeze")}
            style={{
              background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})`,
              color: COLORS.navy, padding: "9px 22px", borderRadius: 6,
              fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 13,
              border: "none", cursor: "pointer", letterSpacing: "0.04em",
              boxShadow: "0 2px 12px rgba(201,151,58,0.35)", whiteSpace: "nowrap",
            }}
          >Book a Session</button>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger"
          style={{
            background: "none", border: "none", cursor: "pointer",
            display: "none", flexDirection: "column", gap: 5, padding: 4,
          }}
        >
          {[0, 1, 2].map(i => (
            <div key={i} style={{
              width: 24, height: 2, background: COLORS.white, borderRadius: 2,
              opacity: menuOpen && i === 1 ? 0 : 1, transition: "all 0.3s",
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: 68, left: 0, right: 0, zIndex: 99,
          background: "rgba(10,22,40,0.98)", backdropFilter: "blur(12px)",
          borderBottom: `1px solid rgba(201,151,58,0.2)`,
          padding: "20px 5vw", display: "flex", flexDirection: "column", gap: 20,
        }}>
          {navLinks.map(({ label, page }) => (
            <button key={page} onClick={() => go(page)} style={{
              color: "rgba(255,255,255,0.85)", background: "none", border: "none",
              cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontSize: 16,
              fontWeight: 500, textAlign: "left", padding: 0,
            }}>{label}</button>
          ))}
          <button onClick={() => go("squeeze")} style={{
            background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})`,
            color: COLORS.navy, padding: "12px 22px", borderRadius: 6,
            fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14,
            border: "none", cursor: "pointer", textAlign: "center",
          }}>Book a Session</button>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
