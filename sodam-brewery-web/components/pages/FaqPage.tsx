'use client';
import React, { useState } from 'react';
import { Eyebrow } from '../common';

const serifKR = 'var(--font-serif-kr)';
const serifEN = 'var(--font-serif-en)';
const sans = 'var(--font-sans)';

const FAQ_FULL = [
  { cat: 'STORAGE', q: '유통기한이 90일로 표기되어 있는데, 기간이 지나면 마실 수 없나요?', a: '제품에 표기된 90일은 관련 법규에 따른 유통기한일 뿐입니다. 전통주는 발효 식품이기에 보관 환경이 무엇보다 중요합니다. 냉장 보관만 잘 유지해주신다면 최대 1년까지도 무리 없이 즐기실 수 있습니다. 시간이 흐름에 따라 깊어지는 전통주 특유의 숙성된 맛을 경험해보세요.' },
  { cat: 'COLLECTION', q: '오프라인에서도 구매하고 싶은데 어디로 가면 되나요?', a: '소담 양조장으로 직접 방문해 주시면 언제든 구매가 가능합니다. 또한 다양한 지역 축제와 박람회에도 꾸준히 참여하고 있습니다. 축제 참가 일정과 구체적인 장소는 공식 인스타그램 및 홈페이지 공지사항을 통해 가장 빠르게 확인하실 수 있습니다.' },
  { cat: 'ORDER', q: '배송 기간은 보통 얼마나 걸리나요?', a: '고객님의 기다림을 최소화하기 위해 주문 확인 후 평일 기준 2일 이내에 출고하는 것을 원칙으로 하고 있습니다. 믿을 수 있는 우체국 택배를 통해 최대한 신속하고 안전하게 댁 앞까지 배송해 드립니다.' },
  { cat: 'ORDER', q: '택배 배송 중 온도가 올라가서 술 맛이 변하지는 않을까요?', a: '신선도를 유지하기 위해 신선박스에 보냉재(아이스팩)을 동봉하여 꼼꼼히 패킹 후 보내드리고 있습니다. 다만, 기온이 높은 한여름에는 배송 중 일시적인 온도 상승이 있을 수 있어, 최상의 컨디션을 원하신다면 가급적 오프라인 구매를 권장 드리고 있습니다.' },
  { cat: 'ORDER', q: '제품 파손 시 교환/환불 절차는 어떻게 되나요?', a: '배송 중 파손이 발생한 경우, 파손된 제품의 사진을 촬영하여 고객센터로 접수해 주시면 즉시 재발송 또는 환불 처리를 도와드리고 있습니다. 제품 수령 당일 연락 부탁드립니다.' },
  { cat: 'STORAGE', q: '가장 추천하는 보관 방법이 있나요?', a: '모든 전통주는 수령 즉시 냉장 보관하시는 것이 가장 좋습니다. 특히 일반 냉장고보다 온도가 일정하게 유지되는 김치 냉장고에 보관하시면, 맛의 변질을 막고 신선한 상태를 훨씬 더 오래 유지할 수 있습니다.' },
  { cat: 'COLLECTION', q: "'너랑나랑' 13도와 17도의 차이점이 무엇인가요?", a: '두 제품은 단순히 알코올 도수만 다른 것이 아닙니다. 주조 과정과 숙성 기간에 차이를 두어 각기 다른 매력을 갖도록 설계되었습니다. 13도는 깔끔하고 가벼워 누구나 편하게 즐기기 좋고, 17도는 묵직한 바디감과 깊은 풍미가 특징으로 술 자체의 무게감을 즐기시는 분들께 적합합니다.' },
  { cat: 'STORAGE', q: '어떻게 마셔야 가장 맛있게 즐길 수 있나요?', a: '차갑게 보관하시되, 마시기 직전 냉장고에서 꺼내 온도가 살짝 올라갔을 때 드시는 것을 추천합니다. 너무 차가울 때보다 냉기가 조금 가셨을 때 술의 단맛과 향이 극대화되어 훨씬 풍부한 맛을 느끼실 수 있습니다.' },
  { cat: 'COLLECTION', q: "'꽃달'에는 실제 꽃이 들어가나요? 이름의 의미가 궁금해요.", a: "'꽃달'에는 꽃이 들어가지 않습니다. 오직 쌀과 누룩만으로 정성껏 빚은 술입니다. 하지만 신기하게도 잘 빚어진 쌀에서 나오는 천연의 단맛과 향이 마치 화사한 꽃향기와 같아 '꽃달'이라는 예쁜 이름을 붙이게 되었습니다. 입안 가득 퍼지는 쌀의 꽃향기를 느껴보세요." },
  { cat: 'BREWING', q: "'발간빛'에 고구마가 들어갔나요? 고구마 맛이 강하지 않은 것 같아요.", a: "네, '발간빛'은 인공 색소 없이 100% 자색 고구마만으로 아름다운 빛깔을 낸 술입니다. 고구마를 찌거나 굽지 않고 '말린 고구마'를 사용하는 이유는, 고구마의 단맛이 술 본연의 풍미를 가리지 않게 하기 위해서입니다." },
];

