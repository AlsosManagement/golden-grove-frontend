import { useEffect } from "react";
import { Link } from "react-router-dom";
import { B, SITE, EXPECT, CONDITIONS } from "../data";
import { FadeIn } from "../components/shared";

export default function About() {
  useEffect(() => {
    document.title = "About Our Approach | Golden Grove Recovery";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Learn what to expect at Golden Grove Recovery. Comprehensive assessment, evidence-based treatment, dual diagnosis expertise, holistic wellness, and aftercare planning in Louisville, KY.");
  }, []);

  return (
    <>
      {/* HERO BANNER */}
      <section style={{
        padding: "140px 24px 60px", textAlign: "center",
        background: `linear-gradient(165deg, ${B.coffeeDark} 0%, ${B.coffee} 40%, ${B.butterscotch} 100%)`,
        color: B.white,
      }}>
        <FadeIn>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>
            About Golden Grove Recovery
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: "rgba(255,255,255,0.75)", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
            Recovery is deeply personal. Our approach combines clinical expertise with compassionate, individualized care designed to address your unique needs.
          </p>
        </FadeIn>
      </section>

      {/* WHAT TO EXPECT - ALL 6 ITEMS */}
      <section className="section-pad" style={{ padding: "80px 24px", background: B.white }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <div className="gg-section-label" style={{ marginBottom: 8 }}>Your Journey</div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: B.coffee, letterSpacing: "-0.02em", marginBottom: 8 }}>
              What to Expect
            </h2>
            <p style={{ fontSize: 15, color: B.gray, marginBottom: 50, maxWidth: 540 }}>
              From the moment you reach out to long after you leave, we walk with you every step of the way.
            </p>
          </FadeIn>

          <div className="expect-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: 16 }}>
            {EXPECT.map((e, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="gg-card" style={{ padding: "24px 22px", height: "100%" }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: `linear-gradient(135deg, ${B.coffee}, ${B.butterscotch})`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 14, fontWeight: 800, color: B.white, marginBottom: 14,
                  }}>{String(i + 1).padStart(2, "0")}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: B.coffee, marginBottom: 8 }}>{e.title}</h3>
                  <p style={{ fontSize: 13, color: B.gray, lineHeight: 1.7 }}>{e.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CONDITIONS TREATED */}
      <section className="section-pad" style={{ padding: "60px 24px", background: B.offWhite }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <div className="gg-section-label" style={{ marginBottom: 8 }}>Dual Diagnosis</div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: B.coffee, letterSpacing: "-0.02em", marginBottom: 8 }}>
              Mental Health Conditions We Treat
            </h2>
            <p style={{ fontSize: 15, color: B.gray, marginBottom: 32, maxWidth: 540 }}>
              Integrated approach addressing addiction alongside co-occurring mental health conditions.
            </p>
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
          <FadeIn delay={0.2}>
            <p style={{ marginTop: 32, fontSize: 14, color: B.gray }}>
              If you're unsure whether we treat a specific condition, <Link to="/contact" style={{ color: B.coffee, fontWeight: 600, textDecoration: "none" }}>contact us</Link> for a confidential consultation.
            </p>
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
            Ready to Begin Your Recovery?
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", maxWidth: 500, margin: "0 auto 36px" }}>
            Contact Golden Grove Recovery today for a confidential assessment.
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
