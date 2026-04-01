import { useEffect } from "react";
import { Link } from "react-router-dom";
import { B, SITE } from "../data";
import { FadeIn } from "../components/shared";

export default function MAT() {
  useEffect(() => {
    document.title = "Medication-Assisted Treatment (MAT) | Golden Grove Recovery";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "FDA-approved medication-assisted treatment (MAT) for opioid and alcohol addiction at Golden Grove Recovery. Buprenorphine, naltrexone, Suboxone, and Brixadi combined with therapy in Louisville, KY.");
  }, []);

  return (
    <>
      {/* HERO */}
      <section style={{
        padding: "140px 24px 60px", textAlign: "center",
        background: `linear-gradient(165deg, ${B.coffeeDark} 0%, ${B.coffee} 40%, ${B.butterscotch} 100%)`,
        color: B.white,
      }}>
        <FadeIn>
          <div className="gg-pill" style={{ background: "rgba(255,255,255,0.15)", color: B.white, border: "1px solid rgba(255,255,255,0.3)", marginBottom: 20 }}>
            Evidence-Based
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>
            Medication-Assisted Treatment (MAT)
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: "rgba(255,255,255,0.75)", maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
            FDA-approved medications combined with counseling and behavioral therapies for comprehensive addiction treatment.
          </p>
        </FadeIn>
      </section>

      {/* OVERVIEW */}
      <section className="section-pad" style={{ padding: "80px 24px", background: B.white }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeIn>
            <div className="gg-section-label" style={{ marginBottom: 8 }}>Understanding MAT</div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: B.coffee, letterSpacing: "-0.02em", marginBottom: 20 }}>
              What Is Medication-Assisted Treatment?
            </h2>
            <p style={{ fontSize: 15, color: B.gray, lineHeight: 1.8, marginBottom: 20 }}>
              Medication-Assisted Treatment (MAT) is an evidence-based approach that combines FDA-approved medications with counseling and behavioral therapies to treat substance use disorders. MAT is clinically proven to reduce opioid use, opioid-related overdose deaths, criminal activity, and infectious disease transmission. It also increases social functioning and treatment retention.
            </p>
            <p style={{ fontSize: 15, color: B.gray, lineHeight: 1.8, marginBottom: 20 }}>
              At Golden Grove Recovery, MAT is not a standalone treatment. We integrate medication management with individual therapy, group counseling, and holistic wellness to address the whole person. Medications help stabilize brain chemistry, block the euphoric effects of opioids, relieve cravings, and normalize body functions -- allowing you to engage meaningfully in the therapeutic work of recovery.
            </p>
            <p style={{ fontSize: 15, color: B.gray, lineHeight: 1.8 }}>
              MAT is supported by decades of research and endorsed by the Substance Abuse and Mental Health Services Administration (SAMHSA), the National Institute on Drug Abuse (NIDA), and the World Health Organization (WHO).
            </p>
          </FadeIn>
        </div>
      </section>

      {/* MEDICATIONS */}
      <section className="section-pad" style={{ padding: "60px 24px", background: B.offWhite }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeIn>
            <div className="gg-section-label" style={{ marginBottom: 8 }}>Medications We Offer</div>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: B.coffee, letterSpacing: "-0.02em", marginBottom: 24 }}>
              FDA-Approved Medications
            </h2>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: 16 }}>
            {[
              {
                name: "Buprenorphine",
                desc: "A partial opioid agonist that reduces cravings and withdrawal symptoms without producing the full euphoric effects of opioids. Buprenorphine has a ceiling effect that lowers the risk of misuse and overdose.",
              },
              {
                name: "Naltrexone",
                desc: "An opioid antagonist that blocks the euphoric and sedative effects of opioids. Available in oral and injectable (Vivitrol) forms. Also effective for alcohol use disorder by reducing the rewarding effects of drinking.",
              },
              {
                name: "Suboxone",
                desc: "A combination of buprenorphine and naloxone that reduces cravings and withdrawal symptoms. The naloxone component discourages misuse by causing withdrawal if the medication is injected.",
              },
              {
                name: "Brixadi",
                desc: "An extended-release injectable form of buprenorphine administered weekly or monthly. Provides consistent medication levels and eliminates the need for daily dosing, supporting treatment adherence.",
              },
            ].map((med, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="gg-card" style={{ padding: "24px 22px", height: "100%" }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: B.coffee, marginBottom: 8 }}>{med.name}</h3>
                  <p style={{ fontSize: 13, color: B.gray, lineHeight: 1.7 }}>{med.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-pad" style={{ padding: "80px 24px", background: B.white }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeIn>
            <div className="gg-section-label" style={{ marginBottom: 8 }}>The Process</div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: B.coffee, letterSpacing: "-0.02em", marginBottom: 20 }}>
              How MAT Works at Golden Grove
            </h2>
          </FadeIn>

          {[
            { step: "01", title: "Medical Assessment", desc: "Our medical team conducts a comprehensive evaluation of your substance use history, medical conditions, and treatment goals to determine whether MAT is appropriate and which medication is best suited for you." },
            { step: "02", title: "Medication Induction", desc: "Under medical supervision, you begin your prescribed medication. Our team closely monitors for side effects and adjusts dosing to optimize effectiveness while minimizing discomfort." },
            { step: "03", title: "Integrated Therapy", desc: "MAT is combined with individual counseling, group therapy, and behavioral interventions. This combination addresses both the biological and psychological aspects of addiction." },
            { step: "04", title: "Ongoing Management", desc: "Your medication plan is regularly reviewed and adjusted based on your progress. As you stabilize, your clinical team will discuss long-term medication strategies and eventual tapering if appropriate." },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <div style={{ display: "flex", gap: 20, padding: "24px 0", borderBottom: i < 3 ? `1px solid ${B.dust}` : "none" }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                  background: `linear-gradient(135deg, ${B.coffee}, ${B.butterscotch})`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 14, fontWeight: 800, color: B.white,
                }}>{item.step}</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: B.coffee, marginBottom: 6 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: B.gray, lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* MYTHS */}
      <section className="section-pad" style={{ padding: "60px 24px", background: B.offWhite }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: B.coffee, letterSpacing: "-0.02em", marginBottom: 24 }}>
              Common Misconceptions About MAT
            </h2>
            <p style={{ fontSize: 15, color: B.gray, lineHeight: 1.8, marginBottom: 24 }}>
              Despite strong scientific evidence, MAT is sometimes misunderstood. Here are facts to consider:
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { myth: "MAT just replaces one drug with another.", fact: "MAT medications are carefully dosed to prevent euphoria while relieving cravings and withdrawal. They restore normal brain function rather than continuing the cycle of addiction." },
                { myth: "Taking medication means you're not really sober.", fact: "Sobriety is about living a healthy, functional life free from the destructive cycle of addiction. MAT enables that by stabilizing brain chemistry so you can fully participate in therapy and life." },
                { myth: "MAT is only a short-term solution.", fact: "Some individuals benefit from MAT for months; others for years. Treatment duration is personalized. Research shows that longer duration is associated with better outcomes." },
              ].map((item, i) => (
                <div key={i} className="gg-card" style={{ padding: "20px 22px" }}>
                  <p style={{ fontSize: 14, fontWeight: 600, color: B.coffee, marginBottom: 6 }}>Myth: "{item.myth}"</p>
                  <p style={{ fontSize: 13, color: B.gray, lineHeight: 1.7 }}>Fact: {item.fact}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner-section section-pad" style={{
        padding: "80px 24px", textAlign: "center", color: B.white,
        background: `linear-gradient(135deg, ${B.coffeeDark} 0%, ${B.coffee} 50%, ${B.butterscotch} 100%)`,
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <FadeIn style={{ position: "relative", zIndex: 1 }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16, color: B.white }}>
            Ask About MAT at Golden Grove
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", maxWidth: 500, margin: "0 auto 36px" }}>
            Our medical team can help determine if medication-assisted treatment is right for you.
          </p>
          <div className="cta-banner-ctas" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`tel:${SITE.phoneTel}`} className="gg-btn gg-btn-light">Call {SITE.phone}</a>
            <Link to="/contact" className="gg-btn gg-btn-secondary">Schedule Assessment</Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
