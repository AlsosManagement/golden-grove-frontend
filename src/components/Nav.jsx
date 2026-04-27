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
  { label: "Therapy", to: "/therapy" },
  { label: "Insurance", to: "/insurance" },
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
        <a href={href("/")} className="nav-wordmark" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <Wordmark height={44} variant="color" />
        </a>

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
