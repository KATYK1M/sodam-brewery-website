"use client";
import React from "react";
import { Eyebrow } from "../common";

const serifKR = "var(--font-serif-kr)";
const serifEN = "var(--font-serif-en)";
const sans = "var(--font-sans)";

const HomeBrewing = () => (
  <section
    style={{
      padding: "160px 48px 128px",
      background: "var(--bg)",
      position: "relative",
    }}
  >
    <div
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        textAlign: "center",
        marginBottom: 96,
      }}
    >
      <Eyebrow style={{ marginBottom: 26 }}>SAMYANG-JU · 三釀酒</Eyebrow>
      <h2
        style={{
          fontFamily: serifKR,
          fontSize: 44,
          lineHeight: 1.25,
          color: "var(--ink)",
          margin: 0,
          letterSpacing: "-0.02em",
          fontWeight: 500,
        }}
      >
        소담의 모든 술은{" "}
        <span style={{ color: "var(--accent-point)", fontWeight: 500 }}>
          &lsquo;삼양주&rsquo;
        </span>
        로 빚어집니다
      </h2>
      <div
        style={{
          marginTop: 18,
          fontFamily: sans,
          fontWeight: 500,
          fontSize: 12,
          letterSpacing: ".32em",
          color: "var(--ink-mute)",
        }}
      >
        삼양주만의 깊이
      </div>
    </div>
    <div style={{ maxWidth: 820, margin: "0 auto" }}>
      <div style={{ marginBottom: 48 }}>
        <h3
          style={{
            fontFamily: serifKR,
            fontSize: 30,
            color: "var(--accent-point)",
            margin: "0 0 22px",
            letterSpacing: "-0.02em",
            fontWeight: 400,
          }}
        >
          삼양주
        </h3>
        <p
          style={{
            fontFamily: sans,
            fontWeight: 700,
            fontSize: 16,
            lineHeight: 1.95,
            color: "var(--ink-2)",
            margin: 0,
          }}
        >
          세 번에 걸쳐 빚는 술로, 밑술에 덧술을 두 번 더하여 발효 기간이 길고
          맛과 향이 훨씬 깊고 풍부합니다.
        </p>
      </div>
      <div style={{ marginBottom: 48 }}>
        <h3
          style={{
            fontFamily: serifKR,
            fontSize: 26,
            color: "var(--accent-point)",
            margin: "0 0 32px",
            letterSpacing: "-0.02em",
            fontWeight: 500,
          }}
        >
          삼양주의 특징
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {[
            {
              t: "깊고 풍부한 향",
              b: "단양주는 누룩 향(일명 누룩 잡내)이 강하게 남을 수 있지만, 삼양주는 여러 번의 덧술 과정을 거치며 누룩의 향이 꽃향기나 과일향으로 변합니다. 인공 감미료 없이도 잘 익은 사과나 참외 같은 천연의 풍미가 살아납니다.",
            },
            {
              t: "부드러운 목넘김과 감칠맛",
              b: "세 번에 걸쳐 전분(쌀)을 공급하기 때문에 미생물이 충분히 활동하여 아미노산과 당분이 풍부해집니다. 이 과정에서 '바디감'이라 불리는 묵직하고 쫀득한 질감이 생기며, 뒷맛이 아주 깔끔합니다.",
            },
            {
              t: "높은 발효 안정성",
              b: "밑술에서 효모를 폭발적으로 증식시킨 뒤 두 번의 덧술을 거치기 때문에, 유해균이 침입할 틈이 적습니다. 덕분에 술이 쉴 확률이 낮고, 시간이 지날수록 맛이 깊어지는 '숙성'의 묘미를 즐길 수 있습니다.",
            },
          ].map((c) => (
            <div key={c.t}>
              <div
                style={{
                  fontFamily: sans,
                  fontWeight: 700,
                  fontSize: 15,
                  color: "var(--ink)",
                  marginBottom: 12,
                  letterSpacing: "-0.01em",
                }}
              >
                {c.t}
              </div>
              <p
                style={{
                  fontFamily: sans,
                  fontWeight: 400,
                  fontSize: 14.5,
                  lineHeight: 1.95,
                  color: "var(--ink-3)",
                  margin: 0,
                }}
              >
                {c.b}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginBottom: 48 }}>
        <h3
          style={{
            fontFamily: serifKR,
            fontSize: 26,
            color: "var(--accent-point)",
            margin: "0 0 22px",
            letterSpacing: "-0.02em",
            fontWeight: 500,
          }}
        >
          왜 삼양주가 특별할까?
        </h3>
        <p
          style={{
            fontFamily: sans,
            fontWeight: 400,
            fontSize: 14.5,
            lineHeight: 1.95,
            color: "var(--ink-3)",
            margin: "0 0 28px",
          }}
        >
          삼양주는 단순한 술을 넘어{" "}
          <strong style={{ color: "var(--ink)" }}>
            &ldquo;기다림의 미학&rdquo;
          </strong>
          이 담긴 술입니다.
        </p>
        <ol
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 0 32px",
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          {[
            { k: "밑술", d: "효모를 건강하게 키우는 기초 작업" },
            {
              k: "1차 덧술",
              d: "효모의 세력을 확장하고 알코올 도수를 올리는 작업",
            },
            { k: "2차 덧술", d: "술의 양을 늘리고 맛과 향을 완성하는 작업" },
          ].map((s, i) => (
            <li
              key={s.k}
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: 18,
                alignItems: "baseline",
              }}
            >
              <span
                style={{
                  fontFamily: serifEN,
                  fontWeight: 500,
                  fontSize: 14,
                  color: "var(--accent-point)",
                  minWidth: 24,
                  paddingTop: 2,
                }}
              >
                {i + 1}.
              </span>
              <span
                style={{
                  fontFamily: sans,
                  fontSize: 14.5,
                  lineHeight: 1.7,
                  color: "var(--ink-3)",
                }}
              >
                <strong style={{ color: "var(--ink)", fontWeight: 700 }}>
                  {s.k}
                </strong>
                : {s.d}
              </span>
            </li>
          ))}
        </ol>
        <p
          style={{
            fontFamily: sans,
            fontWeight: 400,
            fontSize: 14.5,
            lineHeight: 1.95,
            color: "var(--ink-3)",
            margin: 0,
          }}
        >
          이 과정을 거치면 쌀의 전분이 완전히 분해되어{" "}
          <strong style={{ color: "var(--ink)", fontWeight: 700 }}>
            알코올 도수는 높아지되
          </strong>
          , 마실 때는 알코올의 타격감보다{" "}
          <strong style={{ color: "var(--ink)", fontWeight: 700 }}>
            곡물의 단맛과 부드러움
          </strong>
          이 먼저 느껴집니다. &ldquo;도수는 높은데 독하지 않다&rdquo;는 느낌을
          주는 것이 삼양주만의 가장 큰 매력입니다.
        </p>
      </div>
    </div>
    <div
      style={{
        maxWidth: 820,
        margin: "0 auto",
        background: "var(--surface-cream-20)",
        border: "1px solid var(--surface-cream-50)",
        padding: "40px 52px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: serifKR,
          fontWeight: 400,
          fontSize: 18,
          lineHeight: 1.75,
          color: "var(--ink)",
          margin: 0,
          textAlign: "center",
        }}
      >
        &ldquo;인공적인 첨가물 없이도 쌀 자체에서 나오는 천연의 단맛과 과실향이
        극대화되며,<br />숙성될수록 부드러운 목넘김과 깊은 여운을 선사합니다.&rdquo;
      </p>
    </div>
  </section>
);

export default HomeBrewing;
