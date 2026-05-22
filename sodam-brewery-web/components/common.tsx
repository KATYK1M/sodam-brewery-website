"use client";

import React from "react";

export interface Product {
  id: string;
  name: string;
  tag: string;
  kind: string;
  abv: string;
  abvNum: number;
  vol: string;
  price: string;
  priceN: number;
  ingredient: string;
  profileTag: string;
  profileLabel: string;
  desc: string;
  longDesc: string;
  story: string;
  quote: string;
  notes: string[];
  fermentDays: number;
  agedMonths: number;
  img: string;
  profile: {
    sweet: number;
    body: number;
    dry: number;
    aroma: number;
    acidity: number;
  };
  pairing: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "kkoddal",
    name: "꽃달",
    tag: "SIGNATURE",
    kind: "프리미엄 탁주 · 삼양주",
    abv: "10% ABV",
    abvNum: 10,
    vol: "750ml",
    price: "₩ 12,000",
    priceN: 12000,
    ingredient: "쌀, 누룩",
    profileTag: "BALANCE",
    profileLabel: "전체적인 맛의 조화가 뛰어나 누구나 마시기 편안한 술",
    desc: "부재료 없이 쌀과 누룩만으로 빚어낸, 섬세한 이들만이 알아채는 은은한 꽃과 참외의 향",
    longDesc:
      "꽃달은 소담 양조장에서 가장 낮은 도수인 10도로 빚어낸,부드럽고 섬세한 탁주입니다. 이름은 '꽃'이지만, 역설적이게도 꽃잎이나 과일 같은 부재료는 단 한 잎도 들어가지 않았습니다. 오직 우리 땅에서 자란 쌀과 직접 선별한 누룩, 그리고 깨끗한 물만을 사용하여 전통적인 방식으로 빚어냈습니다.",
    story:
      "꽃달의 진정한 묘미는 '발견'에 있습니다. 첫 모금을 머금으면 쌀에서 기인한 본연의 단맛이 혀끝을 부드럽게 감쌉니다. 그 뒤를 이어 마치 만개한 꽃밭이나 잘 익은 참외, 혹은 달콤한 바나나를 떠올리게 하는 은은한 향이 코끝을 스칩니다. 이는 인위적인 가미가 아닌, 발효라는 신비로운 과정 속에서 주조사가 정성껏 길러낸 자연의 향기입니다.",
    quote:
      "가장 낮은 도수로 빚었으나, 그 속에 담긴 대화의 온도는 결코 낮지 않습니다. 쌀에서 피어난 바나나와 꽃의 은은한 여운을 음미하며, 소담(笑談)이 지향하는 가장 다정한 웃음의 순간을 마주해 보세요. 당신의 휴식이 한 잔의 예술이 되는 시간, 꽃달이 함께합니다.",
    notes: ["만개한 꽃밭", "잘 익은 참외", "달콤한 바나나", "쌀 본연의 단맛"],
    fermentDays: 75,
    agedMonths: 2,
    img: "/assets/kkoddal.jpg",
    profile: { sweet: 4, body: 2, dry: 1, aroma: 4, acidity: 2 },
    pairing: "담백한 한식 메인 요리, 두부 강정, 잘 익은 김치",
  },
  {
    id: "balganbit",
    name: "발간빛",
    tag: "PREMIUM",
    kind: "프리미엄 탁주 · 삼양주",
    abv: "12% ABV",
    abvNum: 12,
    vol: "500ml",
    price: "₩ 18,000",
    priceN: 18000,
    ingredient: "쌀, 누룩, 말린 자색 고구마",
    profileTag: "DRY",
    profileLabel: "산미와 드라이함이 동시에 느껴지는 깔끔한 술",
    desc: "말린 자색 고구마의 향긋한 풍미와 기분 좋은 산미가 어우러진, 드라이하고 가벼운 텍스처",
    longDesc:
      "발간빛은 붉게 물든 노을처럼 고운 빛깔 뒤에 반전의 매력을 숨기고 있는 술입니다. 정성껏 말린 자색 고구마를 부재료로 사용하여, 인위적인 색소 없이도 보는 즐거움과 마시는 즐거움을 동시에 선사합니다.",
    story:
      "발간빛의 가장 큰 특징은 '말린 고구마'에 있습니다. 고구마를 찌거나 구웠을 때의 눅진한 단맛 대신, 고구마를 말렸을 때만 얻을 수 있는 은은하고 세련된 향을 술 속에 가두었습니다. 덕분에 첫 모금에서 느껴지는 향은 달콤하지만, 목을 넘어가는 뒷맛은 놀라울 만큼 깔끔하고 드라이(Dry)합니다.",
    quote:
      "때로는 경쾌한 산미가 돋보이고, 때로는 담백한 드라이함이 여운을 남기는 발간빛은 마치 예측할 수 없어 더 매력적인 대화와 닮아 있습니다. 화려한 빛깔 속에 감춰진 깊고 산뜻한 풍미를 느끼며, 다정한 이들과 함께하는 식탁을 더욱 생기 있게 채워보세요.",
    notes: [
      "말린 자색 고구마",
      "경쾌한 산미",
      "드라이한 마무리",
      "곡물의 단정함",
    ],
    fermentDays: 90,
    agedMonths: 3,
    img: "/assets/balganbit.png",
    profile: { sweet: 2, body: 3, dry: 4, aroma: 3, acidity: 4 },
    pairing: "잘 구운 한식 안주, 묵직한 치즈, 약간 매콤한 음식",
  },
  {
    id: "noranun13",
    name: "너랑나랑 13도",
    tag: "DAILY",
    kind: "프리미엄 탁주 · 삼양주",
    abv: "13% ABV",
    abvNum: 13,
    vol: "500ml",
    price: "₩ 18,000",
    priceN: 18000,
    ingredient: "쌀, 누룩",
    profileTag: "ACIDITY",
    profileLabel: "선명한 산미와 와인 같은 새콤달콤함이 돋보이는 술",
    desc: "청량하며, 쌀 본연의 새콤달콤함과 와인 같은 깔끔함",
    longDesc:
      "너랑나랑 13은 일상에서 가장 편하게 다가갈 수 있는 한 잔입니다. 짧은 숙성 끝에 깔끔하고 가볍게 맞춰낸 균형감이 매력입니다.",
    story:
      "너랑나랑 13도는 흔히 떠올리는 묵직한 막걸리보다는 잘 만들어진 화이트 와인의 결을 닮아 있습니다. 잔에 따랐을 때 느껴지는 가벼운 텍스처와 산뜻한 향은 입안을 부드럽게 씻어내 주며, 마시는 내내 질리지 않는 편안함을 선사합니다. '마시기 쉽다'는 것이 결코 가볍다는 뜻이 아님을, 첫 모금의 깔끔한 여운이 증명해 줄 것입니다.",
    quote:
      "너랑나랑 13도의 가장 완벽한 시음 방법은 일상의 소란이 잦아든 밤에 있습니다. 깨끗하게 씻고 나와 가장 편안한 옷차림으로 앉아, 좋아하는 영화 한 편을 틀어놓고 천천히 기울이는 잔. 그때 비로소 너랑나랑 13은 단순한 술을 넘어 지친 하루를 다독이는 다정한 대화 상대가 됩니다.",
    notes: [
      "화이트 와인의 결",
      "가벼운 텍스처",
      "산뜻한 향",
      "질리지 않는 편안함",
    ],
    fermentDays: 60,
    agedMonths: 1,
    img: "/assets/neorang13.jpg",
    profile: { sweet: 2, body: 1, dry: 3, aroma: 3, acidity: 4 },
    pairing: "가벼운 안주, 두부김치, 부침개, 영화 한 편",
  },
  {
    id: "noranun17",
    name: "너랑나랑 17도",
    tag: "AGED",
    kind: "프리미엄 탁주 · 삼양주",
    abv: "17% ABV",
    abvNum: 17,
    vol: "500ml",
    price: "₩ 28,000",
    priceN: 28000,
    ingredient: "쌀, 누룩",
    profileTag: "BODY",
    profileLabel: "항아리 숙성, 원주만의 묵직한 깊이가 느껴지는 술",
    desc: "물을 섞지 않은 원주를 항아리에서 6개월간 숙성하여 완성한 묵직하고 깊은 풍미",
    longDesc:
      "너랑나랑 17은 깊이를 사랑하는 분께 권합니다. 오랜 숙성 끝에 묵직한 바디감과 긴 여운이 담겼습니다.",
    story:
      "너랑나랑 17도는 숨 쉬는 항아리 안에서 반년의 시간을 견디며 거친 알코올 기운은 부드럽게 깎여나가고, 그 빈자리는 곡물의 묵직하고 깊은 풍미로 채워졌습니다. 첫 모금을 머금으면 마치 잘 익은 곡식 더미를 마주한 듯 두툼한 바디감이 혀를 꽉 채우며, 목을 타고 넘어갈 때는 타격감 대신 묵직한 온기만을 남깁니다.",
    quote:
      "너랑나랑 17도는 빠르게 취하기 위해 마시는 술이 아닙니다. 시간이 지날수록 깊어지는 술의 가치를 아는 분들이, 천천히 시간을 들여 음미할 때 비로소 그 진가를 드러냅니다. 특별한 날, 깊은 대화가 필요한 자리에서 소담(笑談)의 진심을 경험해 보세요.",
    notes: ["항아리 숙성", "곡물의 깊은 풍미", "두툼한 바디", "긴 온기의 여운"],
    fermentDays: 90,
    agedMonths: 6,
    img: "/assets/neorang17.jpg",
    profile: { sweet: 2, body: 5, dry: 2, aroma: 3, acidity: 2 },
    pairing: "진한 한식 메인, 숙성 육포, 강한 풍미의 치즈, 깊은 대화",
  },
];

