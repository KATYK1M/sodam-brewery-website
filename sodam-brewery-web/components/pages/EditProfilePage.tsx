'use client';
import React, { useState } from 'react';
import { Eyebrow } from '../common';
import { FieldLine } from './helpers';

const serifKR = 'var(--font-serif-kr)';
const sans = 'var(--font-sans)';

function mask(s: string, show = 2) {
  if (!s) return '***';
  return s.slice(0, show) + '***';
}
function maskPhone(s: string) {
  return s.replace(/(\d{3})-(\d{3,4})-(\d{4})/, '$1-****-$3');
}

interface Address {
  id: number;
  label: string;
  name: string;
  phone: string;
  addr: string;
  addr2: string;
  isDefault: boolean;
}

export const EditProfilePage = ({ go }: { go?: (page: string) => void }) => {
  const [tab, setTab] = useState<'profile' | 'addresses'>('profile');

  // Profile
  const [step, setStep] = useState<'view' | 'verify' | 'edit'>('view');
  const [pw, setPw] = useState('');
  const [pwError, setPwError] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [forgotSent, setForgotSent] = useState(false);
  const [saved, setSaved] = useState(false);
  const [profile, setProfile] = useState({ name: '홍길동', email: 'sodam@example.com', phone: '010-0000-0000', birth: '1990.01.01', addr: '서울시 종로구 창덕궁길 1' });
  const [form, setForm] = useState({ ...profile, newPw: '' });

  function handleVerify() {
    if (!pw) { setPwError(true); return; }
    setPwError(false);
    setForm({ ...profile, newPw: '' });
    setStep('edit');
  }
  function handleSave() {
    setProfile({ name: form.name, email: form.email, phone: form.phone, birth: form.birth, addr: form.addr });
    setSaved(true);
    setStep('view');
    setPw('');
    setTimeout(() => setSaved(false), 3000);
  }
  function cancelVerify() {
    setStep('view'); setPw(''); setPwError(false); setShowForgot(false); setForgotSent(false);
  }

  // Addresses
  const [addresses, setAddresses] = useState<Address[]>([
    { id: 1, label: '집', name: '홍길동', phone: '010-0000-0000', addr: '서울시 종로구 창덕궁길 1', addr2: '101호', isDefault: true },
    { id: 2, label: '회사', name: '홍길동', phone: '010-0000-0000', addr: '서울시 강남구 테헤란로 1', addr2: '20층', isDefault: false },
  ]);
  const [showAddrForm, setShowAddrForm] = useState(false);
  const [addrForm, setAddrForm] = useState({ label: '', name: '', phone: '', addr: '', addr2: '' });

  function setDefaultAddr(id: number) {
    const target = addresses.find(a => a.id === id);
    setAddresses(prev => prev.map(x => ({ ...x, isDefault: x.id === id })));
    if (target) setProfile(prev => ({ ...prev, addr: target.addr }));
  }
  function addAddr() {
    if (!addrForm.name || !addrForm.addr) return;
    setAddresses(prev => [...prev, { ...addrForm, id: Date.now(), isDefault: prev.length === 0 }]);
    setAddrForm({ label: '', name: '', phone: '', addr: '', addr2: '' });
    setShowAddrForm(false);
  }

  const tabStyle = (active: boolean): React.CSSProperties => ({
    background: 'transparent', border: 0,
    borderBottom: active ? '2px solid var(--ink)' : '2px solid transparent',
    padding: '12px 0', marginRight: 32,
    fontFamily: sans, fontWeight: active ? 700 : 500, fontSize: 13,
    letterSpacing: '.1em', color: active ? 'var(--ink)' : 'var(--ink-mute)', cursor: 'pointer',
  });

  const profileView = [
    { label: '이름', value: mask(profile.name) },
    { label: '이메일', value: mask(profile.email, 3) },
    { label: '연락처', value: maskPhone(profile.phone) },
    { label: '비밀번호', value: '**********' },
    { label: '생년월일', value: profile.birth.slice(0, 4) + '.**.**' },
    { label: '기본 주소', value: profile.addr },
  ];

  const fieldCell: React.CSSProperties = {
    padding: '22px 28px', borderBottom: '1px solid var(--line-soft)',
  };

  return (
    <main style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 48px 128px' }}>
      <div style={{ borderBottom: '1px solid var(--line-soft)', paddingBottom: 32, marginBottom: 40 }}>
        <Eyebrow style={{ marginBottom: 28 }}>MY PAGE</Eyebrow>
        <h1 style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 44, color: 'var(--ink)', margin: 0, letterSpacing: '-0.025em' }}>내 정보 관리</h1>
      </div>

      <div style={{ borderBottom: '1px solid var(--line-soft)', marginBottom: 40 }}>
        <button style={tabStyle(tab === 'profile')} onClick={() => setTab('profile')}>회원 정보</button>
        <button style={tabStyle(tab === 'addresses')} onClick={() => setTab('addresses')}>배송지 관리</button>
      </div>

      {tab === 'profile' && (
        <div>
          {saved && (
            <div style={{ marginBottom: 28, padding: '16px 24px', background: 'var(--surface-cream-20)', border: '1px solid var(--accent-1)', fontFamily: sans, fontSize: 13, color: 'var(--ink)', letterSpacing: '.04em' }}>
              회원 정보가 수정되었습니다.
            </div>
          )}

          {step === 'view' && (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', border: '1px solid var(--line-soft)', borderBottom: 0, borderRight: 0 }}>
                {profileView.map(({ label, value }, i) => (
                  <div key={label} style={{ ...fieldCell, borderRight: '1px solid var(--line-soft)' }}>
                    <div style={{ fontFamily: sans, fontWeight: 700, fontSize: 10, letterSpacing: '.22em', color: 'var(--ink-mute)', textTransform: 'uppercase', marginBottom: 10 }}>{label}</div>
                    <div style={{ fontFamily: serifKR, fontSize: 16, color: 'var(--ink)' }}>{value}</div>
                  </div>
                ))}
              </div>
              <button onClick={() => setStep('verify')} style={{ marginTop: 28, background: 'var(--ink)', color: '#fff', border: 0, padding: '15px 36px', fontFamily: sans, fontWeight: 700, fontSize: 11, letterSpacing: '.22em', cursor: 'pointer' }}>수정하기</button>
            </div>
          )}

          {step === 'verify' && (
            <div style={{ maxWidth: 520 }}>
              <p style={{ fontFamily: sans, fontSize: 14, lineHeight: 1.8, color: 'var(--ink-3)', marginBottom: 28, marginTop: 0 }}>
                회원 정보 수정을 위해 현재 비밀번호를 입력해 주세요.
              </p>
              <FieldLine label="비밀번호" type="password" placeholder="현재 비밀번호" value={pw} onChange={v => { setPw(v); setPwError(false); }} />
              {pwError && <div style={{ marginTop: 8, fontFamily: sans, fontSize: 12, color: 'var(--accent-point)' }}>비밀번호를 입력해 주세요.</div>}
              <div style={{ marginTop: 12 }}>
                <button onClick={() => setShowForgot(v => !v)} style={{ background: 'none', border: 0, padding: 0, fontFamily: sans, fontSize: 12, color: 'var(--ink-mute)', textDecoration: 'underline', cursor: 'pointer' }}>
                  비밀번호가 기억나지 않으세요?
                </button>
              </div>
              {showForgot && (
                <div style={{ marginTop: 14, padding: '16px 20px', background: 'var(--surface-1)', border: '1px solid var(--line-soft)', fontFamily: sans, fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.75 }}>
                  {forgotSent ? (
                    <span style={{ color: 'var(--ink)' }}>재설정 링크를 이메일로 발송했습니다.</span>
                  ) : (
                    <>
                      <span>가입 시 등록한 이메일로 비밀번호 재설정 링크를 보내드립니다.</span>
                      <div style={{ marginTop: 12 }}>
                        <button onClick={() => setForgotSent(true)} style={{ background: 'var(--ink)', color: '#fff', border: 0, padding: '9px 20px', fontFamily: sans, fontWeight: 700, fontSize: 10, letterSpacing: '.18em', cursor: 'pointer' }}>이메일 발송</button>
                      </div>
                    </>
                  )}
                </div>
              )}
              <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
                <button onClick={handleVerify} style={{ background: 'var(--ink)', color: '#fff', border: 0, padding: '15px 36px', fontFamily: sans, fontWeight: 700, fontSize: 11, letterSpacing: '.22em', cursor: 'pointer' }}>확인</button>
                <button onClick={cancelVerify} style={{ background: 'transparent', border: '1px solid var(--line)', color: 'var(--ink)', padding: '15px 28px', fontFamily: sans, fontWeight: 700, fontSize: 11, letterSpacing: '.22em', cursor: 'pointer' }}>취소</button>
              </div>
            </div>
          )}

          {step === 'edit' && (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, rowGap: 32 }}>
                <FieldLine required label="이름" placeholder="홍길동" value={form.name} onChange={v => setForm({ ...form, name: v })} />
                <FieldLine required label="이메일" placeholder="sodam@example.com" value={form.email} onChange={v => setForm({ ...form, email: v })} />
                <FieldLine required label="연락처" placeholder="010-0000-0000" value={form.phone} onChange={v => setForm({ ...form, phone: v })} />
                <FieldLine label="새 비밀번호 (변경 시 입력)" type="password" placeholder="8자 이상" value={form.newPw} onChange={v => setForm({ ...form, newPw: v })} />
                <FieldLine required label="생년월일" placeholder="1990.01.01" value={form.birth} onChange={v => setForm({ ...form, birth: v })} />
                <FieldLine required label="기본 주소" placeholder="서울시 OO구 OO로 00" value={form.addr} onChange={v => setForm({ ...form, addr: v })} />
              </div>
              <div style={{ display: 'flex', gap: 12, marginTop: 36 }}>
                <button onClick={handleSave} style={{ background: 'var(--ink)', color: '#fff', border: 0, padding: '15px 36px', fontFamily: sans, fontWeight: 700, fontSize: 11, letterSpacing: '.22em', cursor: 'pointer' }}>저장하기</button>
                <button onClick={() => setStep('view')} style={{ background: 'transparent', border: '1px solid var(--line)', color: 'var(--ink)', padding: '15px 28px', fontFamily: sans, fontWeight: 700, fontSize: 11, letterSpacing: '.22em', cursor: 'pointer' }}>취소</button>
              </div>
            </div>
          )}
        </div>
      )}

      {tab === 'addresses' && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
            {addresses.map(a => (
              <div key={a.id} style={{ padding: '24px 28px', background: a.isDefault ? 'var(--surface-cream-20)' : 'var(--surface-1)', border: a.isDefault ? '1px solid var(--accent-1)' : '1px solid transparent' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                      <span style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 16, color: 'var(--ink)' }}>{a.label || '배송지'}</span>
                      {a.isDefault && <span style={{ background: 'var(--ink)', color: 'var(--bg)', fontFamily: sans, fontWeight: 700, fontSize: 9, letterSpacing: '.14em', padding: '3px 8px', flexShrink: 0 }}>기본</span>}
                    </div>
                    <div style={{ fontFamily: sans, fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.75 }}>
                      <div>{a.name} · {a.phone}</div>
                      <div style={{ wordBreak: 'keep-all' }}>{a.addr} {a.addr2}</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flexShrink: 0, marginLeft: 12 }}>
                    {!a.isDefault && (
                      <button onClick={() => setDefaultAddr(a.id)} style={{ background: 'transparent', border: '1px solid var(--line)', color: 'var(--ink)', padding: '7px 12px', fontFamily: sans, fontWeight: 700, fontSize: 9, letterSpacing: '.14em', cursor: 'pointer', whiteSpace: 'nowrap' }}>기본 설정</button>
                    )}
                    <button onClick={() => setAddresses(prev => prev.filter(x => x.id !== a.id))} style={{ background: 'transparent', border: '1px solid var(--line)', color: 'var(--ink-mute)', padding: '7px 12px', fontFamily: sans, fontWeight: 700, fontSize: 9, letterSpacing: '.14em', cursor: 'pointer' }}>삭제</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {showAddrForm ? (
            <div style={{ padding: 28, background: 'var(--surface-1)', border: '1px solid var(--line-soft)' }}>
              <div style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 18, color: 'var(--ink)', marginBottom: 24 }}>새 배송지 추가</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, rowGap: 24 }}>
                <FieldLine label="별칭 (집, 회사 등)" placeholder="집" value={addrForm.label} onChange={v => setAddrForm({ ...addrForm, label: v })} />
                <FieldLine required label="받는 분" placeholder="홍길동" value={addrForm.name} onChange={v => setAddrForm({ ...addrForm, name: v })} />
                <FieldLine required label="연락처" placeholder="010-0000-0000" value={addrForm.phone} onChange={v => setAddrForm({ ...addrForm, phone: v })} />
                <div />
                <FieldLine required full label="주소" placeholder="서울시 OO구 OO로 00" value={addrForm.addr} onChange={v => setAddrForm({ ...addrForm, addr: v })} />
                <FieldLine full label="상세 주소" placeholder="동, 호수" value={addrForm.addr2} onChange={v => setAddrForm({ ...addrForm, addr2: v })} />
              </div>
              <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
                <button onClick={addAddr} style={{ background: 'var(--ink)', color: '#fff', border: 0, padding: '13px 28px', fontFamily: sans, fontWeight: 700, fontSize: 11, letterSpacing: '.18em', cursor: 'pointer' }}>저장하기</button>
                <button onClick={() => setShowAddrForm(false)} style={{ background: 'transparent', border: '1px solid var(--line)', color: 'var(--ink)', padding: '13px 28px', fontFamily: sans, fontWeight: 700, fontSize: 11, letterSpacing: '.18em', cursor: 'pointer' }}>취소</button>
              </div>
            </div>
          ) : (
            <button onClick={() => setShowAddrForm(true)} style={{ width: '100%', padding: 20, background: 'transparent', border: '1px dashed var(--line)', color: 'var(--ink-mute)', fontFamily: sans, fontWeight: 700, fontSize: 12, letterSpacing: '.18em', cursor: 'pointer', textAlign: 'center' }}>+ 새 배송지 추가</button>
          )}
        </div>
      )}

      <button onClick={() => go?.('mypage')} style={{ marginTop: 64, background: 'transparent', border: '1px solid var(--ink)', color: 'var(--ink)', padding: '14px 28px', fontFamily: sans, fontWeight: 700, fontSize: 11, letterSpacing: '.22em', cursor: 'pointer' }}>← 마이페이지로</button>
    </main>
  );
};
