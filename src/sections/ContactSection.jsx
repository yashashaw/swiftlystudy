import { useState } from "react";
import { COLORS, services } from "../constants";
import { useInView } from "../hooks/useInView";
import emailjs from '@emailjs/browser';

const CONTACT_INFO = [
  { label: "Phone", value: "424-316-6745", icon: "📞" },
  { label: "Email", value: "yashaw@stanford.edu", icon: "✉️" },
];

export default function ContactSection() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    if (!form.name || !form.email) {
      alert("Please fill in your name and email.");
      return;
    }

    setIsSubmitting(true);

    // EmailJS logic
    emailjs.send(
      'service_ad903s8', // Your Service ID
      'template_d6x7mqr', // Your Template ID
      {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject || "General Inquiry",
        message: form.message,
      },
      'A71VWht4c2Zs4oEHI' // Your Public Key
    )
    .then(() => {
      setSent(true);
      setIsSubmitting(false);
    })
    .catch((err) => {
      console.error("EmailJS Error:", err);
      alert('Something went wrong. Check the console for details.');
      setIsSubmitting(false);
    });
  };

  const inputStyle = {
    width: "100%",
    background: "rgba(0,0,0,0.02)",
    border: "1px solid rgba(0,0,0,0.1)",
    borderRadius: 10,
    padding: "13px 16px",
    color: COLORS.navy,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 14,
    outline: "none",
    transition: "border 0.2s ease",
  };

  const labelStyle = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 12,
    color: COLORS.navy,
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    display: "block",
    marginBottom: 8,
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        background: COLORS.cream,
        padding: "100px 5vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "radial-gradient(circle at 20% 80%, rgba(140,21,21,0.04) 0%, transparent 50%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 760, margin: "0 auto", position: "relative" }}>
        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 16,
          letterSpacing: "0.25em", color: COLORS.crimson,
          textTransform: "uppercase", textAlign: "center", marginBottom: 12,
          opacity: inView ? 1 : 0, transition: "opacity 0.7s",
        }}>Get In Touch</p>

        <h2 style={{
          fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4.5vw, 52px)",
          fontWeight: 800, color: COLORS.navy, textAlign: "center",
          letterSpacing: "-0.03em", marginBottom: 16,
          opacity: inView ? 1 : 0, transition: "all 0.8s ease 0.1s",
        }}>Start Your Journey</h2>

        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 19, color: COLORS.slate,
          textAlign: "center", marginBottom: 52, lineHeight: 1.6,
          opacity: inView ? 1 : 0, transition: "opacity 0.8s ease 0.2s",
        }}>Ready to master your subjects? Reach out and we'll match you with the perfect Stanford-level tutor.</p>

        {/* Info Cards */}
        <div style={{
          display: "flex", gap: 24, justifyContent: "center", marginBottom: 48,
          flexWrap: "wrap", opacity: inView ? 1 : 0, transition: "opacity 0.8s ease 0.3s",
        }}>
          {CONTACT_INFO.map((c) => (
            <div key={c.label} style={{
              background: COLORS.white, borderRadius: 12, border: "1px solid rgba(0,0,0,0.06)",
              boxShadow: "0 2px 20px rgba(0,0,0,0.03)", padding: "20px 32px",
              display: "flex", alignItems: "center", gap: 14,
            }}>
              <span style={{ fontSize: 20 }}>{c.icon}</span>
              <div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: COLORS.gold, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>{c.label}</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, color: COLORS.navy }}>{c.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form or Success Message */}
        {sent ? (
          <div style={{
            background: COLORS.white, border: `1px solid ${COLORS.gold}40`,
            borderRadius: 16, padding: "48px 32px", textAlign: "center",
          }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>✨</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, color: COLORS.navy, marginBottom: 12 }}>Message Sent!</h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: COLORS.slate, fontSize: 15 }}>We'll get back to you within 24 hours to set up your first session.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{
            background: COLORS.white, borderRadius: 20, border: "1px solid rgba(0,0,0,0.06)",
            boxShadow: "0 4px 30px rgba(0,0,0,0.04)", padding: "48px",
            opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(20px)",
            transition: "all 0.9s ease 0.4s",
          }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
              <div>
                <label style={labelStyle}>Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your Name"
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  style={inputStyle}
                />
              </div>
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>Subject</label>
              <select
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                style={{ ...inputStyle, color: form.subject ? COLORS.navy : "rgba(0,0,0,0.4)" }}
              >
                <option value="">Select a service...</option>
                {services.map((s) => (
                  <option key={s.title} value={s.title}>{s.title}</option>
                ))}
                <option value="Other">Other</option>
              </select>
            </div>

            <div style={{ marginBottom: 28 }}>
              <label style={labelStyle}>Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your goals..."
                rows={4}
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: "100%",
                background: isSubmitting ? "#ccc" : `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})`,
                color: COLORS.navy, padding: "16px", borderRadius: 10,
                fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15,
                border: "none", cursor: isSubmitting ? "not-allowed" : "pointer",
                boxShadow: "0 4px 24px rgba(201,151,58,0.35)", transition: "all 0.2s",
              }}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}