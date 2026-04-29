import { useState, useEffect, useRef } from "react";
import { B } from "../data";

// ─── INTERSECTION OBSERVER HOOK ─────────────────────────────────────────────
export function useOnScreen(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ─── FADE-IN ANIMATION WRAPPER ──────────────────────────────────────────────
export function FadeIn({ children, delay = 0, style = {} }) {
  const [ref, vis] = useOnScreen(0.1);
  return (
    <div ref={ref} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? "translateY(0)" : "translateY(18px)",
      transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  );
}

// ─── ICON SET (Lucide MIT) ──────────────────────────────────────────────────
// Mirrors src/components/Icon.astro so React pages can render the same icons.
const ICON_PATHS = {
  stethoscope: <><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/></>,
  home: <><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>,
  clock: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
  pill: <><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></>,
  refresh: <><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></>,
  "shield-check": <><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></>,
  phone: <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></>,
  "map-pin": <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
  brain: <><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></>,
  calendar: <><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></>,
  "file-text": <><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></>,
  "message-circle": <><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></>,
  heart: <><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/></>,
  "check-circle": <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></>,
  info: <><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="16" y2="12"/><line x1="12" x2="12.01" y1="8" y2="8"/></>,
  sparkles: <><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z"/></>,
  leaf: <><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19.2 2.3c1.2 4.4 1.4 9-1.7 12.7C16.3 16.8 11.7 20 11 20Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></>,
};

export function Icon({ name, size = 24, color = "#8C6934", strokeWidth = 1.75, style = {} }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: "inline-block", flexShrink: 0, verticalAlign: "middle", ...style }}
      aria-hidden="true"
    >
      {ICON_PATHS[name]}
    </svg>
  );
}

