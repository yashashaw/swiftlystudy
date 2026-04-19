import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { COLORS } from "../constants";
import GradCap from "./GradCap";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  // Listen for scroll to change background opacity
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home",       path: "/"           },
    { label: "Tutoring",   path: "/tutoring"   },
    { label: "Consulting", path: "/consulting" },
  ];

  const go = (path) => {
    navigate(path);
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
        {/* Branding - Routes back to Home */}
        <button
          onClick={() => go("/")}
          style={{ display: "flex", alignItems: "center", gap: 10, background: "none", border: "none", cursor: "pointer", padding: 0 }}
        >
          <GradCap />
          <span style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700, fontSize: 22, color: COLORS.white,
            letterSpacing: "-0.02em",
          }}>Swiftly Study</span>
        </button>

        {/* Desktop Nav */}
        <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="desktop-nav">
          {navLinks.map(({ label, path }) => (
            <button
              key={path}
              onClick={() => go(path)}
              style={{
                // We check location.pathname to see if the button should be gold
                color: location.pathname === path ? COLORS.goldLight : "rgba(255,255,255,0.75)",
                background: "none", border: "none", cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500,
                letterSpacing: "0.04em", transition: "color 0.2s", whiteSpace: "nowrap",
                padding: 0,
              }}
              onMouseOver={e => e.target.style.color = COLORS.goldLight}
              onMouseOut={e => e.target.style.color = location.pathname === path ? COLORS.goldLight : "rgba(255,255,255,0.75)"}
            >
              {label}
            </button>
          ))}
          
          {/* Squeeze Page CTA */}
          <button
            onClick={() => go("/blueprint")}
            style={{
              background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})`,
              color: COLORS.navy, padding: "9px 22px", borderRadius: 6,
              fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 13,
              border: "none", cursor: "pointer", letterSpacing: "0.04em",
              boxShadow: "0 2px 12px rgba(201,151,58,0.35)", whiteSpace: "nowrap",
            }}
          >
            Book a Session
          </button>
        </div>

        {/* Hamburger Menu Icon */}
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
              transform: menuOpen ? (
                i === 0 ? "rotate(45deg) translate(5px, 5px)" : 
                i === 2 ? "rotate(-45deg) translate(5px, -5px)" : "none"
              ) : "none"
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: 68, left: 0, right: 0, zIndex: 99,
          background: "rgba(10,22,40,0.98)", backdropFilter: "blur(12px)",
          borderBottom: `1px solid rgba(201,151,58,0.2)`,
          padding: "20px 5vw", display: "flex", flexDirection: "column", gap: 20,
        }}>
          {navLinks.map(({ label, path }) => (
            <button key={path} onClick={() => go(path)} style={{
              color: location.pathname === path ? COLORS.goldLight : "rgba(255,255,255,0.85)", 
              background: "none", border: "none",
              cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontSize: 16,
              fontWeight: 500, textAlign: "left", padding: 0,
            }}>
              {label}
            </button>
          ))}
          <button onClick={() => go("/blueprint")} style={{
            background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})`,
            color: COLORS.navy, padding: "12px 22px", borderRadius: 6,
            fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14,
            border: "none", cursor: "pointer", textAlign: "center",
          }}>
            Book a Session
          </button>
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