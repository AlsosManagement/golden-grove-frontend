import { useState, useEffect, useRef } from "react";

// ─── BRAND TOKENS (Golden Grove Recovery) ────────────────────────────────────
const B = {
  coffee:      "#461F01",
  coffeeDark:  "#2E1400",
  coffeeMid:   "#5A2E0A",
  coffeeBorder:"#6B3F1A",
  butterscotch:"#8C6934",
  butterLight: "#A88040",
  butterPale:  "#8C693422",
  gold:        "#F2D17D",
  goldPale:    "#F2D17D18",
  dust:        "#EFE2C8",
  dustDark:    "#D9C9A8",
  white:       "#FFFFFF",
  offWhite:    "#FAF7F2",
  black:       "#1A1A1A",
  gray:        "#6B6B6B",
  grayLight:   "#9A9A9A",
  green:       "#2D7A50",
  greenLight:  "#3D9966",
  red:         "#C0392B",
  amber:       "#D4880F",
};

// ─── SITE DATA ───────────────────────────────────────────────────────────────
const SITE = {
  name: "Golden Grove Recovery",
  tagline: "Support that meets you where you are — right here in Louisville.",
  phone: "(502) 610-4829",
  phoneTel: "+15026104829",
  address: "4418 Malcolm Ave, Louisville, KY 40211",
  email: "info@goldengroverecovery.com",
  parent: "Alsos Behavioral Health",
  parentUrl: "https://alsosbehavioralhealth.com",
};

const PROGRAMS = [
  {
    title: "Residential Treatment",
    duration: "21-28 Days · 24/7 Support",
    desc: "Intensive, round-the-clock treatment in a supportive community setting. Ideal for those beginning recovery or needing comprehensive intervention.",
    features: [
      "Daily individual therapy (1-2 hrs/week)",
      "30+ hours weekly group therapy",
      "Family sessions (1-2 hrs/week)",
      "Medication-assisted treatment available",
      "Meals and accommodation included",
      "Trauma-informed care",
    ],
  },
  {
    title: "Partial Hospitalization (PHP)",
    duration: "5-6 Days/Week · Daytime",
    desc: "A bridge between residential and outpatient care. Structured treatment during the day while living at home, maintaining employment, and strengthening family connections.",
    features: [
      "6-8 hour daily sessions",
      "30+ hours weekly programming",
      "Individual and group therapy",
      "Evening and weekend flexibility",
      "Family involvement sessions",
      "Relapse prevention focus",
    ],
  },
];

const EXPECT = [
  { title: "Comprehensive Assessment", desc: "Thorough evaluation of medical history, mental health, substance use patterns, and life circumstances to create a personalized treatment plan." },
  { title: "Evidence-Based Treatment", desc: "Proven approaches including CBT, DBT, and trauma-informed care grounded in the latest clinical research and best practices." },
  { title: "Dual Diagnosis Expertise", desc: "Integrated treatment for co-occurring addiction and mental health conditions simultaneously for better long-term outcomes." },
  { title: "Recovery Community", desc: "Connect with others on similar paths through group therapy, shared activities, and a supportive environment." },
  { title: "Holistic Wellness", desc: "Yoga, art therapy, music therapy, breathwork, and meditative practices integrated into your daily experience." },
  { title: "Aftercare Planning", desc: "Comprehensive discharge planning with outpatient referrals, support groups, and relapse prevention strategies." },
];

const THERAPIES = [
  { cat: "Psychotherapy", items: ["Individual Therapy", "Group Therapy (30+ hrs/wk)", "Family Therapy", "CBT", "DBT"] },
  { cat: "Somatic & Trauma", items: ["EMDR", "Trauma-Informed Care", "Life Skills Training", "Relapse Prevention", "Mindfulness Practices"] },
  { cat: "Holistic Wellness", items: ["Yoga Therapy", "Art Therapy", "Music Therapy", "Breathwork & Meditation", "Fitness & Nutrition"] },
  { cat: "Recovery Models", items: ["12-Step Facilitation", "SMART Recovery", "Refuge Recovery", "MAT", "Recovery Support Services"] },
];

const CONDITIONS = [
  "ADHD", "Anxiety Disorders", "Bipolar Disorder", "Depression", "Eating Disorders",
  "OCD", "Personality Disorders", "PTSD", "Psychosis", "Schizoaffective Disorder",
  "Self-Harm", "Sleep Disorders", "Suicidal Ideation",
];

