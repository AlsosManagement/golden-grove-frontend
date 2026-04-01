import { useEffect } from "react";
import { Link } from "react-router-dom";
import { B, SITE, PROGRAMS } from "../data";
import { FadeIn } from "../components/shared";

const program = PROGRAMS[0];

export default function Residential() {
  useEffect(() => {
    document.title = "Residential Treatment Program | Golden Grove Recovery";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Golden Grove Recovery's residential treatment provides 24/7 intensive addiction care for 21-28 days. Individual therapy, group sessions, medication management, and holistic wellness in Louisville, KY.");
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
            Residential Treatment Program
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: "rgba(255,255,255,0.75)", maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
            Intensive, round-the-clock treatment in a supportive community setting. Ideal for those beginning recovery or needing comprehensive intervention.
          </p>
        </FadeIn>
      </section>

      {/* OVERVIEW */}
      <section className="section-pad" style={{ padding: "80px 24px", background: B.white }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeIn>
            <div className="gg-section-label" style={{ marginBottom: 8 }}>Program Overview</div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: B.coffee, letterSpacing: "-0.02em", marginBottom: 20 }}>
              What Is Residential Treatment?
            </h2>
            <p style={{ fontSize: 15, color: B.gray, lineHeight: 1.8, marginBottom: 20 }}>
              Our residential program provides intensive, round-the-clock treatment in a supportive community setting. Clients live at our facility for 21-28 days, receiving comprehensive care that includes individual therapy, group sessions, medication management, and holistic wellness activities. This level of care is ideal for those beginning recovery or needing intensive support during early sobriety.
            </p>
            <p style={{ fontSize: 15, color: B.gray, lineHeight: 1.8, marginBottom: 20 }}>
              During residential treatment, you are removed from the triggers and stressors of daily life, allowing you to focus entirely on your recovery. Our structured environment ensures that every hour of your day contributes to healing -- from morning mindfulness sessions to evening group discussions.
            </p>
            <p style={{ fontSize: 15, color: B.gray, lineHeight: 1.8 }}>
              Each client receives a personalized treatment plan developed after a thorough biopsychosocial assessment. Our clinical team continually evaluates your progress and adjusts your plan to ensure the best possible outcomes. We believe recovery is not one-size-fits-all, and your treatment should reflect your unique history, needs, and goals.
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

      {/* DAILY STRUCTURE */}
      <section className="section-pad" style={{ padding: "80px 24px", background: B.white }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeIn>
            <div className="gg-section-label" style={{ marginBottom: 8 }}>Daily Life</div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: B.coffee, letterSpacing: "-0.02em", marginBottom: 20 }}>
              A Typical Day in Residential Treatment
            </h2>
            <p style={{ fontSize: 15, color: B.gray, lineHeight: 1.8, marginBottom: 32 }}>
              Structure is a cornerstone of early recovery. Each day at Golden Grove follows a thoughtful schedule designed to balance therapeutic intensity with rest and reflection.
            </p>
          </FadeIn>

          {[
            { time: "7:00 AM", activity: "Wake-up, breakfast, and morning meditation or yoga session" },
            { time: "9:00 AM", activity: "Morning group therapy -- process groups, psychoeducation, or skill-building workshops" },
            { time: "11:00 AM", activity: "Individual therapy session or specialized treatment (EMDR, CBT, DBT)" },
            { time: "12:00 PM", activity: "Lunch and peer support time" },
            { time: "1:30 PM", activity: "Afternoon group therapy -- recovery models (12-Step, SMART Recovery, Refuge Recovery)" },
            { time: "3:30 PM", activity: "Holistic wellness -- art therapy, music therapy, fitness, or breathwork" },
            { time: "5:00 PM", activity: "Dinner and free time for journaling, reading, or relaxation" },
            { time: "7:00 PM", activity: "Evening group -- life skills, relapse prevention, or family sessions" },
            { time: "9:00 PM", activity: "Quiet hours, reflection, and preparation for the next day" },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.03}>
              <div style={{ display: "flex", gap: 16, padding: "14px 0", borderBottom: `1px solid ${B.dust}` }}>
                <div className="mono" style={{ fontSize: 13, fontWeight: 600, color: B.butterscotch, minWidth: 80, flexShrink: 0 }}>{item.time}</div>
                <div style={{ fontSize: 14, color: B.gray, lineHeight: 1.6 }}>{item.activity}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* WHO IS IT FOR */}
      <section className="section-pad" style={{ padding: "60px 24px", background: B.offWhite }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: B.coffee, letterSpacing: "-0.02em", marginBottom: 20 }}>
              Who Is Residential Treatment For?
            </h2>
            <p style={{ fontSize: 15, color: B.gray, lineHeight: 1.8, marginBottom: 20 }}>
              Residential treatment is recommended for individuals who need a higher level of care, including those who:
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "Are in the early stages of recovery and need medical supervision during detoxification",
                "Have co-occurring mental health conditions that require integrated treatment",
                "Have experienced multiple relapses and need a more structured environment",
                "Lack a stable or supportive home environment conducive to recovery",
                "Need medication management alongside therapy",
                "Want to fully immerse themselves in recovery without daily life distractions",
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
            Start Your Residential Treatment Today
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", maxWidth: 500, margin: "0 auto 36px" }}>
            24/7 admissions available. Call us to begin your assessment.
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
