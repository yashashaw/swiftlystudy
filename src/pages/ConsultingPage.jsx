import { useState, useEffect } from "react";
import { COLORS } from "../constants";
import { useInView } from "../hooks/useInView";

const phases = [
  {
    num: "01",
    title: "Research",
    desc: "Deep-dive diagnostic of your transcript, activities, and ambitions. We map target schools and identify the white space where you can win.",
  },
  {
    num: "02",
    title: "Execution",
    desc: "We build your 'spike' — the rare, specialized credential that makes admissions officers remember you. Projects, competitions, and achievements that actually move the needle.",
  },
  {
    num: "03",
    title: "Narrative",
    desc: "Crafting a cohesive story across every touchpoint — essays, activities list, recommendations — that is authentic, powerful, and perfectly targeted.",
  },
  {
    num: "04",
    title: "Application",
    desc: "Submission-ready review, deadline management, and real-time strategy as decisions roll in. We're with you from first draft to final deposit.",
  },
];

const whyUs = [
  { icon: "🏛️", title: "Stanford-Founded", desc: "Built by students who got in and know exactly how the game is played." },
  { icon: "📊", title: "Data-Driven", desc: "We track acceptance patterns across cycles to find where your profile wins." },
  { icon: "🎯", title: "Profile-First", desc: "We build who you are before we write a single word of your essays." },
];

