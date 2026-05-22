'use client';
import React from 'react';
import { HanjaStamp, Eyebrow } from '../common';

const serifKR = 'var(--font-serif-kr)';
const sans = 'var(--font-sans)';

export const TraditionBanner = () => (
  <section style={{ position: 'relative', background: 'var(--ink)', color: 'var(--ink-on-dark)', padding: '160px 48px' }}>
    <div style={{ position: 'absolute', inset: 0, background: 'url(/assets/hanji-texture.png) repeat', backgroundSize: '500px 500px', opacity: 0.06, mixBlendMode: 'screen', pointerEvents: 'none' }} />
    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 70%)', pointerEvents: 'none' }} />
    <HanjaStamp size={520} opacity={0.04} rotate={-6} color="var(--bg)" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%) rotate(-6deg)', mixBlendMode: 'screen' }} />
    <div style={{ position: 'relative', maxWidth: 1024, margin: '0 auto', textAlign: 'center' }}>
      <Eyebrow style={{ color: 'rgba(250,249,245,0.55)', marginBottom: 36 }}>OUR TRADITION</Eyebrow>
      <blockquote style={{ fontFamily: serifKR, fontWeight: 400, fontSize: 36, lineHeight: 1.55, color: 'var(--ink-on-dark)', margin: 0, letterSpacing: '-0.015em' }}>
        &ldquo;시간이 지날수록 깊어지는 술의 가치와 장인의 손끝에서<br />탄생한 미학, 그 속에 담긴 특별한 소담(笑談)을 만나보세요.&rdquo;
      </blockquote>
      <div style={{ width: 28, height: 1, background: 'rgba(250,249,245,0.4)', margin: '64px auto' }} />
      <p style={{ fontFamily: serifKR, fontWeight: 300, fontSize: 16, lineHeight: 2.1, color: 'rgba(250,249,245,0.72)', margin: '0 auto', maxWidth: 720 }}>
        &ldquo;전통의 깊은 풍미를 지키되, 현대적인 감각을 잃지 않는 것. 그것이 소담이 추구하는 유일한 길입니다.
        누군가에게는 새로운 발견이 되고, 누군가에게는 잊지 못할 여운이 될 이 한 잔을 위해 우리는 매일
        최선을 다하고 있습니다. 까다롭게 고른 재료와 섬세한 양조 과정이 증명하는 소담만의 남다른 퀄리티를
        직접 경험해 보세요. 당신의 안목이 틀리지 않았음을, 첫 모금의 감동으로 보답하겠습니다.&rdquo;
      </p>
    </div>
  </section>
);