// ── Atom components ─────────────────────────────────────────────────────

export const ChipDark = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => (
  <span
    style={{
      background: "var(--ink)",
      color: "var(--bg)",
      borderRadius: 999,
      padding: "7px 14px",
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 9,
      letterSpacing: ".18em",
      ...style,
    }}
  >
    {children}
  </span>
);

export const ChipCream = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => (
  <span
    style={{
      background: "rgba(255,255,255,0.78)",
      backdropFilter: "blur(6px)",
      color: "var(--ink)",
      borderRadius: 999,
      padding: "7px 14px",
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 9,
      letterSpacing: ".18em",
      ...style,
    }}
  >
    {children}
  </span>
);

export const ChipWheat = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => (
  <span
    style={{
      background: "var(--surface-cream)",
      color: "var(--accent-2)",
      borderRadius: 999,
      padding: "7px 14px",
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 9,
      letterSpacing: ".18em",
      ...style,
    }}
  >
    {children}
  </span>
);

export const IconBtn = ({
  children,
  onClick,
  style,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}) => (
  <button
    onClick={onClick}
    style={{
      width: 44,
      height: 44,
      border: "1px solid var(--line)",
      background: "transparent",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      color: "var(--ink)",
      transition: "background 0.2s cubic-bezier(0.22, 1, 0.36, 1)",
      borderRadius: 999,
      ...style,
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.background = "var(--surface-1)")
    }
    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
  >
    {children}
  </button>
);

