"use client";
import React, { useState } from "react";
import { Product, Eyebrow } from "../common";
import { FieldLine, Row } from "./helpers";

const serifKR = "var(--font-serif-kr)";
const sans = "var(--font-sans)";

interface CartItem extends Product {
  qty: number;
}

export const CheckoutPage = ({
  items,
  go,
  onComplete,
}: {
  items?: CartItem[];
  go?: (page: string) => void;
  onComplete?: () => void;
}) => {
  const [step, setStep] = useState(0);
  const [pay, setPay] = useState("card");
  const [shipping, setShipping] = useState({
    name: "",
    phone: "",
    zip: "",
    addr: "",
    addr2: "",
    email: "",
    note: "",
  });
  const list = items || [];
  const subtotal = list.reduce((a, it) => a + (it.priceN || 0) * it.qty, 0);
  const freeShip = subtotal >= 50000;
  const ship = subtotal === 0 ? 0 : freeShip ? 0 : 4000;
  const total = subtotal + ship;
  const stepLabels = ["배송 정보", "결제 수단", "주문 확인"];

  return (
    <main
      style={{
        padding: "64px 48px 96px",
        maxWidth: 1280,
        margin: "0 auto",
        minHeight: 600,
      }}
    >
      <div style={{ marginBottom: 48 }}>
        <Eyebrow style={{ marginBottom: 28 }}>CHECKOUT</Eyebrow>
        <h1
          style={{
            fontFamily: serifKR,
            fontWeight: 700,
            fontSize: 44,
            color: "var(--ink)",
            margin: 0,
            letterSpacing: "-0.025em",
          }}
        >
          주문 결제
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 24,
          marginBottom: 56,
          paddingBottom: 32,
          borderBottom: "1px solid var(--line-soft)",
        }}
      >
        {stepLabels.map((l, i) => (
          <React.Fragment key={l}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 999,
                  background: i <= step ? "var(--ink)" : "transparent",
                  border:
                    i <= step
                      ? "1px solid var(--ink)"
                      : "1px solid var(--line)",
                  color: i <= step ? "var(--bg)" : "var(--ink-mute)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: sans,
                  fontWeight: 700,
                  fontSize: 12,
                }}
              >
                {i + 1}
              </div>
              <span
                style={{
                  fontFamily: sans,
                  fontWeight: i === step ? 700 : 500,
                  fontSize: 12,
                  letterSpacing: ".16em",
                  color: i <= step ? "var(--ink)" : "var(--ink-mute)",
                }}
              >
                {l.toUpperCase()}
              </span>
            </div>
            {i < stepLabels.length - 1 && (
              <div
                style={{
                  flex: 1,
                  height: 1,
                  background: i < step ? "var(--ink)" : "var(--line-soft)",
                }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
      <div
        style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 64 }}
      >
        <div>
          {step === 0 && (
            <div>
              <h2
                style={{
                  fontFamily: serifKR,
                  fontWeight: 700,
                  fontSize: 22,
                  color: "var(--ink)",
                  margin: "0 0 28px",
                  letterSpacing: "-0.01em",
                }}
              >
                받으실 분 정보
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 28,
                  rowGap: 32,
                }}
              >
                <FieldLine
                  required
                  label="이름"
                  placeholder="홍길동"
                  value={shipping.name}
                  onChange={(v) => setShipping({ ...shipping, name: v })}
                />
                <FieldLine
                  required
                  label="연락처"
                  placeholder="010-0000-0000"
                  value={shipping.phone}
                  onChange={(v) => setShipping({ ...shipping, phone: v })}
                />
                <FieldLine
                  required
                  full
                  label="이메일"
                  placeholder="sodam@example.com"
                  value={shipping.email}
                  onChange={(v) => setShipping({ ...shipping, email: v })}
                />
                <FieldLine
                  required
                  label="우편번호"
                  placeholder="00000"
                  value={shipping.zip}
                  onChange={(v) => setShipping({ ...shipping, zip: v })}
                />
                <FieldLine
                  required
                  full
                  label="기본 주소"
                  placeholder="서울시 OO구 OO로 00"
                  value={shipping.addr}
                  onChange={(v) => setShipping({ ...shipping, addr: v })}
                />
                <FieldLine
                  required
                  full
                  label="상세 주소"
                  placeholder="동, 호수"
                  value={shipping.addr2}
                  onChange={(v) => setShipping({ ...shipping, addr2: v })}
                />
                <FieldLine
                  full
                  label="배송 메모 (선택)"
                  placeholder="문 앞에 두고 초인종 눌러주세요"
                  value={shipping.note}
                  onChange={(v) => setShipping({ ...shipping, note: v })}
                />
              </div>
            </div>
          )}
          {step === 1 && (
            <div>
              <h2
                style={{
                  fontFamily: serifKR,
                  fontWeight: 700,
                  fontSize: 22,
                  color: "var(--ink)",
                  margin: "0 0 28px",
                }}
              >
                결제 수단
              </h2>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                {[
                  ["card", "신용/체크 카드", "국내 모든 카드사 사용 가능"],
                  ["transfer", "계좌 이체", "신한은행 110-000-000000"],
                  ["kakao", "카카오페이", "간편하게 카카오로 결제"],
                  ["naver", "네이버페이", "네이버페이 포인트 사용 가능"],
                ].map(([k, l, sub]) => (
                  <label
                    key={k}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 20,
                      padding: "20px 24px",
                      cursor: "pointer",
                      background:
                        pay === k
                          ? "var(--surface-cream-20)"
                          : "var(--surface-1)",
                      border:
                        pay === k
                          ? "1px solid var(--accent-1)"
                          : "1px solid transparent",
                      transition: "background 0.2s",
                    }}
                  >
                    <input
                      type="radio"
                      name="pay"
                      checked={pay === k}
                      onChange={() => setPay(k)}
                      style={{
                        width: 16,
                        height: 16,
                        accentColor: "var(--ink)",
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontFamily: serifKR,
                          fontWeight: 700,
                          fontSize: 16,
                          color: "var(--ink)",
                        }}
                      >
                        {l}
                      </div>
                      <div
                        style={{
                          marginTop: 4,
                          fontFamily: sans,
                          fontSize: 12,
                          color: "var(--ink-mute)",
                        }}
                      >
                        {sub}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}
          {step === 2 && (
            <div>
              <h2
                style={{
                  fontFamily: serifKR,
                  fontWeight: 700,
                  fontSize: 22,
                  color: "var(--ink)",
                  margin: "0 0 28px",
                }}
              >
                최종 확인
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                  padding: "28px 32px",
                  background: "var(--surface-1)",
                }}
              >
                <div>
                  <Eyebrow style={{ marginBottom: 10 }}>받는 분</Eyebrow>
                  <div
                    style={{
                      fontFamily: sans,
                      fontSize: 17,
                      color: "var(--ink)",
                    }}
                  >
                    {shipping.name || "홍길동"} ·{" "}
                    {shipping.phone || "010-0000-0000"}
                  </div>
                  <div
                    style={{
                      marginTop: 6,
                      fontFamily: sans,
                      fontSize: 13,
                      color: "var(--ink-mute)",
                    }}
                  >
                    {shipping.addr || "서울시 OO구 OO로 00"} {shipping.addr2}
                  </div>
                </div>
                <hr
                  style={{ border: 0, borderTop: "1px solid var(--line-soft)" }}
                />
                <div>
                  <Eyebrow style={{ marginBottom: 10 }}>결제 수단</Eyebrow>
                  <div
                    style={{
                      fontFamily: sans,
                      fontSize: 17,
                      color: "var(--ink)",
                    }}
                  >
                    {pay === "card"
                      ? "신용/체크 카드"
                      : pay === "transfer"
                      ? "계좌 이체"
                      : pay === "kakao"
                      ? "카카오페이"
                      : "네이버페이"}
                  </div>
                </div>
                <hr
                  style={{ border: 0, borderTop: "1px solid var(--line-soft)" }}
                />
                <div>
                  <Eyebrow style={{ marginBottom: 10 }}>주문 상품</Eyebrow>
                  {list.map((it, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "6px 0",
                        fontFamily: sans,
                        fontSize: 13,
                        color: "var(--ink-3)",
                      }}
                    >
                      <span>
                        {it.name} × {it.qty}
                      </span>
                      <span style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 15 }}>
                        ₩ {((it.priceN || 0) * it.qty).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <label
                style={{
                  marginTop: 24,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  fontFamily: sans,
                  fontSize: 13,
                  color: "var(--ink-3)",
                }}
              >
                <input
                  type="checkbox"
                  defaultChecked
                  style={{ accentColor: "var(--ink)" }}
                />
                만 19세 이상이며, 주문 약관에 동의합니다.
              </label>
            </div>
          )}
          <div style={{ marginTop: 48, display: "flex", gap: 16 }}>
            {step > 0 && (
              <button
                onClick={() => setStep(step - 1)}
                style={{
                  background: "transparent",
                  color: "var(--ink)",
                  border: "1px solid var(--ink)",
                  height: 52,
                  padding: "0 28px",
                  fontFamily: sans,
                  fontWeight: 700,
                  fontSize: 11,
                  letterSpacing: ".22em",
                  cursor: "pointer",
                }}
              >
                ← 이전
              </button>
            )}
            {step < 2 && (
              <button
                onClick={() => setStep(step + 1)}
                style={{
                  flex: 1,
                  background: "var(--ink-2)",
                  color: "#fff",
                  border: 0,
                  height: 52,
                  fontFamily: serifKR,
                  fontWeight: 500,
                  fontSize: 15,
                  letterSpacing: ".18em",
                  cursor: "pointer",
                }}
              >
                다음 단계로 →
              </button>
            )}
            {step === 2 && (
              <button
                onClick={() => onComplete?.()}
                style={{
                  flex: 1,
                  background: "var(--ink)",
                  color: "#fff",
                  border: 0,
                  height: 52,
                  fontFamily: serifKR,
                  fontWeight: 500,
                  fontSize: 15,
                  letterSpacing: ".18em",
                  cursor: "pointer",
                }}
              >
                ₩ {total.toLocaleString()} 결제하기
              </button>
            )}
          </div>
        </div>
        <aside
          style={{
            background: "var(--surface-1)",
            padding: 36,
            alignSelf: "start",
            position: "sticky",
            top: 100,
            boxShadow: "var(--shadow-card)",
          }}
        >
          <Eyebrow style={{ marginBottom: 24 }}>주문 요약</Eyebrow>
          {list.map((it, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 14,
                padding: "10px 0",
                alignItems: "center",
                borderBottom: "1px solid var(--line-soft)",
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 64,
                  background: `url(${it.img}) center/cover no-repeat`,
                  flex: "0 0 56px",
                }}
              />
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontFamily: serifKR,
                    fontWeight: 700,
                    fontSize: 14,
                    color: "var(--ink)",
                  }}
                >
                  {it.name}
                </div>
                <div
                  style={{
                    marginTop: 2,
                    fontFamily: sans,
                    fontSize: 11,
                    color: "var(--ink-mute)",
                  }}
                >
                  × {it.qty}
                </div>
              </div>
              <div
                style={{
                  fontFamily: serifKR,
                  fontWeight: 700,
                  fontSize: 14,
                  color: "var(--ink)",
                }}
              >
                ₩ {((it.priceN || 0) * it.qty).toLocaleString()}
              </div>
            </div>
          ))}
          <div style={{ marginTop: 20 }}>
            <Row k="제품 총 금액" v={`₩ ${subtotal.toLocaleString()}`} />
            <Row
              k="배송"
              v={
                subtotal === 0
                  ? "—"
                  : freeShip
                  ? "무료"
                  : `₩ ${ship.toLocaleString()}`
              }
            />
          </div>
          <hr
            style={{
              margin: "14px 0",
              border: 0,
              borderTop: "1px solid var(--line-soft)",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <div
              style={{
                fontFamily: serifKR,
                fontWeight: 700,
                fontSize: 16,
                color: "var(--ink)",
              }}
            >
              합계
            </div>
            <div
              style={{
                fontFamily: serifKR,
                fontWeight: 700,
                fontSize: 28,
                color: "var(--ink)",
              }}
            >
              ₩ {total.toLocaleString()}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};
