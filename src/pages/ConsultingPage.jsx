import { useState, useEffect } from "react";
import { COLORS, consultingTutors } from "../constants";
import { useInView } from "../hooks/useInView";

const whyUs = [
  {
    icon: "🏛️",
    title: "Recent Ivy+ Insiders",
    desc: "Traditional counselors haven't applied to college in decades. We just beat the most competitive cycles in history and know exactly what works today."
  },
  {
    icon: "📂",
    title: "We Read Our Admissions Files",
    desc: "We don't guess what Top 20 schools want. We read the actual officer notes on our own Stanford applications to reverse-engineer the acceptance formula."
  },
  {
    icon: "🎯",
    title: "The Anti-'Well-Rounded'",
    desc: "Outdated advisors tell you to pad your resume and join more clubs. We cut the fluff and engineer a highly specialized 'Spike' that demands attention."
  },
];

export default function ConsultingPage({ onNavigate }) {
  const [visible, setVisible] = useState(false);
  const [whyRef, whyInView] = useInView();
  const [tutorsRef, tutorsInView] = useInView();

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
          We don't just edit essays. Our team of ONLY Stanford and Ivy+ strategists build highly authentic, deeply specialized applicant profiles.
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

      {/* Why Us */}
      <section ref={whyRef} style={{
        background: "rgba(255,255,255,0.02)",
        borderTop: "1px solid rgba(201,151,58,0.1)",
        padding: "100px 5vw",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 20,
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
                <div style={{ fontSize: 50, marginBottom: 14 }}>{w.icon}</div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif", fontSize: 25,
                  fontWeight: 700, color: COLORS.goldLight, marginBottom: 10,
                }}>{w.title}</h3>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 18,
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

      {/* Consulting Tutors */}
      <section ref={tutorsRef} style={{ background: COLORS.navy, padding: "100px 5vw" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 13,
            letterSpacing: "0.25em", color: COLORS.gold,
            textTransform: "uppercase", textAlign: "center", marginBottom: 12,
            opacity: tutorsInView ? 1 : 0, transition: "opacity 0.7s",
          }}>The Team</p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800,
            color: COLORS.white, textAlign: "center",
            letterSpacing: "-0.03em", marginBottom: 16,
            opacity: tutorsInView ? 1 : 0,
            transform: tutorsInView ? "none" : "translateY(20px)",
            transition: "all 0.8s ease 0.1s",
          }}>Your Strategists</h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 18,
            color: "rgba(255,255,255,0.5)", textAlign: "center",
            maxWidth: 520, margin: "0 auto 64px", lineHeight: 1.65,
            opacity: tutorsInView ? 1 : 0, transition: "opacity 0.8s ease 0.15s",
          }}>
            Every consulting client is matched exclusively with an Ivy+ or Stanford student. No exceptions.
          </p>

          <div style={{
            display: "flex", flexDirection: "column", gap: 40,
          }}>
            {consultingTutors.map((t, i) => (
              <div
                key={t.name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: 24,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(201,151,58,0.12)",
                  borderRadius: 20,
                  padding: "44px 48px",
                  opacity: tutorsInView ? 1 : 0,
                  transform: tutorsInView ? "none" : "translateY(30px)",
                  transition: `all 0.7s ease ${0.1 + i * 0.12}s`,
                }}
                className="tutor-card-consulting"
              >
                {/* 1st part: Photo + identity */}
                <div style={{ textAlign: "center" }}>
                  {t.photo ? (
                    <img
                      src={t.photo}
                      alt={t.name}
                      style={{
                        width: 300, height: 300, borderRadius: "50%",
                        objectFit: "cover", display: "block",
                        margin: "0 auto 16px",
                        border: `3px solid ${COLORS.gold}`,
                      }}
                    />
                  ) : (
                    <div style={{
                      width: 300, height: 300, borderRadius: "50%",
                      background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      margin: "0 auto 16px",
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 52, fontWeight: 800, color: COLORS.navy,
                    }}>
                      {t.name.charAt(0)}
                    </div>
                  )}
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif", fontSize: 50,
                    fontWeight: 700, color: COLORS.white, marginBottom: 4,
                  }}>{t.name}</h3>

                  {/* Render School Name as Text */}
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif", fontSize: 30,
                    color: COLORS.gold, fontWeight: 600, letterSpacing: "0.05em",
                    marginBottom: 12,
                  }}>{t.school}</p>
                </div>

                {/* 2nd part: Bio paragraph */}
                <div>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif", fontSize: 18,
                    color: "rgba(255,255,255,0.7)", lineHeight: 1.8,
                  }}>{t.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 700px) {
          .tutor-card-consulting {
            gap: 20px !important;
            padding: 36px 28px !important;
          }
        }
      `}</style>
    </>
  );
}