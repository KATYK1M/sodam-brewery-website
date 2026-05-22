'use client';
import React, { useState } from 'react';
import { Eyebrow } from '../common';

const serifKR = 'var(--font-serif-kr)';
const serifEN = 'var(--font-serif-en)';
const sans = 'var(--font-sans)';

const HOME_FAQ_ITEMS = [
  {
    q: '유통기한이 90일로 표기되어 있는데, 기간이 지나면 마실 수 없나요?',
    a: '제품에 표기된 90일은 관련 법규에 따른 유통기한일 뿐입니다. 전통주는 발효 식품이기에 보관 환경이 무엇보다 중요합니다. 냉장 보관만 잘 유지해주신다면 최대 1년까지도 무리 없이 즐기실 수 있습니다.',
  },
  {
    q: '배송 기간은 보통 얼마나 걸리나요?',
    a: '고객님의 기다림을 최소화하기 위해 주문 확인 후 평일 기준 2일 이내에 출고하는 것을 원칙으로 하고 있습니다. 믿을 수 있는 우체국 택배를 통해 최대한 신속하고 안전하게 댁 앞까지 배송해 드립니다.',
  },
  {
    q: '가장 추천하는 보관 방법이 있나요?',
    a: '모든 전통주는 수령 즉시 냉장 보관하시는 것이 가장 좋습니다. 특히 일반 냉장고보다 온도가 일정하게 유지되는 김치 냉장고에 보관하시면, 맛의 변질을 막고 신선한 상태를 훨씬 더 오래 유지할 수 있습니다.',
  },
  {
    q: "'너랑나랑' 13도와 17도의 차이점이 무엇인가요?",
    a: '두 제품은 단순히 알코올 도수만 다른 것이 아닙니다. 주조 과정과 숙성 기간에 차이를 두어 각기 다른 매력을 갖도록 설계되었습니다. 13도는 깔끔하고 가벼워 누구나 편하게 즐기기 좋고, 17도는 묵직한 바디감과 깊은 풍미가 특징으로 술 자체의 무게감을 즐기시는 분들께 적합합니다.',
  },
  {
    q: "'꽃달'에는 실제 꽃이 들어가나요? 이름의 의미가 궁금해요.",
    a: "'꽃달'에는 꽃이 들어가지 않습니다. 오직 쌀과 누룩만으로 정성껏 빚은 술입니다. 하지만 신기하게도 잘 빚어진 쌀에서 나오는 천연의 단맛과 향이 마치 화사한 꽃향기와 같아 '꽃달'이라는 예쁜 이름을 붙이게 되었습니다.",
  },
];

export const HomeFaq = ({ go }: { go?: (page: string) => void }) => {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section
      id="section-faq"
      style={{ padding: '128px 48px', background: 'var(--bg)' }}
    >
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'end',
            marginBottom: 56,
            gap: 24,
          }}
        >
          <div />
          <div style={{ textAlign: 'center' }}>
            <Eyebrow style={{ marginBottom: 26 }}>FAQ</Eyebrow>
            <h2
              style={{
                fontFamily: serifKR,
                fontWeight: 700,
                fontSize: 40,
                lineHeight: 1.25,
                color: 'var(--ink)',
                margin: 0,
                letterSpacing: '-0.02em',
              }}
            >
              자주 묻는 질문
            </h2>
          </div>
          <div style={{ justifySelf: 'end', paddingBottom: 8 }}>
            <span
              onClick={() => go?.('faq')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: sans,
                fontWeight: 600,
                fontSize: 11,
                letterSpacing: '.22em',
                color: 'var(--ink-3)',
                cursor: 'pointer',
                borderBottom: '1px solid var(--ink-3)',
                paddingBottom: 4,
                transition: 'color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = 'var(--accent-point)';
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-point)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = 'var(--ink-3)';
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--ink-3)';
              }}
            >
              더보기 →
            </span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {HOME_FAQ_ITEMS.map((item, i) => {
            const open = openIdx === i;
            return (
              <div
                key={i}
                onClick={() => setOpenIdx(open ? -1 : i)}
                style={{
                  background: 'var(--surface-1)',
                  padding: '26px 32px',
                  cursor: 'pointer',
                  transition: 'background 0.2s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 20,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: 16,
                      flex: 1,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: serifEN,
                        fontWeight: 700,
                        fontSize: 13,
                        color: 'var(--accent-point)',
                        letterSpacing: '.04em',
                        minWidth: 22,
                      }}
                    >
                      Q.
                    </span>
                    <span
                      style={{
                        fontFamily: serifKR,
                        fontWeight: 500,
                        fontSize: 17,
                        lineHeight: 1.55,
                        color: 'var(--ink)',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {item.q}
                    </span>
                  </div>
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 7.4"
                    fill="var(--ink-mute)"
                    style={{
                      transform: open ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform .24s cubic-bezier(.22,1,.36,1)',
                      flexShrink: 0,
                    }}
                  >
                    <path d="M 6 7.4 L 0 1.4 L 1.4 0 L 6 4.6 L 10.6 0 L 12 1.4 L 6 7.4 Z" />
                  </svg>
                </div>
                {open && (
                  <div
                    style={{
                      marginTop: 20,
                      paddingTop: 20,
                      borderTop: '1px solid var(--line-soft)',
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: 16,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: serifEN,
                        fontWeight: 700,
                        fontSize: 13,
                        color: 'var(--ink-mute)',
                        letterSpacing: '.04em',
                        minWidth: 22,
                      }}
                    >
                      A.
                    </span>
                    <p
                      style={{
                        fontFamily: sans,
                        fontSize: 14,
                        lineHeight: 1.95,
                        color: 'var(--ink-3)',
                        margin: 0,
                      }}
                    >
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
