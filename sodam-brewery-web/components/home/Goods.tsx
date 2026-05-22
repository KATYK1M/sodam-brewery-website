"use client";
import React, { useState } from "react";
import { Product, Stepper, KrEyebrow } from "../common";

const serifKR = "var(--font-serif-kr)";
const serifEN = "var(--font-serif-en)";
const sans = "var(--font-sans)";

interface GoodsItem {
  n: string;
  d: string;
  p: string;
  img: string | null;
}

const HomeAGoodsCard = ({
  g,
  onAddToCart,
}: {
  g: GoodsItem;
  onAddToCart?: (p: Product, qty: number) => void;
}) => {
  const [qty, setQty] = useState(1);
  if (!g.img) {
    return (
      <article>
        <div
          style={{
            aspectRatio: "1/1",
            background: "var(--surface-1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
          }}
        >
          <img src="/assets/icons/dots.svg" alt="" style={{ width: 32, height: 32, opacity: 0.3 }} />
          <div
            style={{
              fontFamily: sans,
              fontSize: 10,
              letterSpacing: ".32em",
              color: "var(--ink-mute-2)",
            }}
          >
            {g.d}
          </div>
        </div>
      </article>
    );
  }
  return (
    <article>
      <div
        style={{
          aspectRatio: "1/1",
          background: "var(--surface-1)",
          overflow: "hidden",
        }}
      >
        <img
          src={g.img}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.85,
          }}
        />
      </div>
      <div style={{ paddingTop: 18 }}>
        <div
          style={{
            fontFamily: serifKR,
            fontWeight: 700,
            fontSize: 16,
            color: "var(--ink)",
          }}
        >
          {g.n}
        </div>
        <div
          style={{
            marginTop: 10,
            fontFamily: sans,
            fontSize: 12,
            color: "var(--ink-mute)",
          }}
        >
          {g.d}
        </div>
        <div
          style={{
            marginTop: 14,
            fontFamily: serifKR,
            fontWeight: 700,
            fontSize: 18,
            color: "var(--ink)",
          }}
        >
          {g.p}
        </div>
        <div
          style={{
            marginTop: 14,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Stepper n={qty} setN={setQty} />
          <button
            onClick={() =>
              onAddToCart?.(
                {
                  id: "goods-" + g.n,
                  name: g.n,
                  price: g.p,
                  priceN: Number(String(g.p).replace(/[^0-9]/g, "")) || 0,
                  abv: "GOODS",
                  vol: "소담 굿즈",
                  img: g.img!,
                  tag: "",
                  kind: "",
                  ingredient: "",
                  profileTag: "",
                  profileLabel: "",
                  desc: g.d,
                  longDesc: "",
                  story: "",
                  quote: "",
                  notes: [],
                  fermentDays: 0,
                  agedMonths: 0,
                  profile: { sweet: 0, body: 0, dry: 0, aroma: 0, acidity: 0 },
                  pairing: "",
                  abvNum: 0,
                },
                qty
              )
            }
            style={{
              flex: 1,
              background: "var(--ink)",
              color: "#fff",
              border: 0,
              padding: "11px 14px",
              fontFamily: sans,
              fontWeight: 700,
              fontSize: 10,
              letterSpacing: ".22em",
              cursor: "pointer",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "0.88";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "1";
            }}
          >
            장바구니에 담기
          </button>
        </div>
      </div>
    </article>
  );
};

export const HomeAGoods = ({
  onAddToCart,
}: {
  onAddToCart?: (p: Product, qty: number) => void;
}) => (
  <section
    id="section-goods"
    style={{ padding: "96px 48px 64px", maxWidth: 1280, margin: "0 auto" }}
  >
    <div style={{ textAlign: "center", marginBottom: 64 }}>
      <KrEyebrow style={{ marginBottom: 32 }}>
        한정된 소담을 더욱 더 빛나게
      </KrEyebrow>
      <h2
        style={{
          fontFamily: serifEN,
          fontWeight: 700,
          fontSize: 52,
          color: "var(--ink)",
          margin: 0,
          letterSpacing: "-0.01em",
        }}
      >
        Sodam Goods
      </h2>
    </div>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 24,
      }}
    >
      {[
        {
          n: "소담취기(笑談聚器)",
          d: "소담스러운 웃음과 이야기가 모이는 그릇",
          p: "₩ 5,000",
          img: "/assets/gift-box.jpg",
        },
        {
          n: "Gift Box",
          d: "주조사의 정성을 단정하게 담아낸 상자",
          p: "₩ 2,000",
          img: "/assets/gift-box.jpg",
        },
        {
          n: "Bottle Bag",
          d: "마음을 전하는 길을 함께하는 단정한 채비",
          p: "₩ 1,000",
          img: "/assets/gift-box.jpg",
        },
        { n: "More Coming", d: "MORE COMING SOON", p: "", img: null },
      ].map((g, i) => (
        <HomeAGoodsCard key={i} g={g} onAddToCart={onAddToCart} />
      ))}
    </div>
  </section>
);
