import { useEffect } from "react";
import { B, SITE, MAPS_EMBED_URL } from "../data";
import { FadeIn } from "../components/shared";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us | Golden Grove Recovery";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Contact Golden Grove Recovery at (502) 610-4829. Located at 4418 Malcolm Ave, Louisville, KY 40211. 24/7 admissions available for addiction treatment and dual diagnosis recovery.");
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
            Contact Golden Grove Recovery
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: "rgba(255,255,255,0.75)", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
            We're here whenever you're ready. Reach out for a confidential assessment.
          </p>
        </FadeIn>
      </section>

      {/* CONTACT & MAP */}
      <section className="section-pad" style={{ padding: "80px 24px", background: B.white }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <div className="gg-section-label" style={{ marginBottom: 8 }}>Location</div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: B.coffee, letterSpacing: "-0.02em", marginBottom: 40 }}>
              Visit Golden Grove Recovery
            </h2>
          </FadeIn>

          <div className="contact-layout" style={{ display: "grid", gridTemplateColumns: "380px 1fr", gap: 24 }}>
            {/* Contact Details Card */}
            <FadeIn>
              <div className="gg-card" style={{ padding: 0, overflow: "hidden", height: "100%", display: "flex", flexDirection: "column" }}>
                <div style={{
                  background: `linear-gradient(135deg, ${B.coffee}, ${B.butterscotch})`,
                  padding: "28px 28px 24px", color: B.white,
                }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: B.white, marginBottom: 4 }}>Golden Grove Recovery</h3>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>Addiction Treatment Center</p>
                </div>
                <div style={{ padding: "24px 28px", flex: 1 }}>
                  <div style={{ marginBottom: 20 }}>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: B.butterscotch, marginBottom: 6 }}>Address</div>
                    <p style={{ fontSize: 14, color: B.black, lineHeight: 1.6, fontWeight: 500 }}>4418 Malcolm Ave<br />Louisville, KY 40211</p>
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: B.butterscotch, marginBottom: 6 }}>Phone</div>
                    <a href={`tel:${SITE.phoneTel}`} style={{ fontSize: 14, color: B.coffee, fontWeight: 600, textDecoration: "none" }}>{SITE.phone}</a>
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: B.butterscotch, marginBottom: 6 }}>Email</div>
                    <a href={`mailto:${SITE.email}`} style={{ fontSize: 14, color: B.coffee, fontWeight: 500, textDecoration: "none" }}>{SITE.email}</a>
                  </div>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: B.butterscotch, marginBottom: 6 }}>Hours</div>
                    <p style={{ fontSize: 14, color: B.black, fontWeight: 500 }}>24/7 Admissions</p>
                    <p style={{ fontSize: 12, color: B.gray }}>We're here whenever you're ready.</p>
                  </div>
                </div>
                <div style={{ padding: "0 28px 24px" }}>
                  <a href={`tel:${SITE.phoneTel}`} className="gg-btn gg-btn-primary" style={{ width: "100%", textAlign: "center", padding: "12px 24px", fontSize: 13 }}>
                    Call Now
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Map */}
            <FadeIn delay={0.1}>
              <div style={{ borderRadius: 14, overflow: "hidden", border: `1px solid ${B.dust}`,
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)", height: "100%", minHeight: 400 }}>
                <iframe
                  src={MAPS_EMBED_URL}
                  className="map-frame" width="100%" height="100%" style={{ border: 0, display: "block", minHeight: 400 }} allowFullScreen="" loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="Golden Grove Recovery Location"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
