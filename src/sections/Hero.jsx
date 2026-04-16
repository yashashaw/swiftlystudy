import { useState, useEffect } from "react";
import { COLORS } from "../constants";

const logos = [
  "/Berkeley.png",
  "/Stanford.png",
  "/NYU.png",
  "/USC.png",
  "/UCLA.png",
  "/UCSD.png",
];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        background: `linear-gradient(160deg, ${COLORS.navy} 0%, #0F2044 55%, #1A0A28 100%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "100px 5vw 60px",
        textAlign: "center",
      }}
    >
      {/* Decorative circles */}
      {[
        { size: 500, top: "-180px", right: "-120px", opacity: 0.05 },
        { size: 300, bottom: "60px", left: "-80px", opacity: 0.06 },
        { size: 200, top: "40%", left: "60%", opacity: 0.04 },
      ].map((c, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: c.size,
            height: c.size,
            borderRadius: "50%",
            border: `1.5px solid ${COLORS.gold}`,
            top: c.top,
            right: c.right,
            bottom: c.bottom,
            left: c.left,
            opacity: c.opacity,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Gold accent line */}
      <div
        style={{
          width: 2,
          height: visible ? 60 : 0,
          background: `linear-gradient(to bottom, transparent, ${COLORS.gold})`,
          marginBottom: 28,
          transition: "height 0.8s ease 0.2s",
        }}
      />

      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 16,
          letterSpacing: "0.25em",
          color: COLORS.gold,
          textTransform: "uppercase",
          marginBottom: 20,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.8s ease 0.4s",
        }}
      >
        Tutoring by Top College Students
      </p>

      <h1
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(42px, 7vw, 82px)",
          fontWeight: 800,
          color: COLORS.white,
          lineHeight: 1.08,
          letterSpacing: "-0.03em",
          maxWidth: 820,
          margin: "0 auto 28px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.9s ease 0.5s",
        }}
      >
        Unlock Your{" "}
        <span
          style={{
            background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Academic
        </span>{" "}
        Potential
      </h1>

      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 18,
          color: "rgba(255,255,255,0.6)",
          maxWidth: 560,
          lineHeight: 1.7,
          margin: "0 auto 44px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.9s ease 0.7s",
        }}
      >
        One-on-one tutoring with students from Stanford, UC
        Berkeley, NYU, & more. Real expertise. Real results.
      </p>

      <div
        style={{
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
          justifyContent: "center",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.9s ease 0.9s",
        }}
      >
        <a
          href="#contact"
          style={{
            background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})`,
            color: COLORS.navy,
            padding: "15px 36px",
            borderRadius: 8,
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            fontSize: 15,
            textDecoration: "none",
            letterSpacing: "0.03em",
            boxShadow: "0 4px 24px rgba(201,151,58,0.4)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 8px 32px rgba(201,151,58,0.5)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 4px 24px rgba(201,151,58,0.4)";
          }}
        >
          Book a Session
        </a>
        <a
          href="#services"
          style={{
            border: `1.5px solid rgba(255,255,255,0.2)`,
            color: COLORS.white,
            padding: "15px 36px",
            borderRadius: 8,
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 500,
            fontSize: 15,
            textDecoration: "none",
            letterSpacing: "0.03em",
            backdropFilter: "blur(8px)",
            background: "rgba(255,255,255,0.05)",
          }}
        >
          View Services
        </a>
      </div>

      {/* University logos strip */}
      <div style={{
        marginTop: 70,
        width: "100%",
        overflow: "hidden",
        maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
      }}>
        <div style={{
          display: "flex",
          gap: 60,
          alignItems: "center",
          animation: "marquee 23s linear infinite",
          width: "max-content",
        }}>
          {[...logos, ...logos, ...logos, ...logos].map((src, i) => (
            <img
              key={i}
              src={src}
              alt="university logo"
              style={{
                height: 120,
                width: "auto",
                opacity: 1,
                filter: "brightness(2) saturate(0.3)", 
              }}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 36,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          opacity: 0.4,
        }}
      >
        <div
          style={{
            width: 1,
            height: 40,
            background: `linear-gradient(to bottom, ${COLORS.gold}, transparent)`,
            animation: "pulse 2s ease infinite",
          }}
        />
      </div>
    </section>
  );
}
