'use client';
import React from 'react';
import { Eyebrow } from '../common';

const serifKR = 'var(--font-serif-kr)';
const serifEN = 'var(--font-serif-en)';
const sans = 'var(--font-sans)';

export const MyPage = ({ go, onLogout }: { go?: (page: string) => void; onLogout?: () => void }) => {
  const orders = [
    { no: 'SD-2026-3892', date: '2026.05.15', items: '발간빛 외 1건', total: 22000, status: '배송 완료' },
    { no: 'SD-2026-2710', date: '2026.04.02', items: '꽃달 외 2건', total: 36000, status: '배송 완료' },
    { no: 'SD-2025-9821', date: '2025.12.28', items: '너랑나랑 17도', total: 14000, status: '배송 완료' },
  ];
  const stats = [{ k: '진행 중 주문', v: '0' }, { k: '전체 주문', v: orders.length }, { k: '작성한 리뷰', v: '2' }];

  return (
    <main style={{ background: 'var(--bg)', minHeight: 600 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 48px 128px' }}>
        <div style={{ borderBottom: '1px solid var(--line-soft)', paddingBottom: 40, marginBottom: 48 }}>
          <Eyebrow style={{ marginBottom: 28 }}>MY PAGE · 마이페이지</Eyebrow>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32, flexWrap: 'wrap' }}>
            <h1 style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 44, lineHeight: 1.15, color: 'var(--ink)', margin: 0, letterSpacing: '-0.025em' }}>
              안녕하세요, <span style={{ color: 'var(--accent-point)' }}>소담 회원님</span>
            </h1>
            <button onClick={onLogout} style={{ background: 'transparent', color: 'var(--ink)', border: '1px solid var(--ink)', padding: '12px 24px', cursor: 'pointer', fontFamily: sans, fontWeight: 700, fontSize: 11, letterSpacing: '.22em', transition: 'all 0.2s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--ink)'; (e.currentTarget as HTMLElement).style.color = '#fff'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'var(--ink)'; }}>
              로그아웃
            </button>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, marginBottom: 64, border: '1px solid var(--line-soft)' }}>
          {stats.map((s, i) => (
            <div key={s.k} style={{ padding: '32px 28px', textAlign: 'center', borderRight: i < stats.length - 1 ? '1px solid var(--line-soft)' : 0 }}>
              <Eyebrow style={{ marginBottom: 14 }}>{s.k}</Eyebrow>
              <div style={{ fontFamily: serifKR, fontWeight: 400, fontSize: 38, color: 'var(--ink)', letterSpacing: '-0.01em', lineHeight: 1 }}>{s.v}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 64 }}>
          <section>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 24 }}>
              <h2 style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 24, color: 'var(--ink)', margin: 0, letterSpacing: '-0.02em' }}>주문 내역</h2>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {orders.map((o, i) => (
                <li key={o.no} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto auto', gap: 24, alignItems: 'center', padding: '22px 0', borderTop: '1px solid var(--line-soft)', borderBottom: i === orders.length - 1 ? '1px solid var(--line-soft)' : 0 }}>
                  <div style={{ fontFamily: serifEN, fontWeight: 600, fontSize: 13, color: 'var(--ink-3)', letterSpacing: '.04em' }}>{o.date}</div>
                  <div>
                    <div style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 16, color: 'var(--ink)' }}>{o.items}</div>
                    <div style={{ marginTop: 4, fontFamily: sans, fontSize: 11, letterSpacing: '.06em', color: 'var(--ink-mute)' }}>주문번호 · {o.no}</div>
                  </div>
                  <span style={{ padding: '5px 12px', background: 'var(--surface-cream-20)', color: 'var(--accent-1)', fontFamily: sans, fontWeight: 700, fontSize: 10, letterSpacing: '.16em' }}>{o.status}</span>
                  <div style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 18, color: 'var(--ink)' }}>₩ {o.total.toLocaleString()}</div>
                </li>
              ))}
            </ul>
          </section>
          <aside style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ background: 'var(--surface-cream-20)', border: '1px solid var(--surface-cream-50)', padding: 28 }}>
              <Eyebrow style={{ color: 'var(--accent-point)', marginBottom: 10 }}>SODAM MEMBER</Eyebrow>
              <div style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 22, color: 'var(--ink)', marginBottom: 8 }}>무료 배송 혜택</div>
              <p style={{ fontFamily: sans, fontSize: 13, lineHeight: 1.7, color: 'var(--ink-3)', margin: 0 }}>5만원 이상 주문 시 무료 배송이 적용됩니다.</p>
            </div>
            <div>
              <h3 style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 18, color: 'var(--ink)', margin: '0 0 16px', letterSpacing: '-0.01em' }}>바로가기</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[{ label: '리뷰 · 문의 내역', target: 'myreviews' }, { label: '내 정보 관리', target: 'editprofile' }].map(({ label, target }) => (
                  <li key={label}>
                    <span onClick={() => target && go?.(target)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0', borderBottom: '1px solid var(--line-soft)', fontFamily: serifKR, fontSize: 15, color: 'var(--ink-3)', cursor: target ? 'pointer' : 'default', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => { if (target) (e.currentTarget as HTMLElement).style.color = 'var(--ink)'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--ink-3)'; }}>
                      {label}
                      <svg width="8" height="12" viewBox="0 0 8 12" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M2 1L7 6L2 11" /></svg>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};
