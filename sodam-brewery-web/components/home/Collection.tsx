'use client';
import React, { useState } from 'react';
import { PRODUCTS, Product, ChipDark, ChipCream, IconBtn, Stepper, KrEyebrow } from '../common';

const serifKR = 'var(--font-serif-kr)';
const serifEN = 'var(--font-serif-en)';
const sans = 'var(--font-sans)';

const HomeACollectionCard = ({
  p,
  go,
  onAddToCart,
}: {
  p: Product;
  go?: (page: string, payload?: Product) => void;
  onAddToCart?: (p: Product, qty: number) => void;
}) => {
  const [qty, setQty] = useState(1);
  return (
    <article
      onClick={() => go?.('product', p)}
      style={{
        flex: '0 0 calc(50% - 16px)',
        background: 'var(--surface-1)',
        boxShadow: 'var(--shadow-card)',
        cursor: 'pointer',
        overflow: 'hidden',
        borderRadius: 0,
        transition: 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
      }}
    >
      <div
        style={{
          position: 'relative',
          aspectRatio: '570/500',
          background: `url(${p.img}) center/cover no-repeat`,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 24,
            left: 24,
            display: 'flex',
            gap: 8,
          }}
        >
          {p.tag && <ChipDark>{p.tag}</ChipDark>}
          <ChipCream>{p.abv}</ChipCream>
        </div>
      </div>
      <div style={{ padding: '28px 32px 32px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
          }}
        >
          <div
            style={{
              fontFamily: serifKR,
              fontWeight: 700,
              fontSize: 28,
              color: 'var(--ink)',
            }}
          >
            {p.name}
          </div>
          <div
            style={{
              fontFamily: serifKR,
              fontSize: 22,
              color: 'var(--ink)',
              fontWeight: 700,
            }}
          >
            {p.price}
          </div>
        </div>
        <p
          style={{
            fontFamily: sans,
            fontSize: 13,
            lineHeight: 1.75,
            color: 'var(--ink-mute)',
            marginTop: 20,
            marginBottom: 22,
          }}
        >
          {p.desc}
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 18,
          }}
        >
          <div
            style={{
              fontFamily: sans,
              fontSize: 11,
              letterSpacing: '.18em',
              color: 'var(--ink-mute)',
            }}
          >
            {p.vol} · {p.abv}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              go?.('product', p);
            }}
            style={{
              background: 'transparent',
              border: 0,
              padding: '4px 0',
              fontFamily: sans,
              fontWeight: 700,
              fontSize: 10,
              letterSpacing: '.22em',
              color: 'var(--ink-3)',
              cursor: 'pointer',
              borderBottom: '1px solid var(--ink-3)',
              transition: 'color 0.2s, border-color 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = 'var(--accent-point)';
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-point)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = 'var(--ink-3)';
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--ink-3)';
            }}
          >
            자세히 보기 →
          </button>
        </div>
        <div
          onClick={(e) => e.stopPropagation()}
          style={{ display: 'flex', alignItems: 'center', gap: 12 }}
        >
          <Stepper n={qty} setN={setQty} />
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart ? onAddToCart(p, qty) : go?.('product', p);
            }}
            style={{
              flex: 1,
              background: 'var(--ink)',
              color: '#fff',
              border: 0,
              padding: '12px 16px',
              fontFamily: sans,
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: '.22em',
              cursor: 'pointer',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = '0.88';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = '1';
            }}
          >
            장바구니에 담기
          </button>
        </div>
      </div>
    </article>
  );
};

const HomeACollection = ({
  go,
  onAddToCart,
}: {
  go?: (page: string, payload?: Product) => void;
  onAddToCart?: (p: Product, qty: number) => void;
}) => {
  const VISIBLE = 2;
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(PRODUCTS.length / VISIBLE);
  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(totalPages - 1, p + 1));
  const atStart = page === 0;
  const atEnd = page === totalPages - 1;

  return (
    <section
      id="section-collection"
      style={{ padding: '96px 48px', maxWidth: 1280, margin: '0 auto' }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: 56,
        }}
      >
        <div>
          <KrEyebrow style={{ marginBottom: 26 }}>
            다정한 웃음과 담소가 깊어지는 소담의 술
          </KrEyebrow>
          <h2
            style={{
              fontFamily: serifEN,
              fontWeight: 700,
              fontSize: 52,
              lineHeight: 1,
              color: 'var(--ink)',
              margin: 0,
              letterSpacing: '-0.01em',
            }}
          >
            Sodam Collection
          </h2>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span
            style={{
              fontFamily: sans,
              fontWeight: 500,
              fontSize: 11,
              letterSpacing: '.22em',
              color: 'var(--ink-mute)',
            }}
          >
            {String(page + 1).padStart(2, '0')} /{' '}
            {String(totalPages).padStart(2, '0')}
          </span>
          <div style={{ display: 'flex', gap: 12 }}>
            <IconBtn
              onClick={prev}
              style={{
                opacity: atStart ? 0.35 : 1,
                cursor: atStart ? 'not-allowed' : 'pointer',
              }}
            >
              <svg
                width="10"
                height="14"
                viewBox="0 0 10 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M8 1L2 7L8 13" />
              </svg>
            </IconBtn>
            <IconBtn
              onClick={next}
              style={{
                opacity: atEnd ? 0.35 : 1,
                cursor: atEnd ? 'not-allowed' : 'pointer',
              }}
            >
              <svg
                width="10"
                height="14"
                viewBox="0 0 10 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M2 1L8 7L2 13" />
              </svg>
            </IconBtn>
          </div>
        </div>
      </div>
      <div style={{ overflow: 'hidden' }}>
        <div
          style={{
            display: 'flex',
            gap: 32,
            transform: `translateX(calc(${-page} * (100% + 32px)))`,
            transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          {PRODUCTS.map((p) => (
            <HomeACollectionCard
              key={p.id}
              p={p}
              go={go}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 10,
          marginTop: 36,
        }}
      >
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            style={{
              width: i === page ? 28 : 8,
              height: 2,
              padding: 0,
              border: 0,
              background: i === page ? 'var(--ink)' : 'var(--line)',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeACollection;
