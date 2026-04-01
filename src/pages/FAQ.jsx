import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { B, SITE, FAQS } from "../data";
import { FadeIn } from "../components/shared";

export default function FAQPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    document.title = "Frequently Asked Questions | Golden Grove Recovery";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Answers to common questions about addiction treatment at Golden Grove Recovery. Learn about admissions, treatment duration, MAT, insurance, visitors, and aftercare in Louisville, KY.");
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
            Frequently Asked Questions
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: "rgba(255,255,255,0.75)", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
            Answers to the most common questions about addiction treatment at Golden Grove Recovery.
          </p>
        </FadeIn>
      </section>

      {/* FAQ ACCORDION */}
      <section className="section-pad" style={{ padding: "80px 24px", maxWidth: 800, margin: "0 auto" }}>
        <FadeIn>
          <div className="gg-section-label" style={{ marginBottom: 8 }}>Common Questions</div>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: B.coffee, letterSpacing: "-0.02em", marginBottom: 40 }}>
            What You Need to Know
          </h2>
        </FadeIn>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {FAQS.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="gg-card" style={{ overflow: "hidden", borderRadius: 12 }}>
                <button className="faq-toggle" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span style={{
                    fontSize: 18, fontWeight: 300, color: B.butterscotch,
                    transition: "transform 0.3s",
                    transform: activeFaq === i ? "rotate(45deg)" : "none",
                  }}>+</span>
                </button>
                <div style={{
                  maxHeight: activeFaq === i ? 300 : 0,
                  overflow: "hidden", transition: "max-height 0.4s ease",
                }}>
                  <p style={{ padding: "0 24px 20px", fontSize: 14, color: B.gray, lineHeight: 1.7 }}>{faq.a}</p>
                </div>
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
            Still Have Questions?
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", maxWidth: 500, margin: "0 auto 36px" }}>
            Our admissions team is available 24/7 to answer any questions you have.
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
