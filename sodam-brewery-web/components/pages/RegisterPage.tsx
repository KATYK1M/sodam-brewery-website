'use client';
import React, { useState, useEffect } from 'react';
import { Eyebrow } from '../common';
import { FieldLogin } from './helpers';

const serifKR = 'var(--font-serif-kr)';
const sans = 'var(--font-sans)';

export const RegisterPage = ({ go, onRegister }: { go?: (page: string) => void; onRegister?: (email: string) => void }) => {
  const [form, setForm] = useState({ email: '', pwd: '', pwdConfirm: '', name: '', phone: '', birth: '', agreeAll: false, agreeTos: false, agreePrivacy: false, agreeAge: false, agreeMarketing: false });
  const [step, setStep] = useState('write');
  const setF = (k: string, v: string | boolean) => setForm((f) => ({ ...f, [k]: v }));

  useEffect(() => {
    const all = form.agreeTos && form.agreePrivacy && form.agreeAge && form.agreeMarketing;
    if (all !== form.agreeAll) setForm((f) => ({ ...f, agreeAll: all }));
  }, [form.agreeTos, form.agreePrivacy, form.agreeAge, form.agreeMarketing]);

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const pwdOk = form.pwd.length >= 8;
  const pwdMatch = form.pwd && form.pwd === form.pwdConfirm;
  const canSubmit = emailOk && pwdOk && pwdMatch && form.name.trim() && form.birth.trim() && form.phone.trim() && form.agreeTos && form.agreePrivacy && form.agreeAge;

  if (step === 'done') {
    return (
      <main style={{ position: 'relative', minHeight: 'calc(100vh - 80px - 64px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '96px 32px', textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'url(/assets/background.png) center/cover no-repeat', opacity: 0.18 }} />
        <div style={{ position: 'relative', maxWidth: 480 }}>
          <div style={{ width: 64, height: 64, borderRadius: 999, border: '1px solid var(--ink)', margin: '0 auto 28px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="24" height="18" viewBox="0 0 28 20" fill="none" stroke="var(--ink)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9 L11 18 L26 2" /></svg>
          </div>
          <Eyebrow style={{ marginBottom: 16 }}>WELCOME · 환영합니다</Eyebrow>
          <h1 style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 40, lineHeight: 1.2, color: 'var(--ink-2)', margin: 0 }}>소담의 한 잔에<br />함께해 주셔서 감사합니다</h1>
          <div style={{ marginTop: 40, display: 'flex', gap: 12, justifyContent: 'center' }}>
            <button onClick={() => go?.('home')} style={{ background: 'var(--ink)', color: '#fff', border: 0, padding: '14px 32px', fontFamily: sans, fontWeight: 700, fontSize: 11, letterSpacing: '.22em', cursor: 'pointer' }}>홈으로 →</button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main style={{ position: 'relative', minHeight: 'calc(100vh - 80px - 64px)', padding: '64px 32px 96px', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '20px 48px 0' }}>
          <button onClick={() => go?.('login')} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', border: 0, padding: '8px 4px', fontFamily: sans, fontWeight: 600, fontSize: 11, letterSpacing: '.22em', color: 'var(--ink-mute)', cursor: 'pointer', transition: 'color 0.2s' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--ink)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--ink-mute)'; }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 2L3 6L7 10" /><path d="M3 6H11" />
            </svg>
            이전
          </button>
        </div>
      </div>
      <div style={{ position: 'absolute', inset: 0, background: 'url(/assets/background.png) center/cover no-repeat', opacity: 0.14 }} />
      <div style={{ position: 'relative', width: 520, maxWidth: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <Eyebrow style={{ marginBottom: 14 }}>JOIN SODAM · 회원가입</Eyebrow>
          <h1 style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 40, lineHeight: 1.15, color: 'var(--ink-2)', margin: 0 }}>회원가입</h1>
        </div>
        <div style={{ background: 'rgba(250,249,245,0.92)', backdropFilter: 'blur(10px)', border: '1px solid rgba(61,48,40,0.1)', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', padding: 44 }}>
          <FieldLogin label="이메일 *" placeholder="sodam@example.com" value={form.email} onChange={(v) => setF('email', v)} />
          {form.email && !emailOk && <div style={{ marginTop: 6, fontFamily: sans, fontSize: 11, color: 'var(--danger)' }}>올바른 이메일 형식이 아닙니다.</div>}
          <div style={{ height: 24 }} />
          <FieldLogin label="비밀번호 * (8자 이상)" type="password" placeholder="••••••••" value={form.pwd} onChange={(v) => setF('pwd', v)} />
          {form.pwd && !pwdOk && <div style={{ marginTop: 6, fontFamily: sans, fontSize: 11, color: 'var(--danger)' }}>비밀번호는 8자 이상이어야 합니다.</div>}
          <div style={{ height: 24 }} />
          <FieldLogin label="비밀번호 확인 *" type="password" placeholder="••••••••" value={form.pwdConfirm} onChange={(v) => setF('pwdConfirm', v)} />
          {form.pwdConfirm && !pwdMatch && <div style={{ marginTop: 6, fontFamily: sans, fontSize: 11, color: 'var(--danger)' }}>비밀번호가 일치하지 않습니다.</div>}
          <div style={{ height: 24 }} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <FieldLogin label="이름 *" placeholder="홍길동" value={form.name} onChange={(v) => setF('name', v)} />
            <FieldLogin label="생년월일 *" placeholder="2000.01.01" value={form.birth} onChange={(v) => setF('birth', v)} />
          </div>
          <div style={{ height: 24 }} />
          <FieldLogin label="연락처 *" placeholder="010-0000-0000" value={form.phone} onChange={(v) => setF('phone', v)} />
          <div style={{ marginTop: 32, padding: '20px 22px', background: 'rgba(244,244,240,0.7)', border: '1px solid rgba(61,48,40,0.06)' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', paddingBottom: 14, marginBottom: 14, borderBottom: '1px solid rgba(61,48,40,0.08)' }}>
              <input type="checkbox" checked={form.agreeAll} onChange={(e) => {
                const checked = e.target.checked;
                setForm((f) => ({ ...f, agreeAll: checked, agreeTos: checked, agreePrivacy: checked, agreeAge: checked, agreeMarketing: checked }));
              }} style={{ accentColor: 'var(--ink)', width: 16, height: 16 }} />
              <span style={{ fontFamily: serifKR, fontSize: 15, fontWeight: 700, color: 'var(--ink)' }}>전체 동의</span>
            </label>
            {[
              { k: 'agreeTos', label: '이용약관 동의', required: true },
              { k: 'agreePrivacy', label: '개인정보 수집 및 이용 동의', required: true },
              { k: 'agreeAge', label: '만 19세 이상입니다', required: true },
              { k: 'agreeMarketing', label: '마케팅 정보 수신 동의', required: false },
            ].map((it) => (
              <label key={it.k} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', cursor: 'pointer' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <input type="checkbox" checked={!!(form as Record<string, boolean | string>)[it.k]} onChange={(e) => setF(it.k, e.target.checked)} style={{ accentColor: 'var(--ink)', width: 14, height: 14 }} />
                  <span style={{ fontFamily: sans, fontSize: 13, color: 'var(--ink-3)' }}>{it.label} <span style={{ fontSize: 10, color: it.required ? 'var(--accent-point)' : 'var(--ink-mute-2)' }}>({it.required ? '필수' : '선택'})</span></span>
                </span>
              </label>
            ))}
          </div>
          <button disabled={!canSubmit} onClick={() => { if (canSubmit) { setStep('done'); onRegister?.(form.email); } }} style={{ marginTop: 36, width: '100%', height: 56, background: canSubmit ? 'var(--ink-2)' : 'var(--surface-2)', color: canSubmit ? '#fff' : 'var(--ink-mute)', border: 0, fontFamily: serifKR, fontWeight: 500, fontSize: 15, letterSpacing: '.18em', cursor: canSubmit ? 'pointer' : 'not-allowed', transition: 'opacity 0.2s' }}>
            가입하기
          </button>
          <div style={{ marginTop: 24, textAlign: 'center', fontFamily: sans, fontSize: 12, color: 'rgba(61,48,40,0.5)' }}>
            이미 회원이신가요?{' '}
            <span onClick={() => go?.('login')} style={{ color: 'var(--ink)', borderBottom: '1px solid var(--ink)', cursor: 'pointer', letterSpacing: '.06em', fontWeight: 600, marginLeft: 5 }}>로그인 →</span>
          </div>
        </div>
      </div>
    </main>
  );
};
