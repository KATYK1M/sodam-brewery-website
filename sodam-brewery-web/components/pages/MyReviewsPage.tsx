'use client';
import React, { useState } from 'react';
import { Eyebrow } from '../common';

const serifKR = 'var(--font-serif-kr)';
const sans = 'var(--font-sans)';

const Stars = ({ n }: { n: number }) => (
  <div style={{ display: 'flex', gap: 2 }}>
    {[1, 2, 3, 4, 5].map(i => (
      <svg key={i} width="11" height="11" viewBox="0 0 12 12" fill={i <= n ? 'var(--ink)' : 'none'} stroke="var(--ink)" strokeWidth="1.2">
        <polygon points="6,1 7.5,4.5 11,4.5 8.5,7 9.5,11 6,8.5 2.5,11 3.5,7 1,4.5 4.5,4.5" />
      </svg>
    ))}
  </div>
);

const STATUS_LABEL: Record<string, { label: string; color: string }> = {
  pending: { label: '답변 대기', color: 'var(--ink-mute)' },
  answered: { label: '답변 완료', color: 'var(--accent-point)' },
};

export const MyReviewsPage = ({ go }: { go?: (page: string) => void }) => {
  const [tab, setTab] = useState<'reviews' | 'inquiries'>('reviews');
  const [reviews, setReviews] = useState([
    { id: 1, product: '꽃달', date: '2026.05.16', rating: 5, content: '향이 정말 좋아요. 꽃향이 은은하게 나면서 뒷맛도 깔끔합니다. 선물용으로도 딱 좋을 것 같아요.' },
    { id: 2, product: '발간빛', date: '2026.04.03', rating: 4, content: '산미가 기분 좋게 느껴지고 드라이한 마무리가 인상적이었습니다. 와인 좋아하시는 분들께 추천해요.' },
  ]);
  const [inquiries] = useState([
    { id: 1, topic: '주문·배송', subject: '배송 지연 관련 문의드립니다', date: '2026.05.20', status: 'answered', answer: '안녕하세요, 고객님. 해당 주문 건은 물류센터 사정으로 1~2일 지연 출고될 예정입니다. 불편을 드려 죄송합니다.' },
    { id: 2, topic: '제품 정보', subject: '꽃달 재입고 예정일 문의', date: '2026.05.11', status: 'pending', answer: '' },
  ]);
  const [openId, setOpenId] = useState<number | null>(null);

  const tabStyle = (active: boolean): React.CSSProperties => ({
    background: 'transparent', border: 0,
    borderBottom: active ? '2px solid var(--ink)' : '2px solid transparent',
    padding: '12px 0', marginRight: 32,
    fontFamily: sans, fontWeight: active ? 700 : 500, fontSize: 13,
    letterSpacing: '.1em', color: active ? 'var(--ink)' : 'var(--ink-mute)', cursor: 'pointer',
  });

  return (
    <main style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 48px 128px' }}>
      <div style={{ borderBottom: '1px solid var(--line-soft)', paddingBottom: 32, marginBottom: 48 }}>
        <Eyebrow style={{ marginBottom: 28 }}>MY PAGE</Eyebrow>
        <h1 style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 44, color: 'var(--ink)', margin: 0, letterSpacing: '-0.025em' }}>리뷰 · 문의 내역</h1>
      </div>

      <div style={{ borderBottom: '1px solid var(--line-soft)', marginBottom: 40 }}>
        <button style={tabStyle(tab === 'reviews')} onClick={() => setTab('reviews')}>리뷰 내역</button>
        <button style={tabStyle(tab === 'inquiries')} onClick={() => setTab('inquiries')}>문의 내역</button>
      </div>

      {tab === 'reviews' && (
        reviews.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--ink-mute)', fontFamily: sans, fontSize: 14 }}>
            작성한 리뷰가 없습니다.
          </div>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {reviews.map((r, i) => (
              <li key={r.id} style={{ padding: '32px 0', borderTop: '1px solid var(--line-soft)', borderBottom: i === reviews.length - 1 ? '1px solid var(--line-soft)' : 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 24 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
                      <div style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 16, color: 'var(--ink)' }}>{r.product}</div>
                      <Stars n={r.rating} />
                      <div style={{ fontFamily: sans, fontSize: 11, color: 'var(--ink-mute)' }}>{r.date}</div>
                    </div>
                    <p style={{ fontFamily: sans, fontSize: 14, lineHeight: 1.8, color: 'var(--ink-3)', margin: 0 }}>{r.content}</p>
                  </div>
                  <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
                    <button style={{ background: 'transparent', border: '1px solid var(--line)', color: 'var(--ink)', padding: '8px 16px', fontFamily: sans, fontWeight: 700, fontSize: 10, letterSpacing: '.16em', cursor: 'pointer' }}>수정</button>
                    <button onClick={() => setReviews(prev => prev.filter(x => x.id !== r.id))} style={{ background: 'transparent', border: '1px solid var(--line)', color: 'var(--ink-mute)', padding: '8px 16px', fontFamily: sans, fontWeight: 700, fontSize: 10, letterSpacing: '.16em', cursor: 'pointer' }}>삭제</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )
      )}

      {tab === 'inquiries' && (
        inquiries.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--ink-mute)', fontFamily: sans, fontSize: 14 }}>
            문의 내역이 없습니다.
          </div>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {inquiries.map((q, i) => (
              <li key={q.id} style={{ borderTop: '1px solid var(--line-soft)', borderBottom: i === inquiries.length - 1 ? '1px solid var(--line-soft)' : 0 }}>
                <button
                  onClick={() => setOpenId(openId === q.id ? null : q.id)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, padding: '28px 0', background: 'transparent', border: 0, cursor: 'pointer', textAlign: 'left' }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                      <span style={{ fontFamily: sans, fontWeight: 700, fontSize: 10, letterSpacing: '.18em', color: 'var(--ink-mute)', background: 'var(--surface-1)', padding: '3px 8px', border: '1px solid var(--line)' }}>{q.topic}</span>
                      <span style={{ fontFamily: sans, fontWeight: 700, fontSize: 10, letterSpacing: '.14em', color: STATUS_LABEL[q.status].color }}>{STATUS_LABEL[q.status].label}</span>
                    </div>
                    <div style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 16, color: 'var(--ink)' }}>{q.subject}</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexShrink: 0 }}>
                    <span style={{ fontFamily: sans, fontSize: 11, color: 'var(--ink-mute)' }}>{q.date}</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="var(--ink-mute)" strokeWidth="1.6" strokeLinecap="round" style={{ transform: openId === q.id ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                      <path d="M2 4L6 8L10 4" />
                    </svg>
                  </div>
                </button>
                {openId === q.id && (
                  <div style={{ padding: '20px 24px 28px', background: 'var(--surface-1)', marginBottom: 1 }}>
                    {q.status === 'answered' ? (
                      <div style={{ fontFamily: sans, fontSize: 14, lineHeight: 1.8, color: 'var(--ink-3)' }}>
                        <span style={{ fontFamily: sans, fontWeight: 700, fontSize: 10, letterSpacing: '.18em', color: 'var(--accent-point)', marginRight: 10 }}>답변</span>
                        {q.answer}
                      </div>
                    ) : (
                      <div style={{ fontFamily: sans, fontSize: 13, color: 'var(--ink-mute)' }}>아직 답변이 등록되지 않았습니다.</div>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        )
      )}

      <button onClick={() => go?.('mypage')} style={{ marginTop: 48, background: 'transparent', border: '1px solid var(--ink)', color: 'var(--ink)', padding: '14px 28px', fontFamily: sans, fontWeight: 700, fontSize: 11, letterSpacing: '.22em', cursor: 'pointer' }}>← 마이페이지로</button>
    </main>
  );
};
