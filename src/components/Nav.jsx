import { useState, useEffect, useRef } from "react";
import { B, SITE } from "../data";
import { Wordmark } from "./shared";
import { Link, href } from "../lib/site.jsx";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  {
    label: "About",
    to: "/about",
    children: [
      { label: "Our Approach", to: "/about" },
      { label: "Clinical Team", to: "/about/clinical-team" },
      { label: "Accreditations", to: "/about/accreditations" },
    ],
  },
  {
    label: "Programs",
    to: "/programs",
    children: [
      { label: "All Programs", to: "/programs" },
      { label: "Residential Treatment", to: "/programs/residential" },
      { label: "Partial Hospitalization (PHP)", to: "/programs/php" },
      { label: "Co-Occurring Disorders", to: "/programs/co-occurring" },
      { label: "Medication-Assisted Treatment", to: "/programs/mat" },
    ],
  },
  {
    label: "Substances",
    to: "/substance-use",
    children: [
      { label: "Overview", to: "/substance-use" },
      { label: "Alcohol Use Disorder", to: "/substance-use/alcohol" },
      { label: "Opioid Use Disorder", to: "/substance-use/opioids" },
      { label: "Fentanyl", to: "/substance-use/opioids/fentanyl" },
      { label: "Heroin", to: "/substance-use/opioids/heroin" },
      { label: "Methamphetamine", to: "/substance-use/stimulants/meth-methamphetamine" },
      { label: "Benzodiazepines", to: "/substance-use/benzodiazepines" },
      { label: "MAT — Suboxone", to: "/substance-use/opioids/mat/suboxone" },
    ],
  },
  {
    label: "Medicaid",
    to: "/medicaid",
    children: [
      { label: "Kentucky Medicaid hub", to: "/medicaid" },
      { label: "Passport Health Plan", to: "/medicaid/passport-health-plan" },
      { label: "Anthem Medicaid", to: "/medicaid/anthem-medicaid-kentucky" },
      { label: "Humana Healthy Horizons", to: "/medicaid/humana-healthy-horizons-kentucky" },
      { label: "WellCare of Kentucky", to: "/medicaid/wellcare-of-kentucky" },
      { label: "Aetna Better Health", to: "/medicaid/aetna-better-health-of-kentucky" },
      { label: "UnitedHealthcare Community", to: "/medicaid/united-healthcare-community-plan-kentucky" },
      { label: "How to Apply", to: "/medicaid/how-to-apply-for-medicaid-kentucky" },
      { label: "No Insurance Options", to: "/medicaid/no-insurance-options" },
    ],
  },
  {
    label: "Locations",
    to: "/locations",
    children: [
      { label: "All Service Areas", to: "/locations" },
      { label: "Louisville", to: "/locations/louisville" },
      { label: "Jeffersontown", to: "/locations/jeffersontown" },
      { label: "St. Matthews", to: "/locations/st-matthews" },
    ],
  },
  {
    label: "Admissions",
    to: "/admissions",
    children: [
      { label: "Admissions Hub", to: "/admissions" },
      { label: "Verify Insurance", to: "/admissions/verify-insurance" },
      { label: "What to Expect on First Call", to: "/admissions/what-to-expect-first-call" },
      { label: "Admissions Process", to: "/admissions/admissions-process" },
      { label: "Admissions FAQ", to: "/admissions/faq" },
    ],
  },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

function Chevron({ open }) {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
         style={{ transition: "transform 0.18s", transform: open ? "rotate(180deg)" : "none", marginLeft: 4 }}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // desktop: nav item label that's open
  const [mobileExpanded, setMobileExpanded] = useState({}); // mobile: { itemLabel: bool }
  const navRef = useRef(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  // Close desktop dropdown on outside click or Escape
  useEffect(() => {
    if (!openDropdown) return;
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenDropdown(null);
    };
    const handleEscape = (e) => { if (e.key === "Escape") setOpenDropdown(null); };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [openDropdown]);

  const closeMobile = () => setMobileOpen(false);
  const toggleMobileExpanded = (label) =>
    setMobileExpanded((s) => ({ ...s, [label]: !s[label] }));

  return (
    <>
      <nav ref={navRef} className="site-nav" style={{
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
          {NAV_ITEMS.map((n) => {
            const hasChildren = n.children && n.children.length > 0;
            const isOpen = openDropdown === n.label;
            if (!hasChildren) {
              return <Link key={n.label} to={n.to} className="nav-link">{n.label}</Link>;
            }
            return (
              <div
                key={n.label}
                className={`nav-item-with-children${isOpen ? " is-open" : ""}`}
                onMouseEnter={() => setOpenDropdown(n.label)}
                onMouseLeave={() => setOpenDropdown((cur) => (cur === n.label ? null : cur))}
              >
                <button
                  type="button"
                  className="nav-link nav-link-button"
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  onClick={() => setOpenDropdown(isOpen ? null : n.label)}
                >
                  {n.label}<Chevron open={isOpen} />
                </button>
                <div className="nav-dropdown" role="menu">
                  {n.children.map((c) => (
                    <Link key={c.to} to={c.to} className="nav-dropdown-link" role="menuitem"
                          onClick={() => setOpenDropdown(null)}>
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
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
          padding: "24px", display: "flex", flexDirection: "column", gap: 4,
          overflowY: "auto",
        }}>
          {NAV_ITEMS.map((n) => {
            const hasChildren = n.children && n.children.length > 0;
            const expanded = !!mobileExpanded[n.label];
            if (!hasChildren) {
              return (
                <Link key={n.label} to={n.to} onClick={closeMobile}
                   style={{ padding: "14px 0", fontSize: 18, fontWeight: 600, color: B.coffee,
                     textDecoration: "none", borderBottom: `1px solid ${B.dust}` }}>
                  {n.label}
                </Link>
              );
            }
            return (
              <div key={n.label} style={{ borderBottom: `1px solid ${B.dust}` }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0" }}>
                  <Link to={n.to} onClick={closeMobile}
                     style={{ fontSize: 18, fontWeight: 600, color: B.coffee, textDecoration: "none", flex: 1 }}>
                    {n.label}
                  </Link>
                  <button
                    type="button"
                    onClick={() => toggleMobileExpanded(n.label)}
                    aria-label={`${expanded ? "Collapse" : "Expand"} ${n.label} sub-menu`}
                    aria-expanded={expanded}
                    style={{
                      background: "none", border: `1px solid ${B.dust}`, cursor: "pointer",
                      padding: "6px 10px", borderRadius: 6, color: B.coffee,
                      display: "flex", alignItems: "center",
                    }}
                  >
                    <Chevron open={expanded} />
                  </button>
                </div>
                {expanded && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 2, padding: "0 0 14px 16px" }}>
                    {n.children.map((c) => (
                      <Link key={c.to} to={c.to} onClick={closeMobile}
                         style={{ padding: "10px 0", fontSize: 15, fontWeight: 500, color: B.gray,
                           textDecoration: "none" }}>
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <a href={`tel:${SITE.phoneTel}`} className="gg-btn gg-btn-primary"
             style={{ marginTop: 16, textAlign: "center" }} onClick={closeMobile}>
            Call {SITE.phone}
          </a>
        </div>
      )}
    </>
  );
}
