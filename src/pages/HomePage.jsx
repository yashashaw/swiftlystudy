import { useState, useEffect } from "react";
import { COLORS } from "../constants";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => { 
    setTimeout(() => setVisible(true), 100); 
  }, []);

  // Updated to use React Router navigation
  const go = (path) => { 
    navigate(path); 
    window.scrollTo(0, 0); 
  };

  return (
    <>
      {/* Hero */}
      <section style={{
        minHeight: "100vh",
        background: `linear-gradient(160deg, ${COLORS.navy} 0%, #0F2044 55%, #1A0A28 100%)`,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: "120px 5vw 80px", textAlign: "center",
        position: "relative", overflow: "hidden",
      }}>
        {/* Decorative rings */}
        {[
          { size: 500, top: "-180px", right: "-120px", opacity: 0.05 },
          { size: 300, bottom: "60px", left: "-80px", opacity: 0.06 },
        ].map((c, i) => (
          <div key={i} style={{
            position: "absolute", width: c.size, height: c.size,
            borderRadius: "50%", border: `1.5px solid ${COLORS.gold}`,
            top: c.top, right: c.right, bottom: c.bottom, left: c.left,
            opacity: c.opacity, pointerEvents: "none",
          }} />
        ))}

        {/* Gold line */}
        <div style={{
          width: 2, height: visible ? 60 : 0,
          background: `linear-gradient(to bottom, transparent, ${COLORS.gold})`,
          marginBottom: 28, transition: "height 0.8s ease 0.2s",
        }} />

        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 13,
          letterSpacing: "0.25em", color: COLORS.gold,
          textTransform: "uppercase", marginBottom: 20,
          opacity: visible ? 1 : 0, transition: "opacity 0.8s ease 0.4s",
        }}>Swiftly Study</p>

        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 800,
          color: COLORS.white, lineHeight: 1.08, letterSpacing: "-0.03em",
          maxWidth: 860, margin: "0 auto 24px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.9s ease 0.5s",
        }}>
          From Acing Algebra to{" "}
          <span style={{
            background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})`,
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>Stanford Admissions.</span>{" "}
          We Build Top-Tier Students.
        </h1>

        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 18,
          color: "rgba(255,255,255,0.65)", maxWidth: 560,
          lineHeight: 1.7, margin: "0 auto 64px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.9s ease 0.7s",
        }}>
          Expert tutoring to master your classes, and elite strategy to engineer your Ivy League admission.
        </p>

        {/* Split cards */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24, maxWidth: 860, width: "100%",
          opacity: visible ? 1 : 0, transition: "opacity 0.9s ease 0.9s",
        }}>
          {/* Tutoring card - links to /tutoring */}
          <SplitCard
            emoji="📚"
            badge="Academic Tutoring"
            badgeColor={COLORS.gold}
            badgeBg="rgba(201,151,58,0.15)"
            title="I need academic help for my child."
            desc="One-on-one sessions with top students from Stanford, Berkeley, NYU & more. Real expertise for every subject."
            btnLabel="Explore Tutoring →"
            onClick={() => go("/tutoring")}
          />
          {/* Consulting card - links to /consulting */}
          <SplitCard
            emoji="🎓"
            badge="College Consulting"
            badgeColor="#A78BFA"
            badgeBg="rgba(167,139,250,0.15)"
            title="I need a strategy to get into a Top 20 College."
            desc="Elite consulting from Stanford & Ivy+ graduates. We don't just edit essays - we engineer your entire profile."
            btnLabel="Explore Consulting →"
            btnAccent="#A78BFA"
            btnAccentDark="#6D28D9"
            onClick={() => go("/consulting")}
          />
        </div>
      </section>
    </>
  );
}

function SplitCard({ emoji, badge, badgeColor, badgeBg, title, desc, btnLabel, onClick, btnAccent, btnAccentDark }) {
  const [hovered, setHovered] = useState(false);
  const accent = btnAccent || "#C9973A";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "rgba(255,255,255,0.04)",
        border: `1px solid ${hovered ? "rgba(201,151,58,0.4)" : "rgba(201,151,58,0.15)"}`,
        borderRadius: 20, padding: "40px 36px", textAlign: "left",
        transition: "transform 0.25s, border-color 0.25s, box-shadow 0.25s",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? "0 20px 48px rgba(0,0,0,0.3)" : "0 4px 20px rgba(0,0,0,0.15)",
        cursor: "default",
      }}
    >
      <div style={{ fontSize: 28, marginBottom: 16 }}>{emoji}</div>
      <span style={{
        display: "inline-block", background: badgeBg,
        color: badgeColor, fontSize: 11, fontWeight: 700,
        letterSpacing: "0.1em", textTransform: "uppercase",
        padding: "4px 12px", borderRadius: 20, marginBottom: 18,
        fontFamily: "'DM Sans', sans-serif",
        border: `1px solid ${badgeColor}40`,
      }}>{badge}</span>
      <h3 style={{
        fontFamily: "'Playfair Display', serif", fontSize: 22,
        fontWeight: 700, color: "#FFFFFF", marginBottom: 12, lineHeight: 1.3,
      }}>{title}</h3>
      <p style={{
        fontFamily: "'DM Sans', sans-serif", fontSize: 14,
        color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 28,
      }}>{desc}</p>
      <button
        onClick={onClick}
        style={{
          background: `linear-gradient(135deg, ${accent}, ${btnAccentDark || "#E8B95A"})`,
          color: "#0A1628", padding: "12px 24px", borderRadius: 8,
          fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14,
          border: "none", cursor: "pointer", letterSpacing: "0.03em",
          transition: "opacity 0.2s, transform 0.2s",
        }}
        onMouseOver={e => e.currentTarget.style.opacity = "0.88"}
        onMouseOut={e => e.currentTarget.style.opacity = "1"}
      >{btnLabel}</button>
    </div>
  );
}