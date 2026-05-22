"use client";
import React from "react";
import { Product, Eyebrow, Stepper } from "../common";
import { Row } from "./helpers";

const serifKR = "var(--font-serif-kr)";
const sans = "var(--font-sans)";

interface CartItem extends Product {
  qty: number;
}

export const CartPage = ({
  items,
  onRemove,
  onChangeQty,
  go,
  onNavSection,
}: {
  items?: CartItem[];
  onRemove?: (i: number) => void;
  onChangeQty?: (i: number, q: number) => void;
  go?: (page: string) => void;
  onNavSection?: (section: string) => void;
}) => {
  const list = items || [];
  const subtotal = list.reduce((a, it) => a + (it.priceN || 0) * it.qty, 0);
  const freeShip = subtotal >= 50000;
  const ship = subtotal === 0 ? 0 : freeShip ? 0 : 4000;
  const total = subtotal + ship;
  const remaining = Math.max(0, 50000 - subtotal);

  return (
    <main
      style={{
        padding: "72px 48px 96px",
        maxWidth: 1280,
        margin: "0 auto",
        minHeight: 600,
      }}
    >
      <div
        style={{
          borderBottom: "1px solid var(--line-soft)",
          paddingBottom: 32,
          marginBottom: 48,
        }}
      >
        <Eyebrow style={{ marginBottom: 28 }}>CART</Eyebrow>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
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
            장바구니
          </h1>
          <div
            style={{
              fontFamily: sans,
              fontSize: 12,
              letterSpacing: ".18em",
              color: "var(--ink-mute)",
            }}
          >
            {list.reduce((a, it) => a + it.qty, 0)}개 상품
          </div>
        </div>
      </div>
      <div
        style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 64 }}
      >
        <div>
          {list.length === 0 && (
            <div style={{ padding: "96px 0", textAlign: "center" }}>
              <div
                style={{
                  fontFamily: serifKR,
                  fontSize: 22,
                  color: "var(--ink)",
                  marginBottom: 32,
                }}
              >
                장바구니가 비어 있습니다
              </div>
              <button
                onClick={() => onNavSection?.('collection')}
                style={{
                  background: "var(--ink)",
                  color: "#fff",
                  border: 0,
                  padding: "14px 32px",
                  fontFamily: sans,
                  fontWeight: 700,
                  fontSize: 11,
                  letterSpacing: ".22em",
                  cursor: "pointer",
                }}
              >
                COLLECTION 둘러보기 →
              </button>
            </div>
          )}
          {list.map((it, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr auto",
                gap: 28,
                alignItems: "center",
                padding: "28px 0",
                borderBottom: "1px solid var(--line-soft)",
              }}
            >
              <div
                style={{
                  width: 120,
                  height: 144,
                  background: `url(${it.img}) center/cover no-repeat, var(--surface-1)`,
                }}
              />
              <div>
                <div
                  style={{
                    fontFamily: serifKR,
                    fontWeight: 700,
                    fontSize: 24,
                    color: "var(--ink)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {it.name}
                </div>
                <div
                  style={{
                    marginTop: 8,
                    fontFamily: sans,
                    fontSize: 12,
                    letterSpacing: ".06em",
                    color: "var(--ink-mute)",
                  }}
                >
                  {it.abv} · {it.vol || "750ml"}
                </div>
                <div style={{ marginTop: 16, display: "inline-flex" }}>
                  <Stepper
                    n={it.qty}
                    setN={(q) => onChangeQty?.(i, Math.max(1, q))}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: 14,
                }}
              >
                <div
                  style={{
                    fontFamily: serifKR,
                    fontWeight: 700,
                    fontSize: 22,
                    color: "var(--ink)",
                  }}
                >
                  ₩ {((it.priceN || 0) * it.qty).toLocaleString()}
                </div>
                <button
                  onClick={() => onRemove?.(i)}
                  style={{
                    background: "transparent",
                    border: 0,
                    fontFamily: sans,
                    fontSize: 11,
                    letterSpacing: ".18em",
                    color: "var(--ink-mute)",
                    cursor: "pointer",
                  }}
                >
                  삭제 ✕
                </button>
              </div>
            </div>
          ))}
        </div>
        <aside
          style={{
            background: "var(--surface-1)",
            padding: 36,
            alignSelf: "start",
            boxShadow: "var(--shadow-card)",
            position: "sticky",
            top: 100,
          }}
        >
          <div
            style={{
              fontFamily: sans,
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: ".12em",
              color: "var(--ink)",
              marginBottom: 24,
            }}
          >
            주문 요약
          </div>
          {subtotal > 0 && (
            <div
              style={{
                padding: "14px 16px",
                marginBottom: 24,
                background: freeShip ? "var(--surface-cream-20)" : "var(--bg)",
                border: `1px solid ${
                  freeShip ? "var(--surface-cream-50)" : "var(--line-soft)"
                }`,
              }}
            >
              {freeShip ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontFamily: sans,
                    fontSize: 12,
                    color: "var(--accent-point)",
                    fontWeight: 700,
                  }}
                >
                  <svg
                    width="14"
                    height="10"
                    viewBox="0 0 14 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 5L6 9L12 1" />
                  </svg>
                  무료 배송 조건을 충족했어요
                </div>
              ) : (
                <>
                  <div
                    style={{
                      fontFamily: sans,
                      fontSize: 12,
                      color: "var(--ink-3)",
                    }}
                  >
                    <strong
                      style={{ color: "var(--accent-point)", fontWeight: 700 }}
                    >
                      ₩ {remaining.toLocaleString()}
                    </strong>{" "}
                    더 담으시면 무료 배송
                  </div>
                  <div
                    style={{
                      marginTop: 10,
                      height: 4,
                      background: "var(--surface-2)",
                      borderRadius: 999,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: `${Math.min(100, (subtotal / 50000) * 100)}%`,
                        height: "100%",
                        background: "var(--accent-point)",
                        transition: "width 0.3s",
                      }}
                    />
                  </div>
                </>
              )}
            </div>
          )}
          <Row k="상품 총 금액" v={`₩ ${subtotal.toLocaleString()}`} />
          <Row
            k="배송비"
            v={
              subtotal === 0
                ? "—"
                : freeShip
                ? "무료"
                : `₩ ${ship.toLocaleString()}`
            }
          />
          <Row k="할인" v="—" />
          <hr
            style={{
              margin: "24px 0",
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
                fontSize: 18,
                color: "var(--ink)",
              }}
            >
              합계
            </div>
            <div
              style={{
                fontFamily: serifKR,
                fontWeight: 700,
                fontSize: 32,
                color: "var(--ink)",
              }}
            >
              ₩ {total.toLocaleString()}
            </div>
          </div>
          <button
            disabled={list.length === 0}
            onClick={() => go?.("checkout")}
            style={{
              marginTop: 28,
              width: "100%",
              height: 56,
              background:
                list.length === 0 ? "var(--surface-2)" : "var(--ink-2)",
              color: list.length === 0 ? "var(--ink-mute)" : "#fff",
              border: 0,
              fontFamily: serifKR,
              fontWeight: 500,
              fontSize: 16,
              letterSpacing: ".16em",
              cursor: list.length === 0 ? "not-allowed" : "pointer",
            }}
          >
            결제하기 →
          </button>
          <div
            style={{
              marginTop: 12,
              fontFamily: sans,
              fontSize: 10,
              lineHeight: 1.7,
              color: "var(--ink-mute-2)",
              textAlign: "center",
            }}
          >
            주문 시 이용 약관 및 개인정보 처리 방침에 동의하는 것으로 간주합니다.
          </div>
          <div
            style={{
              marginTop: 24,
              padding: "16px 0",
              borderTop: "1px solid var(--line-soft)",
              fontFamily: sans,
              fontSize: 11,
              lineHeight: 1.85,
              color: "var(--ink-mute)",
            }}
          >
            평일 기준 2일 이내 출고 · 보냉재 동봉 · 신선박스 배송
            <br />
            <span style={{ color: "var(--accent-point)", fontWeight: 700 }}>
              전통주는 19세 이상 구매 가능합니다.
            </span>
          </div>
        </aside>
      </div>
    </main>
  );
};
