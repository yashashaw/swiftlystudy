import { COLORS } from "../constants";
import { useInView } from "../hooks/useInView";

export default function PricingSection() {
    const [ref, inView] = useInView();

    const pricingPlans = [
        {
            id: "online",
            title: "Premium Online",
            price: "60",
            description: "Face-to-face virtual sessions with our elite network of tutors, from the comfort of your home.",
            features: [
                "Unrestricted access to top-university tutors",
                "Maximum scheduling flexibility",
                "Interactive digital whiteboarding",
            ],
            buttonText: "Match With an Online Tutor",
        },
        {
            id: "in-person",
            title: "In-Person Excellence",
            price: "80",
            description: "Traditional, hands-on learning brought directly to a local library, coffee shop, or your home.",
            features: [
                "Zero screen fatigue",
                "High-accountability environment",
                "Direct, shoulder-to-shoulder guidance",
            ],
            locations: "Currently available in Palo Alto, La Jolla, Santa Monica/West LA, and Berkeley.",
            buttonText: "Check Local Availability",
        },
    ];

    const scrollToContact = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="pricing"
            ref={ref}
            style={{ background: COLORS.cream, padding: "100px 5vw" }}
        >
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                {/* Eyebrow Header */}
                <p style={{
                    fontFamily: "'DM Sans', sans-serif", fontSize: 16,
                    letterSpacing: "0.25em", color: COLORS.crimson,
                    textTransform: "uppercase", textAlign: "center", marginBottom: 12,
                    opacity: inView ? 1 : 0, transition: "opacity 0.7s",
                }}>Investment</p>

                {/* Main Header */}
                <h2 style={{
                    fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4.5vw, 52px)",
                    fontWeight: 800, color: COLORS.navy, textAlign: "center",
                    letterSpacing: "-0.03em", marginBottom: 64,
                    opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(20px)",
                    transition: "all 0.8s ease 0.1s",
                }}>World-Class Tutoring, Wherever You Learn Best</h2>

                {/* Pricing Cards Grid */}
                <div style={{
                    display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: 32, maxWidth: 900, margin: "0 auto",
                }}>
                    {pricingPlans.map((plan, i) => (
                        <div key={plan.id} style={{
                            background: COLORS.white, borderRadius: 20, padding: "48px 40px",
                            border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 4px 30px rgba(0,0,0,0.04)",
                            display: "flex", flexDirection: "column",
                            opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(30px)",
                            transition: `all 0.7s ease ${0.1 + i * 0.1}s`,
                        }}>
                            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: COLORS.navy, marginBottom: 16 }}>
                                {plan.title}
                            </h3>

                            <div style={{ marginBottom: 24, display: "flex", alignItems: "baseline", gap: 4 }}>
                                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 24, color: COLORS.gold, fontWeight: 700 }}>$</span>
                                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 56, color: COLORS.gold, fontWeight: 800, lineHeight: 1 }}>{plan.price}</span>
                                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: COLORS.slate }}>/ hour</span>
                            </div>

                            <p style={{
                                fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: COLORS.slate,
                                lineHeight: 1.6, marginBottom: 32, paddingBottom: 32,
                                borderBottom: "1px solid rgba(0,0,0,0.08)",
                            }}>{plan.description}</p>

                            <ul style={{ padding: 0, margin: "0 0 40px 0", listStyle: "none", display: "flex", flexDirection: "column", gap: 16 }}>
                                {plan.features.map((feature, index) => (
                                    <li key={index} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                                        <span style={{ color: COLORS.gold, fontSize: 18, lineHeight: 1.2 }}>✦</span>
                                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: COLORS.navy, lineHeight: 1.5 }}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {plan.locations && (
                                <div style={{ marginTop: "auto", marginBottom: 24 }}>
                                    <p style={{
                                        fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: COLORS.slate,
                                        fontStyle: "italic", lineHeight: 1.5, padding: "16px",
                                        background: "rgba(201,151,58,0.05)", borderRadius: 8,
                                    }}>
                                        <span style={{ color: COLORS.gold, fontWeight: 700 }}>*</span> {plan.locations}
                                    </p>
                                </div>
                            )}

                            {/* Updated onClick handler */}
                            <button
                                onClick={scrollToContact}
                                style={{
                                    marginTop: plan.locations ? 0 : "auto",
                                    background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})`,
                                    color: COLORS.navy,
                                    textAlign: "center",
                                    border: "none",
                                    cursor: "pointer",
                                    padding: "16px",
                                    borderRadius: 10,
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontWeight: 700,
                                    fontSize: 15,
                                    transition: "transform 0.2s",
                                }}
                                onMouseOver={e => e.currentTarget.style.transform = "translateY(-2px)"}
                                onMouseOut={e => e.currentTarget.style.transform = "translateY(0)"}
                            >
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}