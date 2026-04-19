import { COLORS } from "../constants";
import GradCap from "../components/GradCap";

export default function DeliveryPage({ onNavigate }) {
  return (
    <div style={{ background: COLORS.navy, minHeight: "100vh", paddingBottom: 1 }}>

      {/* Header */}
      <div style={{
        background: `linear-gradient(160deg, ${COLORS.navy} 0%, #0a152d 100%)`, 
        padding: "64px 5vw 140px", // Extended bottom padding for the overlap effect
        textAlign: "center",
      }}>
        {/* Clickable Logo */}
        <div 
          onClick={() => onNavigate('home')}
          style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: 12, 
            justifyContent: "center", 
            marginBottom: 40,
            cursor: "pointer",
            width: "fit-content",
            margin: "0 auto 40px",
            transition: "opacity 0.2s ease"
          }}
          onMouseOver={e => e.currentTarget.style.opacity = 0.8}
          onMouseOut={e => e.currentTarget.style.opacity = 1}
        >
          <GradCap />
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: COLORS.white, letterSpacing: "0.02em" }}>
            Swiftly Consulting
          </span>
        </div>

        <span style={{
          background: "rgba(201,151,58,0.1)", color: COLORS.goldLight,
          border: `1px solid rgba(201,151,58,0.25)`, fontSize: 12,
          fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase",
          padding: "6px 20px", borderRadius: 30,
          fontFamily: "'DM Sans', sans-serif", display: "inline-block", marginBottom: 24,
        }}>The 2026 Admissions Blueprint · Exclusive</span>
        
        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800,
          color: COLORS.white, letterSpacing: "-0.02em",
          lineHeight: 1.15, maxWidth: 800, margin: "0 auto 20px",
        }}>The End of the Well-Rounded Student</h1>
        
        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 17,
          color: "rgba(255,255,255,0.65)", maxWidth: 500, margin: "0 auto",
          lineHeight: 1.6
        }}>
          How elite colleges are really making decisions — and what it means for your application.
        </p>
      </div>

      {/* Essay body - Styled as an exclusive document card */}
      <div style={{ 
        maxWidth: 760, 
        margin: "-80px auto 80px", // Negative margin pulls it up over the dark header
        background: "#FFFFFF", 
        padding: "72px 8%", 
        borderRadius: 16,
        boxShadow: "0 20px 40px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.03)",
        position: "relative",
        zIndex: 10
      }}>

        <P>You’ve almost certainly been told to appear “well-rounded.”</P>
        <P>The phrase “well-rounded student” has been the gold standard since the 1970s, describing individuals who possess a plethora of talents: All-Americans, talented musicians, and academic overachievers all rolled into one. For decades, this was the key to the kingdom.</P>
        <P>Your parents aren't wrong - being well-rounded used to be the golden ticket to a Top 20 school. It’s the strategy that got them into college. But the rules of the game have fundamentally changed.</P>
        
        <div style={{
          background: `linear-gradient(135deg, ${COLORS.navy}, #0a152d)`, 
          color: COLORS.white, padding: "40px 48px",
          borderRadius: 12, margin: "48px 0", textAlign: "center",
          fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700,
          lineHeight: 1.4, border: `1px solid rgba(201,151,58,0.2)`,
          boxShadow: "0 10px 30px rgba(15, 32, 68, 0.12)"
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
        <P>You may ask, "Yasha, what are colleges actually looking for then?" The short answer is: They are looking for <strong style={{ fontWeight: 700, color: COLORS.navy }}>YOU</strong>. They aren't looking for a $10,000 pre-packaged voluntourism trip to a foreign health clinic during the summer, or a resume-padding stint in a Stanford lab where you just washed beakers. They are looking for what makes you, you.</P>
        <P>If that sounds vague, here is the insider answer.</P>
        <P>At Stanford, students have the right to view their admissions files and read exactly what admissions officers wrote about them. One of the co-counselors of Swiftly, Lucas Kniska, viewed his profile - and let’s just say he wasn’t proud of what he saw. The comments literally said, "Probably don’t accept this guy, maybe offer a deferral." And yet, he’s here at Stanford today. Many of my peers had similar experiences: feeling like they were "special" for being picked by Stanford, only to realize their admissions readers were highly critical of their generic, well-rounded achievements.</P>
        <P>When I requested my admissions file, I was expecting the same brutal feedback. For context, my entire profile boiled down to three things: I am a guitarist, I started a NanoEngineering Club to compete in a local UCLA competition, and I ran high school track. Those were my only extracurriculars.</P>
        
        <BQ cite="Stanford Admissions Officer Notes">
          "Mr. Shaw means business when it comes to shredding the guitar."
        </BQ>

        <P>Yet, the admissions officers loved me. They saw my personal statement about mixing music and engineering as a marvel of writing. They reviewed my music portfolio, and they were deeply impressed by my passion for mixing nanoengineering and entrepreneurship.</P>
        <P><strong style={{ fontWeight: 700, color: COLORS.navy }}>They bought into my story because everything I did related back to exactly who I was.</strong></P>

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
        background: `linear-gradient(160deg, ${COLORS.navy} 0%, #0F2044 100%)`, 
        padding: "100px 5vw",
        textAlign: "center", borderTop: `1px solid rgba(201,151,58,0.15)`,
      }}>
        <span style={{
          display: "inline-block",
          background: "rgba(201,151,58,0.1)", color: COLORS.goldLight,
          border: `1px solid rgba(201,151,58,0.25)`, fontSize: 11,
          fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase",
          padding: "6px 20px", borderRadius: 30,
          fontFamily: "'DM Sans', sans-serif", marginBottom: 32,
        }}>Free 30-Min Session · No Commitment</span>

        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800,
          color: COLORS.white, lineHeight: 1.15, letterSpacing: "-0.02em",
          maxWidth: 680, margin: "0 auto 20px",
        }}>
          You have the blueprint. Now let's apply it to your transcript.
        </h2>

        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 17,
          color: "rgba(255,255,255,0.6)", maxWidth: 520,
          margin: "0 auto 40px", lineHeight: 1.7,
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
            color: COLORS.navy, padding: "20px 56px", borderRadius: 12,
            fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 16,
            textDecoration: "none", letterSpacing: "0.04em",
            boxShadow: "0 8px 32px rgba(201,151,58,0.3)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease"
          }}
          onMouseOver={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(201,151,58,0.4)"; }}
          onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(201,151,58,0.3)"; }}
        >
          Schedule Free Strategy Session →
        </a>

        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 13,
          color: "rgba(255,255,255,0.3)", marginTop: 24,
        }}>
          Limited spots each week. No commitment required.
        </p>
      </div>
    </div>
  );
}

