import { useEffect } from "react";
import { Link } from "react-router-dom";
import { B, SITE, INSURANCE } from "../data";
import { FadeIn } from "../components/shared";

export default function InsurancePage() {
  useEffect(() => {
    document.title = "Insurance Accepted | Golden Grove Recovery";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Golden Grove Recovery accepts most major insurance plans including Aetna, Anthem BCBS, CareSource, Cigna, Humana, Kentucky Medicaid, and more. Call (502) 610-4829 to verify coverage.");
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
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>
            Insurance We Accept
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: "rgba(255,255,255,0.75)", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
            We work with most major insurance providers. Contact us to verify your specific coverage.
          </p>
        </FadeIn>
      </section>

      {/* INSURANCE LIST */}
      <section className="section-pad" style={{ padding: "80px 24px", background: B.white }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <div className="gg-section-label" style={{ marginBottom: 8 }}>Coverage</div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: B.coffee, letterSpacing: "-0.02em", marginBottom: 8 }}>
              Accepted Insurance Providers
            </h2>
            <p style={{ fontSize: 15, color: B.gray, marginBottom: 32, maxWidth: 540 }}>
              Don't let cost prevent you from seeking help. We accept a wide range of insurance plans.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="insurance-wrap" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {INSURANCE.map((ins, i) => (
                <span key={i} style={{
                  padding: "10px 18px", borderRadius: 8, fontSize: 13, fontWeight: 500,
                  background: B.offWhite, border: `1px solid ${B.dust}`, color: B.coffee,
                  transition: "all 0.2s",
                }}>{ins}</span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="gg-card" style={{ padding: "28px 24px", marginTop: 40 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: B.coffee, marginBottom: 12 }}>Don't See Your Insurance?</h3>
              <p style={{ fontSize: 14, color: B.gray, lineHeight: 1.7, marginBottom: 16 }}>
                We regularly add new insurance partners. Even if your plan isn't listed, we may still be able to work with your provider. Our financial team can also discuss payment options, financing, and help maximize your insurance benefits.
              </p>
              <p style={{ fontSize: 14, color: B.gray, lineHeight: 1.7 }}>
                Call our insurance verification team at <a href={`tel:${SITE.phoneTel}`} style={{ color: B.coffee, fontWeight: 600, textDecoration: "none" }}>{SITE.phone}</a> for specific coverage details and to start the verification process.
              </p>
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
            Verify Your Insurance Today
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", maxWidth: 500, margin: "0 auto 36px" }}>
            Our team can verify your benefits and explain your coverage in minutes.
          </p>
          <div className="cta-banner-ctas" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`tel:${SITE.phoneTel}`} className="gg-btn gg-btn-light">Call {SITE.phone}</a>
            <Link to="/contact" className="gg-btn gg-btn-secondary">Contact Us</Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
