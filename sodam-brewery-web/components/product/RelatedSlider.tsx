'use client';
import React, { useRef } from 'react';
import { Product } from '../common';

const serifKR = 'var(--font-serif-kr)';
const sans = 'var(--font-sans)';

const relNavBtn: React.CSSProperties = {
  width: 36, height: 36, borderRadius: 999,
  border: '1px solid var(--line)', background: 'transparent',
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  cursor: 'pointer', color: 'var(--ink)',
};

export const RelatedSlider = ({ title, products, go }: { title: string; products: Product[]; go?: (page: string, payload?: Product) => void }) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: number) => {
    scrollerRef.current?.scrollBy({ left: dir * 280, behavior: 'smooth' });
  };
  return (
    <section style={{ padding: '64px 48px 96px', maxWidth: 1280, margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 28 }}>
        <h3 style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 26, color: 'var(--ink)', margin: 0, letterSpacing: '-0.02em' }}>{title}</h3>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={() => scrollBy(-1)} aria-label="이전" style={relNavBtn}>
            <svg width="8" height="12" viewBox="0 0 10 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8 1L2 7L8 13" /></svg>
          </button>
          <button onClick={() => scrollBy(1)} aria-label="다음" style={relNavBtn}>
            <svg width="8" height="12" viewBox="0 0 10 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 1L8 7L2 13" /></svg>
          </button>
        </div>
      </div>
      <div ref={scrollerRef} className="rel-scroller" style={{ display: 'flex', gap: 16, overflowX: 'auto', overflowY: 'hidden', paddingBottom: 8, scrollSnapType: 'x mandatory' }}>
        {products.map((rp) => (
          <article
            key={rp.id}
            onClick={() => go?.('product', rp)}
            style={{ flex: '0 0 220px', cursor: 'pointer', scrollSnapAlign: 'start', transition: 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
          >
            <div style={{ aspectRatio: '4/5', background: `url(${rp.img}) center/cover no-repeat, var(--surface-1)` }} />
            <div style={{ paddingTop: 12 }}>
              <div style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 15, color: 'var(--ink)' }}>{rp.name}</div>
              <div style={{ marginTop: 4, fontFamily: sans, fontSize: 10, letterSpacing: '.12em', color: 'var(--ink-mute)' }}>{rp.abv} · {rp.vol}</div>
              <div style={{ marginTop: 8, fontFamily: serifKR, fontWeight: 700, fontSize: 14, color: 'var(--ink)' }}>{rp.price}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
