import { useEffect } from "react";
import { Link } from "react-router-dom";
import { B, SITE, CONDITIONS } from "../data";
import { FadeIn } from "../components/shared";

export default function CoOccurring() {
  useEffect(() => {
    document.title = "Co-Occurring Disorders Treatment | Golden Grove Recovery";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Integrated dual diagnosis treatment for co-occurring addiction and mental health conditions. ADHD, anxiety, depression, PTSD, bipolar disorder and more at Golden Grove Recovery in Louisville, KY.");
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
            Integrated Care
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>
            Co-Occurring Disorders Treatment
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: "rgba(255,255,255,0.75)", maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
            Treating addiction and mental health conditions simultaneously for comprehensive, lasting recovery.
          </p>
        </FadeIn>
      </section>

      {/* OVERVIEW */}
      <section className="section-pad" style={{ padding: "80px 24px", background: B.white }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeIn>
            <div className="gg-section-label" style={{ marginBottom: 8 }}>Understanding Dual Diagnosis</div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: B.coffee, letterSpacing: "-0.02em", marginBottom: 20 }}>
              What Are Co-Occurring Disorders?
            </h2>
            <p style={{ fontSize: 15, color: B.gray, lineHeight: 1.8, marginBottom: 20 }}>
              Co-occurring disorders, also known as dual diagnosis, refers to the presence of both a substance use disorder and a mental health condition at the same time. Research shows that nearly half of people who experience a substance use disorder also have a co-occurring mental health condition. These conditions often interact and reinforce each other, making treatment more complex but not impossible.
            </p>
            <p style={{ fontSize: 15, color: B.gray, lineHeight: 1.8, marginBottom: 20 }}>
              At Golden Grove Recovery, we specialize in integrated treatment that addresses both conditions simultaneously. Rather than treating addiction in isolation and referring out for mental health care (or vice versa), our clinical team develops a unified treatment plan that recognizes how these conditions affect each other.
            </p>
            <p style={{ fontSize: 15, color: B.gray, lineHeight: 1.8 }}>
              For example, someone struggling with untreated depression may turn to alcohol to cope with feelings of hopelessness. Conversely, chronic substance use can trigger or worsen anxiety disorders, PTSD symptoms, or bipolar episodes. Effective treatment must address both sides of this equation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CONDITIONS LIST */}
      <section className="section-pad" style={{ padding: "60px 24px", background: B.offWhite }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeIn>
            <div className="gg-section-label" style={{ marginBottom: 8 }}>Conditions We Treat</div>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: B.coffee, letterSpacing: "-0.02em", marginBottom: 24 }}>
              Mental Health Conditions
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="conditions-wrap" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {CONDITIONS.map((c, i) => (
                <span key={i} className="gg-pill" style={{
                  background: B.coffee, color: B.white, padding: "8px 16px",
                  fontSize: 12, borderRadius: 6,
                }}>{c}</span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section-pad" style={{ padding: "80px 24px", background: B.white }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeIn>
            <div className="gg-section-label" style={{ marginBottom: 8 }}>Our Approach</div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: B.coffee, letterSpacing: "-0.02em", marginBottom: 20 }}>
              Integrated Treatment Model
            </h2>
          </FadeIn>

          <div className="expect-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: 16 }}>
            {[
              { title: "Comprehensive Assessment", desc: "A thorough psychiatric and substance use evaluation identifies all conditions present, ensuring nothing is overlooked in your treatment plan." },
              { title: "Unified Clinical Team", desc: "Your therapist, psychiatrist, and medical staff work together rather than in separate silos, ensuring coordinated care across all your needs." },
              { title: "Trauma-Informed Care", desc: "Many co-occurring conditions are rooted in trauma. Our EMDR, CBT, and somatic therapies address underlying traumatic experiences driving both addiction and mental health symptoms." },
              { title: "Medication Management", desc: "Psychiatric medications and MAT are carefully managed together, accounting for interactions and optimizing effectiveness for both conditions." },
              { title: "Cognitive-Behavioral Therapy", desc: "CBT helps you identify and change thought patterns that contribute to both substance use and mental health symptoms, building healthier coping mechanisms." },
              { title: "Ongoing Monitoring", desc: "Regular reassessment ensures your treatment plan evolves as you progress, addressing new challenges and celebrating milestones." },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="gg-card" style={{ padding: "24px 22px", height: "100%" }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: B.coffee, marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ fontSize: 13, color: B.gray, lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
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
            Get Help for Co-Occurring Disorders
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", maxWidth: 500, margin: "0 auto 36px" }}>
            You don't have to choose between treating addiction and mental health. We treat both.
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
