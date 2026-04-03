import { COLORS } from "../constants";
import GradCap from "./GradCap";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#060E1C",
        padding: "40px 5vw",
        borderTop: `1px solid rgba(201,151,58,0.15)`,
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <GradCap />
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 18,
              fontWeight: 700,
              color: COLORS.white,
            }}
          >
            SwiftlyStudy
          </span>
        </div>

        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13,
            color: "rgba(255,255,255,0.3)",
          }}
        >
          © 2026 SwiftlyStudy · Tutoring by Top College Students
        </p>

      </div>
    </footer>
  );
}
