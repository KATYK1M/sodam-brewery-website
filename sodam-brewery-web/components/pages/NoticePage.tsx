'use client';
import React from 'react';
import { Newsletter } from '../home/Newsletter';

const serifKR = 'var(--font-serif-kr)';
const serifEN = 'var(--font-serif-en)';
const sans = 'var(--font-sans)';

const NOTICES = [
  { type: 'NOTICE', date: 'Oct 25, 2025', title: "2025 한미친선 문화 한마당 '발간빛 / 너랑나랑 시리즈' 품절", body: "현장의 뜨거운 열기 속에 '발간빛', '너랑나랑 13', '너랑나랑 17' 제품의 금일 준비 물량이 모두 소진되었습니다." },
  { type: 'NOTICE', date: 'May 24, 2025', title: "2025 대한민국 막걸리 엑스포 '너랑나랑 17' 품절", body: "소담 양조장의 '너랑나랑 17' 제품이 금일 준비된 물량을 모두 소진하였습니다." },
  { type: 'NOTICE', date: 'Oct 06, 2024', title: "2024 고양시 전국 막걸리 축제 '꽃달' 품절", body: "고양시 전국 막걸리 축제 현장에서 '꽃달' 제품이 여러분의 뜨거운 성원에 힘입어 전량 품절되었습니다." },
];

const FauxPoster = () => (
  <div style={{ width: '100%', aspectRatio: '5/4', position: 'relative', background: 'linear-gradient(135deg, #DDD2EE 0%, #E8DEFF 35%, #F4E8E0 75%, #F0DBC0 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
    <div style={{ width: '52%', aspectRatio: '1/1', borderRadius: '50%', background: '#1a1a1a', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}>
      <span style={{ fontFamily: serifKR, fontWeight: 900, fontSize: '1.4em', color: '#E6BC78', lineHeight: 1, marginBottom: '0.1em' }}>2026</span>
      <span style={{ fontFamily: serifKR, fontWeight: 900, fontSize: '3em', color: '#E6BC78', lineHeight: 1, transform: 'skew(-2deg)' }}>막스포</span>
      <span style={{ position: 'absolute', right: '8%', bottom: '15%', width: 32, height: 24, background: '#A04545', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: serifKR, fontWeight: 900, fontSize: 11, color: '#E6BC78', letterSpacing: 1 }}>國酒</span>
    </div>
  </div>
);

export const NoticePage = ({ go }: { go?: (page: string) => void }) => (
  <main style={{ minHeight: 600, background: 'var(--bg)' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 48px 96px' }}>
      <div style={{ marginBottom: 64 }}>
        <div style={{ fontFamily: sans, fontWeight: 600, fontSize: 11, letterSpacing: '.32em', color: 'var(--ink-mute)', marginBottom: 24 }}>UPDATES</div>
        <h1 style={{ fontFamily: serifEN, fontWeight: 700, fontSize: 72, lineHeight: 1, color: 'var(--ink)', margin: '0 0 28px', letterSpacing: '-0.02em', display: 'flex', alignItems: 'baseline', gap: 18, flexWrap: 'wrap' }}>
          Notice
          <span style={{ fontFamily: serifEN, fontWeight: 400, fontSize: 28, color: 'var(--surface-cream)', letterSpacing: '-0.01em' }}>Sodam Brewery News</span>
        </h1>
        <p style={{ fontFamily: sans, fontSize: 14, lineHeight: 1.95, color: 'var(--ink-3)', margin: 0, maxWidth: 720 }}>
          소담양조장의 <strong style={{ color: 'var(--ink)' }}>외부 행사 일정</strong>과{' '}
          <strong style={{ color: 'var(--ink)' }}>각 제품별 잔여 수량</strong>을 통합하여 안내해 드리는 공식 실시간 정보 페이지입니다.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 32, marginBottom: 80 }}>
        <article style={{ cursor: 'pointer' }}>
          <div style={{ position: 'relative' }}>
            <FauxPoster />
            <span style={{ position: 'absolute', top: 20, left: 20, padding: '8px 16px', background: 'var(--surface-cream)', color: 'var(--ink)', fontFamily: sans, fontWeight: 700, fontSize: 10, letterSpacing: '.22em' }}>EVENT</span>
          </div>
          <div style={{ marginTop: 24 }}>
            <div style={{ fontFamily: sans, fontSize: 12, letterSpacing: '.06em', color: 'var(--ink-mute)', marginBottom: 10 }}>Apr 17, 2026</div>
            <h2 style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 28, color: 'var(--ink)', margin: 0, letterSpacing: '-0.02em' }}>
              2026 대한민국 막걸리 엑스포 참가
              <span style={{ fontFamily: sans, fontWeight: 500, fontSize: 15, letterSpacing: '.02em', color: 'var(--ink-mute)', marginLeft: 14 }}>05.15 – 05.17 양재 aT센터</span>
            </h2>
          </div>
        </article>
        <article style={{ background: 'var(--surface-1)', padding: '28px 28px', cursor: 'pointer', display: 'flex', flexDirection: 'column', position: 'relative' }}>
          <div style={{ fontFamily: sans, fontWeight: 700, fontSize: 10, letterSpacing: '.22em', color: 'var(--ink-mute)', marginBottom: 18 }}>PRODUCT NEWS</div>
          <h3 style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 22, color: 'var(--ink)', margin: 0, letterSpacing: '-0.015em', lineHeight: 1.3 }}>
            &lsquo;꾸찌&rsquo;는 지금 재정비 중!<br />더 완벽한 맛으로 다시 만나요
          </h3>
          <p style={{ marginTop: 16, fontFamily: sans, fontSize: 13, lineHeight: 1.85, color: 'var(--ink-3)', margin: '16px 0 24px' }}>
            지난 2025년 출시된 &lsquo;꾸찌&rsquo;는 현재 더 깊은 맛과 완성도를 갖추기 위해 재검토 과정을 거치고 있습니다.
          </p>
          <div style={{ width: '100%', aspectRatio: '4/3', background: 'url(/assets/kkujji.JPG) center/cover no-repeat, var(--surface-2)' }} />
          <div style={{ position: 'absolute', bottom: 16, right: 16, fontFamily: sans, fontSize: 12, letterSpacing: '.06em', color: 'var(--ink-mute)' }}>Apr 3, 2026</div>
        </article>
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {NOTICES.map((n, i) => (
          <li key={i} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 32, alignItems: 'flex-start', padding: '32px 0', borderTop: '1px solid var(--line-soft)', borderBottom: i === NOTICES.length - 1 ? '1px solid var(--line-soft)' : 0, cursor: 'pointer' }}>
            <span style={{ padding: '6px 12px', background: 'rgba(232,196,168,0.4)', color: 'var(--accent-point)', fontFamily: sans, fontWeight: 700, fontSize: 10, letterSpacing: '.22em', alignSelf: 'flex-start' }}>{n.type}</span>
            <div>
              <div style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 20, color: 'var(--ink)', marginBottom: 14 }}>{n.title}</div>
              <p style={{ fontFamily: sans, fontSize: 13.5, lineHeight: 1.85, color: 'var(--ink-mute)', margin: 0 }}>{n.body}</p>
            </div>
            <div style={{ fontFamily: sans, fontSize: 12, letterSpacing: '.05em', color: 'var(--ink-mute)', whiteSpace: 'nowrap', paddingTop: 6 }}>{n.date}</div>
          </li>
        ))}
      </ul>
    </div>
    <Newsletter />
  </main>
);