// Sub-components formatted for premium editorial feel
function P({ children }) {
  return (
    <p style={{
      fontFamily: "'DM Sans', sans-serif", fontSize: 17,
      color: "#334155", lineHeight: 1.85, marginBottom: 24,
      letterSpacing: "-0.01em"
    }}>{children}</p>
  );
}

function H2({ children }) {
  return (
    <h2 style={{
      fontFamily: "'Playfair Display', serif", fontSize: 28,
      fontWeight: 800, color: COLORS.navy, margin: "56px 0 24px",
      letterSpacing: "-0.02em", lineHeight: 1.3
    }}>{children}</h2>
  );
}

function BQ({ children, cite }) {
  return (
    <blockquote style={{
      borderLeft: `4px solid ${COLORS.gold}`,
      padding: "24px 32px",
      background: "#FAFAFA",
      borderRadius: "0 12px 12px 0",
      margin: "40px 0",
      position: "relative"
    }}>
      <p style={{
        fontFamily: "'Playfair Display', serif", fontSize: 20,
        color: COLORS.navy, lineHeight: 1.6, marginBottom: cite ? 12 : 0,
        fontStyle: "italic", fontWeight: 500
      }}>"{children}"</p>
      {cite && (
        <span style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 13,
          color: "#64748B", fontWeight: 700, letterSpacing: "0.05em",
          textTransform: "uppercase"
        }}>— {cite}</span>
      )}
    </blockquote>
  );
}