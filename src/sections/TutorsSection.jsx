import { COLORS, tutors } from "../constants";
import { useInView } from "../hooks/useInView";

export default function TutorsSection() {
  const [ref, inView] = useInView();

  return (
    <section
      id="tutors"
      ref={ref}
      style={{
        background: COLORS.navy,
        padding: "100px 5vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(201,151,58,0.06) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 16,
            letterSpacing: "0.25em",
            color: COLORS.gold,
            textTransform: "uppercase",
            textAlign: "center",
            marginBottom: 12,
            opacity: inView ? 1 : 0,
            transition: "opacity 0.7s",
          }}
        >
          Meet Your Tutors
        </p>

        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(32px, 4.5vw, 52px)",
            fontWeight: 800,
            color: COLORS.white,
            textAlign: "center",
            letterSpacing: "-0.03em",
            marginBottom: 64,
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(20px)",
            transition: "all 0.8s ease 0.1s",
          }}
        >
          Top Students, Real Results
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 28,
          }}
        >
          {tutors.map((t, i) => (
            <div
              key={t.name}
              style={{
                background: "rgba(255,255,255,0.04)",
                borderRadius: 20,
                border: "1px solid rgba(201,151,58,0.15)",
                padding: "40px 32px",
                textAlign: "center",
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateY(30px)",
                transition: `all 0.7s ease ${0.15 + i * 0.1}s`,
                backdropFilter: "blur(12px)",
              }}
            >
              <img
                src={t.photo}
                alt={t.name}
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  objectFit: "cover",
                  margin: "0 auto 20px",
                  border: `2px solid ${COLORS.gold}`,
                  display: "block",
                }}
              />

              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 22,
                  fontWeight: 700,
                  color: COLORS.white,
                  marginBottom: 6,
                }}
              >
                {t.name}
              </h3>

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  color: COLORS.gold,
                  letterSpacing: "0.05em",
                  marginBottom: 20,
                }}
              >
                {t.school}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                  justifyContent: "center",
                  marginBottom: 24,
                }}
              >
                {t.subjects.map((s) => (
                  <span
                    key={s}
                    style={{
                      background: "rgba(201,151,58,0.12)",
                      border: "1px solid rgba(201,151,58,0.25)",
                      color: COLORS.goldLight,
                      padding: "5px 12px",
                      borderRadius: 20,
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 12,
                      fontWeight: 500,
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  paddingTop: 20,
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                GPA{" "}
                <span style={{ color: COLORS.goldLight, fontWeight: 700 }}>
                  {t.gpa}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}