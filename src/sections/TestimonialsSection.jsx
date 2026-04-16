import { COLORS, reviews } from "../constants";
import { useInView } from "../hooks/useInView";

export default function TestimonialsSection() {
  const [ref, inView] = useInView();

  return (
    <section
      id="reviews"
      ref={ref}
      style={{ background: COLORS.cream, padding: "100px 5vw" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 16,
            letterSpacing: "0.25em",
            color: COLORS.crimson,
            textTransform: "uppercase",
            textAlign: "center",
            marginBottom: 12,
            opacity: inView ? 1 : 0,
            transition: "opacity 0.7s",
          }}
        >
          Student Stories
        </p>

        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(32px, 4.5vw, 52px)",
            fontWeight: 800,
            color: COLORS.navy,
            textAlign: "center",
            letterSpacing: "-0.03em",
            marginBottom: 64,
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(20px)",
            transition: "all 0.8s ease 0.1s",
          }}
        >
          Real Results
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {reviews.map((t, i) => (
            <div
              key={t.name}
              style={{
                background: COLORS.white,
                borderRadius: 20,
                padding: "40px 32px",
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 2px 20px rgba(0,0,0,0.05)",
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateY(30px)",
                transition: `all 0.7s ease ${0.1 + i * 0.1}s`,
              }}
            >
              <div
                style={{
                  fontSize: 36,
                  color: COLORS.gold,
                  fontFamily: "Georgia, serif",
                  lineHeight: 1,
                  marginBottom: 20,
                  opacity: 0.4,
                }}
              >
                "
              </div>

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 15,
                  color: COLORS.slate,
                  lineHeight: 1.7,
                  marginBottom: 28,
                }}
              >
                {t.text}
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${COLORS.navy}, #1A3060)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 18,
                    fontWeight: 700,
                    color: COLORS.goldLight,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 14,
                      fontWeight: 700,
                      color: COLORS.navy,
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 12,
                      color: COLORS.gold,
                      fontWeight: 600,
                    }}
                  >
                    {t.score}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
