import { useState, useEffect } from "react";
import { B, SITE } from "../data";
import { Wordmark } from "./shared";
import { Link, href } from "../lib/site.jsx";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Substances", to: "/substance-use" },
  { label: "Medicaid", to: "/medicaid" },
  { label: "Locations", to: "/locations" },
  { label: "Admissions", to: "/admissions" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav className="site-nav" style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.92)",
        backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
        borderBottom: `1px solid ${scrolled ? B.dust : "transparent"}`,
        transition: "all 0.3s",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <a href={href("/")} className="nav-wordmark" aria-label="Golden Grove Recovery — Home"
           style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
          <span className="nav-wordmark-svg"><Wordmark height={44} variant="color" /></span>
          <span className="nav-wordmark-compact-svg"><Wordmark height={26} variant="color" compact /></span>
        </a>

        <div className="desktop-only" style={{ display: "flex", alignItems: "center", gap: 2 }}>
          {NAV_ITEMS.map((n) => (
            <Link key={n.label} to={n.to} className="nav-link">{n.label}</Link>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a href={`tel:${SITE.phoneTel}`} className="gg-btn gg-btn-primary nav-call"
             aria-label={`Call ${SITE.phone}`}>
            <svg className="nav-call-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>
            </svg>
            <span className="nav-call-text-full">Call {SITE.phone}</span>
            <span className="nav-call-text-short">Call</span>
          </a>
          <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{ background: "none", border: "none", cursor: "pointer", padding: 8, flexDirection: "column", gap: 5 }}>
            <span style={{ width: 22, height: 2, background: B.coffee, transition: "all 0.3s",
              transform: mobileOpen ? "rotate(45deg) translate(5px, 5px)" : "none", display: "block" }} />
            <span style={{ width: 22, height: 2, background: B.coffee, transition: "all 0.3s",
              opacity: mobileOpen ? 0 : 1, display: "block", marginTop: 5 }} />
            <span style={{ width: 22, height: 2, background: B.coffee, transition: "all 0.3s",
              transform: mobileOpen ? "rotate(-45deg) translate(5px, -5px)" : "none", display: "block", marginTop: 5 }} />
          </button>
        </div>
      </nav>

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
    </>
  );
}
