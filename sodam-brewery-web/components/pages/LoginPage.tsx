'use client';
import React, { useState } from 'react';
import { FieldLogin } from './helpers';

const serifKR = 'var(--font-serif-kr)';
const sans = 'var(--font-sans)';

export const LoginPage = ({ go, onLogin }: { go?: (page: string) => void; onLogin?: () => void }) => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [showFindPw, setShowFindPw] = useState(false);
  const [findMethod, setFindMethod] = useState<'email' | 'phone'>('email');
  const [findValue, setFindValue] = useState('');
  const [findSent, setFindSent] = useState(false);

  function handleFindPwToggle() {
    setShowFindPw(v => !v);
    setFindValue('');
    setFindSent(false);
  }

  const socialBtn: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, height: 46, border: '1px solid rgba(61,48,40,0.12)', background: 'transparent', fontFamily: sans, fontWeight: 600, fontSize: 11, letterSpacing: '.16em', color: 'rgba(61,48,40,0.7)', cursor: 'pointer' };
  const methodTabStyle = (active: boolean): React.CSSProperties => ({
    flex: 1, background: active ? 'var(--ink)' : 'transparent',
    color: active ? '#fff' : 'var(--ink-mute)',
    border: active ? 0 : '1px solid rgba(61,48,40,0.1)',
    padding: '8px 0', fontFamily: sans, fontWeight: 700, fontSize: 10,
    letterSpacing: '.18em', cursor: 'pointer', transition: 'all 0.15s',
  });

  return (
    <main style={{ position: 'relative', minHeight: 'calc(100vh - 80px - 64px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '96px 32px' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '20px 48px 0' }}>
          <button onClick={() => go?.('home')} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', border: 0, padding: '8px 4px', fontFamily: sans, fontWeight: 600, fontSize: 11, letterSpacing: '.22em', color: 'var(--ink-mute)', cursor: 'pointer', transition: 'color 0.2s' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--ink)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--ink-mute)'; }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 2L3 6L7 10" /><path d="M3 6H11" />
            </svg>
            이전
          </button>
        </div>
      </div>
      <div style={{ position: 'absolute', inset: 0, background: 'url(/assets/background.png) center/cover no-repeat', opacity: 0.18 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(250,249,245,0.55) 0%, rgba(250,249,245,0) 50%, rgba(250,249,245,0.55) 100%)' }} />
      <div style={{ position: 'relative', width: 464, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 48, lineHeight: 1, letterSpacing: '-0.025em', color: 'var(--ink-2)', margin: 0, textAlign: 'center' }}>소담 양조장</h1>
        <p style={{ marginTop: 18, fontFamily: serifKR, fontWeight: 300, fontSize: 15, letterSpacing: '.06em', color: 'rgba(61,48,40,0.6)', textAlign: 'center' }}>웃음으로 시작해서 대화로 잇고,<br />술 한 잔으로 완성되는 순간</p>
        <div style={{ marginTop: 44, width: '100%', background: 'rgba(250,249,245,0.88)', backdropFilter: 'blur(10px)', border: '1px solid rgba(61,48,40,0.1)', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', padding: 48 }}>
          <FieldLogin label="이메일 주소" placeholder="sodam@example.com" value={email} onChange={setEmail} />
          <div style={{ height: 28 }} />
          <FieldLogin label="비밀번호" type="password" placeholder="••••••••" value={pwd} onChange={setPwd} />
          <button onClick={() => onLogin?.()} style={{ marginTop: 36, width: '100%', height: 56, background: 'var(--ink-2)', color: '#fff', border: 0, fontFamily: serifKR, fontWeight: 500, fontSize: 15, letterSpacing: '.18em', cursor: 'pointer', transition: 'opacity 0.2s' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.88'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}>
            로그인
          </button>
          <div style={{ marginTop: 24, display: 'flex', justifyContent: 'center', gap: 14, fontFamily: sans, fontSize: 11, letterSpacing: '.14em', color: 'rgba(61,48,40,0.4)' }}>
            <a onClick={handleFindPwToggle} style={{ cursor: 'pointer', color: showFindPw ? 'var(--ink)' : undefined }}>비밀번호 찾기</a>
            <span>·</span>
            <a onClick={() => go?.('register')} style={{ cursor: 'pointer' }}>회원가입</a>
          </div>

          {showFindPw && (
            <div style={{ marginTop: 20, padding: '20px', background: 'rgba(244,244,240,0.7)', border: '1px solid rgba(61,48,40,0.08)' }}>
              {findSent ? (
                <div style={{ fontFamily: sans, fontSize: 13, color: 'var(--ink)', lineHeight: 1.75, textAlign: 'center', padding: '8px 0' }}>
                  {findMethod === 'email'
                    ? '입력하신 이메일로 재설정 링크를 발송했습니다.'
                    : '입력하신 전화번호로 재설정 링크를 문자 발송했습니다.'}
                </div>
              ) : (
                <>
                  <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
                    <button style={methodTabStyle(findMethod === 'email')} onClick={() => { setFindMethod('email'); setFindValue(''); }}>이메일</button>
                    <button style={methodTabStyle(findMethod === 'phone')} onClick={() => { setFindMethod('phone'); setFindValue(''); }}>전화번호</button>
                  </div>
                  <FieldLogin
                    label={findMethod === 'email' ? '가입 시 등록한 이메일' : '가입 시 등록한 전화번호'}
                    placeholder={findMethod === 'email' ? 'sodam@example.com' : '010-0000-0000'}
                    value={findValue}
                    onChange={setFindValue}
                  />
                  <button
                    onClick={() => { if (findValue) setFindSent(true); }}
                    style={{ marginTop: 16, width: '100%', height: 44, background: findValue ? 'var(--ink)' : 'rgba(61,48,40,0.15)', color: findValue ? '#fff' : 'rgba(61,48,40,0.4)', border: 0, fontFamily: sans, fontWeight: 700, fontSize: 10, letterSpacing: '.18em', cursor: findValue ? 'pointer' : 'not-allowed', transition: 'all 0.15s' }}
                  >
                    {findMethod === 'email' ? '이메일 발송' : '문자 발송'}
                  </button>
                </>
              )}
            </div>
          )}

          <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 16 }}>
            <hr style={{ flex: 1, border: 0, borderTop: '1px solid rgba(61,48,40,0.08)' }} />
            <span style={{ fontFamily: sans, fontSize: 9, letterSpacing: '.32em', color: 'rgba(61,48,40,0.4)' }}>또는</span>
            <hr style={{ flex: 1, border: 0, borderTop: '1px solid rgba(61,48,40,0.08)' }} />
          </div>
          <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <button onClick={() => onLogin?.()} style={socialBtn}><span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--kakao)' }} /><span>KAKAO</span></button>
            <button onClick={() => onLogin?.()} style={socialBtn}><span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--success)' }} /><span>NAVER</span></button>
          </div>
        </div>
        <span onClick={() => go?.('home')} style={{ marginTop: 44, display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: sans, fontSize: 11, letterSpacing: '.22em', color: 'rgba(61,48,40,0.5)', cursor: 'pointer' }}>← 홈으로 돌아가기</span>
      </div>
    </main>
  );
};