const FAQ_CATS = [{ k: 'all', l: '전체' }, { k: 'COLLECTION', l: '제품' }, { k: 'BREWING', l: '주조' }, { k: 'STORAGE', l: '보관' }, { k: 'ORDER', l: '주문·배송' }];

export const FaqPage = ({ go }: { go?: (page: string) => void }) => {
  const [cat, setCat] = useState('all');
  const [openIdx, setOpenIdx] = useState(0);
  const items = cat === 'all' ? FAQ_FULL : FAQ_FULL.filter((x) => x.cat === cat);

  return (
    <main style={{ padding: '64px 48px 128px', maxWidth: 960, margin: '0 auto', minHeight: 600 }}>
      <div style={{ textAlign: 'center', borderBottom: '1px solid var(--line-soft)', paddingBottom: 48, marginBottom: 48 }}>
        <Eyebrow style={{ marginBottom: 18 }}>FAQ</Eyebrow>
        <h1 style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 52, color: 'var(--ink)', margin: 0, letterSpacing: '-0.025em', lineHeight: 1.15 }}>자주 묻는 질문</h1>
        <p style={{ marginTop: 18, fontFamily: serifKR, fontWeight: 300, fontSize: 16, color: 'var(--ink-mute)', maxWidth: 560, margin: '18px auto 0', lineHeight: 1.7 }}>
          궁금한 점이 더 있으시다면 소담 고객센터로 연락 주세요.<br />언제든 정성껏 답변드리겠습니다.
        </p>
      </div>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 48, flexWrap: 'wrap' }}>
        {FAQ_CATS.map((c) => {
          const on = cat === c.k;
          return (
            <button key={c.k} onClick={() => { setCat(c.k); setOpenIdx(0); }} style={{ padding: '10px 22px', cursor: 'pointer', background: on ? 'var(--ink)' : 'transparent', color: on ? 'var(--bg)' : 'var(--ink-3)', border: on ? '1px solid var(--ink)' : '1px solid var(--line)', fontFamily: sans, fontWeight: 600, fontSize: 12, letterSpacing: '.08em', transition: 'all 0.2s' }}>
              {c.l}
            </button>
          );
        })}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map((item, i) => {
          const open = openIdx === i;
          return (
            <div key={`${item.q}-${i}`} onClick={() => setOpenIdx(open ? -1 : i)} style={{ background: 'var(--surface-1)', padding: '28px 32px', cursor: 'pointer', transition: 'background 0.2s' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 18, flex: 1 }}>
                  <span style={{ fontFamily: serifEN, fontWeight: 700, fontSize: 13, color: 'var(--accent-point)', letterSpacing: '.04em', minWidth: 22 }}>Q.</span>
                  <span style={{ fontFamily: serifKR, fontWeight: 500, fontSize: 17, lineHeight: 1.55, color: 'var(--ink)', letterSpacing: '-0.01em' }}>{item.q}</span>
                </div>
                <span style={{ fontFamily: sans, fontWeight: 700, fontSize: 9, letterSpacing: '.22em', color: 'var(--ink-mute)', marginRight: 12 }}>{item.cat}</span>
                <svg width="12" height="8" viewBox="0 0 12 7.4" fill="var(--ink-mute)" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform .24s', flexShrink: 0 }}>
                  <path d="M 6 7.4 L 0 1.4 L 1.4 0 L 6 4.6 L 10.6 0 L 12 1.4 L 6 7.4 Z" />
                </svg>
              </div>
              {open && (
                <div style={{ marginTop: 22, paddingTop: 22, borderTop: '1px solid var(--line-soft)', display: 'flex', alignItems: 'baseline', gap: 18 }}>
                  <span style={{ fontFamily: serifEN, fontWeight: 700, fontSize: 13, color: 'var(--ink-mute)', letterSpacing: '.04em', minWidth: 22 }}>A.</span>
                  <p style={{ fontFamily: sans, fontSize: 14.5, lineHeight: 1.95, color: 'var(--ink-3)', margin: 0 }}>{item.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 64, padding: '40px 48px', background: 'var(--surface-cream-20)', border: '1px solid var(--surface-cream-50)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32 }}>
        <div>
          <Eyebrow style={{ color: 'var(--accent-point)', marginBottom: 10 }}>STILL HAVE A QUESTION?</Eyebrow>
          <div style={{ fontFamily: serifKR, fontWeight: 700, fontSize: 22, color: 'var(--ink)' }}>원하는 답을 찾지 못하셨나요?</div>
          <p style={{ marginTop: 8, fontFamily: sans, fontSize: 13, color: 'var(--ink-mute)', maxWidth: 480 }}>소담 고객센터로 직접 문의해 주시면 평일 24시간 내에 정성껏 답변드립니다.</p>
        </div>
        <button onClick={() => go?.('contact')} style={{ background: 'var(--ink)', color: '#fff', border: 0, padding: '16px 32px', fontFamily: sans, fontWeight: 700, fontSize: 11, letterSpacing: '.22em', cursor: 'pointer', flex: '0 0 auto' }}>
          문의하기 →
        </button>
      </div>
    </main>
  );
};
