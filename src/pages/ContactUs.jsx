import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { COLORS } from "../constants";

export default function ContactUs() {
    // 1. Switched from useRef to a state object to track inputs manually
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
    const [status, setStatus] = useState({ type: "", message: "" });
    const [loading, setLoading] = useState(false);

    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
    const validatePhone = (phone) => /^\d{10,15}$/.test(phone.replace(/[-+()\s]/g, ""));

    const sendEmail = (e) => {
        e.preventDefault();

        // Validation
        if (!validateEmail(form.email)) {
            return setStatus({ type: "error", message: "Please enter a valid email address." });
        }
        if (!validatePhone(form.phone)) {
            return setStatus({ type: "error", message: "Please enter a valid phone number (at least 10 digits)." });
        }

        setLoading(true);
        setStatus({ type: "", message: "" });

        // 2. Switched to emailjs.send with the explicit payload mapping
        emailjs.send(
            'service_ad903s8',   // Your Service ID
            'template_d6x7mqr',  // Your Template ID
            {
                from_name: form.name,
                from_email: form.email,
                from_number: form.phone,
                message: form.message,
            },
            'A71VWht4c2Zs4oEHI'  // Your Public Key
        )
            .then(() => {
                setStatus({ type: "success", message: "Message sent! We'll be in touch shortly." });
                setForm({ name: "", email: "", phone: "", message: "" }); // Reset the form fields
            })
            .catch((err) => {
                setStatus({ type: "error", message: "Something went wrong. Please try again later." });
                console.error("EmailJS Error:", err);
            })
            .finally(() => setLoading(false));
    };

    const inputStyle = {
        width: "100%",
        padding: "14px",
        marginBottom: "20px",
        borderRadius: "8px",
        border: `1px solid rgba(201,151,58,0.3)`,
        background: "rgba(255,255,255,0.05)",
        color: COLORS.white,
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "16px",
        outline: "none",
    };

    return (
        <section style={{
            minHeight: "100vh",
            background: COLORS.navy,
            padding: "140px 5vw 80px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <div style={{ maxWidth: "600px", width: "100%", textAlign: "center" }}>
                <h1 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(32px, 5vw, 48px)",
                    color: COLORS.white,
                    marginBottom: "16px"
                }}>Contact Us</h1>
                <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: "rgba(255,255,255,0.6)",
                    marginBottom: "40px"
                }}>
                    Have questions about the Swiftly program? Send us a message and our team will get back to you within 24 hours.
                </p>

                <form onSubmit={sendEmail} style={{ textAlign: "left" }}>
                    {/* 3. Updated all inputs to use value and onChange */}
                    <label style={{ color: COLORS.gold, display: "block", marginBottom: "8px", fontWeight: 600 }}>Full Name</label>
                    <input 
                        type="text" 
                        required 
                        style={inputStyle} 
                        placeholder="Jane Doe"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />

                    <label style={{ color: COLORS.gold, display: "block", marginBottom: "8px", fontWeight: 600 }}>Email Address</label>
                    <input 
                        type="email" 
                        required 
                        style={inputStyle} 
                        placeholder="jane@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />

                    <label style={{ color: COLORS.gold, display: "block", marginBottom: "8px", fontWeight: 600 }}>Phone Number</label>
                    <input 
                        type="tel" 
                        required 
                        style={inputStyle} 
                        placeholder="(123) 456-7890"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />

                    <label style={{ color: COLORS.gold, display: "block", marginBottom: "8px", fontWeight: 600 }}>Your Message</label>
                    <textarea 
                        required 
                        style={{ ...inputStyle, minHeight: "150px", resize: "vertical" }} 
                        placeholder="Tell us about your goals..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />

                    {status.message && (
                        <div style={{
                            padding: "12px",
                            borderRadius: "6px",
                            marginBottom: "20px",
                            background: status.type === "success" ? "rgba(34,197,94,0.2)" : "rgba(239,68,68,0.2)",
                            color: status.type === "success" ? "#4ade80" : "#f87171",
                            border: `1px solid ${status.type === "success" ? "#22c55e" : "#ef4444"}`
                        }}>
                            {status.message}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            width: "100%",
                            background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})`,
                            color: COLORS.navy,
                            padding: "16px",
                            borderRadius: "8px",
                            border: "none",
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 700,
                            fontSize: "16px",
                            cursor: loading ? "not-allowed" : "pointer",
                            transition: "transform 0.2s",
                            opacity: loading ? 0.7 : 1
                        }}
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </section>
    );
}