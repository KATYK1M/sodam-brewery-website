"use client";
import React from "react";
import { Eyebrow } from "../common";

const serifKR = "var(--font-serif-kr)";
const sans = "var(--font-sans)";

export const Newsletter = () => (
  <section
    style={{
      padding: "112px 32px",
      background: "var(--surface-2)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: 20,
      position: "relative",
      overflow: "hidden",
    }}
  >
    <svg
      width="36"
      height="28"
      viewBox="0 0 40 30"
      fill="none"
      stroke="var(--ink-3)"
      strokeWidth="1.2"
      strokeLinejoin="round"
      strokeLinecap="round"
      aria-hidden="true"
      style={{ opacity: 0.85 }}
    >
      <rect x="2" y="3" width="36" height="24" rx="1" />
      <path d="M2 6L20 18L38 6" />
      <path d="M2 27L15 15" />
      <path d="M38 27L25 15" />
    </svg>
    <Eyebrow>NEWSLETTER</Eyebrow>
    <h2
      style={{
        fontFamily: serifKR,
        fontWeight: 400,
        fontSize: 32,
        color: "var(--ink)",
        margin: 0,
      }}
    >
      소담의 새로운 한 잔, 가장 먼저
    </h2>
    <p
      style={{
        fontFamily: sans,
        fontSize: 14,
        color: "var(--ink-mute)",
        margin: 0,
        maxWidth: 440,
        lineHeight: 1.7,
      }}
    >
      신제품과 양조장의 이벤트 소식을 가장 먼저 전해드립니다.
      <br />
      소담의 이야기를 천천히 함께 따라가 보세요.
    </p>
    <form
      style={{
        marginTop: 20,
        display: "flex",
        width: 480,
        maxWidth: "100%",
        borderBottom: "1px solid var(--line)",
      }}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="Your email address"
        style={{
          flex: 1,
          border: 0,
          background: "transparent",
          padding: "14px 6px",
          fontFamily: sans,
          fontSize: 14,
          color: "var(--ink)",
          outline: 0,
        }}
      />
      <button
        style={{
          background: "transparent",
          color: "var(--ink)",
          border: 0,
          padding: "0 12px",
          fontFamily: sans,
          fontWeight: 700,
          fontSize: 10,
          letterSpacing: ".22em",
          cursor: "pointer",
        }}
      >
        SUBSCRIBE →
      </button>
    </form>
  </section>
);
