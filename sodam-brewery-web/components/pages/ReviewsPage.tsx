'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Eyebrow } from '../common';

const serifKR = 'var(--font-serif-kr)';
const serifEN = 'var(--font-serif-en)';
const sans = 'var(--font-sans)';

const REVIEWS = [
  { rating: 5, channel: '온라인', product: '발간빛', img: '/assets/balganbit.png', body: '자색 고구마의 발간빛을 가진 탁주~~\n아마도 스위트한 탁주에 길들여진 사람들은 이게 무슨 맛인가 할 수도..단 거 안 좋아하는 나한테는 잘 맞았는데 말이다^^', user: 'sh***', initials: 'SH', date: '2025.10.29' },
  { rating: 4, channel: '오프라인', product: '꽃달', title: '꽃달 맛있어요!', body: '저는 너무 도수 높은 술은 잘 못 마셔서 시음했을 때 꽃달이 입에 가장 잘 맞았어요!\n10도치고는 술술 잘 들어가는 편이에요!', user: 'mj***', initials: 'MJ', date: '2025.02.08' },
  { rating: 5, channel: '온라인', product: '꽃달', img: '/assets/kkoddal.jpg', body: '꽃달은 다른 막걸리보다 위에 뜨는 맑은 부분 비율이 많은 느낌이었어요. 저는 밑에 부분을 별로 안 좋아하는데 여기 막걸리는 섞어서 먹어도 맛있더라구요.', user: 'hw***', initials: 'HW', date: '2024.05.13' },
  { rating: 4.5, channel: '오프라인', product: '너랑나랑 13도', title: '너랑나랑 13도 추천드립니다', body: '시음하러 갔을 때 샤워 후 넷플릭스 보면서 마시기 좋다고 하셨는데 그 말이 딱인 것 같아요', user: 'es***', initials: 'ES', date: '2025.7.25' },
  { rating: 5, channel: '온라인', product: '꽃달', imgGrid: true, body: '', user: 'ms***', initials: 'MS', date: '2025.01.09' },
];

type ReviewItem = typeof REVIEWS[0];

const StarRow = ({ rating, size = 13 }: { rating: number; size?: number }) => {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <div style={{ display: 'inline-flex', gap: 2, color: 'var(--ink)' }}>
      {[1, 2, 3, 4, 5].map((i) => {
        const filled = i <= full;
        const isHalf = !filled && i === full + 1 && half;
        return <span key={i} style={{ fontSize: size, lineHeight: 1, color: filled || isHalf ? 'var(--ink)' : 'var(--line)', letterSpacing: 1 }}>{filled || isHalf ? '★' : '☆'}</span>;
      })}
    </div>
  );
};

