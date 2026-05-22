'use client';

import React from 'react';

export const FooterDetailed = ({ go }: { go: (page: string) => void }) => (
  <footer style={{
    background: 'var(--surface-1)', borderRadius: '4px 4px 0 0',
    padding: '96px 48px 32px', color: 'var(--ink)', position: 'relative',
  }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 80, maxWidth: 1184, margin: '0 auto' }}>
      <div>
        <div style={{ display: 'flex', gap: 12, marginBottom: 22, alignItems: 'center' }}>
          <span style={{ fontWeight: 700, fontSize: 22, color: 'var(--ink)', letterSpacing: '-0.02em', fontFamily: 'Manrope' }}>소담 양조장</span>
          <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12, letterSpacing: '.16em', color: 'var(--ink-mute)' }}>SODAM BREWERY</span>
        </div>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.85, color: 'var(--ink-mute)', whiteSpace: 'pre-line', maxWidth: 320 }}>
          {'오래된 유산을 연구하여,\n당신의 소중한 일상에 깊이를 더합니다.'}
        </div>
      </div>

      <div>
        <div style={{ fontSize: 16, color: 'var(--ink)', marginBottom: 22, fontFamily: 'Manrope', fontWeight: 600 }}>더 알아보기</div>
        {[{ label: '자주 묻는 질문 / Q&A', target: 'faq' }, { label: '이벤트 / 축제 소식', target: 'notice' }, { label: '리뷰', target: 'reviews' }].map(({ label, target }) => (
          <div key={label} onClick={() => go(target)} style={{
            fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: '36px',
            color: 'var(--ink-mute)', cursor: 'pointer',
            transition: 'color 0.2s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ink)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ink-mute)')}>
            {label}
          </div>
        ))}
      </div>

      <div>
        <div style={{ fontSize: 16, color: 'var(--ink)', marginBottom: 22, fontWeight: 600, fontFamily: 'Manrope' }}>정보</div>
        {[
          { label: '인스타그램', href: 'https://www.instagram.com/sodam_brewery?igsh=MWlpeGx3amd1dmxzaw%3D%3D&utm_source=qr' },
          { label: '개인정보 처리방침', href: null },
          { label: '이용약관', href: null },
        ].map(({ label, href }) => (
          <a key={label} href={href || undefined} target={href ? '_blank' : undefined} rel={href ? 'noreferrer noopener' : undefined}
            style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: '36px', color: 'var(--ink-mute)', cursor: 'pointer', textDecoration: 'none', transition: 'color 0.2s cubic-bezier(0.22, 1, 0.36, 1)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ink)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ink-mute)')}>
            {label}
          </a>
        ))}
      </div>
    </div>
    <div style={{
      borderTop: '1px solid rgba(128,117,111,0.18)', marginTop: 80, paddingTop: 28,
      textAlign: 'center', fontFamily: 'var(--font-sans)', fontSize: 12, letterSpacing: '.06em', color: 'var(--ink-mute)',
      maxWidth: 1184, margin: '80px auto 0',
    }}>
      © 2026 Sodam Brewery. All Rights Reserved.
    </div>
  </footer>
);

export const BackButton = ({ onClick }: { onClick: () => void }) => (
  <div style={{ maxWidth: 1280, margin: '0 auto', padding: '20px 48px 0', position: 'relative', zIndex: 10 }}>
    <button onClick={onClick} aria-label="이전" style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      background: 'transparent', border: 0, padding: '8px 4px',
      fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 11,
      letterSpacing: '.22em', color: 'var(--ink-mute)', cursor: 'pointer', transition: 'color 0.2s',
    }}
    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ink)')}
    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ink-mute)')}>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 2L3 6L7 10" /><path d="M3 6H11" />
      </svg>
      이전
    </button>
  </div>
);
