import { Link } from "../lib/site.jsx";
import { B, SITE, PROGRAMS } from "../data";
import { FadeIn } from "../components/shared";

export default function Programs() {
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
            Our Treatment Programs
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: "rgba(255,255,255,0.75)", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
            Two primary levels of care to meet you at the right stage of recovery.
          </p>
        </FadeIn>
      </section>

      {/* PROGRAM CARDS */}
      <section className="section-pad" style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <div className="program-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(400px, 100%), 1fr))", gap: 18 }}>
          {PROGRAMS.map((p, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="gg-card" style={{ padding: "32px 28px", height: "100%" }}>
                <div className="gg-pill" style={{
                  background: B.butterPale, color: B.butterscotch,
                  border: `1px solid ${B.butterscotch}33`, marginBottom: 16,
                }}>{p.duration}</div>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: B.coffee, marginBottom: 12, letterSpacing: "-0.01em" }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 14, color: B.gray, lineHeight: 1.7, marginBottom: 20 }}>{p.desc}</p>
                <div style={{ borderTop: `1px solid ${B.dust}`, paddingTop: 16 }}>
                  {p.features.map((f, j) => (
                    <div key={j} style={{
                      padding: "8px 0", fontSize: 13, color: B.gray,
                      borderBottom: j < p.features.length - 1 ? `1px solid ${B.offWhite}` : "none",
                      display: "flex", alignItems: "center", gap: 8,
                    }}>
                      <span style={{ color: B.butterscotch, fontWeight: 700, fontSize: 11 }}>&#10003;</span>
                      {f}
                    </div>
                  ))}
                </div>
                <Link to={i === 0 ? "/programs/residential" : "/programs/php"}
                  style={{ display: "inline-block", marginTop: 16, fontSize: 13, fontWeight: 600, color: B.butterscotch, textDecoration: "none" }}>
                  Learn More &#8594;
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ADDITIONAL PROGRAMS */}
      <section className="section-pad" style={{ padding: "60px 24px", background: B.white }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <div className="gg-section-label" style={{ marginBottom: 8 }}>Specialized Care</div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: B.coffee, letterSpacing: "-0.02em", marginBottom: 40 }}>
              Specialized Care
            </h2>
          </FadeIn>

          <div className="program-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(400px, 100%), 1fr))", gap: 18 }}>
            <FadeIn delay={0}>
              <div className="gg-card" style={{ padding: "32px 28px", height: "100%" }}>
                <div className="gg-pill" style={{ background: B.butterPale, color: B.butterscotch, border: `1px solid ${B.butterscotch}33`, marginBottom: 16 }}>Integrated Care</div>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: B.coffee, marginBottom: 12 }}>Co-Occurring Disorders</h3>
                <p style={{ fontSize: 14, color: B.gray, lineHeight: 1.7, marginBottom: 16 }}>
                  Many clients struggle with both addiction and mental health conditions. Our integrated approach treats co-occurring disorders simultaneously, addressing how they interact and reinforce each other for better long-term recovery outcomes.
                </p>
                <Link to="/programs/co-occurring" style={{ fontSize: 13, fontWeight: 600, color: B.butterscotch, textDecoration: "none" }}>
                  Learn More &#8594;
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="gg-card" style={{ padding: "32px 28px", height: "100%" }}>
                <div className="gg-pill" style={{ background: B.butterPale, color: B.butterscotch, border: `1px solid ${B.butterscotch}33`, marginBottom: 16 }}>Evidence-Based</div>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: B.coffee, marginBottom: 12 }}>Medication-Assisted Treatment</h3>
                <p style={{ fontSize: 14, color: B.gray, lineHeight: 1.7, marginBottom: 16 }}>
                  MAT combines FDA-approved medications with counseling and behavioral therapies. We offer buprenorphine, naltrexone, Suboxone, and Brixadi to reduce withdrawal symptoms and cravings so you can engage fully in recovery.
                </p>
                <Link to="/programs/mat" style={{ fontSize: 13, fontWeight: 600, color: B.butterscotch, textDecoration: "none" }}>
                  Learn More &#8594;
                </Link>
              </div>
            </FadeIn>
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
            Find the Right Program for You
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", maxWidth: 500, margin: "0 auto 36px" }}>
            Our admissions team can help determine which level of care is right for your situation.
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
