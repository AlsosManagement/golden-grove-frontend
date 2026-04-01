import { useEffect } from "react";
import { Link } from "react-router-dom";
import { B, SITE, PROGRAMS } from "../data";
import { FadeIn } from "../components/shared";

const program = PROGRAMS[1];

export default function PHP() {
  useEffect(() => {
    document.title = "Partial Hospitalization Program (PHP) | Golden Grove Recovery";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Golden Grove Recovery's PHP provides structured daytime addiction treatment 5-6 days per week. 30+ hours of weekly programming while maintaining work and family connections in Louisville, KY.");
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
            {program.duration}
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>
            Partial Hospitalization Program (PHP)
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: "rgba(255,255,255,0.75)", maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
            A bridge between residential and outpatient care. Structured treatment during the day while living at home.
          </p>
        </FadeIn>
      </section>

      {/* OVERVIEW */}
      <section className="section-pad" style={{ padding: "80px 24px", background: B.white }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeIn>
            <div className="gg-section-label" style={{ marginBottom: 8 }}>Program Overview</div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: B.coffee, letterSpacing: "-0.02em", marginBottom: 20 }}>
              What Is PHP?
            </h2>
            <p style={{ fontSize: 15, color: B.gray, lineHeight: 1.8, marginBottom: 20 }}>
              Our Partial Hospitalization Program (PHP) provides structured, intensive treatment during the day while allowing clients to return home in the evening. This program offers 30 or more hours of weekly programming, including individual therapy, group sessions, family involvement, and holistic wellness activities.
            </p>
            <p style={{ fontSize: 15, color: B.gray, lineHeight: 1.8, marginBottom: 20 }}>
              PHP is ideal for individuals who have completed residential treatment and are stepping down to a less restrictive level of care, or for those who need intensive treatment but have a stable home environment and do not require 24/7 supervision. The program allows you to practice recovery skills in real-world settings each evening while still receiving clinical support during the day.
            </p>
            <p style={{ fontSize: 15, color: B.gray, lineHeight: 1.8 }}>
              Clients in PHP typically attend 5-6 days per week for 6-8 hours each day. Treatment includes evidence-based therapies such as CBT, DBT, and trauma-informed care, as well as peer support groups, relapse prevention planning, and medication management when appropriate.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section-pad" style={{ padding: "60px 24px", background: B.offWhite }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: B.coffee, letterSpacing: "-0.02em", marginBottom: 24 }}>
              What's Included
            </h2>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: 14 }}>
            {program.features.map((f, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="gg-card" style={{ padding: "20px 22px", display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ color: B.butterscotch, fontWeight: 700, fontSize: 14 }}>&#10003;</span>
                  <span style={{ fontSize: 14, color: B.gray }}>{f}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section-pad" style={{ padding: "80px 24px", background: B.white }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeIn>
            <div className="gg-section-label" style={{ marginBottom: 8 }}>Advantages</div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: B.coffee, letterSpacing: "-0.02em", marginBottom: 20 }}>
              Benefits of PHP
            </h2>
          </FadeIn>

          <div className="expect-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: 16 }}>
            {[
              { title: "Maintain Employment", desc: "Evening and weekend flexibility allows you to keep your job or attend school while receiving intensive treatment during the day." },
              { title: "Strengthen Family Bonds", desc: "Return home each evening, allowing you to practice healthy communication and rebuild relationships in real time." },
              { title: "Real-World Practice", desc: "Apply recovery skills to everyday situations while still having clinical support. This builds confidence and resilience." },
              { title: "Continuity of Care", desc: "PHP provides a seamless transition from residential treatment, ensuring you maintain therapeutic progress without a gap in care." },
              { title: "Relapse Prevention Focus", desc: "Intensive relapse prevention planning helps you identify triggers and develop coping strategies for long-term success." },
              { title: "Peer Support Network", desc: "Build lasting connections with others in recovery through daily group therapy and shared activities." },
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

      {/* WHO IS IT FOR */}
      <section className="section-pad" style={{ padding: "60px 24px", background: B.offWhite }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: B.coffee, letterSpacing: "-0.02em", marginBottom: 20 }}>
              Who Is PHP For?
            </h2>
            <p style={{ fontSize: 15, color: B.gray, lineHeight: 1.8, marginBottom: 20 }}>
              PHP is recommended for individuals who:
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "Are transitioning from residential treatment and need continued intensive support",
                "Have a stable and supportive home environment",
                "Need intensive treatment but do not require 24/7 medical supervision",
                "Want to maintain employment, school, or family responsibilities during treatment",
                "Are motivated to practice recovery skills in daily life with clinical guidance",
                "Have completed detoxification and are medically stable",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: B.gray, lineHeight: 1.7 }}>
                  <span style={{ color: B.butterscotch, fontWeight: 700, fontSize: 12, marginTop: 3, flexShrink: 0 }}>&#10003;</span>
                  {item}
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
            Explore PHP at Golden Grove
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", maxWidth: 500, margin: "0 auto 36px" }}>
            Call us to discuss whether PHP is the right fit for your recovery.
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
