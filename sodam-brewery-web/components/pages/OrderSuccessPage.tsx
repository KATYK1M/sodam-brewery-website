'use client';
import React from 'react';
import { HanjaStamp, Eyebrow } from '../common';

const serifKR = 'var(--font-serif-kr)';
const sans = 'var(--font-sans)';

export const OrderSuccessPage = ({ orderNumber, total, go }: { orderNumber?: string; total?: number; go?: (page: string) => void }) => (
  <main style={{ padding: '120px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: 'calc(100vh - 144px)', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
    <HanjaStamp size={420} opacity={0.05} rotate={-4} style={{ position: 'absolute', right: -80, top: 80 }} />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ width: 72, height: 72, borderRadius: 999, border: '1px solid var(--ink)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="28" height="20" viewBox="0 0 28 20" fill="none" stroke="var(--ink)" strokeWidth="1.6"><path d="M2 9 L11 18 L26 2" /></svg>
      </div>
      <Eyebrow style={{ marginTop: 36 }}>ORDER CONFIRMED · 주문 완료</Eyebrow>
      <h1 style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 48, color: 'var(--ink)', margin: '18px 0 0', letterSpacing: '-0.025em', lineHeight: 1.15 }}>주문이 접수되었습니다</h1>
      <p style={{ marginTop: 18, fontFamily: serifKR, fontSize: 16, lineHeight: 1.85, color: 'var(--ink-mute)', maxWidth: 480, margin: '18px auto 0' }}>
        정성으로 빚은 술은 서두르지 않습니다.<br />여러분의 기다림에 가장 깊은 맛으로 보답하겠습니다.
      </p>
      <div style={{ marginTop: 44, padding: '28px 0', background: 'var(--surface-1)', boxShadow: 'var(--shadow-card)', display: 'inline-flex' }}>
        <div style={{ padding: '0 52px', textAlign: 'center', borderRight: '1px solid var(--line-soft)' }}>
          <div style={{ fontFamily: sans, fontWeight: 700, fontSize: 10, letterSpacing: '.22em', color: 'var(--ink-mute)', whiteSpace: 'nowrap' }}>ORDER NO</div>
          <div style={{ marginTop: 10, fontFamily: serifKR, fontSize: 20, color: 'var(--ink)', whiteSpace: 'nowrap' }}>{orderNumber || 'SD-2026-0518'}</div>
        </div>
        <div style={{ padding: '0 52px', textAlign: 'center', borderRight: '1px solid var(--line-soft)' }}>
          <div style={{ fontFamily: sans, fontWeight: 700, fontSize: 10, letterSpacing: '.22em', color: 'var(--ink-mute)', whiteSpace: 'nowrap' }}>TOTAL</div>
          <div style={{ marginTop: 10, fontFamily: serifKR, fontSize: 20, color: 'var(--ink)', whiteSpace: 'nowrap' }}>₩ {(total || 0).toLocaleString()}</div>
        </div>
        <div style={{ padding: '0 52px', textAlign: 'center' }}>
          <div style={{ fontFamily: sans, fontWeight: 700, fontSize: 10, letterSpacing: '.22em', color: 'var(--ink-mute)', whiteSpace: 'nowrap' }}>출고 예정</div>
          <div style={{ marginTop: 10, fontFamily: serifKR, fontSize: 20, color: 'var(--ink)', whiteSpace: 'nowrap' }}>주문일부터 2~4일</div>
        </div>
      </div>
      <div style={{ marginTop: 44, display: 'flex', gap: 16, justifyContent: 'center' }}>
        <button onClick={() => go?.('home')} style={{ background: 'var(--ink)', color: '#fff', border: 0, padding: '16px 36px', fontFamily: sans, fontWeight: 700, fontSize: 11, letterSpacing: '.22em', cursor: 'pointer' }}>홈으로 →</button>
        <button onClick={() => go?.('mypage')} style={{ background: 'transparent', color: 'var(--ink)', border: '1px solid var(--ink)', padding: '16px 36px', fontFamily: sans, fontWeight: 700, fontSize: 11, letterSpacing: '.22em', cursor: 'pointer' }}>주문 내역 보기</button>
      </div>
    </div>
  </main>
);
