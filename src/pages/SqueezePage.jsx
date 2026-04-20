import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 1. Import the hook
import emailjs from '@emailjs/browser';
import { COLORS } from "../constants";
import GradCap from "../components/GradCap";

// 2. Remove onNavigate from props
export default function SqueezePage() {
  const navigate = useNavigate(); // 3. Initialize the navigate function
  
  const [form, setForm] = useState({ 
    studentName: "", 
    studentEmail: "", 
    studentPhone: "",
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    heardAbout: ""
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[\d\s\-()]{7,15}$/;

    if (!form.studentName.trim()) newErrors.studentName = "Required";
    if (!form.studentEmail || !emailRegex.test(form.studentEmail)) newErrors.studentEmail = "Valid email required";
    if (!form.studentPhone || !phoneRegex.test(form.studentPhone)) newErrors.studentPhone = "Valid phone required";

    if (!form.parentName.trim()) newErrors.parentName = "Required";
    if (!form.parentEmail || !emailRegex.test(form.parentEmail)) newErrors.parentEmail = "Valid email required";
    if (!form.parentPhone || !phoneRegex.test(form.parentPhone)) newErrors.parentPhone = "Valid phone required";

    if (!form.heardAbout) newErrors.heardAbout = "Required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validate()) {
      setIsSubmitting(true);
      
      try {
        const serviceID = "service_il9rxyt"; 
        const templateID = "template_8sols1d"; 
        const publicKey = "PnzMFbM-C8zNFzFce";

        const templateParams = {
          studentName: form.studentName,
          studentEmail: form.studentEmail,
          studentPhone: form.studentPhone,
          parentName: form.parentName,
          parentEmail: form.parentEmail,
          parentPhone: form.parentPhone,
          heardAbout: form.heardAbout,
        };

        await emailjs.send(serviceID, templateID, templateParams, publicKey);
        setIsSuccess(true);
        window.scrollTo(0, 0);
      } catch (error) {
        console.error("Failed to send email:", error);
        alert("Something went wrong. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const inputStyle = (hasError) => ({
    width: "100%",
    background: "rgba(255,255,255,0.06)",
    border: `1px solid ${hasError ? "#e53e3e" : "rgba(255,255,255,0.12)"}`,
    borderRadius: 10, padding: "13px 16px",
    color: COLORS.white,
    fontFamily: "'DM Sans', sans-serif", fontSize: 14,
    outline: "none", transition: "border 0.2s ease",
  });

  const labelStyle = {
    fontFamily: "'DM Sans', sans-serif", fontSize: 11,
    color: "rgba(255,255,255,0.75)", fontWeight: 700,
    letterSpacing: "0.1em", textTransform: "uppercase",
    display: "block", marginBottom: 8,
  };

  const errorTextStyle = {
    color: "#fc8181", fontSize: 11, fontFamily: "'DM Sans', sans-serif", 
    marginTop: 6, display: "block"
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: `linear-gradient(160deg, ${COLORS.navy} 0%, #0F2044 55%, #1A0A28 100%)`,
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "80px 5vw",
    }}>
      {/* 4. Use navigate("/") instead of onNavigate('home') */}
      <div 
        onClick={() => navigate("/")}
        style={{ 
          display: "flex", 
          alignItems: "center", 
          gap: 10, 
          marginBottom: 48,
          cursor: "pointer",
          transition: "opacity 0.2s"
        }}
        onMouseOver={e => e.currentTarget.style.opacity = 0.8}
        onMouseOut={e => e.currentTarget.style.opacity = 1}
      >
        <GradCap />
        <span style={{
          fontFamily: "'Playfair Display', serif", fontSize: 18,
          fontWeight: 700, color: COLORS.white,
        }}>Swiftly Consulting</span>
      </div>

      <div style={{ maxWidth: 600, width: "100%" }}>
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
          lineHeight: 1.7, marginBottom: 36, maxWidth: 480, margin: "0 auto 36px"
        }}>
          Enter your info below to read the Stanford-approved essay on why the "well-rounded" student is dead — and what top schools are actually looking for.
        </p>

        {isSuccess ? (
          <div style={{
            background: "rgba(201,151,58,0.1)", padding: "48px 32px",
            borderRadius: 16, border: "1px solid rgba(201,151,58,0.3)",
            textAlign: "center"
          }}>
            <h2 style={{ color: COLORS.goldLight, fontFamily: "'Playfair Display', serif", fontSize: 28, marginBottom: 16 }}>Success!</h2>
            <p style={{ color: COLORS.white, fontFamily: "'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.6 }}>
              We just sent the 2026 Admissions Blueprint to your inbox. <br/><br/>
              <strong style={{ color: COLORS.goldLight }}>Be sure to check your spam or promotions folder</strong> if you don't see it in the next few minutes.
            </p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 20, background: "rgba(255,255,255,0.03)", padding: "32px", borderRadius: 16, border: "1px solid rgba(255,255,255,0.05)" }}>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 16 }}>
              <div>
                <label style={labelStyle}>Student Name</label>
                <input type="text" placeholder="e.g. Alex Johnson" value={form.studentName} onChange={e => setForm({ ...form, studentName: e.target.value })} style={inputStyle(errors.studentName)} onFocus={e => e.target.style.borderColor = "rgba(201,151,58,0.6)"} onBlur={e => e.target.style.borderColor = errors.studentName ? "#e53e3e" : "rgba(255,255,255,0.12)"} />
                {errors.studentName && <span style={errorTextStyle}>{errors.studentName}</span>}
              </div>
              <div>
                <label style={labelStyle}>Student Email</label>
                <input type="email" placeholder="alex@email.com" value={form.studentEmail} onChange={e => setForm({ ...form, studentEmail: e.target.value })} style={inputStyle(errors.studentEmail)} onFocus={e => e.target.style.borderColor = "rgba(201,151,58,0.6)"} onBlur={e => e.target.style.borderColor = errors.studentEmail ? "#e53e3e" : "rgba(255,255,255,0.12)"} />
                {errors.studentEmail && <span style={errorTextStyle}>{errors.studentEmail}</span>}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 16 }}>
              <div>
                <label style={labelStyle}>Student Phone</label>
                <input type="tel" placeholder="(555) 000-0000" value={form.studentPhone} onChange={e => setForm({ ...form, studentPhone: e.target.value })} style={inputStyle(errors.studentPhone)} onFocus={e => e.target.style.borderColor = "rgba(201,151,58,0.6)"} onBlur={e => e.target.style.borderColor = errors.studentPhone ? "#e53e3e" : "rgba(255,255,255,0.12)"} />
                {errors.studentPhone && <span style={errorTextStyle}>{errors.studentPhone}</span>}
              </div>
              <div>
                <label style={labelStyle}>Parent Name</label>
                <input type="text" placeholder="e.g. Sarah Johnson" value={form.parentName} onChange={e => setForm({ ...form, parentName: e.target.value })} style={inputStyle(errors.parentName)} onFocus={e => e.target.style.borderColor = "rgba(201,151,58,0.6)"} onBlur={e => e.target.style.borderColor = errors.parentName ? "#e53e3e" : "rgba(255,255,255,0.12)"} />
                {errors.parentName && <span style={errorTextStyle}>{errors.parentName}</span>}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 16 }}>
              <div>
                <label style={labelStyle}>Parent Email</label>
                <input type="email" placeholder="sarah@email.com" value={form.parentEmail} onChange={e => setForm({ ...form, parentEmail: e.target.value })} style={inputStyle(errors.parentEmail)} onFocus={e => e.target.style.borderColor = "rgba(201,151,58,0.6)"} onBlur={e => e.target.style.borderColor = errors.parentEmail ? "#e53e3e" : "rgba(255,255,255,0.12)"} />
                {errors.parentEmail && <span style={errorTextStyle}>{errors.parentEmail}</span>}
              </div>
              <div>
                <label style={labelStyle}>Parent Phone</label>
                <input type="tel" placeholder="(555) 000-0000" value={form.parentPhone} onChange={e => setForm({ ...form, parentPhone: e.target.value })} style={inputStyle(errors.parentPhone)} onFocus={e => e.target.style.borderColor = "rgba(201,151,58,0.6)"} onBlur={e => e.target.style.borderColor = errors.parentPhone ? "#e53e3e" : "rgba(255,255,255,0.12)"} />
                {errors.parentPhone && <span style={errorTextStyle}>{errors.parentPhone}</span>}
              </div>
            </div>

            <div>
              <label style={labelStyle}>How did you hear about us?</label>
              <select 
                value={form.heardAbout} 
                onChange={e => setForm({ ...form, heardAbout: e.target.value })}
                style={{ ...inputStyle(errors.heardAbout), appearance: "none" }}
                onFocus={e => e.target.style.borderColor = "rgba(201,151,58,0.6)"} 
                onBlur={e => e.target.style.borderColor = errors.heardAbout ? "#e53e3e" : "rgba(255,255,255,0.12)"}
              >
                <option value="" disabled style={{ color: "#000" }}>Select an option...</option>
                <option value="TikTok" style={{ color: "#000" }}>TikTok</option>
                <option value="Instagram" style={{ color: "#000" }}>Instagram</option>
                <option value="Google Search" style={{ color: "#000" }}>Google Search</option>
                <option value="Friend/Referral" style={{ color: "#000" }}>Friend / Referral</option>
                <option value="Other" style={{ color: "#000" }}>Other</option>
              </select>
              {errors.heardAbout && <span style={errorTextStyle}>{errors.heardAbout}</span>}
            </div>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              style={{
                marginTop: 12, width: "100%",
                background: isSubmitting ? "rgba(201,151,58,0.5)" : `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})`,
                color: COLORS.navy, padding: "18px",
                borderRadius: 10, fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700, fontSize: 16, border: "none", 
                cursor: isSubmitting ? "not-allowed" : "pointer",
                letterSpacing: "0.04em",
                boxShadow: "0 4px 24px rgba(201,151,58,0.35)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseOver={e => { if(!isSubmitting) { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(201,151,58,0.5)"; } }}
              onMouseOut={e => { if(!isSubmitting) { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(201,151,58,0.35)"; } }}
            >
              {isSubmitting ? "Sending..." : "Unlock the Blueprint →"}
            </button>

            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 12,
              color: "rgba(255,255,255,0.3)", textAlign: "center", marginTop: 4
            }}>
              We respect your privacy. No spam, ever.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}