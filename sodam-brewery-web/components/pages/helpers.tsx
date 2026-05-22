'use client';
import React from 'react';

const sans = 'var(--font-sans)';

export const FieldLine = ({ label, placeholder, value, onChange, type = 'text', full, required }: {
  label: string; placeholder?: string; value?: string; onChange?: (v: string) => void; type?: string; full?: boolean; required?: boolean;
}) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, gridColumn: full ? '1 / -1' : 'auto' }}>
    <div style={{ fontFamily: sans, fontWeight: 700, fontSize: 10, letterSpacing: '.22em', color: 'var(--ink-mute)', textTransform: 'uppercase' }}>{label}</div>
    <input type={type} placeholder={placeholder} value={value || ''} onChange={(e) => onChange?.(e.target.value)} required={required}
      style={{ border: 0, borderBottom: '1px solid var(--line)', background: 'transparent', padding: '10px 0', fontFamily: sans, fontSize: 14, color: 'var(--ink)', outline: 0 }} />
  </div>
);

export const FieldLogin = ({ label, type = 'text', placeholder, value, onChange }: {
  label: string; type?: string; placeholder?: string; value?: string; onChange?: (v: string) => void;
}) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
    <div style={{ fontFamily: sans, fontWeight: 700, fontSize: 10, letterSpacing: '.22em', color: 'rgba(61,48,40,0.5)', textTransform: 'uppercase' }}>{label}</div>
    <input type={type} placeholder={placeholder} value={value || ''} onChange={(e) => onChange?.(e.target.value)}
      style={{ border: 0, borderBottom: '1px solid rgba(61,48,40,0.12)', background: 'transparent', padding: '10px 0', fontFamily: sans, fontSize: 15, color: 'var(--ink-2)', outline: 0 }} />
  </div>
);

export const Row = ({ k, v }: { k: string; v: string }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', fontFamily: sans, fontSize: 14, color: 'var(--ink-3)' }}>
    <span style={{ color: 'var(--ink-mute)' }}>{k}</span>
    <span style={{ fontFamily: 'var(--font-serif-kr)', fontWeight: 700 }}>{v}</span>
  </div>
);
