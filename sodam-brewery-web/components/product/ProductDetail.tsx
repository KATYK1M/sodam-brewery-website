'use client';
import React, { useState } from 'react';
import { PRODUCTS, Product, ChipDark, ChipCream, ChipWheat, Stepper, Eyebrow } from '../common';
import { RelatedSlider } from './RelatedSlider';
import { TraditionBanner } from './TraditionBanner';

const serifKR = 'var(--font-serif-kr)';
const serifEN = 'var(--font-serif-en)';
const sans = 'var(--font-sans)';

const GOODS = [
  { n: '소담취기(笑談聚器)', d: '소담스러운 웃음과 이야기가 모이는 그릇', p: '₩ 5,000', pN: 5000, img: '/assets/gift-box.jpg' },
  { n: 'Gift Box', d: '주조사의 정성을 단정하게 담아낸 상자', p: '₩ 2,000', pN: 2000, img: '/assets/gift-box.jpg' },
  { n: 'Bottle Bag', d: '마음을 전하는 길을 함께하는 단정한 채비', p: '₩ 1,000', pN: 1000, img: '/assets/gift-box.jpg' },
];

export const ProductDetail = ({ product, onAddToCart, onBuyNow, go, onNavSection }: {
  product?: Product;
  onAddToCart?: (p: Product, qty: number) => void;
  onBuyNow?: (p: Product, qty: number, extras?: Array<Product & { qty: number }>) => void;
  go?: (page: string, payload?: Product) => void;
  onNavSection?: (key: string) => void;
}) => {
  const p = product || PRODUCTS[1];
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState('story');
  const images = [p.img];
  const [imgIndex, setImgIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [goodsQty, setGoodsQty] = useState([0, 0, 0]);

  const handleBuyNow = () => setShowModal(true);

  const handleModalSkip = () => {
    setShowModal(false);
    onBuyNow?.(p, qty);
  };

  const handleModalConfirm = () => {
    const extras = GOODS.flatMap((g, i) =>
      goodsQty[i] > 0 ? [{
        id: 'goods-' + g.n, name: g.n, price: g.p, priceN: g.pN,
        abv: 'GOODS', vol: '소담 굿즈', img: g.img, tag: '', kind: '',
        ingredient: '', profileTag: '', profileLabel: '', desc: g.d,
        longDesc: '', story: '', quote: '', notes: [], fermentDays: 0,
        agedMonths: 0, profile: { sweet: 0, body: 0, dry: 0, aroma: 0, acidity: 0 },
        pairing: '', abvNum: 0, qty: goodsQty[i],
      }] : []
    );
    setShowModal(false);
    onBuyNow?.(p, qty, extras);
  };

  const qtyBtn: React.CSSProperties = { width: 32, height: 32, background: 'transparent', border: 0, fontSize: 16, cursor: 'pointer', color: 'var(--ink)' };

  return (
    <main style={{ background: 'var(--bg)' }}>
      {/* Modal */}
      {showModal && (
        <div
          onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false); }}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.45)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}
        >
          <div style={{ background: 'var(--bg)', maxWidth: 680, width: '100%', padding: '48px 40px 40px', boxShadow: '0 24px 80px rgba(0,0,0,0.18)' }}>
            <Eyebrow style={{ marginBottom: 14 }}>SODAM GOODS</Eyebrow>
            <h2 style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 26, color: 'var(--ink)', margin: '0 0 6px', letterSpacing: '-0.02em' }}>
              함께 담으시겠어요?
            </h2>
            <p style={{ fontFamily: sans, fontSize: 13, color: 'var(--ink-mute)', margin: '0 0 36px' }}>
              소담 굿즈와 함께하면 더욱 특별한 선물이 됩니다.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 36 }}>
              {GOODS.map((g, i) => (
                <div key={g.n} style={{ border: '1px solid var(--line-soft)' }}>
                  <div style={{ aspectRatio: '1/1', background: `url(${g.img}) center/cover no-repeat, var(--surface-1)` }} />
                  <div style={{ padding: '16px 14px' }}>
                    <div style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 13, color: 'var(--ink)', marginBottom: 4 }}>{g.n}</div>
                    <div style={{ fontFamily: sans, fontSize: 11, color: 'var(--ink-mute)', marginBottom: 12, lineHeight: 1.5 }}>{g.d}</div>
                    <div style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 15, color: 'var(--ink)', marginBottom: 12 }}>{g.p}</div>
                    <div style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid var(--line)', borderRadius: 2 }}>
                      <button style={qtyBtn} onClick={() => setGoodsQty(prev => prev.map((q, j) => j === i ? Math.max(0, q - 1) : q))}>−</button>
                      <div style={{ minWidth: 28, textAlign: 'center', fontFamily: serifKR, fontSize: 14, color: 'var(--ink)' }}>{goodsQty[i]}</div>
                      <button style={qtyBtn} onClick={() => setGoodsQty(prev => prev.map((q, j) => j === i ? q + 1 : q))}>+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={handleModalConfirm}
              style={{ width: '100%', height: 52, background: 'var(--ink)', color: '#fff', border: 0, fontFamily: serifKR, fontWeight: 500, fontSize: 15, letterSpacing: '.14em', cursor: 'pointer', marginBottom: 12, transition: 'opacity 0.2s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.88'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
            >
              선택한 굿즈 추가하고 결제하기
            </button>
            <button
              onClick={handleModalSkip}
              style={{ width: '100%', height: 48, background: 'transparent', color: 'var(--ink-mute)', border: '1px solid var(--line-soft)', fontFamily: sans, fontWeight: 600, fontSize: 11, letterSpacing: '.22em', cursor: 'pointer' }}
            >
              다음에 살게요 →
            </button>
          </div>
        </div>
      )}

      <div style={{ borderBottom: '1px solid var(--line-soft)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '20px 48px', display: 'flex', alignItems: 'center', gap: 12 }}>
          <span onClick={() => go?.('home')} style={{ fontFamily: sans, fontSize: 11, letterSpacing: '.18em', color: 'var(--ink-mute)', cursor: 'pointer' }}>HOME</span>
          <span style={{ color: 'var(--ink-mute-2)' }}>/</span>
          <span onClick={() => onNavSection ? onNavSection('collection') : go?.('home')} style={{ fontFamily: sans, fontSize: 11, letterSpacing: '.18em', color: 'var(--ink-mute)', cursor: 'pointer' }}>COLLECTION</span>
          <span style={{ color: 'var(--ink-mute-2)' }}>/</span>
          <span style={{ fontFamily: sans, fontSize: 11, letterSpacing: '.18em', color: 'var(--ink)' }}>{p.name.toUpperCase()}</span>
        </div>
      </div>

      <section style={{ padding: '64px 48px 96px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '62fr 38fr', gap: 80, alignItems: 'start' }}>
          <div>
            {/* Image slider */}
            <div style={{ aspectRatio: '720/820', position: 'relative', overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}>
              {/* Sliding strip */}
              <div style={{
                display: 'flex',
                width: `${images.length * 100}%`,
                height: '100%',
                transform: `translateX(-${imgIndex * (100 / images.length)}%)`,
                transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
              }}>
                {images.map((src, i) => (
                  <div key={i} style={{ width: `${100 / images.length}%`, height: '100%', background: `url(${src}) center/cover no-repeat, var(--surface-1)`, flexShrink: 0 }} />
                ))}
              </div>
              {/* Chips */}
              <div style={{ position: 'absolute', top: 24, left: 24, display: 'flex', gap: 8, zIndex: 1 }}>
                {p.tag && <ChipDark>{p.tag}</ChipDark>}
                <ChipCream>{p.abv}</ChipCream>
              </div>
              {/* Arrows */}
              <button
                onClick={() => setImgIndex(i => (i - 1 + images.length) % images.length)}
                style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', width: 40, height: 40, background: 'rgba(255,255,255,0.85)', border: 0, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: 999, zIndex: 1 }}
              >
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 2L3 6L7 10" /></svg>
              </button>
              <button
                onClick={() => setImgIndex(i => (i + 1) % images.length)}
                style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', width: 40, height: 40, background: 'rgba(255,255,255,0.85)', border: 0, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: 999, zIndex: 1 }}
              >
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 2L9 6L5 10" /></svg>
              </button>
            </div>
            {/* Thumbnails */}
            <div style={{ marginTop: 16, display: 'flex', gap: 12 }}>
              {images.map((src, i) => (
                <div key={i} onClick={() => setImgIndex(i)} style={{ width: 84, height: 84, background: `url(${src}) center/cover no-repeat, var(--surface-1)`, border: i === imgIndex ? '1.5px solid var(--ink)' : '1px solid var(--line-soft)', cursor: 'pointer' }} />
              ))}
            </div>
          </div>

          <aside style={{ paddingTop: 12, display: 'flex', flexDirection: 'column', gap: 24 }}>
            <Eyebrow>SODAM COLLECTION · 탁주 · 삼양주</Eyebrow>
            <h1 style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 56, lineHeight: 1.05, letterSpacing: '-0.025em', color: 'var(--ink)', margin: 0 }}>{p.name}</h1>
            <div style={{ fontFamily: sans, fontSize: 13, letterSpacing: '.16em', color: 'var(--ink-mute)', textTransform: 'uppercase' }}>
              Premium 탁주 · {p.abv} · {p.vol}
            </div>
            <p style={{ fontFamily: serifKR, fontWeight: 400, fontSize: 16, lineHeight: 1.85, color: 'var(--ink-3)', margin: 0, wordBreak: 'keep-all' }}>{p.longDesc}</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, paddingTop: 8 }}>
              <div style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 36, color: 'var(--ink)' }}>{p.price}</div>
              <ChipWheat>IN STOCK</ChipWheat>
            </div>
            <hr style={{ border: 0, borderTop: '1px solid var(--line-soft)', margin: '8px 0' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              <div style={{ fontFamily: sans, fontWeight: 700, fontSize: 10, letterSpacing: '.22em', color: 'var(--ink-mute)' }}>수량</div>
              <Stepper n={qty} setN={setQty} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div style={{ fontFamily: sans, fontWeight: 700, fontSize: 10, letterSpacing: '.22em', color: 'var(--ink-mute)' }}>합계</div>
              <div style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 22, color: 'var(--ink)' }}>₩ {(p.priceN * qty).toLocaleString()}</div>
            </div>
            <button
              onClick={() => onAddToCart?.(p, qty)}
              style={{ marginTop: 8, width: '100%', height: 60, background: 'transparent', color: 'var(--ink)', border: '1.5px solid var(--ink)', fontFamily: serifKR, fontWeight: 500, fontSize: 16, letterSpacing: '.18em', cursor: 'pointer', transition: 'background 0.2s, color 0.2s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--ink)'; (e.currentTarget as HTMLElement).style.color = '#fff'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'var(--ink)'; }}
            >장바구니에 담기</button>
            <button
              onClick={handleBuyNow}
              style={{ width: '100%', height: 60, background: 'var(--ink)', color: '#fff', border: 0, fontFamily: serifKR, fontWeight: 500, fontSize: 16, letterSpacing: '.18em', cursor: 'pointer', transition: 'opacity 0.2s cubic-bezier(0.22, 1, 0.36, 1)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.88'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
            >바로 구매하기</button>
            <div style={{ marginTop: 6, display: 'flex', alignItems: 'center', gap: 8, fontFamily: sans, fontSize: 12, color: 'var(--ink-mute)' }}>
              <svg width="12" height="10" viewBox="0 0 14 12" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="0.5" y="2.5" width="7" height="6" /><path d="M7.5 4.5H11L13.5 7V8.5H7.5" />
                <circle cx="3" cy="9.5" r="1.2" /><circle cx="10" cy="9.5" r="1.2" />
              </svg>
              배송비 ₩ 4,000 · 5만원 이상 구매 시 무료 배송
            </div>
            <div style={{ marginTop: 16, padding: '24px 28px', background: 'var(--surface-cream-20)', border: '1px solid var(--surface-cream-50)' }}>
              <div style={{ fontFamily: sans, fontWeight: 700, fontSize: 10, letterSpacing: '.22em', color: 'var(--accent-1)', marginBottom: 10 }}>PAIRING · 함께 즐기기</div>
              <div style={{ fontFamily: serifKR, fontSize: 15, lineHeight: 1.7, color: 'var(--ink)' }}>{p.pairing}</div>
            </div>
          </aside>
        </div>
      </section>

      <section style={{ padding: '64px 48px 128px', maxWidth: 1280, margin: '0 auto', borderTop: '1px solid var(--line-soft)' }}>
        <div style={{ display: 'flex', gap: 40, paddingTop: 32, paddingBottom: 32, borderBottom: '1px solid var(--line-soft)' }}>
          {([['story', '스토리'], ['profile', '맛 프로파일'], ['brewing', '주조 정보']] as [string, string][]).map(([k, l]) => (
            <button key={k} onClick={() => setTab(k)} style={{ background: 'transparent', border: 0, cursor: 'pointer', padding: '4px 0', borderBottom: tab === k ? '1.5px solid var(--ink)' : '1.5px solid transparent', fontFamily: sans, fontWeight: 700, fontSize: 11, letterSpacing: '.22em', color: tab === k ? 'var(--ink)' : 'var(--ink-mute)' }}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        <div style={{ padding: '48px 0' }}>
          {tab === 'story' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80 }}>
              <div>
                <Eyebrow style={{ marginBottom: 18 }}>STORY · {p.name.toUpperCase()}</Eyebrow>
                <h3 style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 32, lineHeight: 1.2, color: 'var(--ink)', margin: 0, letterSpacing: '-0.02em' }}>술의 이야기</h3>
              </div>
              <div>
                <p style={{ fontFamily: serifKR, fontWeight: 400, fontSize: 17, lineHeight: 2.05, color: 'var(--ink-3)', margin: 0, wordBreak: 'keep-all' }}>{p.story || p.longDesc}</p>
                {p.quote && (
                  <blockquote style={{ marginTop: 40, padding: '32px 36px', background: 'var(--surface-cream-20)', border: '1px solid var(--surface-cream-50)', fontFamily: serifKR, fontWeight: 400, fontSize: 17, lineHeight: 1.95, color: 'var(--ink)', margin: '40px 0 0', wordBreak: 'keep-all' }}>
                    &ldquo;{p.quote}&rdquo;
                  </blockquote>
                )}
              </div>
            </div>
          )}
          {tab === 'profile' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80 }}>
              <div>
                <Eyebrow style={{ marginBottom: 18 }}>FLAVOR PROFILE</Eyebrow>
                <h3 style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 32, lineHeight: 1.2, color: 'var(--ink)', margin: 0, letterSpacing: '-0.02em' }}>맛의 기록</h3>
              </div>
              <div>
                <div style={{ padding: '32px 36px', background: 'var(--surface-1)', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 32, alignItems: 'center', boxShadow: 'var(--shadow-card)', marginBottom: 36 }}>
                  <div style={{ fontFamily: serifEN, fontWeight: 700, fontSize: 36, lineHeight: 1, color: 'var(--ink)', letterSpacing: '.04em' }}>{p.profileTag}</div>
                  <div>
                    <Eyebrow style={{ marginBottom: 8 }}>PROFILE TYPE</Eyebrow>
                    <div style={{ fontFamily: serifKR, fontSize: 16, lineHeight: 1.65, color: 'var(--ink)' }}>{p.profileLabel}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {([['단맛 · Sweet', p.profile.sweet], ['바디 · Body', p.profile.body], ['드라이 · Dry', p.profile.dry], ['향 · Aroma', p.profile.aroma], ['산미 · Acidity', p.profile.acidity || 2]] as [string, number][]).map(([k, v]) => (
                    <div key={k} style={{ display: 'grid', gridTemplateColumns: '160px 1fr 40px', alignItems: 'center', gap: 24 }}>
                      <div style={{ fontFamily: serifKR, fontSize: 14, color: 'var(--ink-3)' }}>{k}</div>
                      <div style={{ display: 'flex', gap: 6 }}>
                        {[1, 2, 3, 4, 5].map((i) => <div key={i} style={{ flex: 1, height: 4, background: i <= v ? 'var(--ink)' : 'var(--surface-2)' }} />)}
                      </div>
                      <div style={{ fontFamily: sans, fontSize: 11, letterSpacing: '.1em', color: 'var(--ink-mute)' }}>{v}/5</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {tab === 'brewing' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80 }}>
              <div>
                <Eyebrow style={{ marginBottom: 18 }}>BREWING DATA</Eyebrow>
                <h3 style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 32, lineHeight: 1.2, color: 'var(--ink)', margin: 0, letterSpacing: '-0.02em' }}>주조 정보</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: '1px solid var(--line-soft)' }}>
                {([
                  ['주재료 · Ingredient', p.ingredient || '쌀, 누룩'],
                  ['주종 · Type', p.kind || '프리미엄 탁주 · 삼양주'],
                  ['알코올 · ABV', p.abv],
                  ['용량 · Volume', p.vol],
                  ['발효 기간 · Fermentation', `${p.fermentDays || 90}일`],
                  ['숙성 · Aging', `옹기 · ${p.agedMonths || 3}개월 · 1°C 제어`],
                  ['살균 · Pasteurization', '비살균 · 생주'],
                  ['유통기한 · Best by', '냉장 90일 / 권장 1년'],
                ] as [string, string][]).map(([k, v], i) => (
                  <div key={k} style={{ padding: '24px 28px', borderBottom: i < 6 ? '1px solid var(--line-soft)' : 0, borderRight: i % 2 === 0 ? '1px solid var(--line-soft)' : 0 }}>
                    <div style={{ fontFamily: sans, fontWeight: 700, fontSize: 9, letterSpacing: '.22em', color: 'var(--ink-mute)', marginBottom: 8 }}>{k}</div>
                    <div style={{ fontFamily: sans, fontSize: 16, color: 'var(--ink)' }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <RelatedSlider title="함께 살펴보기 좋은 술" products={PRODUCTS.filter((x) => x.id !== p.id)} go={go} />
      <TraditionBanner />
    </main>
  );
};
