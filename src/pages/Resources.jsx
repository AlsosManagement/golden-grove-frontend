import { useEffect } from "react";
import { Link } from "react-router-dom";
import { B, SITE, RESOURCES } from "../data";
import { FadeIn } from "../components/shared";

export default function Resources() {
  useEffect(() => {
    document.title = "Addiction Resources & Guides | Golden Grove Recovery";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Educational resources about addiction, substance use disorders, and recovery. Guides on alcohol, opioids, drug rehab in Louisville, and more from Golden Grove Recovery.");
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
            Addiction Resources
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: "rgba(255,255,255,0.75)", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
            Knowledge is power in recovery. Explore comprehensive guides to understanding addiction and finding treatment.
          </p>
        </FadeIn>
      </section>

      {/* RESOURCES GRID */}
      <section className="section-pad" style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <div className="gg-section-label" style={{ marginBottom: 8 }}>Education</div>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: B.coffee, letterSpacing: "-0.02em", marginBottom: 8 }}>
            Explore Our Guides
          </h2>
          <p style={{ fontSize: 15, color: B.gray, marginBottom: 40, maxWidth: 540 }}>
            Understanding addiction is the first step toward recovery. Browse our educational resources.
          </p>
        </FadeIn>
        <div className="resource-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: 14 }}>
          {RESOURCES.map((r, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="gg-card" style={{ padding: "24px 22px", cursor: "pointer", height: "100%" }}>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: B.coffee, marginBottom: 8 }}>{r.title}</h4>
                <p style={{ fontSize: 13, color: B.gray, lineHeight: 1.6, marginBottom: 12 }}>{r.desc}</p>
                <span style={{ fontSize: 12, fontWeight: 600, color: B.butterscotch }}>Read more &#8594;</span>
              </div>
            </FadeIn>
          ))}
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
            Have Questions? We're Here to Help.
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", maxWidth: 500, margin: "0 auto 36px" }}>
            Our admissions team is available 24/7 to answer your questions about addiction and treatment options.
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