// ─── WORDMARK SVG ────────────────────────────────────────────────────────────
// `compact` crops the viewBox to "Golden Grove" only (drops "Recovery") so
// the wordmark fits in narrow viewports while staying brand-consistent.
export function Wordmark({ height = 40, variant = "color", compact = false }) {
  const c1 = variant === "white" ? "#FFFFFF" : "#462001";
  const c2 = variant === "white" ? "rgba(255,255,255,0.7)" : "#c79a56";
  const viewBox = compact ? "100 185 490 50" : "100 185 790 50";
  return (
    <svg height={height} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
      <path fill={c1} d="M112.9,210.2c0-2.8.5-5.3,1.5-7.7s2.4-4.5,4.2-6.2c1.8-1.7,3.9-3.1,6.4-4.1s5.1-1.5,8-1.5,3.2.1,4.6.4c1.4.3,2.6.6,3.7,1,1.1.4,2,.8,2.8,1.1.8.4,1.4.7,1.8,1,.9.7,1.1,1.5.4,2.4l-.8,1.1c-.6.9-1.5,1-2.6.5-.4-.2-1-.5-1.6-.9-.6-.3-1.3-.6-2.1-.9-.8-.3-1.7-.5-2.7-.7s-2.1-.3-3.3-.3c-2.3,0-4.3.4-6.1,1.1-1.8.8-3.3,1.8-4.6,3.1-1.3,1.3-2.2,2.8-2.9,4.6-.7,1.8-1,3.6-1,5.7s.4,4.1,1.1,5.9c.7,1.8,1.8,3.4,3,4.7,1.3,1.3,2.8,2.3,4.5,3s3.6,1.1,5.7,1.1,3.4-.2,4.8-.7c1.4-.5,2.5-1,3.5-1.6,1.1-.7,2.1-1.5,2.9-2.4v-5.3h-4.6c-1.2,0-1.8-.6-1.8-1.8v-1.1c0-1.2.6-1.8,1.8-1.8h7.8c1.2,0,1.8.6,1.8,1.8v15.4c0,1.2-.6,1.8-1.8,1.8h-1.1c-1.2,0-1.8-.5-1.8-1.5v-2.6h-.1c-.8.9-1.8,1.7-3.1,2.3-1,.6-2.3,1.1-3.8,1.6s-3.3.7-5.3.7-5.2-.5-7.5-1.4c-2.3-1-4.4-2.3-6.1-4s-3.1-3.7-4.2-6.1c-1-2.4-1.5-5-1.5-7.8h.1Z"/>
      <path fill={c1} d="M157.5,209.8c0-2.7.5-5.2,1.5-7.5s2.4-4.4,4.2-6.1,3.9-3.1,6.4-4c2.5-1,5.2-1.5,8.1-1.5s5.6.5,8.1,1.5,4.6,2.3,6.4,4c1.8,1.7,3.2,3.7,4.2,6.1s1.5,4.9,1.5,7.5-.5,5.3-1.5,7.7-2.4,4.5-4.2,6.2c-1.8,1.8-3.9,3.2-6.4,4.2s-5.2,1.5-8.1,1.5-5.6-.5-8.1-1.5-4.6-2.4-6.4-4.2c-1.8-1.8-3.2-3.9-4.2-6.2s-1.5-5-1.5-7.7ZM163.2,209.8c0,2.1.4,4,1.1,5.8.7,1.8,1.7,3.4,3,4.7s2.8,2.4,4.6,3.1c1.8.8,3.7,1.1,5.8,1.1s4-.4,5.8-1.1c1.8-.8,3.3-1.8,4.6-3.1s2.3-2.9,3-4.7,1.1-3.8,1.1-5.8-.4-3.9-1.1-5.7c-.7-1.8-1.7-3.3-3-4.5s-2.8-2.3-4.6-3-3.7-1.1-5.8-1.1-4,.4-5.8,1.1c-1.8.7-3.3,1.7-4.6,3s-2.3,2.8-3,4.5c-.7,1.8-1.1,3.6-1.1,5.7Z"/>
      <path fill={c1} d="M208.3,193c0-1.2.6-1.8,1.8-1.8h1.8c1.2,0,1.8.6,1.8,1.8v31.2h15.9c1.2,0,1.8.6,1.8,1.8v1.1c0,1.2-.6,1.8-1.8,1.8h-19.5c-1.2,0-1.8-.6-1.8-1.8v-34h0Z"/>
      <path fill={c1} d="M239.5,193c0-1.2.6-1.8,1.8-1.8h11.2c3,0,5.7.4,8.2,1.2s4.6,2,6.3,3.6c1.7,1.6,3.1,3.6,4,5.9.9,2.3,1.4,5,1.4,7.9s-.5,5.6-1.4,8c-.9,2.3-2.3,4.3-4,5.9-1.7,1.6-3.9,2.8-6.3,3.7s-5.2,1.3-8.2,1.3h-11.2c-1.2,0-1.8-.6-1.8-1.8v-34h0ZM252.2,224.2c2.2,0,4.3-.3,6.1-.9,1.8-.6,3.3-1.5,4.6-2.7,1.3-1.2,2.3-2.7,3-4.5s1-3.8,1-6.1-.4-4.3-1.1-6.1-1.7-3.2-3-4.4-2.8-2.1-4.6-2.7c-1.8-.6-3.8-.9-6-.9h-7.2v28.4h7.2Z"/>
      <path fill={c1} d="M283,193c0-1.2.6-1.8,1.8-1.8h19.2c1.2,0,1.8.6,1.8,1.8v1.1c0,1.2-.6,1.8-1.8,1.8h-15.6v11.7h12.3c1.2,0,1.8.6,1.8,1.8v1.1c0,1.2-.6,1.8-1.8,1.8h-12.3v12.1h16.5c1.2,0,1.8.6,1.8,1.8v1.1c0,1.2-.6,1.8-1.8,1.8h-20.1c-1.2,0-1.8-.6-1.8-1.8v-34.3Z"/>
      <path fill={c1} d="M316.8,193c0-1.2.6-1.8,1.8-1.8h2.1c1,0,1.7.4,2.2,1.2l16.8,23.2c.3.5.7,1.1,1.1,1.7.4.6.7,1.2,1,1.8.4.6.7,1.3,1.1,2h.1c0-.6-.1-1.3-.2-1.9,0-.6-.1-1.2-.1-1.8v-24.3c0-1.2.6-1.8,1.8-1.8h1.8c1.2,0,1.8.6,1.8,1.8v34c0,1.2-.6,1.8-1.8,1.8h-2.1c-1,0-1.7-.4-2.2-1.2l-16.9-23.2c-.4-.5-.7-1.1-1.1-1.7-.4-.6-.7-1.2-1-1.8-.4-.6-.7-1.3-1.1-2h-.1c0,.7,0,1.3.2,2,0,.6,0,1.2.1,1.8v24.3c0,1.2-.6,1.8-1.8,1.8h-1.8c-1.2,0-1.8-.6-1.8-1.8v-34h.1Z"/>
      <path fill={c1} d="M375.4,210.2c0-2.8.5-5.3,1.5-7.7s2.4-4.5,4.2-6.2c1.8-1.7,3.9-3.1,6.4-4.1s5.1-1.5,8-1.5,3.2.1,4.6.4c1.4.3,2.6.6,3.7,1s2,.8,2.8,1.1c.8.4,1.4.7,1.8,1,.9.7,1.1,1.5.4,2.4l-.8,1.1c-.6.9-1.5,1-2.6.5-.4-.2-1-.5-1.6-.9-.6-.3-1.3-.6-2.1-.9-.8-.3-1.7-.5-2.7-.7s-2.1-.3-3.3-.3c-2.3,0-4.3.4-6.1,1.1-1.8.8-3.3,1.8-4.6,3.1-1.3,1.3-2.2,2.8-2.9,4.6-.7,1.8-1,3.6-1,5.7s.4,4.1,1.1,5.9c.7,1.8,1.8,3.4,3,4.7,1.3,1.3,2.8,2.3,4.5,3s3.6,1.1,5.7,1.1,3.4-.2,4.8-.7,2.5-1,3.5-1.6c1.1-.7,2.1-1.5,2.9-2.4v-5.3h-4.6c-1.2,0-1.8-.6-1.8-1.8v-1.1c0-1.2.6-1.8,1.8-1.8h7.8c1.2,0,1.8.6,1.8,1.8v15.4c0,1.2-.6,1.8-1.8,1.8h-1.1c-1.2,0-1.8-.5-1.8-1.5v-2.6h-.1c-.8.9-1.8,1.7-3.1,2.3-1,.6-2.3,1.1-3.8,1.6s-3.3.7-5.3.7-5.2-.5-7.5-1.4c-2.3-1-4.4-2.3-6.1-4s-3.1-3.7-4.2-6.1c-1-2.4-1.5-5-1.5-7.8h.1Z"/>
      <path fill={c1} d="M422.6,193c0-1.2.6-1.8,1.8-1.8h10.6c1.9,0,3.4,0,4.5.2s2,.4,2.8.8c1.9.8,3.4,2.1,4.5,3.7,1.1,1.7,1.7,3.7,1.7,6.1s-.6,4.6-1.9,6.4-3,3.2-5.2,3.9h0c0,.2.2.4.3.5.2.3.5.7.8,1.3l7.1,12.5c.4.6.4,1.1.2,1.5-.2.4-.7.6-1.4.6h-2.2c-1,0-1.8-.4-2.2-1.2l-7.7-13.7h-8.4v13.2c0,1.2-.6,1.8-1.8,1.8h-1.8c-1.2,0-1.8-.6-1.8-1.8v-34h.1ZM436,209.3c2.2,0,3.9-.6,5.1-1.9,1.3-1.3,1.9-3,1.9-5.1s-.3-2.5-.9-3.6c-.6-1-1.5-1.8-2.8-2.3-.5-.2-1.1-.4-1.8-.5-.7-.1-1.6-.2-2.9-.2h-6.6v13.4h7.9v.2Z"/>
      <path fill={c1} d="M457.3,209.8c0-2.7.5-5.2,1.5-7.5s2.4-4.4,4.2-6.1,3.9-3.1,6.4-4c2.5-1,5.2-1.5,8.1-1.5s5.6.5,8.1,1.5,4.6,2.3,6.4,4,3.2,3.7,4.2,6.1,1.5,4.9,1.5,7.5-.5,5.3-1.5,7.7-2.4,4.5-4.2,6.2c-1.8,1.8-3.9,3.2-6.4,4.2s-5.2,1.5-8.1,1.5-5.6-.5-8.1-1.5-4.6-2.4-6.4-4.2-3.2-3.9-4.2-6.2-1.5-5-1.5-7.7ZM463,209.8c0,2.1.4,4,1.1,5.8s1.7,3.4,3,4.7,2.8,2.4,4.6,3.1c1.8.8,3.7,1.1,5.8,1.1s4-.4,5.8-1.1c1.8-.8,3.3-1.8,4.6-3.1s2.3-2.9,3-4.7,1.1-3.8,1.1-5.8-.4-3.9-1.1-5.7-1.7-3.3-3-4.5-2.8-2.3-4.6-3c-1.8-.7-3.7-1.1-5.8-1.1s-4,.4-5.8,1.1c-1.8.7-3.3,1.7-4.6,3-1.3,1.3-2.3,2.8-3,4.5-.7,1.8-1.1,3.6-1.1,5.7Z"/>
      <path fill={c1} d="M503.5,193.3c-.2-.6-.2-1.1,0-1.5.3-.4.7-.6,1.5-.6h2.1c1,0,1.7.5,2.1,1.4l9.3,25.1c.2.5.4,1.1.5,1.7.2.6.3,1.2.5,1.7,0,.6.3,1.2.5,1.8h0c.2-.6.4-1.2.5-1.8,0-.5.3-1.1.5-1.7.2-.6.3-1.2.5-1.7l9.4-25.1c.3-1,1-1.4,2.1-1.4h2.1c.7,0,1.2.2,1.5.6.3.4.3.9,0,1.5l-13.1,34.1c-.3,1-1,1.4-2.1,1.4h-2.7c-1,0-1.7-.5-2.1-1.4l-13.1-34.1h-.1Z"/>
      <path fill={c1} d="M545.2,193c0-1.2.6-1.8,1.8-1.8h19.2c1.2,0,1.8.6,1.8,1.8v1.1c0,1.2-.6,1.8-1.8,1.8h-15.6v11.7h12.3c1.2,0,1.8.6,1.8,1.8v1.1c0,1.2-.6,1.8-1.8,1.8h-12.3v12.1h16.5c1.2,0,1.8.6,1.8,1.8v1.1c0,1.2-.6,1.8-1.8,1.8h-20.1c-1.2,0-1.8-.6-1.8-1.8v-34.3Z"/>
      <path fill={c2} d="M596.2,192.8c0-.9.4-1.3,1.3-1.3h10.6c1.7,0,3.1,0,4.2.2,1.1.2,2.1.4,3,.8,1.9.9,3.3,2.1,4.3,3.7,1,1.6,1.5,3.5,1.5,5.6s-.7,4.8-2,6.6c-1.4,1.9-3.2,3.1-5.4,3.7h0c0,.2.2.4.4.7s.4.6.6.9l7.6,13.5c.3.5.3.9,0,1.1-.2.3-.5.4-1.1.4h-1.5c-.8,0-1.3-.3-1.6-.9l-8.4-14.8h-9.9v14.4c0,.9-.4,1.3-1.3,1.3h-1.2c-.9,0-1.3-.4-1.3-1.3v-34.7h.1ZM609.4,209.8c2.3,0,4.2-.7,5.6-2.1,1.4-1.4,2.1-3.3,2.1-5.7s-.4-2.8-1.1-4c-.7-1.2-1.7-2-3-2.6-.6-.2-1.3-.4-2.1-.5-.7-.1-1.8-.2-3.1-.2h-7.8v15h9.4Z"/>
      <path fill={c2} d="M633,192.8c0-.9.4-1.3,1.3-1.3h19.4c.9,0,1.4.4,1.4,1.3v.6c0,.9-.5,1.3-1.4,1.3h-16.9v13.6h13.5c.9,0,1.4.4,1.4,1.3v.7c0,.9-.5,1.3-1.4,1.3h-13.5v13.9h17.9c.9,0,1.4.4,1.4,1.3v.6c0,.9-.5,1.3-1.4,1.3h-20.4c-.9,0-1.3-.4-1.3-1.3v-34.7h0Z"/>
      <path fill={c2} d="M663.3,209.9c0-2.8.5-5.3,1.5-7.6s2.4-4.3,4.1-6c1.7-1.7,3.8-3,6.2-4s5-1.4,7.9-1.4,4.8.4,7.1,1.1c2.4.7,4.4,1.7,6.1,2.9.6.5.7,1.2.2,1.9l-.5.7c-.5.7-1.2.7-1.9.2-1.6-1-3.3-1.8-5.2-2.4-1.9-.6-3.8-.9-5.7-.9s-4.4.4-6.4,1.1-3.6,1.8-5,3.2-2.5,3-3.3,4.9-1.2,4-1.2,6.3.4,4.5,1.2,6.5,1.9,3.7,3.3,5.1,3.1,2.6,5.1,3.3c2,.8,4.1,1.2,6.4,1.2s4-.4,6.1-1.1c2-.7,3.9-1.7,5.6-3,.7-.5,1.3-.5,1.9.2l.5.6c.5.7.5,1.3,0,1.9-1.9,1.5-4.1,2.7-6.6,3.6-2.5.9-5,1.3-7.5,1.3s-5.6-.5-8-1.5-4.5-2.3-6.3-4.1c-1.8-1.7-3.1-3.8-4.1-6.2s-1.5-5-1.5-7.8h.1Z"/>
      <path fill={c2} d="M705,209.9c0-2.7.5-5.2,1.5-7.5s2.4-4.3,4.2-6.1c1.8-1.7,3.9-3.1,6.3-4,2.4-1,5.1-1.5,8-1.5s5.5.5,7.9,1.5,4.5,2.3,6.3,4,3.2,3.7,4.2,6.1c1,2.3,1.5,4.9,1.5,7.5s-.5,5.3-1.5,7.7-2.4,4.5-4.2,6.2c-1.8,1.8-3.9,3.1-6.3,4.1-2.4,1-5.1,1.5-7.9,1.5s-5.5-.5-7.9-1.5-4.5-2.4-6.3-4.1c-1.8-1.8-3.2-3.8-4.2-6.2s-1.5-5-1.5-7.7h0ZM709,209.9c0,2.3.4,4.4,1.2,6.4s1.9,3.7,3.3,5.1,3.1,2.6,5.1,3.4c2,.8,4.1,1.2,6.3,1.2s4.4-.4,6.3-1.2c2-.8,3.6-1.9,5.1-3.4,1.4-1.4,2.5-3.1,3.3-5.1s1.2-4.1,1.2-6.4-.4-4.3-1.2-6.2-1.9-3.6-3.3-4.9c-1.4-1.4-3.1-2.5-5.1-3.3s-4.1-1.2-6.3-1.2-4.4.4-6.4,1.2c-1.9.8-3.6,1.9-5.1,3.3-1.4,1.4-2.5,3-3.3,4.9s-1.2,4-1.2,6.2h.1Z"/>
      <path fill={c2} d="M751.2,193c-.4-1,0-1.5,1.1-1.5h1.3c.8,0,1.3.4,1.6,1.1l10.4,27.3c.3.7.5,1.5.8,2.5s.5,1.7.7,2.3h0c.2-.6.4-1.4.7-2.3.3-1,.5-1.8.8-2.5l10.5-27.3c.2-.7.7-1.1,1.5-1.1h1.3c1,0,1.4.5,1.1,1.5l-13.6,34.8c-.3.7-.8,1.1-1.6,1.1h-1.8c-.9,0-1.4-.4-1.5-1.1l-13.6-34.8h.2Z"/>
      <path fill={c2} d="M792.5,192.8c0-.9.4-1.3,1.3-1.3h19.4c.9,0,1.4.4,1.4,1.3v.6c0,.9-.5,1.3-1.4,1.3h-16.9v13.6h13.5c.9,0,1.4.4,1.4,1.3v.7c0,.9-.5,1.3-1.4,1.3h-13.5v13.9h17.9c.9,0,1.4.4,1.4,1.3v.6c0,.9-.5,1.3-1.4,1.3h-20.4c-.9,0-1.3-.4-1.3-1.3v-34.7h0Z"/>
      <path fill={c2} d="M826.2,192.8c0-.9.4-1.3,1.3-1.3h10.6c1.7,0,3.1,0,4.2.2,1.1.2,2.1.4,3,.8,1.9.9,3.3,2.1,4.3,3.7,1,1.6,1.5,3.5,1.5,5.6s-.7,4.8-2,6.6c-1.4,1.9-3.2,3.1-5.4,3.7h0c0,.2.2.4.4.7s.4.6.6.9l7.6,13.5c.3.5.3.9,0,1.1-.2.3-.5.4-1.1.4h-1.5c-.8,0-1.3-.3-1.6-.9l-8.4-14.8h-9.9v14.4c0,.9-.4,1.3-1.3,1.3h-1.2c-.9,0-1.3-.4-1.3-1.3v-34.7h.1ZM839.4,209.8c2.3,0,4.2-.7,5.6-2.1,1.4-1.4,2.1-3.3,2.1-5.7s-.4-2.8-1.1-4-1.7-2-3-2.6c-.6-.2-1.3-.4-2.1-.5-.7-.1-1.8-.2-3.1-.2h-7.8v15h9.4Z"/>
      <path fill={c2} d="M870.8,212.8l-12.3-19.8c-.3-.4-.4-.8-.2-1.1s.6-.5,1.1-.5h1.4c.7,0,1.2.3,1.6.9l7.8,12.7c.4.7.8,1.5,1.3,2.4.4.9.8,1.5,1.1,2.1h0c.3-.5.6-1.2,1.1-2.1.4-.9.9-1.6,1.3-2.4l7.8-12.7c.3-.6.9-.9,1.6-.9h1.5c.5,0,.9.2,1.1.5.2.3,0,.7,0,1.1l-12.3,19.8v14.7c0,.9-.5,1.3-1.4,1.3h-1.1c-.9,0-1.3-.4-1.3-1.3v-14.7h0Z"/>
    </svg>
  );
}

