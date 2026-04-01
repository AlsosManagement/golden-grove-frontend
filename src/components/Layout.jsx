import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { B, SITE } from "../data";
import { Wordmark, GlobalStyles, ScrollToTop } from "./shared";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Therapy", to: "/therapy" },
  { label: "Insurance", to: "/insurance" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", background: B.offWhite, color: B.black, minHeight: "100vh" }}>
      <GlobalStyles />
      <ScrollToTop />

      {/* NAV */}
      <nav className="site-nav" style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.92)",
        backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
        borderBottom: `1px solid ${scrolled ? B.dust : "transparent"}`,
        transition: "all 0.3s",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <Link to="/" className="nav-wordmark" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <Wordmark height={44} variant="color" />
        </Link>

        <div className="desktop-only" style={{ display: "flex", alignItems: "center", gap: 2 }}>
          {NAV_ITEMS.map((n) => (
            <Link key={n.label} to={n.to} className="nav-link">{n.label}</Link>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a href={`tel:${SITE.phoneTel}`} className="gg-btn gg-btn-primary desktop-only"
             style={{ padding: "8px 20px", fontSize: 12, borderRadius: 6 }}>
            Call {SITE.phone}
          </a>
          <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: "none", border: "none", cursor: "pointer", padding: 8,
              flexDirection: "column", gap: 5,
            }}>
            <span style={{ width: 22, height: 2, background: B.coffee, transition: "all 0.3s",
              transform: mobileOpen ? "rotate(45deg) translate(5px, 5px)" : "none", display: "block" }} />
            <span style={{ width: 22, height: 2, background: B.coffee, transition: "all 0.3s",
              opacity: mobileOpen ? 0 : 1, display: "block", marginTop: 5 }} />
            <span style={{ width: 22, height: 2, background: B.coffee, transition: "all 0.3s",
              transform: mobileOpen ? "rotate(-45deg) translate(5px, -5px)" : "none", display: "block", marginTop: 5 }} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mobile-menu" style={{
          position: "fixed", top: 64, left: 0, right: 0, bottom: 0, zIndex: 999,
          background: "rgba(255,255,255,0.98)", backdropFilter: "blur(12px)",
          padding: "24px", display: "flex", flexDirection: "column", gap: 8,
        }}>
          {NAV_ITEMS.map((n) => (
            <Link key={n.label} to={n.to} onClick={closeMobile}
               style={{ padding: "14px 0", fontSize: 18, fontWeight: 600, color: B.coffee,
                 textDecoration: "none", borderBottom: `1px solid ${B.dust}` }}>
              {n.label}
            </Link>
          ))}
          <a href={`tel:${SITE.phoneTel}`} className="gg-btn gg-btn-primary"
             style={{ marginTop: 16, textAlign: "center" }} onClick={closeMobile}>
            Call {SITE.phone}
          </a>
        </div>
      )}

      {/* Page Content */}
      <Outlet />

      {/* FOOTER */}
      <footer className="site-footer" style={{ background: B.coffeeDark, color: B.dust, padding: "48px 24px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="footer-wordmark" style={{ marginBottom: 32 }}>
            <Wordmark height={48} variant="white" />
          </div>
          <div className="footer-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 40, marginBottom: 40,
          }}>
            <div>
              <div className="footer-col-title" style={{ fontSize: 12, fontWeight: 700, color: B.gold, marginBottom: 16,
                letterSpacing: "0.06em", textTransform: "uppercase" }}>Quick Links</div>
              {[
                { label: "About Us", to: "/about" },
                { label: "What to Expect", to: "/about" },
                { label: "FAQ", to: "/faq" },
                { label: "Contact Us", to: "/contact" },
                { label: "Insurance", to: "/insurance" },
              ].map((l, i) => (
                <div key={i} style={{ marginBottom: 8 }}>
                  <Link to={l.to}
                     style={{ color: B.dust, fontSize: 13, textDecoration: "none", transition: "color 0.2s" }}
                     onMouseEnter={(e) => e.target.style.color = B.gold}
                     onMouseLeave={(e) => e.target.style.color = B.dust}>{l.label}</Link>
                </div>
              ))}
            </div>
            <div>
              <div className="footer-col-title" style={{ fontSize: 12, fontWeight: 700, color: B.gold, marginBottom: 16,
                letterSpacing: "0.06em", textTransform: "uppercase" }}>Programs</div>
              {[
                { label: "Residential Treatment", to: "/programs/residential" },
                { label: "PHP", to: "/programs/php" },
                { label: "Co-Occurring Disorders", to: "/programs/co-occurring" },
                { label: "MAT", to: "/programs/mat" },
              ].map((l, i) => (
                <div key={i} style={{ marginBottom: 8 }}>
                  <Link to={l.to} style={{ color: B.dust, fontSize: 13, textDecoration: "none", transition: "color 0.2s" }}
                     onMouseEnter={(e) => e.target.style.color = B.gold}
                     onMouseLeave={(e) => e.target.style.color = B.dust}>{l.label}</Link>
                </div>
              ))}
            </div>
            <div>
              <div className="footer-col-title" style={{ fontSize: 12, fontWeight: 700, color: B.gold, marginBottom: 16,
                letterSpacing: "0.06em", textTransform: "uppercase" }}>Resources</div>
              {["Alcohol Addiction", "Opioid Addiction", "Drug Rehab Louisville", "All Resources"].map((l, i) => (
                <div key={i} style={{ marginBottom: 8 }}>
                  <Link to="/resources" style={{ color: B.dust, fontSize: 13, textDecoration: "none", cursor: "pointer" }}
                    onMouseEnter={(e) => e.target.style.color = B.gold}
                    onMouseLeave={(e) => e.target.style.color = B.dust}>{l}</Link>
                </div>
              ))}
            </div>
            <div className="footer-contact-block">
              <div className="footer-col-title" style={{ fontSize: 12, fontWeight: 700, color: B.gold, marginBottom: 16,
                letterSpacing: "0.06em", textTransform: "uppercase" }}>Contact</div>
              <p style={{ fontSize: 13, lineHeight: 1.7, marginBottom: 12 }}>
                <span style={{ color: B.gold, fontWeight: 600 }}>Address</span><br />
                4418 Malcolm Ave<br />Louisville, KY 40211
              </p>
              <p style={{ fontSize: 13, lineHeight: 1.7, marginBottom: 12 }}>
                <span style={{ color: B.gold, fontWeight: 600 }}>Phone</span><br />
                <a href={`tel:${SITE.phoneTel}`} style={{ color: B.dust, textDecoration: "none" }}>{SITE.phone}</a>
              </p>
              <p style={{ fontSize: 13, lineHeight: 1.7 }}>
                <span style={{ color: B.gold, fontWeight: 600 }}>Email</span><br />
                <a href={`mailto:${SITE.email}`} style={{ color: B.dust, textDecoration: "none" }}>{SITE.email}</a>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar" style={{
          borderTop: `1px solid rgba(242,209,125,0.15)`,
          background: "rgba(0,0,0,0.2)", padding: "16px 24px",
        }}>
          <div className="footer-bottom-inner" style={{
            maxWidth: 1100, margin: "0 auto",
            display: "flex", justifyContent: "space-between", alignItems: "center",
            flexWrap: "wrap", gap: 12,
          }}>
            <div>
              <div style={{ fontSize: 12, color: B.dust }}>© 2025 {SITE.name}. All rights reserved.</div>
              <div style={{ fontSize: 12, color: B.gold, fontWeight: 500, marginTop: 2 }}>
                Part of the {SITE.parent} family
              </div>
            </div>
            <div style={{ display: "flex", gap: 20 }}>
              <span style={{ fontSize: 12, color: B.dust, cursor: "pointer" }}>Privacy Policy</span>
              <span style={{ fontSize: 12, color: B.dust, cursor: "pointer" }}>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
