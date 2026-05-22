'use client';
import React from 'react';

const sans = 'var(--font-sans)';

const HomeAHero = ({ heroSize = 64 }: { heroSize?: number }) => (
  <section style={{ position: 'relative', height: 780, overflow: 'hidden' }}>
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'url(/assets/hero-rice.png) center/cover no-repeat',
        transform: 'scale(1.02)',
        filter: 'saturate(0.95) brightness(1.04)',
      }}
    />
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background:
          'linear-gradient(rgba(252,249,246,0.18) 0%, rgba(252,249,246,0) 30%, rgba(0,0,0,0.45) 100%)',
      }}
    />
    <div
      style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.12)' }}
    />

    <div
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 130,
        bottom: 160,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 192px',
      }}
    >
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 55,
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          color: 'rgb(250,250,250)',
          margin: 0,
          textShadow: '0 4px 3px rgba(0,0,0,0.10), 0 10px 8px rgba(0,0,0,0.04)',
        }}
      >
        소담, 마주 앉은 우리 사이
      </h1>
      <div
        style={{
          marginTop: 20,
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: Math.round(heroSize * 0.46),
          lineHeight: 1.45,
          letterSpacing: '-0.01em',
          color: 'rgba(255,255,255,0.96)',
          textShadow: '0 4px 3px rgba(0,0,0,0.10)',
          whiteSpace: 'pre-line',
        }}
      >
        {'웃음으로 시작해서 대화로 잇고,\n술 한 잔으로 완성되는 순간'}
      </div>
      <p
        style={{
          marginTop: 32,
          fontFamily: sans,
          fontWeight: 500,
          fontSize: 14,
          lineHeight: 1.85,
          maxWidth: 560,
          whiteSpace: 'pre-line',
          color: 'rgb(255,255,255)',
        }}
      >
        {
          '"시간이 지날수록 깊어지는 술의 가치와 장인의 손끝에서 탄생한 미학,\n그 속에 담긴 특별한 소담(笑談)을 만나보세요."'
        }
      </p>
      <a
        href="https://preference-test.vercel.app/"
        target="_blank"
        rel="noreferrer noopener"
        style={{
          marginTop: 36,
          background: '#000',
          color: '#fff',
          border: 0,
          padding: '18px 36px',
          fontFamily: sans,
          fontWeight: 700,
          fontSize: 11,
          letterSpacing: '.22em',
          cursor: 'pointer',
          textDecoration: 'none',
          display: 'inline-block',
        }}
      >
        나의 술 취향 테스트하기
      </a>
    </div>

    <div
      style={{
        position: 'absolute',
        bottom: 36,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        color: 'rgba(255,255,255,0.7)',
      }}
    >
      <span style={{ fontFamily: sans, fontSize: 9, letterSpacing: '.3em' }}>
        SCROLL
      </span>
      <div
        style={{ width: 1, height: 36, background: 'rgba(255,255,255,0.5)' }}
      />
    </div>
  </section>
);

export default HomeAHero;
