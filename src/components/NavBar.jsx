import { useState, useEffect } from "react";
import { COLORS } from "../constants";
import GradCap from "./GradCap";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

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
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}>
          <GradCap />
          <span style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700, fontSize: 22, color: COLORS.white,
            letterSpacing: "-0.02em",
          }}>SwiftlyStudy</span>
        </a>

        {/* Desktop nav links */}
        <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="desktop-nav">
          {["Services", "Tutors", "Testimonials", "Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{
              color: "rgba(255,255,255,0.75)", textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500,
              letterSpacing: "0.04em", transition: "color 0.2s", whiteSpace: "nowrap",
            }}
              onMouseOver={e => e.target.style.color = COLORS.goldLight}
              onMouseOut={e => e.target.style.color = "rgba(255,255,255,0.75)"}
            >{item}</a>
          ))}
          <a href="#contact" style={{
            background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})`,
            color: COLORS.navy, padding: "9px 22px", borderRadius: 6,
            fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 13,
            textDecoration: "none", letterSpacing: "0.04em",
            boxShadow: "0 2px 12px rgba(201,151,58,0.35)", whiteSpace: "nowrap",
          }}>Book a Session</a>
        </div>

        {/* Hamburger button (mobile only) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger"
          style={{
            background: "none", border: "none", cursor: "pointer",
            display: "none", flexDirection: "column", gap: 5, padding: 4,
          }}
        >
          {[0,1,2].map(i => (
            <div key={i} style={{
              width: 24, height: 2, background: COLORS.white, borderRadius: 2,
              transition: "all 0.3s",
              transform: menuOpen
                ? i === 0 ? "rotate(45deg) translate(5px, 5px)"
                : i === 1 ? "opacity: 0"
                : "rotate(-45deg) translate(5px, -5px)"
                : "none",
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: 68, left: 0, right: 0, zIndex: 99,
          background: "rgba(10,22,40,0.98)", backdropFilter: "blur(12px)",
          borderBottom: `1px solid rgba(201,151,58,0.2)`,
          padding: "20px 5vw", display: "flex", flexDirection: "column", gap: 20,
        }}>
          {["Services", "Tutors", "Testimonials", "Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "rgba(255,255,255,0.75)", textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 500,
              }}
            >{item}</a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} style={{
            background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})`,
            color: COLORS.navy, padding: "12px 22px", borderRadius: 6,
            fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14,
            textDecoration: "none", textAlign: "center",
          }}>Book a Session</a>
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