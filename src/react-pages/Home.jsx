import { Link } from "../lib/site.jsx";
import { B, SITE, PROGRAMS, EXPECT, REVIEWS } from "../data";
import { FadeIn, Wordmark } from "../components/shared";

export default function Home() {
  return (
    <>
      {/* HERO — Louisville Ohio River sunset video by Curt May (Pexels, royalty-free) */}
      <section className="hero-section" style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center", textAlign: "center",
        padding: "120px 24px 80px",
        background: B.coffeeDark,
        color: B.white, position: "relative", overflow: "hidden",
      }}>
        <video className="hero-video" autoPlay muted loop playsInline preload="auto" aria-hidden="true">
          <source src="https://videos.pexels.com/video-files/29061047/12561632_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay" aria-hidden="true" />

        <FadeIn style={{ position: "relative", zIndex: 2, maxWidth: 800 }}>
          <div className="hero-wordmark" style={{ marginBottom: 32, display: "flex", justifyContent: "center" }}>
            <Wordmark height={72} variant="white" />
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, lineHeight: 1.15,
            letterSpacing: "-0.03em", marginBottom: 20 }}>
            {SITE.tagline}
          </h1>
          <p className="hero-subtitle" style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", lineHeight: 1.7, color: "rgba(255,255,255,0.75)",
            maxWidth: 640, margin: "0 auto 40px" }}>
            Compassionate, evidence-based addiction treatment and dual diagnosis recovery.
            Whether you're beginning your journey or returning to it, Golden Grove provides
            the clinical expertise and human understanding you deserve.
          </p>
          <div className="hero-ctas" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`tel:${SITE.phoneTel}`} className="gg-btn gg-btn-light gg-btn-pulse">Call {SITE.phone}</a>
            <Link to="/contact" className="gg-btn gg-btn-secondary">Start Your Assessment</Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.3} style={{ position: "relative", zIndex: 2, marginTop: 60, width: "100%", maxWidth: 700 }}>
          <div className="hero-stats" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 1,
            background: "rgba(255,255,255,0.08)", borderRadius: 12, overflow: "hidden",
          }}>
            {[
              { val: "24/7", label: "Admissions Available" },
              { val: "13+", label: "Insurance Plans Accepted" },
              { val: "100%", label: "Personalized Care" },
            ].map((s, i) => (
              <div key={i} style={{ padding: "20px 16px", textAlign: "center", background: "rgba(255,255,255,0.04)" }}>
                <div className="mono" style={{ fontSize: 22, fontWeight: 700, color: B.gold }}>{s.val}</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.45)", letterSpacing: "0.06em",
                  textTransform: "uppercase", marginTop: 4, fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* PROGRAMS OVERVIEW */}
      <section className="section-pad" style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <div className="gg-section-label" style={{ marginBottom: 8 }}>Treatment Programs</div>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: B.coffee, letterSpacing: "-0.02em", marginBottom: 8 }}>
            Our Programs
          </h2>
          <p style={{ fontSize: 15, color: B.gray, marginBottom: 40, maxWidth: 500 }}>
            Two primary levels of care to meet you at the right stage of recovery.
          </p>
        </FadeIn>

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

      {/* WHAT TO EXPECT PREVIEW (first 3) */}
      <section className="section-pad" style={{ padding: "80px 24px", background: B.white }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <div className="gg-section-label" style={{ marginBottom: 8 }}>Your Journey</div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: B.coffee, letterSpacing: "-0.02em", marginBottom: 8 }}>
              What to Expect
            </h2>
            <p style={{ fontSize: 15, color: B.gray, marginBottom: 50, maxWidth: 540 }}>
              Recovery is deeply personal. Our approach combines clinical expertise with compassionate, individualized care.
            </p>
          </FadeIn>

          <div className="expect-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: 16 }}>
            {EXPECT.slice(0, 3).map((e, i) => (
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

          <FadeIn delay={0.2}>
            <div style={{ textAlign: "center", marginTop: 32 }}>
              <Link to="/about" className="gg-btn gg-btn-outline" style={{ padding: "12px 28px", fontSize: 13 }}>
                See Full Journey &#8594;
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section-pad" style={{ padding: "80px 24px", background: B.offWhite }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <div className="gg-section-label" style={{ justifyContent: "center", marginBottom: 8 }}>
                <span>Patient Reviews</span>
              </div>
              <h2 style={{ fontSize: 28, fontWeight: 800, color: B.coffee, letterSpacing: "-0.02em", marginBottom: 10 }}>
                What Our Patients Say
              </h2>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 6 }}>
                <span style={{ fontSize: 22, color: B.gold, letterSpacing: 2 }}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                <span style={{ fontSize: 15, fontWeight: 700, color: B.coffee }}>5.0</span>
                <span style={{ fontSize: 13, color: B.gray }}>on Google</span>
              </div>
            </div>
          </FadeIn>

          <div className="reviews-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
            {REVIEWS.map((r, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="gg-card" style={{ padding: "28px 24px", height: "100%", display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: "50%",
                      background: `linear-gradient(135deg, ${B.coffee}, ${B.butterscotch})`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 15, fontWeight: 700, color: B.white, flexShrink: 0,
                    }}>{r.name[0]}</div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: B.coffee }}>{r.name}</div>
                      <div style={{ fontSize: 13, color: B.gold, letterSpacing: 1 }}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                    </div>
                  </div>
                  <p style={{ fontSize: 13.5, color: B.gray, lineHeight: 1.75, flex: 1, margin: 0 }}>
                    &ldquo;{r.text}&rdquo;
                  </p>
                  <div style={{ marginTop: 16, paddingTop: 14, borderTop: `1px solid ${B.dust}`, display: "flex", alignItems: "center", gap: 6 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                      <path fill={B.grayLight} d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                      <path fill={B.grayLight} d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill={B.grayLight} d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill={B.grayLight} d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span style={{ fontSize: 11, color: B.grayLight, fontWeight: 500 }}>Google Review</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div style={{ textAlign: "center", marginTop: 32 }}>
              <a href="https://www.google.com/maps/place/Golden+Grove+Recovery/@38.1771149,-85.7913178,17z/" target="_blank" rel="noopener noreferrer"
                 className="gg-btn gg-btn-outline" style={{ padding: "12px 28px", fontSize: 13 }}>
                View All Reviews on Google
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner-section section-pad" style={{
        padding: "80px 24px", textAlign: "center", color: B.white,
        background: `linear-gradient(135deg, ${B.coffeeDark} 0%, ${B.coffee} 50%, ${B.butterscotch} 100%)`,
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.03,
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }} />
        <FadeIn style={{ position: "relative", zIndex: 1 }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: 800,
            letterSpacing: "-0.02em", marginBottom: 16, color: B.white }}>
            Ready to Begin Your Recovery?
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", marginBottom: 36,
            maxWidth: 500, margin: "0 auto 36px" }}>
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
