import { COLORS } from "../constants";
import GradCap from "../components/GradCap";

export default function DeliveryPage({ onNavigate }) {
  return (
    <div style={{ background: "#FAF7F2", minHeight: "100vh" }}>

      {/* Header */}
      <div style={{
        background: COLORS.navy, padding: "48px 5vw 44px", textAlign: "center",
        borderBottom: `1px solid rgba(201,151,58,0.15)`,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center", marginBottom: 32 }}>
          <GradCap />
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: COLORS.white }}>
            Swiftly Consulting
          </span>
        </div>
        <span style={{
          background: "rgba(201,151,58,0.15)", color: COLORS.goldLight,
          border: `1px solid rgba(201,151,58,0.3)`, fontSize: 11,
          fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
          padding: "5px 16px", borderRadius: 20,
          fontFamily: "'DM Sans', sans-serif", display: "inline-block", marginBottom: 24,
        }}>The 2026 Admissions Blueprint · Exclusive</span>
        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(28px, 4.5vw, 52px)", fontWeight: 800,
          color: COLORS.white, letterSpacing: "-0.03em",
          lineHeight: 1.12, maxWidth: 700, margin: "0 auto 14px",
        }}>The End of the Well-Rounded Student</h1>
        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 15,
          color: "rgba(255,255,255,0.5)", maxWidth: 440, margin: "0 auto",
        }}>
          How elite colleges are really making decisions — and what it means for your application.
        </p>
      </div>

      {/* Essay body */}
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "64px 5vw" }}>

        <P>For decades, the prevailing wisdom in college admissions was simple: be good at everything. Play three sports, volunteer on weekends, get straight A's, lead the student council. Build a résumé so broad that no admissions officer could find a weakness.</P>
        <P>That era is over. And the students who don't realize it are the ones paying for it with their rejections.</P>

        <BQ cite="Senior Admissions Officer, Stanford University">
          "The applicant who does one thing at a profound level is more compelling than the one who does ten things adequately."
        </BQ>

        <H2>The Data Doesn't Lie</H2>
        <P>Consider what happened in the 2024–25 cycle. Harvard's acceptance rate dropped below 3.6%. MIT's dropped to 4.7%. But the applicants who made it through weren't the presidents of five clubs. They were the students who had published original research, built startups with real revenue, or developed a measurable expertise that most adults don't have.</P>

        <div style={{
          background: COLORS.navy, color: COLORS.goldLight, padding: "28px 32px",
          borderRadius: 14, margin: "36px 0", textAlign: "center",
          fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700,
          lineHeight: 1.4,
        }}>
          Only 1 in 8 "well-rounded" applicants to T10 schools is admitted.<br />
          <span style={{ fontSize: 16, color: COLORS.gold, fontWeight: 400, fontFamily: "'DM Sans', sans-serif" }}>
            That number is 1 in 3 for applicants with a documented spike.
          </span>
        </div>

        <H2>What Is a "Spike"?</H2>
        <P>A spike is not a hobby. It's not "I really like photography." A spike is a <strong style={{ fontWeight: 700, color: "#1A202C" }}>documented, verifiable area of deep expertise</strong> that places you in the top 0.1% of your age group nationwide — ideally worldwide. It answers the question: "If I Googled this student's name, what would come up?"</P>
        <P>Think: the 16-year-old who published a peer-reviewed paper on machine learning fairness. The high schooler whose environmental policy proposal was adopted by a state legislature. The kid who built an app with 50,000 downloads. These are spikes.</P>

        <BQ cite="Former Dean of Admissions, Yale">
          "We're not building a class of well-rounded students. We're building a well-rounded class — made up of pointy people."
        </BQ>

        <H2>Why This Matters Right Now</H2>
        <P>The 2026 admissions cycle will be the most competitive in history. The post-COVID application surge hasn't receded — it has become permanent. The students applying alongside your child are increasingly sophisticated, globally connected, and strategically coached.</P>
        <P>Doing what worked five years ago is no longer sufficient. The game has changed. The question is: are you playing the new game, or the old one?</P>

        <H2>The Three Ingredients of a Winning Profile</H2>
        <P><strong style={{ fontWeight: 700, color: "#1A202C" }}>1. The Spike:</strong> One demonstrable, exceptional thing done at a national or international level. Built, created, discovered, or competed at the highest tier.</P>
        <P><strong style={{ fontWeight: 700, color: "#1A202C" }}>2. The Narrative:</strong> A cohesive story connecting your spike, academics, recommendations, and essays into a single unmistakable identity. Admissions officers remember stories, not lists.</P>
        <P><strong style={{ fontWeight: 700, color: "#1A202C" }}>3. The Strategy:</strong> School selection, timing, and positioning that gives your profile the best possible odds. Not just "reaches and safeties" — a curated list where your spike is genuinely valued and rare.</P>

        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 15,
          color: "#718096", fontStyle: "italic", lineHeight: 1.8,
          marginTop: 40,
        }}>
          Most students have none of these. Some have one. The ones who get in have all three — and started building them early enough to matter.
        </p>
      </div>

      {/* CTA section */}
      <div style={{
        background: COLORS.navy, padding: "80px 5vw",
        textAlign: "center", borderTop: `1px solid rgba(201,151,58,0.15)`,
      }}>
        <span style={{
          display: "inline-block",
          background: "rgba(201,151,58,0.15)", color: COLORS.goldLight,
          border: `1px solid rgba(201,151,58,0.3)`, fontSize: 11,
          fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
          padding: "5px 16px", borderRadius: 20,
          fontFamily: "'DM Sans', sans-serif", marginBottom: 28,
        }}>Free 30-Min Session · No Commitment</span>

        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(26px, 4vw, 46px)", fontWeight: 800,
          color: COLORS.white, lineHeight: 1.15, letterSpacing: "-0.03em",
          maxWidth: 620, margin: "0 auto 18px",
        }}>
          You have the blueprint. Now let's apply it to your transcript.
        </h2>

        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 16,
          color: "rgba(255,255,255,0.55)", maxWidth: 480,
          margin: "0 auto 36px", lineHeight: 1.7,
        }}>
          Book your free strategy session with Yasha. We'll identify your spike, map your narrative, and give you a concrete roadmap.
        </p>

        <a
          href="https://calendly.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})`,
            color: COLORS.navy, padding: "18px 48px", borderRadius: 10,
            fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 16,
            textDecoration: "none", letterSpacing: "0.04em",
            boxShadow: "0 4px 32px rgba(201,151,58,0.4)",
          }}
        >
          Book Your Free Session with Yasha →
        </a>

        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 12,
          color: "rgba(255,255,255,0.2)", marginTop: 20,
        }}>
          Limited spots each week. No commitment required.
        </p>
      </div>
    </div>
  );
}

