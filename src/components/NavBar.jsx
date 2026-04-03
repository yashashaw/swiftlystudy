import { useState, useEffect } from "react";
import { COLORS } from "../constants";
import GradCap from "./GradCap";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(10,22,40,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? `1px solid rgba(201,151,58,0.2)` : "none",
        transition: "all 0.35s ease",
        padding: "0 5vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 68,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <GradCap />
        <span
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            fontSize: 22,
            color: COLORS.white,
            letterSpacing: "-0.02em",
          }}
        >
          SwiftlyStudy
        </span>
      </div>

      <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
        {["Services", "Tutors", "Testimonials", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              color: "rgba(255,255,255,0.75)",
              textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: "0.04em",
              transition: "color 0.2s",
            }}
            onMouseOver={(e) => (e.target.style.color = COLORS.goldLight)}
            onMouseOut={(e) => (e.target.style.color = "rgba(255,255,255,0.75)")}
          >
            {item}
          </a>
        ))}
        <a
          href="#contact"
          style={{
            background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})`,
            color: COLORS.navy,
            padding: "9px 22px",
            borderRadius: 6,
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            fontSize: 13,
            textDecoration: "none",
            letterSpacing: "0.04em",
            boxShadow: "0 2px 12px rgba(201,151,58,0.35)",
          }}
        >
          Book a Session
        </a>
      </div>
    </nav>
  );
}
