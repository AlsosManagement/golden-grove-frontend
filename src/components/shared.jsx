import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { B } from "../data";

// ─── SCROLL TO TOP ON ROUTE CHANGE ──────────────────────────────────────────
export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

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

// ─── WORDMARK SVG ────────────────────────────────────────────────────────────
export function Wordmark({ height = 40, variant = "color" }) {
  const c1 = variant === "white" ? "#FFFFFF" : "#462001";
  const c2 = variant === "white" ? "rgba(255,255,255,0.7)" : "#c79a56";
  return (
    <svg height={height} viewBox="100 185 790 50" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
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
