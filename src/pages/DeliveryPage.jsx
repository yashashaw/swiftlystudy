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
        {/* Clickable Logo */}
        <div 
          onClick={() => onNavigate('home')}
          style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: 10, 
            justifyContent: "center", 
            marginBottom: 32,
            cursor: "pointer",
            width: "fit-content",
            margin: "0 auto 32px" // Centers the fit-content div
          }}
        >
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

        <P>You’ve almost certainly been told to appear “well-rounded.”</P>
        <P>The phrase “well-rounded student” has been the gold standard since the 1970s, describing individuals who possess a plethora of talents: All-Americans, talented musicians, and academic overachievers all rolled into one. For decades, this was the key to the kingdom.</P>
        <P>Your parents aren't wrong - being well-rounded used to be the golden ticket to a Top 20 school. It’s the strategy that got them into college. But the rules of the game have fundamentally changed.</P>
        
        <div style={{
          background: COLORS.navy, color: COLORS.white, padding: "28px 32px",
          borderRadius: 14, margin: "36px 0", textAlign: "center",
          fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700,
          lineHeight: 1.4,
        }}>
          Today, if you are well-rounded, you will get <span style={{ color: COLORS.goldLight }}>rejected</span> from your reach schools.
        </div>

        <H2>The California Paradox</H2>
        <P>Let’s look at the reality of the current landscape.</P>
        <P>In 2023, Stanley Zhong, a Palo Alto student from Gunn High School, applied to college. He had a 4.42 weighted GPA, a 1590 SAT score, and a self-founded tech startup. The result? He was rejected or waitlisted by 16 of the 18 top U.S. colleges he applied to (and was subsequently hired by Google as a software engineer).</P>
        <P>Or take one of my high school friends from Santa Monica High School, Chris Rhee. He scored a 1590 on his SAT - higher than my 1520. Where does he go now? Harvard? MIT? He goes to UC Davis. No disrespect to UC Davis, but typically, if you have a 1590, you aren’t heading to a city 30 minutes from Sacramento.</P>
        <P>The idea of the “perfect” student that social media and competitive high school environments try to sell is a trap. They tell you that you need to do prestigious university research, get a 1550+ SAT, and create a non-profit.</P>
        <P>Meanwhile, I didn’t do any of that in high school. I wasn’t the valedictorian. I wasn’t a recruited athlete. I didn't rely on massive donations or legacy status. I won by building a highly authentic, deeply specialized profile that forced admissions officers to pay attention.</P>

        <H2>The Admissions File Secret</H2>
        <P>You may ask, "Yasha, what are colleges actually looking for then?" The short answer is: They are looking for <strong style={{ fontWeight: 700, color: "#1A202C" }}>YOU</strong>. They aren't looking for a $10,000 pre-packaged voluntourism trip to a foreign health clinic during the summer, or a resume-padding stint in a Stanford lab where you just washed beakers. They are looking for what makes you, you.</P>
        <P>If that sounds vague, here is the insider answer.</P>
        <P>At Stanford, students have the right to view their admissions files and read exactly what admissions officers wrote about them. One of the co-counselors of Swiftly, Lucas Kniska, viewed his profile - and let’s just say he wasn’t proud of what he saw. The comments literally said, "Probably don’t accept this guy, maybe offer a deferral." And yet, he’s here at Stanford today. Many of my peers had similar experiences: feeling like they were "special" for being picked by Stanford, only to realize their admissions readers were highly critical of their generic, well-rounded achievements.</P>
        <P>When I requested my admissions file, I was expecting the same brutal feedback. For context, my entire profile boiled down to three things: I am a guitarist, I started a NanoEngineering Club to compete in a local UCLA competition, and I ran high school track. Those were my only extracurriculars.</P>
        
        <BQ cite="Stanford Admissions Officer Notes">
          "Mr. Shaw means business when it comes to shredding the guitar."
        </BQ>

        <P>Yet, the admissions officers loved me. They saw my personal statement about mixing music and engineering as a marvel of writing. They reviewed my music portfolio, and they were deeply impressed by my passion for mixing nanoengineering and entrepreneurship.</P>
        <P><strong style={{ fontWeight: 700, color: "#1A202C" }}>They bought into my story because everything I did related back to exactly who I was.</strong></P>

        <H2>Finding Your Spike</H2>
        <P>The question you have to ask yourself is: Who are you? Don't give the admissions office the packaged, "perfect" answer. Don't claim you're a part-time university researcher who loves Academic Decathlon just because you think it sounds impressive to an Ivy League panel. Who are you really?</P>
        <P>Do you genuinely enjoy reading Harry Potter and founding a middle school book club at your local library? Do you love robotics and building novel things in your garage? Having an authentic, cohesive story behind your "spike" is what will actually sell you to the admissions office and create a massive separation between you and the sea of other 4.5 GPA applicants.</P>

        <H2>The 2026 Blueprint</H2>
        <P>Now you know the what, but you’re probably asking yourself, "How did you do this? And how do I execute this over the next few months/years?"</P>
        <P>That is exactly what we do at Swiftly Consulting. We are an exclusive team of Stanford students (and Ivy+ strategists) who recently navigated, and beat, the most brutal admissions cycles in history. We don't just edit essays; we engineer your "spike."</P>
        <P>We aren’t overworked high school counselors dealing with a 400:1 student ratio, guessing at what colleges want. In the age of AI essays and shrinking acceptance rates, traditional counselors have no clue what makes students stand out. We know the 2026 landscape because we are the product of it.</P>
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
          You have the blueprint. Now let's apply it to your specific transcript.
        </h2>

        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 16,
          color: "rgba(255,255,255,0.55)", maxWidth: 480,
          margin: "0 auto 36px", lineHeight: 1.7,
        }}>
          Book your free strategy session with Yasha. We'll find your spike, map your narrative, and give you a concrete roadmap to stand out.
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
          Schedule Your Free Strategy Session →
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