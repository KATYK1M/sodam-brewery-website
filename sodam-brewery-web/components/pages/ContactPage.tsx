'use client';
import React, { useState } from 'react';
import { Eyebrow } from '../common';
import { FieldLine } from './helpers';

const serifKR = 'var(--font-serif-kr)';
const sans = 'var(--font-sans)';

export const ContactPage = ({ go }: { go?: (page: string) => void }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', topic: 'general', subject: '', message: '', agree: false });
  const [submitted, setSubmitted] = useState(false);
  const setF = (k: string, v: string | boolean) => setForm((f) => ({ ...f, [k]: v }));
  const canSubmit = form.subject.trim() && form.message.trim() && form.email.trim() && form.agree;

  if (submitted) {
    return (
      <main style={{ padding: '120px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: 'calc(100vh - 144px)' }}>
        <div style={{ width: 64, height: 64, borderRadius: 999, border: '1px solid var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 32 }}>
          <svg width="24" height="18" viewBox="0 0 28 20" fill="none" stroke="var(--ink)" strokeWidth="1.6"><path d="M2 9 L11 18 L26 2" /></svg>
        </div>
        <Eyebrow style={{ marginBottom: 18 }}>INQUIRY RECEIVED · 문의 접수 완료</Eyebrow>
        <h1 style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 44, color: 'var(--ink)', margin: 0, letterSpacing: '-0.025em' }}>문의가 접수되었습니다</h1>
        <div style={{ marginTop: 40, display: 'flex', gap: 16 }}>
          <button onClick={() => go?.('home')} style={{ background: 'var(--ink)', color: '#fff', border: 0, padding: '14px 32px', fontFamily: sans, fontWeight: 700, fontSize: 11, letterSpacing: '.22em', cursor: 'pointer' }}>홈으로 →</button>
          <button onClick={() => go?.('faq')} style={{ background: 'transparent', color: 'var(--ink)', border: '1px solid var(--ink)', padding: '14px 32px', fontFamily: sans, fontWeight: 700, fontSize: 11, letterSpacing: '.22em', cursor: 'pointer' }}>FAQ 다시 보기</button>
        </div>
      </main>
    );
  }

  return (
    <main style={{ padding: '64px 48px 128px', maxWidth: 1180, margin: '0 auto', minHeight: 600 }}>
      <div style={{ borderBottom: '1px solid var(--line-soft)', paddingBottom: 48, marginBottom: 56 }}>
        <Eyebrow style={{ marginBottom: 14 }}>Q&A</Eyebrow>
        <h1 style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 52, lineHeight: 1.15, color: 'var(--ink)', margin: 0, letterSpacing: '-0.025em' }}>1:1 맞춤 문의</h1>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '0.7fr 1.3fr', gap: 80 }}>
        <aside>
          <div style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 22, color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 28 }}>고객센터</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {[
              { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>, label: '고객센터', value: '031-667-9982', sub: '평일 10:00 – 18:00 (주말 / 공휴일 휴무)' },
              { icon: <svg width="18" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="1" /><path d="M2 6L12 13L22 6" /></svg>, label: '이메일 문의', value: 'sodam.brewery@gmail.com', sub: '평일 24시간 내 답변' },
            ].map((item) => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 18 }}>
                <span style={{ width: 40, height: 40, flex: '0 0 40px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'var(--surface-cream-20)', border: '1px solid var(--surface-cream-50)', color: 'var(--accent-point)' }}>{item.icon}</span>
                <div>
                  <div style={{ fontFamily: sans, fontWeight: 700, fontSize: 10, letterSpacing: '.22em', color: 'var(--ink-mute)', marginBottom: 6 }}>{item.label}</div>
                  <div style={{ fontFamily: serifKR, fontWeight: 700, fontSize: item.label === '고객센터' ? 22 : 18, color: 'var(--ink)' }}>{item.value}</div>
                  <div style={{ marginTop: 4, fontFamily: sans, fontSize: 12, color: 'var(--ink-mute)' }}>{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40, padding: '24px 26px', background: 'var(--surface-1)', borderLeft: '2px solid var(--accent-point)' }}>
            <div style={{ fontFamily: sans, fontWeight: 700, fontSize: 10, letterSpacing: '.22em', color: 'var(--accent-point)', marginBottom: 10 }}>TIP</div>
            <div style={{ fontFamily: serifKR, fontSize: 14, lineHeight: 1.75, color: 'var(--ink-3)' }}>상세한 내용을 남겨주시면 더욱 빠르고 정확한 답변이 가능합니다.</div>
          </div>
        </aside>
        <section>
          <div style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 22, color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 28 }}>문의 내용</div>
          <div style={{ marginBottom: 32 }}>
            <div style={{ fontFamily: sans, fontWeight: 700, fontSize: 10, letterSpacing: '.22em', color: 'var(--ink-mute)', marginBottom: 12 }}>문의 유형</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {[['general', '일반 문의'], ['order', '주문·배송'], ['product', '제품 정보'], ['etc', '기타']].map(([k, l]) => {
                const on = form.topic === k;
                return (
                  <button key={k} onClick={() => setF('topic', k)} style={{ padding: '10px 18px', cursor: 'pointer', background: on ? 'var(--ink)' : 'transparent', color: on ? 'var(--bg)' : 'var(--ink-3)', border: on ? '1px solid var(--ink)' : '1px solid var(--line)', fontFamily: sans, fontWeight: 600, fontSize: 12, letterSpacing: '.06em', transition: 'all 0.2s' }}>
                    {l}
                  </button>
                );
              })}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, marginBottom: 28 }}>
            <FieldLine label="성함" placeholder="홍길동" value={form.name} onChange={(v) => setF('name', v)} />
            <FieldLine label="이메일 *" placeholder="sodam@example.com" type="email" value={form.email} onChange={(v) => setF('email', v)} />
          </div>
          <div style={{ marginBottom: 28 }}>
            <FieldLine full label="제목 *" placeholder="문의 제목을 입력해 주세요" value={form.subject} onChange={(v) => setF('subject', v)} />
          </div>
          <div style={{ marginBottom: 28 }}>
            <div style={{ fontFamily: sans, fontWeight: 700, fontSize: 10, letterSpacing: '.22em', color: 'var(--ink-mute)', marginBottom: 10 }}>문의 내용 *</div>
            <textarea placeholder="상세한 내용을 남겨주시면 더욱 빠르고 정확한 답변이 가능합니다." value={form.message} onChange={(e) => setF('message', e.target.value)} style={{ width: '100%', minHeight: 200, padding: 18, border: '1px solid var(--line)', background: 'var(--surface-1)', fontFamily: sans, fontSize: 14, lineHeight: 1.75, color: 'var(--ink)', outline: 0, resize: 'vertical' }} />
          </div>
          <label style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 36, cursor: 'pointer' }}>
            <input type="checkbox" checked={form.agree} onChange={(e) => setF('agree', e.target.checked)} style={{ marginTop: 4, accentColor: 'var(--ink)' }} />
            <div style={{ fontFamily: sans, fontSize: 13, lineHeight: 1.6, color: 'var(--ink-3)' }}>개인정보 수집 및 이용에 동의합니다. *</div>
          </label>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'flex-end' }}>
            <button onClick={() => go?.('faq')} style={{ background: 'transparent', color: 'var(--ink)', border: '1px solid var(--ink)', padding: '14px 30px', fontFamily: sans, fontWeight: 700, fontSize: 11, letterSpacing: '.22em', cursor: 'pointer' }}>취소</button>
            <button disabled={!canSubmit} onClick={() => { setSubmitted(true); window.scrollTo({ top: 0, behavior: 'auto' }); }} style={{ background: canSubmit ? 'var(--ink)' : 'var(--surface-2)', color: canSubmit ? '#fff' : 'var(--ink-mute)', border: 0, padding: '14px 36px', fontFamily: sans, fontWeight: 700, fontSize: 11, letterSpacing: '.22em', cursor: canSubmit ? 'pointer' : 'not-allowed' }}>
              문의 보내기 →
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};
