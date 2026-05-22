"use client";
import React from "react";
import { Eyebrow } from "../common";

const sans = "var(--font-sans)";

export const PROC_STEPS = [
  {
    n: "01",
    t: "엄선된 쌀",
    img: "/assets/rice.jpeg",
    body: "품질 좋은 평택 지역 쌀을 엄선하는 것에서 소담의 술 빚기가 시작됩니다. 잡미 없는 깔끔한 첫맛을 위해 쌀을 씻는 세미 과정에 가장 많은 정성을 들이며, 씻어낸 쌀은 긴 시간 동안 충분히 일숙침지합니다. 쌀알 속까지 수분을 고르게 전달하는 이 기다림은 고두밥을 최상의 상태로 만들어 술의 담백한 베이스를 완성합니다.",
  },
  {
    n: "02",
    t: "전통 누룩",
    img: "/assets/rice.jpeg",
    body: "전통의 방식에 과학적 접근을 더해 철저한 시간 엄수와 데이터 관리를 시행합니다. 모든 주조 공정은 정해진 매뉴얼에 따라 오차 없이 진행되며, 매일 기록되는 양조 데이터는 소담만의 일관된 품질을 유지하는 밑거름이 됩니다.",
  },
  {
    n: "03",
    t: "옹기 숙성",
    img: "/assets/rice.jpeg",
    body: "술은 살아있는 미생물이 빚어내는 예술이기에, 1°C의 미세한 온도 변화까지 세심하게 제어합니다. 외부 환경에 민감한 술의 특성을 고려하여 매일 품온과 향을 직접 체크하고 발효 환경을 최적화합니다. 정밀한 온도 조절과 정성이 깃든 관리를 통해 소담 양조장만의 깊고 풍부한 향과 완성도 높은 풍미가 비로소 완성됩니다.",
  },
];

const HomeAProcess = () => (
  <section
    id="section-process"
    style={{
      position: "relative",
      padding: "144px 32px 64px",
      overflow: "hidden",
      background: "var(--bg)",
    }}
  >
    <div
      style={{ position: "relative", textAlign: "center", marginBottom: 96 }}
    >
      <Eyebrow style={{ marginBottom: 32 }}>소담의 철학</Eyebrow>
      <h2
        style={{
          fontFamily: "var(--font-serif-kr)",
          fontWeight: 700,
          fontSize: 40,
          color: "var(--ink)",
          margin: 0,
        }}
      >
        빚는 과정
      </h2>
    </div>
    <div
      style={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 56,
        maxWidth: 1152,
        margin: "0 auto",
      }}
    >
      {PROC_STEPS.map((s, i) => (
        <div
          key={s.n}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            paddingTop: i * 56,
          }}
        >
          <div
            style={{
              width: "100%",
              aspectRatio: "341/420",
              background: `url(${s.img}) center/cover no-repeat`,
            }}
          />
          <div
            style={{
              paddingBottom: 16,
              borderBottom: "1px solid rgba(227,226,223,0.7)",
            }}
          />
          <p
            style={{
              fontFamily: sans,
              fontWeight: 400,
              fontSize: 14,
              lineHeight: 1.85,
              color: "var(--ink-mute)",
              margin: 0,
            }}
          >
            {s.body}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default HomeAProcess;
