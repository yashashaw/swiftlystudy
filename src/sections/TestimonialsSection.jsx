import { COLORS, reviews } from "../constants";
import { useInView } from "../hooks/useInView";

export default function TestimonialsSection() {
  const [ref, inView] = useInView();

  return (
    <section
      id="reviews"
      ref={ref}
      style={{
        background: COLORS.navy,
        padding: "100px 5vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Injecting CSS keyframes for horizontal marquee and hover pause */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); } 
          }
          .marquee-container:hover .marquee-content {
            animation-play-state: paused;
          }
        `}
      </style>

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
          Student Stories
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
          Real Results
        </h2>

        {/* Hides overflow and fades left/right edges */}
        <div
          className="marquee-container"
          style={{
            width: "100%",
            overflow: "hidden",
            maskImage: "linear-gradient(to right, transparent, black 2%, black 98%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 2%, black 98%, transparent)",
            padding: "20px 0", // Added padding so box-shadows and transforms don't clip
          }}
        >
          {/* Marquee scrolling wrapper */}
          <div
            className="marquee-content"
            style={{
              display: "flex",
              gap: 28,
              alignItems: "stretch", // Ensures all cards match the height of the tallest one
              animation: "marquee 40s linear infinite",
              width: "max-content",
            }}
          >
            {/* Array check, quadrupled loop for seamless scroll, and filter out undefined data */}
            {Array.isArray(reviews) &&
              [...reviews, ...reviews, ...reviews, ...reviews]
                .filter(Boolean)
                .map((t, i) => (
                  <div
                    key={`${t?.name || "review"}-${i}`}
                    style={{
                      width: 350, // Fixed width so flex items don't shrink
                      flexShrink: 0,
                      background: "rgba(255,255,255,0.04)",
                      borderRadius: 20,
                      padding: "40px 32px",
                      border: "1px solid rgba(201,151,58,0.15)",
                      boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
                      backdropFilter: "blur(12px)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      opacity: inView ? 1 : 0,
                      transform: inView ? "none" : "translateY(30px)",
                      transition: `all 0.7s ease ${0.15 + (i % reviews.length) * 0.1}s`,
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: 36,
                          color: COLORS.gold,
                          fontFamily: "Georgia, serif",
                          lineHeight: 1,
                          marginBottom: 20,
                          opacity: 0.6,
                        }}
                      >
                        "
                      </div>

                      <p
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 15,
                          color: "rgba(255,255,255,0.7)",
                          lineHeight: 1.7,
                          marginBottom: 28,
                        }}
                      >
                        {t?.text}
                      </p>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <div
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: "50%",
                          background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "'Playfair Display', serif",
                          fontSize: 18,
                          fontWeight: 700,
                          color: COLORS.navy,
                          flexShrink: 0,
                        }}
                      >
                        {t?.avatar}
                      </div>
                      <div>
                        <p
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: 14,
                            fontWeight: 700,
                            color: COLORS.white,
                            margin: 0,
                          }}
                        >
                          {t?.name}
                        </p>
                        <p
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: 12,
                            color: COLORS.gold,
                            fontWeight: 600,
                            margin: 0,
                            marginTop: 2,
                          }}
                        >
                          {t?.score}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
}