export const Stepper = ({
  n,
  setN,
}: {
  n: number;
  setN: (v: number) => void;
}) => (
  <div
    style={{
      display: "inline-flex",
      alignItems: "center",
      border: "1px solid var(--line)",
      borderRadius: 2,
    }}
  >
    <button
      onClick={(e) => {
        e.stopPropagation();
        setN(Math.max(1, n - 1));
      }}
      style={{
        width: 36,
        height: 36,
        background: "transparent",
        border: 0,
        fontSize: 14,
        cursor: "pointer",
        color: "var(--ink)",
      }}
    >
      −
    </button>
    <div
      style={{
        minWidth: 28,
        textAlign: "center",
        fontFamily: "var(--font-serif-kr)",
        fontSize: 14,
        color: "var(--ink)",
      }}
    >
      {n}
    </div>
    <button
      onClick={(e) => {
        e.stopPropagation();
        setN(n + 1);
      }}
      style={{
        width: 36,
        height: 36,
        background: "transparent",
        border: 0,
        fontSize: 14,
        cursor: "pointer",
        color: "var(--ink)",
      }}
    >
      +
    </button>
  </div>
);

export const Eyebrow = ({
  children,
  color = "var(--ink-mute)",
  style,
}: {
  children: React.ReactNode;
  color?: string;
  style?: React.CSSProperties;
}) => (
  <div
    style={{
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: 10,
      lineHeight: "15px",
      letterSpacing: ".4em",
      textTransform: "uppercase",
      color,
      ...style,
    }}
  >
    {children}
  </div>
);

export const KrEyebrow = ({
  children,
  color = "var(--ink-mute)",
  style,
}: {
  children: React.ReactNode;
  color?: string;
  style?: React.CSSProperties;
}) => (
  <div
    style={{
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: 12,
      lineHeight: "16px",
      letterSpacing: ".22em",
      color,
      ...style,
    }}
  >
    {children}
  </div>
);

// ── Hanja Stamp ──────────────────────────────────────────────────────────

export const HanjaStamp = ({
  size = 320,
  opacity = 0.06,
  rotate = 0,
  color = "var(--ink)",
  style,
}: {
  size?: number;
  opacity?: number;
  rotate?: number;
  color?: string;
  style?: React.CSSProperties;
}) => (
  <div
    aria-hidden
    style={{
      width: size,
      height: size,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      opacity,
      pointerEvents: "none",
      ...style,
    }}
  >
    <svg
      width={size}
      height={size}
      viewBox="0 0 320 320"
      fill={color}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <text
        x="50%"
        y="25%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="140"
        fontFamily="var(--font-serif-kr), serif"
        fontWeight="400"
      >
        笑
      </text>
      <text
        x="50%"
        y="75%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="140"
        fontFamily="var(--font-serif-kr), serif"
        fontWeight="400"
      >
        談
      </text>
      <rect
        x="4"
        y="4"
        width="312"
        height="312"
        rx="4"
        fill="none"
        stroke={color}
        strokeWidth="8"
      />
    </svg>
  </div>
);