// ─── GLOBAL STYLES ──────────────────────────────────────────────────────────
export function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap');

      ::-webkit-scrollbar { width: 6px; }
      ::-webkit-scrollbar-track { background: ${B.dust}; }
      ::-webkit-scrollbar-thumb { background: ${B.butterscotch}; border-radius: 3px; }

      /* Hero background video (home page) — Louisville Ohio River sunset.
         Layered as: video (z:0) → coffee-tinted gradient overlay (z:1) → content (z:2).
         Overlay dims the video so warm sunset palette still shows through but text
         contrast is guaranteed. Reduced motion replaces video with the brand gradient. */
      .hero-section .hero-video {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 0;
        pointer-events: none;
      }
      .hero-section .hero-video-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(165deg, rgba(30, 14, 0, 0.55) 0%, rgba(46, 20, 0, 0.4) 45%, rgba(46, 20, 0, 0.28) 100%);
        z-index: 1;
        pointer-events: none;
      }
      @media (prefers-reduced-motion: reduce) {
        .hero-section .hero-video { display: none !important; }
        .hero-section .hero-video-overlay {
          background: linear-gradient(165deg, ${B.coffeeDark} 0%, ${B.coffee} 40%, ${B.butterscotch} 100%);
        }
      }

      /* Pulsing CTA — GPU-accelerated. Disabled for prefers-reduced-motion. */
      @keyframes gg-cta-pulse {
        0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(242, 209, 125, 0.55); }
        50%      { transform: scale(1.035); box-shadow: 0 0 0 14px rgba(242, 209, 125, 0); }
      }
      .gg-btn-pulse {
        animation: gg-cta-pulse 2.4s ease-in-out infinite;
        will-change: transform, box-shadow;
      }
      @media (prefers-reduced-motion: reduce) {
        .gg-btn-pulse { animation: none; }
      }

      a.gg-btn.nav-call {
        display: inline-flex;
        align-items: center;
        gap: 7px;
        padding: 8px 18px;
        font-size: 12px;
        border-radius: 6px;
        flex-shrink: 0;
        white-space: nowrap;
      }
      .nav-call-icon { flex-shrink: 0; }
      .nav-call-text-full { display: inline; }
      .nav-call-text-short { display: none; }
      /* On viewports below 1280px, swap full phone number for compact "Call".
         At 1122px (a common laptop width), 9 nav links + wordmark + full
         phone-number button doesn't quite fit — the compact button keeps
         the nav clean without wrapping. */
      @media (max-width: 1279px) {
        .nav-call-text-full { display: none; }
        .nav-call-text-short { display: inline; }
        a.gg-btn.nav-call { padding: 8px 14px; }
      }
      .nav-wordmark-compact-svg { display: none; align-items: center; }
      @media (max-width: 1199px) {
        .nav-wordmark-svg { display: none !important; }
        .nav-wordmark-compact-svg { display: inline-flex; }
      }

      .gg-card {
        background: ${B.white};
        border: 1px solid ${B.dust};
        border-radius: 14px;
        transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
      }
      .gg-card:hover {
        border-color: ${B.butterscotch}44;
        box-shadow: 0 8px 30px rgba(70,31,1,0.06);
        transform: translateY(-3px);
      }

      .gg-pill {
        display: inline-flex; align-items: center; gap: 5px;
        padding: 4px 12px; border-radius: 20px;
        font-size: 11px; font-weight: 600; letter-spacing: 0.04em;
      }

      .gg-section-label {
        font-size: 10px; font-weight: 700; letter-spacing: 0.14em;
        text-transform: uppercase; color: ${B.butterscotch};
        display: flex; align-items: center; gap: 12px;
      }
      .gg-section-label::after {
        content: ''; flex: 1; height: 1px;
        background: linear-gradient(to right, ${B.dust}, transparent);
      }

      .gg-btn {
        padding: 14px 36px; border-radius: 8px; border: 2px solid transparent;
        font-family: inherit; font-weight: 600; font-size: 14px;
        cursor: pointer; transition: all 0.25s; display: inline-block;
        text-decoration: none; text-align: center;
      }
      .gg-btn-primary { background: ${B.coffee}; color: ${B.white}; border-color: ${B.coffee}; }
      .gg-btn-primary:hover { background: ${B.butterscotch}; border-color: ${B.butterscotch}; color: ${B.white}; }
      .gg-btn-secondary { background: transparent; color: ${B.white}; border-color: rgba(255,255,255,0.5); }
      .gg-btn-secondary:hover { background: ${B.white}; color: ${B.coffee}; border-color: ${B.white}; }
      .gg-btn-light { background: ${B.white}; color: ${B.coffee}; border-color: ${B.white}; }
      .gg-btn-light:hover { background: ${B.dust}; border-color: ${B.dust}; }
      .gg-btn-outline { background: transparent; color: ${B.coffee}; border-color: ${B.coffee}; }
      .gg-btn-outline:hover { background: ${B.coffee}; color: ${B.white}; }

      .mono { font-family: 'JetBrains Mono', monospace; }

      .nav-link {
        padding: 8px 16px; color: ${B.coffee}; font-size: 13px; font-weight: 500;
        text-decoration: none; border-radius: 6px; transition: all 0.2s;
        letter-spacing: 0.01em;
      }
      .nav-link:hover { background: ${B.dust}; color: ${B.butterscotch}; }

      .faq-toggle {
        width: 100%; text-align: left; padding: 20px 24px; background: none;
        border: none; cursor: pointer; font-family: inherit; font-size: 15px;
        font-weight: 600; color: ${B.coffee}; display: flex; justify-content: space-between;
        align-items: center; transition: color 0.2s;
      }
      .faq-toggle:hover { color: ${B.butterscotch}; }

      /* NAV RESPONSIVE */
      .site-nav { height: 64px; padding: 0 24px; }
      .nav-wordmark svg { height: 44px; transition: height 0.2s; }
      .hamburger { display: none; }

      @media (max-width: 768px) {
        .desktop-only { display: none !important; }
        .hamburger { display: flex !important; }

        .site-nav { height: 56px !important; padding: 0 12px !important; }
        .nav-wordmark svg { height: 28px !important; }

        .hero-section { padding: 80px 20px 40px !important; min-height: auto !important; }
        .hero-section h1 { font-size: 1.5rem !important; line-height: 1.3 !important; margin-bottom: 14px !important; }
        .hero-section .hero-subtitle { font-size: 0.95rem !important; margin-bottom: 28px !important; }
        .hero-section .gg-pill { font-size: 10px !important; margin-bottom: 18px !important; }
        .hero-wordmark { margin-bottom: 20px !important; }
        .hero-wordmark svg { height: 28px !important; }
        .hero-stats { grid-template-columns: 1fr 1fr 1fr !important; }
        .hero-stats > div { padding: 12px 8px !important; }
        .hero-ctas { flex-direction: column !important; align-items: stretch !important; }
        .hero-ctas .gg-btn { width: 100% !important; }

        .section-pad { padding: 50px 16px !important; }
        .program-grid { grid-template-columns: 1fr !important; }
        .expect-grid { grid-template-columns: 1fr !important; }
        .therapy-grid { grid-template-columns: 1fr 1fr !important; }
        .resource-grid { grid-template-columns: 1fr !important; }
        .conditions-wrap { gap: 6px !important; }
        .conditions-wrap .gg-pill { font-size: 11px !important; padding: 6px 12px !important; }
        .insurance-wrap { gap: 6px !important; }
        .insurance-wrap > span { padding: 8px 12px !important; font-size: 12px !important; }

        .faq-toggle { padding: 16px 16px !important; font-size: 14px !important; }

        .contact-layout { grid-template-columns: 1fr !important; }
        .map-frame { height: 260px !important; min-height: 260px !important; }

        .cta-banner-section { padding: 50px 16px !important; }
        .cta-banner-section h2 { font-size: 1.4rem !important; }
        .cta-banner-ctas { flex-direction: column !important; align-items: stretch !important; }
        .cta-banner-ctas .gg-btn { width: 100% !important; }

        .site-footer { padding: 32px 16px 0 !important; }
        .footer-wordmark svg { height: 28px !important; }
        .footer-wordmark { margin-bottom: 20px !important; }
        .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 20px !important; }
        .footer-grid .footer-col-title { font-size: 11px !important; margin-bottom: 10px !important; }
        .footer-grid a, .footer-grid span, .footer-grid p { font-size: 12px !important; }
        .footer-grid .footer-contact-block p { font-size: 12px !important; line-height: 1.5 !important; margin-bottom: 8px !important; }
        .footer-bottom-bar { padding: 12px 16px !important; }
        .footer-bottom-inner { flex-direction: column !important; text-align: center !important; gap: 8px !important; }
        .footer-bottom-inner div { font-size: 11px !important; }
        .footer-bottom-inner span { font-size: 11px !important; }

        .mobile-menu { top: 56px !important; }
        .reviews-grid { grid-template-columns: 1fr !important; }
      }
      @media (max-width: 480px) {
        .nav-wordmark svg { height: 22px !important; }
        .hero-wordmark svg { height: 22px !important; }
        .hero-section h1 { font-size: 1.3rem !important; }
        .hero-stats { grid-template-columns: 1fr !important; }
        .therapy-grid { grid-template-columns: 1fr !important; }
        .footer-grid { grid-template-columns: 1fr !important; }
        .footer-wordmark svg { height: 22px !important; }
      }
      @media (min-width: 769px) {
        .hamburger { display: none !important; }
      }
    `}</style>
  );
}