// Helper sub-components for clean essay formatting
function P({ children }) {
  return (
    <p style={{
      fontFamily: "'DM Sans', sans-serif", fontSize: 16,
      color: "#2D3748", lineHeight: 1.85, marginBottom: 22,
    }}>{children}</p>
  );
}

function H2({ children }) {
  return (
    <h2 style={{
      fontFamily: "'Playfair Display', serif", fontSize: 24,
      fontWeight: 700, color: "#1A202C", margin: "44px 0 16px",
      letterSpacing: "-0.02em",
    }}>{children}</h2>
  );
}

function BQ({ children, cite }) {
  return (
    <blockquote style={{
      borderLeft: `3px solid ${COLORS.gold}`,
      padding: "18px 24px",
      background: "rgba(201,151,58,0.06)",
      borderRadius: "0 10px 10px 0",
      margin: "32px 0",
    }}>
      <p style={{
        fontFamily: "'Playfair Display', serif", fontSize: 18,
        color: "#1A202C", lineHeight: 1.6, marginBottom: cite ? 10 : 0,
        fontStyle: "italic",
      }}>{children}</p>
      {cite && (
        <span style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 12,
          color: "#718096", fontStyle: "normal",
        }}>— {cite}</span>
      )}
    </blockquote>
  );
}