const INSURANCE = [
  "Aetna", "Aetna Better Health of Kentucky", "Anthem BCBS", "Behavioral Health Systems",
  "CareSource", "Cigna / Evernorth", "Humana Medicaid", "Kentucky Medicaid",
  "Magellan", "Passport by Molina", "TRICARE East", "Optum / UHC", "United Behavioral Health",
];

const RESOURCES = [
  { title: "Alcohol Addiction", desc: "Understanding alcohol use disorder, signs of dependence, and evidence-based treatment." },
  { title: "Opioid & Heroin Addiction", desc: "Opioid addiction, fentanyl risks, MAT options, and recovery pathways." },
  { title: "Drug Rehab in Louisville", desc: "Why Golden Grove Recovery is Louisville's trusted choice for addiction treatment." },
  { title: "All Resources", desc: "Guides for cocaine, benzos, meth, marijuana, and other substances." },
];

const FAQS = [
  { q: "What is the first step in getting help?", a: "Call us at (502) 610-4829 or complete our online assessment. Our admissions team will discuss your situation, insurance, and goals. No judgment — just compassionate professionals ready to help." },
  { q: "How long does treatment take?", a: "Residential typically lasts 21-28 days. PHP can range 4-8 weeks. We emphasize quality recovery over arbitrary timelines — your treatment plan is customized and adjusted based on progress." },
  { q: "Can I use medication-assisted treatment?", a: "Yes. We offer MAT with buprenorphine, naltrexone, Suboxone, and Brixadi. MAT reduces withdrawal and cravings so you can engage fully in therapy." },
  { q: "What happens after treatment ends?", a: "Before discharge, we connect you with outpatient providers, recovery groups, and community resources. Your success doesn't end when treatment does." },
  { q: "Do you accept visitors?", a: "Family involvement strengthens recovery. We offer scheduled family sessions and visitation to help repair relationships and build support systems." },
  { q: "What about affordability?", a: "We accept most major insurance plans and Kentucky Medicaid. Our financial team helps maximize your benefits. Don't let cost prevent you from seeking help." },
];

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Therapy", href: "#therapy" },
  { label: "Insurance", href: "#insurance" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

// ─── WORDMARK SVG ────────────────────────────────────────────────────────────
function Wordmark({ height = 40, variant = "color" }) {
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

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function useOnScreen(threshold = 0.15) {
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

function FadeIn({ children, delay = 0, style = {} }) {
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

// ─── MAIN APP ────────────────────────────────────────────────────────────────
export default function GoldenGroveRecovery() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", background: B.offWhite, color: B.black, minHeight: "100vh" }}>
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

        @keyframes reviewSlide {
          from { opacity: 0; transform: translateY(12px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .reviews-widget button:focus { outline: none; }

        /* ── NAV RESPONSIVE ── */
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
          .reviews-widget { bottom: 16px !important; right: 16px !important; left: 16px !important; align-items: stretch !important; }
          .reviews-widget > div:first-child { width: 100% !important; }
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

      {/* ═══ NAV ═══════════════════════════════════════════════════════════════ */}
      <nav className="site-nav" style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.92)",
        backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
        borderBottom: `1px solid ${scrolled ? B.dust : "transparent"}`,
        transition: "all 0.3s",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <a href="#hero" className="nav-wordmark" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <Wordmark height={44} variant="color" />
        </a>

        <div className="desktop-only" style={{ display: "flex", alignItems: "center", gap: 2 }}>
          {NAV_ITEMS.map((n) => (
            <a key={n.label} href={n.href} className="nav-link">{n.label}</a>
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
              transform: mobileOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <span style={{ width: 22, height: 2, background: B.coffee, transition: "all 0.3s",
              opacity: mobileOpen ? 0 : 1 }} />
            <span style={{ width: 22, height: 2, background: B.coffee, transition: "all 0.3s",
              transform: mobileOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
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
            <a key={n.label} href={n.href} onClick={closeMobile}
               style={{ padding: "14px 0", fontSize: 18, fontWeight: 600, color: B.coffee,
                 textDecoration: "none", borderBottom: `1px solid ${B.dust}` }}>
              {n.label}
            </a>
          ))}
          <a href={`tel:${SITE.phoneTel}`} className="gg-btn gg-btn-primary"
             style={{ marginTop: 16, textAlign: "center" }} onClick={closeMobile}>
            Call {SITE.phone}
          </a>
        </div>
      )}

      {/* ═══ HERO ══════════════════════════════════════════════════════════════ */}
      <section id="hero" className="hero-section" style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center", textAlign: "center",
        padding: "120px 24px 80px",
        background: `linear-gradient(165deg, ${B.coffeeDark} 0%, ${B.coffee} 40%, ${B.butterscotch} 100%)`,
        color: B.white, position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: "radial-gradient(circle at 25% 25%, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />

        <FadeIn style={{ position: "relative", zIndex: 1, maxWidth: 800 }}>
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
            <a href={`tel:${SITE.phoneTel}`} className="gg-btn gg-btn-light">Call {SITE.phone}</a>
            <a href="#contact" className="gg-btn gg-btn-secondary">Start Your Assessment</a>
          </div>
        </FadeIn>

        <FadeIn delay={0.3} style={{ position: "relative", zIndex: 1, marginTop: 60, width: "100%", maxWidth: 700 }}>
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

      {/* ═══ PROGRAMS ══════════════════════════════════════════════════════════ */}
      <section id="programs" className="section-pad" style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
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
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ═══ WHAT TO EXPECT ════════════════════════════════════════════════════ */}
      <section id="about" className="section-pad" style={{ padding: "80px 24px", background: B.white }}>
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
            {EXPECT.map((e, i) => (
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
        </div>
      </section>

      {/* ═══ THERAPY MODALITIES ════════════════════════════════════════════════ */}
      <section id="therapy" className="section-pad" style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <div className="gg-section-label" style={{ marginBottom: 8 }}>Clinical Approach</div>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: B.coffee, letterSpacing: "-0.02em", marginBottom: 8 }}>
            Therapy & Treatment Modalities
          </h2>
          <p style={{ fontSize: 15, color: B.gray, marginBottom: 50, maxWidth: 540 }}>
            Diverse evidence-based therapies and holistic practices tailored to support healing.
          </p>
        </FadeIn>

        <div className="therapy-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: 16 }}>
          {THERAPIES.map((t, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="gg-card" style={{ padding: "24px 22px", height: "100%" }}>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: B.butterscotch, letterSpacing: "0.04em",
                  textTransform: "uppercase", marginBottom: 16 }}>{t.cat}</h3>
                {t.items.map((item, j) => (
                  <div key={j} style={{
                    padding: "9px 0", fontSize: 13, color: B.gray,
                    borderBottom: j < t.items.length - 1 ? `1px solid ${B.offWhite}` : "none",
                  }}>{item}</div>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ═══ CONDITIONS ════════════════════════════════════════════════════════ */}
      <section className="section-pad" style={{ padding: "60px 24px", background: B.white }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <div className="gg-section-label" style={{ marginBottom: 8 }}>Dual Diagnosis</div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: B.coffee, letterSpacing: "-0.02em", marginBottom: 8 }}>
              Mental Health Conditions We Treat
            </h2>
            <p style={{ fontSize: 15, color: B.gray, marginBottom: 32, maxWidth: 540 }}>
              Integrated approach addressing addiction alongside co-occurring mental health conditions.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="conditions-wrap" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {CONDITIONS.map((c, i) => (
                <span key={i} className="gg-pill" style={{
                  background: B.coffee, color: B.white, padding: "8px 16px",
                  fontSize: 12, borderRadius: 6,
                }}>{c}</span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ RESOURCES ═════════════════════════════════════════════════════════ */}
      <section className="section-pad" style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <div className="gg-section-label" style={{ marginBottom: 8 }}>Education</div>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: B.coffee, letterSpacing: "-0.02em", marginBottom: 8 }}>
            Addiction Resources
          </h2>
          <p style={{ fontSize: 15, color: B.gray, marginBottom: 40, maxWidth: 540 }}>
            Knowledge is power in recovery. Explore comprehensive guides.
          </p>
        </FadeIn>
        <div className="resource-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: 14 }}>
          {RESOURCES.map((r, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="gg-card" style={{ padding: "24px 22px", cursor: "pointer", height: "100%" }}>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: B.coffee, marginBottom: 8 }}>{r.title}</h4>
                <p style={{ fontSize: 13, color: B.gray, lineHeight: 1.6, marginBottom: 12 }}>{r.desc}</p>
                <span style={{ fontSize: 12, fontWeight: 600, color: B.butterscotch }}>Read more &#8594;</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ═══ INSURANCE ═════════════════════════════════════════════════════════ */}
      <section id="insurance" className="section-pad" style={{ padding: "60px 24px", background: B.white }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <div className="gg-section-label" style={{ marginBottom: 8 }}>Coverage</div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: B.coffee, letterSpacing: "-0.02em", marginBottom: 8 }}>
              Insurance We Accept
            </h2>
            <p style={{ fontSize: 15, color: B.gray, marginBottom: 32, maxWidth: 540 }}>
              We work with most major insurance providers. Contact us to verify your coverage.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="insurance-wrap" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {INSURANCE.map((ins, i) => (
                <span key={i} style={{
                  padding: "10px 18px", borderRadius: 8, fontSize: 13, fontWeight: 500,
                  background: B.offWhite, border: `1px solid ${B.dust}`, color: B.coffee,
                  transition: "all 0.2s",
                }}>{ins}</span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ FAQ ═══════════════════════════════════════════════════════════════ */}
      <section id="faq" className="section-pad" style={{ padding: "80px 24px", maxWidth: 800, margin: "0 auto" }}>
        <FadeIn>
          <div className="gg-section-label" style={{ marginBottom: 8 }}>Common Questions</div>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: B.coffee, letterSpacing: "-0.02em", marginBottom: 40 }}>
            Frequently Asked Questions
          </h2>
        </FadeIn>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {FAQS.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="gg-card" style={{ overflow: "hidden", borderRadius: 12 }}>
                <button className="faq-toggle" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span style={{
                    fontSize: 18, fontWeight: 300, color: B.butterscotch,
                    transition: "transform 0.3s",
                    transform: activeFaq === i ? "rotate(45deg)" : "none",
                  }}>+</span>
                </button>
                <div style={{
                  maxHeight: activeFaq === i ? 300 : 0,
                  overflow: "hidden", transition: "max-height 0.4s ease",
                }}>
                  <p style={{ padding: "0 24px 20px", fontSize: 14, color: B.gray, lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ═══ CONTACT & LOCATION ══════════════════════════════════════════════ */}
      <section id="contact" className="section-pad" style={{ padding: "80px 24px", background: B.white }}>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.3983387843036!2d-85.7913178!3d38.1771149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886913f4bb47cce1%3A0x3b1eb48eee1eb461!2sGolden%20Grove%20Recovery!5e1!3m2!1sen!2sus!4v1775076603679!5m2!1sen!2sus"
                  className="map-frame" width="100%" height="100%" style={{ border: 0, display: "block", minHeight: 400 }} allowFullScreen="" loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="Golden Grove Recovery Location"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ CTA BANNER ════════════════════════════════════════════════════════ */}
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
            <a href="#contact" className="gg-btn gg-btn-secondary">Schedule Assessment</a>
          </div>
        </FadeIn>
      </section>

      {/* ═══ FOOTER ════════════════════════════════════════════════════════════ */}
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
              {["About Us", "What to Expect", "FAQ", "Contact Us", "Insurance"].map((l, i) => (
                <div key={i} style={{ marginBottom: 8 }}>
                  <a href={`#${l.toLowerCase().replace(/\s/g, "")}`}
                     style={{ color: B.dust, fontSize: 13, textDecoration: "none", transition: "color 0.2s" }}
                     onMouseEnter={(e) => e.target.style.color = B.gold}
                     onMouseLeave={(e) => e.target.style.color = B.dust}>{l}</a>
                </div>
              ))}
            </div>
            <div>
              <div className="footer-col-title" style={{ fontSize: 12, fontWeight: 700, color: B.gold, marginBottom: 16,
                letterSpacing: "0.06em", textTransform: "uppercase" }}>Programs</div>
              {["Residential Treatment", "PHP", "Co-Occurring Disorders", "MAT"].map((l, i) => (
                <div key={i} style={{ marginBottom: 8 }}>
                  <a href="#programs" style={{ color: B.dust, fontSize: 13, textDecoration: "none", transition: "color 0.2s" }}
                     onMouseEnter={(e) => e.target.style.color = B.gold}
                     onMouseLeave={(e) => e.target.style.color = B.dust}>{l}</a>
                </div>
              ))}
            </div>
            <div>
              <div className="footer-col-title" style={{ fontSize: 12, fontWeight: 700, color: B.gold, marginBottom: 16,
                letterSpacing: "0.06em", textTransform: "uppercase" }}>Resources</div>
              {["Alcohol Addiction", "Opioid Addiction", "Drug Rehab Louisville", "All Resources"].map((l, i) => (
                <div key={i} style={{ marginBottom: 8 }}>
                  <span style={{ color: B.dust, fontSize: 13, cursor: "pointer" }}>{l}</span>
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

      {/* ═══ FLOATING GOOGLE REVIEWS WIDGET ════════════════════════════════════ */}
      <div className="reviews-widget" style={{
        position: "fixed", bottom: 24, right: 24, zIndex: 900,
        display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8,
      }}>
        {/* Expanded panel */}
        {showReviews && (
          <div style={{
            background: B.white, borderRadius: 14, border: `1px solid ${B.dust}`,
            boxShadow: "0 12px 40px rgba(0,0,0,0.12)", width: 320, maxHeight: 420,
            overflow: "hidden", animation: "reviewSlide 0.3s ease",
          }}>
            <div style={{
              background: `linear-gradient(135deg, ${B.coffee}, ${B.butterscotch})`,
              padding: "16px 20px", color: B.white, display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700 }}>Patient Reviews</div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 4 }}>
                  <span style={{ fontSize: 13, color: B.gold }}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.6)" }}>5.0 on Google</span>
                </div>
              </div>
              <button onClick={() => setShowReviews(false)} style={{
                background: "none", border: "none", color: "rgba(255,255,255,0.6)",
                fontSize: 18, cursor: "pointer", padding: 4,
              }}>&times;</button>
            </div>
            <div style={{ padding: "16px 20px", maxHeight: 320, overflowY: "auto" }}>
              {[
                { name: "Sarah M.", text: "Golden Grove saved my life. The staff treated me with dignity from day one. I finally feel like myself again.", time: "2 weeks ago" },
                { name: "James R.", text: "The residential program gave me the structure I needed. The therapists genuinely care about your recovery.", time: "1 month ago" },
                { name: "Maria L.", text: "I was nervous about treatment, but the team made me feel safe and supported. Highly recommend.", time: "1 month ago" },
              ].map((r, i) => (
                <div key={i} style={{
                  padding: "14px 0",
                  borderBottom: i < 2 ? `1px solid ${B.offWhite}` : "none",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{
                        width: 28, height: 28, borderRadius: "50%",
                        background: `linear-gradient(135deg, ${B.coffee}, ${B.butterscotch})`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 11, fontWeight: 700, color: B.white,
                      }}>{r.name[0]}</div>
                      <span style={{ fontSize: 13, fontWeight: 600, color: B.coffee }}>{r.name}</span>
                    </div>
                    <span style={{ fontSize: 10, color: B.grayLight }}>{r.time}</span>
                  </div>
                  <div style={{ fontSize: 11, color: B.gold, marginBottom: 4 }}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                  <p style={{ fontSize: 12.5, color: B.gray, lineHeight: 1.6, margin: 0 }}>{r.text}</p>
                </div>
              ))}
              <a href="https://www.google.com/maps/place/Golden+Grove+Recovery/@38.1771149,-85.7913178,17z/" target="_blank" rel="noopener noreferrer"
                 style={{
                   display: "block", textAlign: "center", padding: "12px 0", marginTop: 8,
                   fontSize: 12, fontWeight: 600, color: B.butterscotch, textDecoration: "none",
                 }}>
                View all reviews on Google &#8594;
              </a>
            </div>
          </div>
        )}

        {/* Floating trigger button */}
        <button onClick={() => setShowReviews(!showReviews)} style={{
          background: B.coffee, color: B.white, border: "none",
          borderRadius: 50, padding: "12px 20px",
          display: "flex", alignItems: "center", gap: 8,
          cursor: "pointer", boxShadow: "0 4px 20px rgba(70,31,1,0.25)",
          transition: "all 0.25s", fontFamily: "inherit", fontSize: 13, fontWeight: 600,
        }}
          onMouseEnter={(e) => { e.currentTarget.style.background = B.butterscotch; e.currentTarget.style.transform = "scale(1.05)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = B.coffee; e.currentTarget.style.transform = "scale(1)"; }}
        >
          <span style={{ fontSize: 16, color: B.gold }}>&#9733;</span>
          <span>Reviews</span>
          <span style={{
            background: B.gold, color: B.coffee, fontSize: 11, fontWeight: 800,
            padding: "2px 7px", borderRadius: 10,
          }}>5.0</span>
        </button>
      </div>
    </div>
  );
}