const ReviewModal = ({ review, onClose }: { review: ReviewItem | null; onClose: () => void }) => {
  useEffect(() => {
    if (!review) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [review, onClose]);

  if (!review) return null;
  const r = review;
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(27,28,26,0.55)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 32, animation: 'fadeIn 0.2s cubic-bezier(0.22,1,0.36,1)' }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: 'var(--bg)', maxWidth: 720, width: '100%', maxHeight: 'calc(100vh - 64px)', overflowY: 'auto', position: 'relative', boxShadow: '0 24px 64px rgba(0,0,0,0.25)', animation: 'modalIn 0.3s cubic-bezier(0.22,1,0.36,1)' }}>
        <button onClick={onClose} aria-label="닫기" style={{ position: 'absolute', top: 20, right: 20, zIndex: 2, width: 36, height: 36, borderRadius: 999, border: 0, background: 'var(--surface-1)', color: 'var(--ink)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M2 2L12 12" /><path d="M12 2L2 12" /></svg>
        </button>
        {(r.img || r.imgGrid) && (
          r.imgGrid
            ? <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--surface-1)', aspectRatio: '16/10' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'url(/assets/kkoddal.jpg) center/cover no-repeat', filter: 'saturate(0.85)' }} />
                <div style={{ position: 'absolute', right: 32, bottom: 0, top: 0, width: '45%', background: 'url(/assets/rice.jpeg) center/cover no-repeat', filter: 'saturate(0.7)' }} />
              </div>
            : <div style={{ aspectRatio: '16/10', background: `url(${r.img}) center/cover no-repeat, var(--surface-1)` }} />
        )}
        <div style={{ padding: '40px 48px 48px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, gap: 16 }}>
            <StarRow rating={r.rating} size={18} />
            <span style={{ padding: '6px 14px', background: r.channel === '온라인' ? 'var(--surface-cream-20)' : 'var(--surface-cream-50)', color: 'var(--accent-1)', fontFamily: sans, fontWeight: 700, fontSize: 11, letterSpacing: '.16em' }}>{r.channel} 구매</span>
          </div>
          {(r.title || r.product) && <h2 style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 30, color: 'var(--ink)', margin: '0 0 24px', letterSpacing: '-0.02em' }}>{r.title || r.product}</h2>}
          {r.body && <p style={{ fontFamily: sans, fontSize: 15, lineHeight: 1.95, color: 'var(--ink-3)', margin: 0, whiteSpace: 'pre-line' }}>{r.body}</p>}
          <div style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--line-soft)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ width: 40, height: 40, borderRadius: 999, background: 'var(--surface-cream-50)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: sans, fontWeight: 700, fontSize: 12, color: 'var(--accent-1)' }}>{r.initials}</span>
              <div>
                <div style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 16, color: 'var(--ink)' }}>{r.user}</div>
                {r.product && <div style={{ marginTop: 2, fontFamily: sans, fontSize: 12, color: 'var(--ink-mute)' }}>{r.product} · {r.channel} 구매</div>}
              </div>
            </div>
            <span style={{ fontFamily: sans, fontSize: 12, letterSpacing: '.04em', color: 'var(--ink-mute)' }}>{r.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReviewCard = ({ r, onOpen }: { r: ReviewItem; onOpen: (r: ReviewItem) => void }) => (
  <article style={{ background: 'var(--bg)', boxShadow: 'var(--shadow-card)', padding: 24, display: 'flex', flexDirection: 'column', height: '100%', minHeight: 440, cursor: 'pointer', transition: 'transform 0.3s cubic-bezier(0.22,1,0.36,1)' }}
    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
    onClick={() => onOpen(r)}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
      <StarRow rating={r.rating} size={14} />
      <span style={{ padding: '4px 10px', background: r.channel === '온라인' ? 'var(--surface-cream-20)' : 'var(--surface-cream-50)', color: 'var(--accent-1)', fontFamily: sans, fontWeight: 700, fontSize: 10, letterSpacing: '.1em' }}>{r.channel}</span>
    </div>
    {r.img && <div style={{ aspectRatio: '4/3', background: `url(${r.img}) center/cover no-repeat, var(--surface-1)`, marginBottom: 16 }} />}
    {r.imgGrid && (
      <div style={{ aspectRatio: '4/3', marginBottom: 16, position: 'relative', overflow: 'hidden', background: 'var(--surface-1)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'url(/assets/kkoddal.jpg) center/cover no-repeat', filter: 'saturate(0.85)' }} />
        <div style={{ position: 'absolute', right: 16, bottom: 0, top: 0, width: '45%', background: 'url(/assets/rice.jpeg) center/cover no-repeat', filter: 'saturate(0.7)' }} />
      </div>
    )}
    {(r.title || r.product) && <div style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 17, color: 'var(--ink)', marginBottom: 12, letterSpacing: '-0.01em' }}>{r.title || r.product}</div>}
    {r.body && <p style={{ fontFamily: sans, fontSize: 13, lineHeight: 1.85, color: 'var(--ink-3)', margin: 0, whiteSpace: 'pre-line', flex: 1, display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical', overflow: 'hidden' } as React.CSSProperties}>{r.body}</p>}
    <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid var(--line-soft)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
        <span style={{ width: 28, height: 28, borderRadius: 999, background: 'var(--surface-cream-50)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: sans, fontWeight: 700, fontSize: 10, color: 'var(--accent-1)', flex: '0 0 28px' }}>{r.initials}</span>
        <span style={{ fontFamily: sans, fontSize: 13, color: 'var(--ink-3)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.user}</span>
        <span style={{ fontFamily: sans, fontSize: 11, letterSpacing: '.04em', color: 'var(--ink-mute)', whiteSpace: 'nowrap' }}>· {r.date}</span>
      </div>
    </div>
  </article>
);

export const ReviewsPage = ({ go, loggedIn, autoOpenWrite, onConsumeAutoOpen, onRequireLogin }: {
  go?: (page: string) => void;
  loggedIn?: boolean;
  autoOpenWrite?: boolean;
  onConsumeAutoOpen?: () => void;
  onRequireLogin?: () => void;
}) => {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [code, setCode] = useState(['', '', '', '']);
  const [activeReview, setActiveReview] = useState<ReviewItem | null>(null);
  const [writeChannel, setWriteChannel] = useState<string | null>(null);
  const inputs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

  useEffect(() => {
    if (autoOpenWrite) { setWriteChannel('online'); onConsumeAutoOpen?.(); }
  }, [autoOpenWrite, onConsumeAutoOpen]);

  const codeFilled = code.every((c) => c.length === 1);
  const openOnlineWrite = () => { if (loggedIn) setWriteChannel('online'); else if (onRequireLogin) onRequireLogin(); else go?.('login'); };

  const searchTerm = search.trim();
  const searchHasMatch = searchTerm ? REVIEWS.some((r) => r.product.includes(searchTerm)) : false;

  const filtered = REVIEWS.filter((r) => {
    if (filter === 'online' && r.channel !== '온라인') return false;
    if (filter === 'offline' && r.channel !== '오프라인') return false;
    if (filter === 'photo' && !r.img && !r.imgGrid) return false;
    if (searchHasMatch && !r.product.includes(searchTerm)) return false;
    return true;
  });

  const setDigit = (i: number, v: string) => {
    if (!/^[0-9]?$/.test(v)) return;
    const next = [...code]; next[i] = v; setCode(next);
    if (v && i < 3) inputs[i + 1].current?.focus();
  };

  const avgRating = (REVIEWS.reduce((a, r) => a + r.rating, 0) / REVIEWS.length).toFixed(1);

  return (
    <main style={{ background: 'var(--bg)', minHeight: 600 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 48px 96px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 64, alignItems: 'flex-start', marginBottom: 64 }}>
          <div>
            <Eyebrow style={{ marginBottom: 16 }}>후기</Eyebrow>
            <h1 style={{ fontFamily: serifEN, fontWeight: 700, fontSize: 84, lineHeight: 1, color: 'var(--ink)', margin: '0 0 32px', letterSpacing: '-0.025em' }}>Reviews</h1>
            <p style={{ fontFamily: sans, fontSize: 14, lineHeight: 1.95, color: 'var(--ink-3)', margin: 0, maxWidth: 560 }}>
              <strong style={{ color: 'var(--ink)' }}>어떤 점이 가장 인상 깊으셨나요?</strong><br />
              당신의 솔직한 감상은 우리 술이 더 깊어지는 데에 소중한 밑거름이 됩니다.
            </p>
          </div>
          <aside style={{ background: 'var(--surface-1)', padding: '24px 32px', minWidth: 240, alignSelf: 'flex-start' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <span style={{ fontFamily: sans, fontWeight: 700, fontSize: 11, letterSpacing: '.18em', color: 'var(--ink-mute)' }}>별점</span>
              <StarRow rating={parseFloat(avgRating)} size={14} />
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
              <span style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 44, color: 'var(--ink)', lineHeight: 1 }}>{avgRating}</span>
              <span style={{ fontFamily: sans, fontSize: 14, color: 'var(--ink-mute)' }}>/ 5.0</span>
            </div>
            <div style={{ marginTop: 12, fontFamily: sans, fontSize: 12, color: 'var(--ink-mute)' }}>총 {REVIEWS.length}개의 리뷰</div>
          </aside>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 72 }}>
          <div style={{ background: 'var(--surface-cream)', padding: 40 }}>
            <h2 style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 24, color: 'var(--ink)', margin: '0 0 12px' }}>축제 및 양조장 방문 리뷰</h2>
            <p style={{ fontFamily: sans, fontSize: 13, lineHeight: 1.8, color: 'var(--ink-3)', margin: '0 0 48px' }}>직접 현장의 분위기를 즐기셨나요?<br />방문하신 장소에서의 특별한 기록을 남겨주세요.</p>
            <div style={{ fontFamily: sans, fontWeight: 600, fontSize: 11, letterSpacing: '.06em', color: 'var(--ink-3)', marginBottom: 12 }}>양조장에서 제공받은 4자리 인증 코드를 입력해 주세요.</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ display: 'flex', gap: 10 }}>
                {[0, 1, 2, 3].map((i) => (
                  <input key={i} ref={inputs[i]} value={code[i]} maxLength={1} onChange={(e) => setDigit(i, e.target.value)}
                    style={{ width: 44, height: 52, textAlign: 'center', fontFamily: serifKR, fontWeight: 700, fontSize: 20, color: 'var(--ink)', background: 'var(--bg)', border: '1px solid rgba(0,0,0,0.05)', outline: 0 }} />
                ))}
              </div>
              <button disabled={!codeFilled} onClick={() => codeFilled && setWriteChannel('offline')}
                style={{ padding: '14px 28px', background: codeFilled ? 'var(--ink)' : 'var(--surface-2)', color: codeFilled ? '#fff' : 'var(--ink-mute)', border: 0, fontFamily: sans, fontWeight: 700, fontSize: 12, letterSpacing: '.14em', cursor: codeFilled ? 'pointer' : 'not-allowed' }}>
                인증하기 →
              </button>
            </div>
          </div>
          <div style={{ background: 'var(--surface-1)', padding: 40, display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 24, color: 'var(--ink)', margin: '0 0 12px' }}>온라인으로 구매하셨나요?</h2>
            <p style={{ fontFamily: sans, fontSize: 13, lineHeight: 1.8, color: 'var(--ink-3)', margin: '0 0 36px' }}>본 리뷰는 온라인 구매 고객님에 한해 작성 가능합니다.<br />주문 내역을 기반으로 자동 검증됩니다.</p>
            <button onClick={openOnlineWrite} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '12px 20px', alignSelf: 'flex-start', background: 'var(--bg)', color: 'var(--ink)', border: '1px solid var(--ink)', fontFamily: serifKR, fontWeight: 700, fontSize: 12, cursor: 'pointer' }}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M2 14H4L13 5L11 3L2 12V14Z" /><path d="M10 4L12 6" /></svg>
              온라인 리뷰 작성하기
            </button>
            <div style={{ marginTop: 'auto', paddingTop: 24, display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: sans, fontSize: 11, letterSpacing: '.1em', color: 'var(--ink-mute)', opacity: 0.5 }}>
              <svg width="11" height="13" viewBox="0 0 12 14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="6" width="10" height="7" rx="1.5" /><path d="M4 6V4a2 2 0 0 1 4 0v2" /></svg>
              로그인 필요
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40, gap: 16, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', gap: 10 }}>
            {[{ k: 'all', l: '전체 리뷰' }, { k: 'online', l: '온라인 구매' }, { k: 'offline', l: '현장 구매' }, { k: 'photo', l: '사진 리뷰' }].map((f) => {
              const on = filter === f.k;
              return <button key={f.k} onClick={() => setFilter(f.k)} style={{ padding: '12px 22px', cursor: 'pointer', background: on ? 'var(--ink)' : 'var(--surface-1)', color: on ? 'var(--bg)' : 'var(--ink-3)', border: 0, fontFamily: sans, fontWeight: 600, fontSize: 12, letterSpacing: '.06em', transition: 'all 0.2s' }}>{f.l}</button>;
            })}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 18px', background: 'var(--surface-1)', minWidth: 280 }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="var(--ink-mute)" strokeWidth="1.4"><circle cx="6" cy="6" r="4.5" /><path d="M9.5 9.5L13 13" /></svg>
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="전통주 이름으로 검색해 보세요." style={{ flex: 1, border: 0, background: 'transparent', outline: 0, fontFamily: sans, fontSize: 13, color: 'var(--ink)' }} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, gridAutoRows: '1fr', alignItems: 'stretch' }}>
          {filtered.map((r, i) => <div key={i} style={{ height: '100%' }}><ReviewCard r={r} onOpen={setActiveReview} /></div>)}
        </div>
      </div>

      <ReviewModal review={activeReview} onClose={() => setActiveReview(null)} />
    </main>
  );
};
