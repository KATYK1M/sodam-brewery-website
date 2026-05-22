'use client';

import React from 'react';
import { Product } from './common';

interface NavProps {
  go: (page: string, payload?: Product) => void;
  active: string;
  cartCount?: number;
  variant?: 'transparent' | 'opaque';
  onNavSection?: (section: string) => void;
}

export const Nav = ({ go, active, cartCount = 0, variant = 'transparent', onNavSection }: NavProps) => {
  const [lang, setLang] = React.useState('KR');
  const [langOpen, setLangOpen] = React.useState(false);
  const langRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!langOpen) return;
    const onDoc = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [langOpen]);

  const navLinkStyle = (key: string): React.CSSProperties => ({
    fontFamily: 'Manrope',
    fontWeight: 500,
    fontSize: 14,
    letterSpacing: '-0.005em',
    cursor: 'pointer',
    color: active === key ? 'var(--ink)' : 'var(--ink-3)',
    transition: 'color 0.2s cubic-bezier(0.22, 1, 0.36, 1)',
  });

  const handleSection = (k: string) => {
    if (onNavSection) onNavSection(k);
    else go('home');
  };

  const bg = variant === 'opaque' ? 'rgba(250,249,245,0.96)' : 'rgba(250,249,245,0.8)';

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50, width: '100%', height: 80,
      background: bg, backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
      boxShadow: '0 8px 32px 0 rgba(27,28,26,0.05)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 48px',
    }}>
      <div onClick={() => go('home')} style={{ display: 'flex', cursor: 'pointer', alignItems: 'center', gap: 10 }}>
        <span style={{ fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.02em', fontFamily: 'Manrope', fontSize: 22 }}>소담 양조장</span>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '.18em', color: 'var(--ink-mute)', fontWeight: 700 }}>SODAM BREWERY</span>
      </div>

      <nav style={{ display: 'flex', gap: 65, alignItems: 'center' }}>
        <a onClick={() => handleSection('process')} style={navLinkStyle('process')}>주조 과정</a>
        <a onClick={() => handleSection('collection')} style={navLinkStyle('collection')}>소담의 술</a>
        <a onClick={() => handleSection('goods')} style={navLinkStyle('goods')}>소담 굿즈</a>
        <a onClick={() => handleSection('faq')} style={navLinkStyle('faq')}>FAQ</a>
      </nav>

      <div style={{ display: 'flex', gap: 22, color: 'var(--ink)', alignItems: 'center' }}>
        <img src="/assets/icons/search.svg" alt="" style={{ cursor: 'pointer', width: 16, height: 16 }} />
        <div onClick={() => go('cart')} style={{ position: 'relative', cursor: 'pointer', width: 18, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="20" r="1.4" fill="currentColor" stroke="none" />
            <circle cx="18" cy="20" r="1.4" fill="currentColor" stroke="none" />
            <path d="M2.5 3.5h2.6l2.3 11.2a1.6 1.6 0 0 0 1.57 1.3h9.06a1.6 1.6 0 0 0 1.57-1.27L21.5 7H6.4" />
          </svg>
          {cartCount > 0 && (
            <span style={{
              position: 'absolute', top: -6, right: -8,
              minWidth: 16, height: 16, padding: '0 4px',
              background: 'var(--ink)', color: 'var(--bg)',
              borderRadius: 999, fontSize: 9, fontWeight: 700,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-sans)',
            }}>{cartCount}</span>
          )}
        </div>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
          onClick={() => go('login')} style={{ cursor: 'pointer' }}>
          <circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0116 0" />
        </svg>
        <div ref={langRef} style={{ position: 'relative' }}>
          <button onClick={() => setLangOpen((o) => !o)} style={{
            display: 'inline-flex', alignItems: 'center', gap: 4,
            background: 'transparent', border: 0, padding: '4px 2px',
            fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 11,
            letterSpacing: '.12em', color: 'var(--ink-mute)', cursor: 'pointer', transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ink)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ink-mute)')}>
            <span>{lang}</span>
            <svg width="8" height="6" viewBox="0 0 8 6" fill="currentColor" style={{ transform: langOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}>
              <path d="M4 6 L0 1 L1 0 L4 4 L7 0 L8 1 Z" />
            </svg>
          </button>
          {langOpen && (
            <div style={{
              position: 'absolute', top: 'calc(100% + 12px)', right: 0, zIndex: 60,
              background: 'var(--bg)', minWidth: 64,
              border: '1px solid var(--line-soft)',
              boxShadow: '0 8px 24px rgba(27,28,26,0.10)',
              overflow: 'hidden', animation: 'fadeIn 0.15s cubic-bezier(0.22, 1, 0.36, 1)',
            }}>
              {[{ code: 'KR' }, { code: 'EN' }, { code: 'JP' }].map((opt) => {
                const on = lang === opt.code;
                return (
                  <button key={opt.code} onClick={() => { setLang(opt.code); setLangOpen(false); }}
                    style={{
                      display: 'block', width: '100%', padding: '12px 16px',
                      background: on ? 'var(--surface-1)' : 'transparent',
                      border: 0, cursor: 'pointer', textAlign: 'center',
                      fontFamily: 'var(--font-sans)', fontWeight: on ? 600 : 500, fontSize: 12,
                      letterSpacing: '.12em', color: on ? 'var(--ink)' : 'var(--ink-3)',
                      transition: 'background 0.15s',
                    }}
                    onMouseEnter={(e) => { if (!on) e.currentTarget.style.background = 'var(--surface-1)'; }}
                    onMouseLeave={(e) => { if (!on) e.currentTarget.style.background = 'transparent'; }}>
                    {opt.code}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
