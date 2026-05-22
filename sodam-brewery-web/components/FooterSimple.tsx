"use client";

import React from "react";

export const FooterSimple = () => (
  <footer
    style={{
      background: "var(--bg)",
      borderTop: "1px solid rgba(209,196,189,0.3)",
      padding: "24px 48px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <span
        style={{
          fontFamily: "var(--font-serif-kr)",
          fontWeight: 700,
          fontSize: 14,
          color: "var(--ink)",
        }}
      >
        소담 양조장
      </span>
      <span style={{ color: "var(--line)" }}>|</span>
      <span
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 11,
          letterSpacing: ".06em",
          color: "var(--ink-mute)",
        }}
      >
        © 2026 Sodam Brewery
      </span>
    </div>
    <nav
      style={{
        display: "flex",
        gap: 32,
        fontFamily: "var(--font-sans)",
        fontSize: 11,
        letterSpacing: ".1em",
        color: "var(--ink-mute)",
      }}
    >
      <a style={{ cursor: "pointer" }}>인스타그램</a>
      <a style={{ cursor: "pointer" }}>개인정보 처리방침</a>
      <a style={{ cursor: "pointer" }}>이용약관</a>
    </nav>
  </footer>
);
