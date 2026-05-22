'use client';
import React, { useState } from 'react';
import { PRODUCTS, Product, ChipDark, ChipCream, ChipWheat, Stepper, Eyebrow } from '../common';
import { RelatedSlider } from './RelatedSlider';
import { TraditionBanner } from './TraditionBanner';

const serifKR = 'var(--font-serif-kr)';
const serifEN = 'var(--font-serif-en)';
const sans = 'var(--font-sans)';

export const ProductDetailAlt = ({ product, onAddToCart, onBuyNow, go, onNavSection }: {
  product?: Product;
  onAddToCart?: (p: Product, qty: number) => void;
  onBuyNow?: (p: Product, qty: number) => void;
  go?: (page: string, payload?: Product) => void;
  onNavSection?: (key: string) => void;
}) => {
  const p = product || PRODUCTS[1];
  const [qty, setQty] = useState(1);
  const idx = PRODUCTS.findIndex((x) => x.id === p.id);

  return (
    <main style={{ background: 'var(--bg)' }}>
      <section style={{ position: 'relative', padding: '48px 48px 0' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 36 }}>
            <span onClick={() => go?.('home')} style={{ fontFamily: sans, fontSize: 11, letterSpacing: '.18em', color: 'var(--ink-mute)', cursor: 'pointer' }}>HOME</span>
            <span style={{ color: 'var(--ink-mute-2)' }}>/</span>
            <span onClick={() => onNavSection ? onNavSection('collection') : go?.('home')} style={{ fontFamily: sans, fontSize: 11, letterSpacing: '.18em', color: 'var(--ink-mute)', cursor: 'pointer' }}>COLLECTION</span>
            <span style={{ color: 'var(--ink-mute-2)' }}>/</span>
            <span style={{ fontFamily: sans, fontSize: 11, letterSpacing: '.18em', color: 'var(--ink)' }}>{p.name.toUpperCase()}</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1.45fr 1fr', gap: 64, alignItems: 'start' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ aspectRatio: '4/5', background: `url(${p.img}) center/cover no-repeat, var(--surface-1)`, boxShadow: 'var(--shadow-card)' }} />
              <div style={{ position: 'absolute', left: 24, top: 24, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {p.tag && <ChipDark>{p.tag}</ChipDark>}
                <ChipCream>{p.abv}</ChipCream>
                <ChipCream>{p.vol}</ChipCream>
              </div>
              <div style={{ position: 'absolute', right: 32, bottom: 32, fontFamily: serifEN, fontStyle: 'italic', fontSize: 14, color: 'var(--ink-on-dark)', background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(8px)', padding: '8px 16px', letterSpacing: '.1em' }}>
                No. 0{(idx >= 0 ? idx + 1 : 2)} · 2026
              </div>
            </div>
            <aside style={{ paddingTop: 16, display: 'flex', flexDirection: 'column', gap: 28 }}>
              <Eyebrow>SODAM COLLECTION · {String(idx + 1).padStart(2, '0')}</Eyebrow>
              <h1 style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 88, lineHeight: 0.95, letterSpacing: '-0.035em', color: 'var(--ink)', margin: 0 }}>{p.name}</h1>
              <p style={{ fontFamily: serifEN, fontSize: 18, lineHeight: 1.6, color: 'var(--ink-mute)', margin: 0, fontStyle: 'italic' }}>
                &ldquo;{p.kind || 'Premium 탁주 · 三釀酒'}&rdquo;
              </p>
              <p style={{ fontFamily: serifKR, fontWeight: 400, fontSize: 16, lineHeight: 1.95, color: 'var(--ink-3)', margin: 0 }}>{p.longDesc}</p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14, padding: '14px 20px', background: 'var(--surface-cream-20)', border: '1px solid var(--surface-cream-50)', alignSelf: 'flex-start' }}>
                <div style={{ fontFamily: serifEN, fontWeight: 700, fontSize: 18, color: 'var(--accent-1)', letterSpacing: '.06em' }}>{p.profileTag}</div>
                <div style={{ width: 1, height: 22, background: 'var(--surface-cream-50)' }} />
                <div style={{ fontFamily: serifKR, fontSize: 13, lineHeight: 1.45, color: 'var(--ink)', maxWidth: 320 }}>{p.profileLabel}</div>
              </div>
              <div style={{ marginTop: 16, padding: 28, background: 'var(--surface-1)', boxShadow: 'var(--shadow-card)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 24 }}>
                  <div>
                    <Eyebrow>PRICE</Eyebrow>
                    <div style={{ marginTop: 8, fontFamily: serifKR, fontWeight: 400, fontSize: 40, color: 'var(--ink)' }}>{p.price}</div>
                  </div>
                  <ChipWheat>IN STOCK</ChipWheat>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <Stepper n={qty} setN={setQty} />
                  <button onClick={() => onAddToCart?.(p, qty)} style={{ flex: 1, height: 48, background: 'transparent', color: 'var(--ink)', border: '1.5px solid var(--ink)', fontFamily: sans, fontWeight: 700, fontSize: 11, letterSpacing: '.22em', cursor: 'pointer', transition: 'background 0.2s, color 0.2s' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--ink)'; (e.currentTarget as HTMLElement).style.color = '#fff'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'var(--ink)'; }}>
                    장바구니에 담기
                  </button>
                </div>
                <button onClick={() => onBuyNow?.(p, qty)} style={{ width: '100%', height: 48, background: 'var(--ink)', color: '#fff', border: 0, fontFamily: sans, fontWeight: 700, fontSize: 11, letterSpacing: '.22em', cursor: 'pointer', transition: 'opacity 0.2s', marginBottom: 16 }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.88'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}>
                  바로 구매하기 →
                </button>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10, fontFamily: sans, fontSize: 12, color: 'var(--ink-3)' }}>
                  <svg width="12" height="10" viewBox="0 0 14 12" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="0.5" y="2.5" width="7" height="6" /><path d="M7.5 4.5H11L13.5 7V8.5H7.5" />
                    <circle cx="3" cy="9.5" r="1.2" /><circle cx="10" cy="9.5" r="1.2" />
                  </svg>
                  배송비 ₩ 4,000 · 5만원 이상 구매 시 무료 배송
                </div>
                <div style={{ fontFamily: sans, fontSize: 11, letterSpacing: '.06em', color: 'var(--ink-mute)' }}>주문 후 평일 기준 2일 이내 출고 · 보냉재 동봉 신선박스 배송</div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section style={{ padding: '96px 48px 0' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderTop: '1px solid var(--line-soft)', borderBottom: '1px solid var(--line-soft)' }}>
          {([['주재료', p.ingredient || '쌀, 누룩'], ['주종', p.kind || '프리미엄 탁주 · 삼양주'], ['알코올', p.abv], ['숙성', `${p.agedMonths || 3}개월 · 옹기`]] as [string, string][]).map(([k, v], i) => (
            <div key={k} style={{ padding: '40px 32px', borderRight: i < 3 ? '1px solid var(--line-soft)' : 0, textAlign: 'center' }}>
              <Eyebrow style={{ marginBottom: 14 }}>{k}</Eyebrow>
              <div style={{ fontFamily: serifKR, fontWeight: 400, fontSize: 22, color: 'var(--ink)', letterSpacing: '-0.01em', lineHeight: 1.3 }}>{v}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '128px 48px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <Eyebrow style={{ marginBottom: 20 }}>STORY · 술의 이야기</Eyebrow>
          <h2 style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 40, lineHeight: 1.25, color: 'var(--ink)', margin: 0, letterSpacing: '-0.02em' }}>맛의 기록, 그리고<br />그 너머의 이야기</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, marginBottom: 72 }}>
          <div style={{ borderTop: '1px solid var(--line)', paddingTop: 28 }}>
            <Eyebrow style={{ marginBottom: 22 }}>TASTING NOTES</Eyebrow>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {p.notes?.map((n, i) => (
                <div key={n} style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
                  <span style={{ fontFamily: serifEN, fontSize: 13, color: 'var(--ink-mute)', minWidth: 22 }}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ fontFamily: serifKR, fontSize: 16, color: 'var(--ink)', lineHeight: 1.5 }}>{n}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p style={{ fontFamily: serifKR, fontWeight: 400, fontSize: 18, lineHeight: 2.1, color: 'var(--ink-3)', margin: 0 }}>{p.story || p.longDesc}</p>
          </div>
        </div>
        {p.quote && (
          <blockquote style={{ margin: '0 auto', maxWidth: 900, padding: '48px 56px', background: 'var(--surface-1)', position: 'relative', fontFamily: serifKR, fontWeight: 400, fontSize: 19, lineHeight: 1.95, color: 'var(--ink)' }}>
            <img src="/assets/icons/quote.svg" alt="" style={{ position: 'absolute', top: 28, left: 28, width: 20, height: 20, opacity: 0.4 }} />
            <div style={{ paddingLeft: 36 }}>&ldquo;{p.quote}&rdquo;</div>
          </blockquote>
        )}
      </section>

      <section style={{ padding: '0 48px 128px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: '1px solid var(--line-soft)' }}>
          <div style={{ padding: '56px 48px', borderRight: '1px solid var(--line-soft)' }}>
            <Eyebrow style={{ marginBottom: 20 }}>FLAVOR PROFILE</Eyebrow>
            <h4 style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 28, color: 'var(--ink)', margin: '0 0 8px' }}>맛의 기록</h4>
            <div style={{ fontFamily: serifEN, fontWeight: 700, fontSize: 14, color: 'var(--accent-1)', letterSpacing: '.18em', marginBottom: 28 }}>{p.profileTag}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {([['단맛 · Sweet', p.profile.sweet], ['바디 · Body', p.profile.body], ['드라이 · Dry', p.profile.dry], ['향 · Aroma', p.profile.aroma], ['산미 · Acidity', p.profile.acidity || 2]] as [string, number][]).map(([k, v]) => (
                <div key={k} style={{ display: 'grid', gridTemplateColumns: '140px 1fr 36px', alignItems: 'center', gap: 20 }}>
                  <div style={{ fontFamily: serifKR, fontSize: 14, color: 'var(--ink-3)' }}>{k}</div>
                  <div style={{ display: 'flex', gap: 4 }}>
                    {[1, 2, 3, 4, 5].map((i) => <div key={i} style={{ flex: 1, height: 6, background: i <= v ? 'var(--ink)' : 'var(--surface-2)' }} />)}
                  </div>
                  <div style={{ fontFamily: sans, fontSize: 11, color: 'var(--ink-mute)' }}>{v}/5</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ padding: '56px 48px', background: 'var(--surface-cream-20)' }}>
            <Eyebrow style={{ color: 'var(--accent-1)', marginBottom: 20 }}>PAIRING · 함께 즐기기</Eyebrow>
            <h4 style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 28, color: 'var(--ink)', margin: '0 0 28px' }}>가장 어울리는 한 상</h4>
            <p style={{ fontFamily: serifKR, fontSize: 17, lineHeight: 1.85, color: 'var(--ink-3)', margin: 0 }}>
              {p.pairing}. 차게 식힌 도자기 잔에 따라, 한식 메인 요리와 함께 천천히 즐기시기를 권합니다.
            </p>
            <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {['도자기 잔', '8–12°C', '한식 메인'].map((t) => (
                <span key={t} style={{ padding: '8px 16px', border: '1px solid var(--accent-2)', fontFamily: serifKR, fontSize: 13, color: 'var(--accent-1)' }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedSlider title="소담 컬렉션 더 보기" products={PRODUCTS.filter((x) => x.id !== p.id)} go={go} />
      <TraditionBanner />
    </main>
  );
};
