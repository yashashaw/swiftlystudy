import { useState } from "react";
import { COLORS } from "../constants";
import GradCap from "../components/GradCap";

export default function SqueezePage({ onNavigate }) {
  const [form, setForm] = useState({ student: "", parent: "", email: "", phone: "" });

  const handleSubmit = () => {
    if (!form.student || !form.email) return;
    onNavigate("delivery");
    window.scrollTo(0, 0);
  };

  const inputStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 10, padding: "13px 16px",
    color: COLORS.white,
    fontFamily: "'DM Sans', sans-serif", fontSize: 14,
    outline: "none", transition: "border 0.2s ease",
  };

  const labelStyle = {
    fontFamily: "'DM Sans', sans-serif", fontSize: 11,
    color: "rgba(255,255,255,0.75)", fontWeight: 700,
    letterSpacing: "0.1em", textTransform: "uppercase",
    display: "block", marginBottom: 8,
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: `linear-gradient(160deg, ${COLORS.navy} 0%, #0F2044 55%, #1A0A28 100%)`,
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "60px 5vw",
    }}>
      {/* Mini logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 48 }}>
        <GradCap />
        <span style={{
          fontFamily: "'Playfair Display', serif", fontSize: 18,
          fontWeight: 700, color: COLORS.white,
        }}>Swiftly Study</span>
      </div>

      <div style={{ maxWidth: 460, width: "100%" }}>
        {/* Badge */}
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <span style={{
            background: "rgba(201,151,58,0.15)", color: COLORS.goldLight,
            border: `1px solid rgba(201,151,58,0.3)`, fontSize: 11,
            fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
            padding: "5px 16px", borderRadius: 20,
            fontFamily: "'DM Sans', sans-serif",
          }}>Free · No Commitment</span>
        </div>

        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 800,
          color: COLORS.white, textAlign: "center",
          lineHeight: 1.15, marginBottom: 16, letterSpacing: "-0.02em",
        }}>
          Unlock the 2026 Admissions Blueprint
        </h1>

        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 15,
          color: "rgba(255,255,255,0.6)", textAlign: "center",
          lineHeight: 1.7, marginBottom: 36,
        }}>
          Enter your info below to read the Stanford-approved essay on why the "well-rounded" student is dead — and what top schools are actually looking for.
        </p>

        {/* Form */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { key: "student", label: "Student Name",  placeholder: "e.g. Alex Johnson" },
            { key: "parent",  label: "Parent Name",   placeholder: "e.g. Sarah Johnson" },
            { key: "email",   label: "Email Address", placeholder: "your@email.com", type: "email" },
            { key: "phone",   label: "Phone Number",  placeholder: "(555) 000-0000",  type: "tel" },
          ].map(f => (
            <div key={f.key}>
              <label style={labelStyle}>{f.label}</label>
              <input
                type={f.type || "text"}
                placeholder={f.placeholder}
                value={form[f.key]}
                onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = "rgba(201,151,58,0.6)"}
                onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.12)"}
              />
            </div>
          ))}

          <button
            onClick={handleSubmit}
            style={{
              marginTop: 8, width: "100%",
              background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})`,
              color: COLORS.navy, padding: "16px",
              borderRadius: 10, fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700, fontSize: 15, border: "none", cursor: "pointer",
              letterSpacing: "0.04em",
              boxShadow: "0 4px 24px rgba(201,151,58,0.35)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseOver={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(201,151,58,0.5)"; }}
            onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(201,151,58,0.35)"; }}
          >
            Unlock the Blueprint →
          </button>

          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 12,
            color: "rgba(255,255,255,0.3)", textAlign: "center",
          }}>
            We respect your privacy. No spam, ever.
          </p>
        </div>
      </div>
    </div>
  );
}
