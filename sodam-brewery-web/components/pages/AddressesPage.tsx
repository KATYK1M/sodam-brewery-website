'use client';
import React, { useState } from 'react';
import { Eyebrow } from '../common';
import { FieldLine } from './helpers';

const serifKR = 'var(--font-serif-kr)';
const sans = 'var(--font-sans)';

interface Address {
  id: number;
  label: string;
  name: string;
  phone: string;
  addr: string;
  addr2: string;
  isDefault: boolean;
}

export const AddressesPage = ({ go }: { go?: (page: string) => void }) => {
  const [addresses, setAddresses] = useState<Address[]>([
    { id: 1, label: '집', name: '홍길동', phone: '010-0000-0000', addr: '서울시 종로구 창덕궁길 1', addr2: '101호', isDefault: true },
    { id: 2, label: '회사', name: '홍길동', phone: '010-0000-0000', addr: '서울시 강남구 테헤란로 1', addr2: '20층', isDefault: false },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ label: '', name: '', phone: '', addr: '', addr2: '' });

  function addAddress() {
    if (!form.name || !form.addr) return;
    setAddresses(prev => [...prev, { ...form, id: Date.now(), isDefault: prev.length === 0 }]);
    setForm({ label: '', name: '', phone: '', addr: '', addr2: '' });
    setShowForm(false);
  }

  function setDefault(id: number) {
    setAddresses(prev => prev.map(a => ({ ...a, isDefault: a.id === id })));
  }

  function remove(id: number) {
    setAddresses(prev => prev.filter(a => a.id !== id));
  }

  return (
    <main style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 48px 128px' }}>
      <div style={{ borderBottom: '1px solid var(--line-soft)', paddingBottom: 32, marginBottom: 48 }}>
        <Eyebrow style={{ marginBottom: 14 }}>MY PAGE</Eyebrow>
        <h1 style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 44, color: 'var(--ink)', margin: 0, letterSpacing: '-0.025em' }}>배송지 관리</h1>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 720 }}>
        {addresses.map(a => (
          <div key={a.id} style={{ padding: '24px 28px', background: a.isDefault ? 'var(--surface-cream-20)' : 'var(--surface-1)', border: a.isDefault ? '1px solid var(--accent-1)' : '1px solid transparent' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <span style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 16, color: 'var(--ink)' }}>{a.label || '배송지'}</span>
                  {a.isDefault && <span style={{ background: 'var(--ink)', color: 'var(--bg)', fontFamily: sans, fontWeight: 700, fontSize: 9, letterSpacing: '.14em', padding: '3px 8px' }}>기본</span>}
                </div>
                <div style={{ fontFamily: sans, fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.75 }}>
                  <div>{a.name} · {a.phone}</div>
                  <div>{a.addr} {a.addr2}</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
                {!a.isDefault && (
                  <button onClick={() => setDefault(a.id)} style={{ background: 'transparent', border: '1px solid var(--line)', color: 'var(--ink)', padding: '8px 14px', fontFamily: sans, fontWeight: 700, fontSize: 10, letterSpacing: '.14em', cursor: 'pointer' }}>기본 설정</button>
                )}
                <button onClick={() => remove(a.id)} style={{ background: 'transparent', border: '1px solid var(--line)', color: 'var(--ink-mute)', padding: '8px 14px', fontFamily: sans, fontWeight: 700, fontSize: 10, letterSpacing: '.14em', cursor: 'pointer' }}>삭제</button>
              </div>
            </div>
          </div>
        ))}

        {showForm ? (
          <div style={{ padding: 28, background: 'var(--surface-1)', border: '1px solid var(--line-soft)' }}>
            <div style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 18, color: 'var(--ink)', marginBottom: 24 }}>새 배송지 추가</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, rowGap: 24 }}>
              <FieldLine label="별칭 (집, 회사 등)" placeholder="집" value={form.label} onChange={v => setForm({ ...form, label: v })} />
              <FieldLine required label="받는 분" placeholder="홍길동" value={form.name} onChange={v => setForm({ ...form, name: v })} />
              <FieldLine required label="연락처" placeholder="010-0000-0000" value={form.phone} onChange={v => setForm({ ...form, phone: v })} />
              <div />
              <FieldLine required full label="주소" placeholder="서울시 OO구 OO로 00" value={form.addr} onChange={v => setForm({ ...form, addr: v })} />
              <FieldLine full label="상세 주소" placeholder="동, 호수" value={form.addr2} onChange={v => setForm({ ...form, addr2: v })} />
            </div>
            <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
              <button onClick={addAddress} style={{ background: 'var(--ink)', color: '#fff', border: 0, padding: '13px 28px', fontFamily: sans, fontWeight: 700, fontSize: 11, letterSpacing: '.18em', cursor: 'pointer' }}>저장하기</button>
              <button onClick={() => setShowForm(false)} style={{ background: 'transparent', border: '1px solid var(--line)', color: 'var(--ink)', padding: '13px 28px', fontFamily: sans, fontWeight: 700, fontSize: 11, letterSpacing: '.18em', cursor: 'pointer' }}>취소</button>
            </div>
          </div>
        ) : (
          <button onClick={() => setShowForm(true)} style={{ padding: 20, background: 'transparent', border: '1px dashed var(--line)', color: 'var(--ink-mute)', fontFamily: sans, fontWeight: 700, fontSize: 12, letterSpacing: '.18em', cursor: 'pointer', textAlign: 'center' }}>+ 새 배송지 추가</button>
        )}
      </div>

      <button onClick={() => go?.('mypage')} style={{ marginTop: 48, background: 'transparent', border: '1px solid var(--ink)', color: 'var(--ink)', padding: '14px 28px', fontFamily: sans, fontWeight: 700, fontSize: 11, letterSpacing: '.22em', cursor: 'pointer' }}>← 마이페이지로</button>
    </main>
  );
};