export default function ConsultingPage({ onNavigate }) {
  const [visible, setVisible] = useState(false);
  const [phasesRef, phasesInView] = useInView();
  const [whyRef, whyInView] = useInView();

  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  const go = (page) => { onNavigate(page); window.scrollTo(0, 0); };

  return (
    <>
      {/* Hero */}
      <section style={{
        minHeight: "85vh",
        background: `linear-gradient(160deg, ${COLORS.navy} 0%, #0D1B3E 60%, #1A0A28 100%)`,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: "120px 5vw 80px", textAlign: "center",
        position: "relative", overflow: "hidden",
      }}>
        {/* Decorative rings */}
        {[
          { size: 600, top: "-200px", right: "-150px", opacity: 0.04 },
          { size: 250, bottom: "80px", left: "-60px", opacity: 0.05 },
        ].map((c, i) => (
          <div key={i} style={{
            position: "absolute", width: c.size, height: c.size,
            borderRadius: "50%", border: `1.5px solid ${COLORS.gold}`,
            top: c.top, right: c.right, bottom: c.bottom, left: c.left,
            opacity: c.opacity, pointerEvents: "none",
          }} />
        ))}

        <span style={{
          display: "inline-block",
          background: "rgba(167,139,250,0.15)",
          color: "#C4B5FD",
          border: "1px solid rgba(167,139,250,0.35)",
          fontSize: 11, fontWeight: 700, letterSpacing: "0.12em",
          textTransform: "uppercase", padding: "5px 16px", borderRadius: 20,
          fontFamily: "'DM Sans', sans-serif", marginBottom: 24,
          opacity: visible ? 1 : 0, transition: "opacity 0.8s ease 0.3s",
        }}>Swiftly Consulting</span>

        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(36px, 5.5vw, 66px)", fontWeight: 800,
          color: COLORS.white, lineHeight: 1.1, letterSpacing: "-0.03em",
          maxWidth: 780, margin: "0 auto 22px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.9s ease 0.4s",
        }}>
          Engineer Your Spike.{" "}
          <span style={{
            background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})`,
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>Beat the 2026 Admissions Landscape.</span>
        </h1>

        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 18,
          color: "rgba(255,255,255,0.65)", maxWidth: 560,
          lineHeight: 1.7, margin: "0 auto 44px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.9s ease 0.6s",
        }}>
          We don't just edit essays. Our team of Stanford and Ivy+ strategists build highly authentic, deeply specialized applicant profiles.
        </p>

        <button
          onClick={() => go("squeeze")}
          style={{
            background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})`,
            color: COLORS.navy, padding: "16px 40px", borderRadius: 8,
            fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15,
            border: "none", cursor: "pointer", letterSpacing: "0.04em",
            boxShadow: "0 4px 24px rgba(201,151,58,0.4)",
            opacity: visible ? 1 : 0, transition: "opacity 0.9s ease 0.8s, transform 0.2s, box-shadow 0.2s",
          }}
          onMouseOver={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(201,151,58,0.55)"; }}
          onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(201,151,58,0.4)"; }}
        >
          Book a Free Strategy Session
        </button>
      </section>

      {/* 4-Phase Strategy */}
      <section ref={phasesRef} style={{ background: COLORS.navy, padding: "100px 5vw" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 13,
            letterSpacing: "0.25em", color: COLORS.gold,
            textTransform: "uppercase", textAlign: "center", marginBottom: 12,
            opacity: phasesInView ? 1 : 0, transition: "opacity 0.7s",
          }}>The Method</p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800,
            color: COLORS.white, textAlign: "center",
            letterSpacing: "-0.03em", marginBottom: 64,
            opacity: phasesInView ? 1 : 0,
            transform: phasesInView ? "none" : "translateY(20px)",
            transition: "all 0.8s ease 0.1s",
          }}>The 4-Phase Strategy</h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: 24,
          }}>
            {phases.map((p, i) => (
              <div key={p.num} style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(201,151,58,0.15)",
                borderRadius: 18, padding: "36px 28px",
                opacity: phasesInView ? 1 : 0,
                transform: phasesInView ? "none" : "translateY(30px)",
                transition: `all 0.7s ease ${0.1 + i * 0.1}s`,
              }}>
                <div style={{
                  fontFamily: "'Playfair Display', serif", fontSize: 48,
                  fontWeight: 800, color: "rgba(201,151,58,0.2)",
                  lineHeight: 1, marginBottom: 10,
                }}>{p.num}</div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif", fontSize: 20,
                  fontWeight: 700, color: COLORS.goldLight, marginBottom: 10,
                }}>{p.title}</h3>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 14,
                  color: "rgba(255,255,255,0.6)", lineHeight: 1.7,
                }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section ref={whyRef} style={{
        background: "rgba(255,255,255,0.02)",
        borderTop: "1px solid rgba(201,151,58,0.1)",
        padding: "100px 5vw",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 13,
            letterSpacing: "0.25em", color: COLORS.gold,
            textTransform: "uppercase", textAlign: "center", marginBottom: 12,
            opacity: whyInView ? 1 : 0, transition: "opacity 0.7s",
          }}>Why Us</p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800,
            color: COLORS.white, textAlign: "center",
            letterSpacing: "-0.03em", marginBottom: 56,
            opacity: whyInView ? 1 : 0,
            transform: whyInView ? "none" : "translateY(20px)",
            transition: "all 0.8s ease 0.1s",
          }}>Not Just Advisors. Architects.</h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 24, marginBottom: 64,
          }}>
            {whyUs.map((w, i) => (
              <div key={w.title} style={{
                textAlign: "center", padding: "32px 24px",
                opacity: whyInView ? 1 : 0,
                transform: whyInView ? "none" : "translateY(20px)",
                transition: `all 0.7s ease ${0.1 + i * 0.1}s`,
              }}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{w.icon}</div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif", fontSize: 19,
                  fontWeight: 700, color: COLORS.goldLight, marginBottom: 10,
                }}>{w.title}</h3>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 14,
                  color: "rgba(255,255,255,0.6)", lineHeight: 1.65,
                }}>{w.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <button
              onClick={() => go("squeeze")}
              style={{
                background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})`,
                color: COLORS.navy, padding: "15px 40px", borderRadius: 8,
                fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15,
                border: "none", cursor: "pointer", letterSpacing: "0.04em",
                boxShadow: "0 4px 24px rgba(201,151,58,0.35)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseOver={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(201,151,58,0.5)"; }}
              onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(201,151,58,0.35)"; }}
            >
              Get Your Free Blueprint Session →
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
