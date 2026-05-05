import type { CSSProperties } from 'react';

type Tone = 'warm' | 'cream' | 'deep' | 'soft';

type Props = {
  label: string;
  aspect?: string;
  tone?: Tone;
  style?: CSSProperties;
};

const TONES: Record<Tone, { bg: string; stripe: string; text: string }> = {
  warm: { bg: '#faddbb', stripe: '#f8d0a3', text: '#8a5a2e' },
  cream: { bg: '#f0e6d6', stripe: '#e6d9c4', text: '#6b5a3e' },
  deep: { bg: '#e8b078', stripe: '#dfa264', text: '#5a3a1c' },
  soft: { bg: '#fce7d0', stripe: '#f7d6b3', text: '#9a6a3a' },
};

export default function Placeholder({
  label,
  aspect = '4/3',
  tone = 'warm',
  style = {},
}: Props) {
  const t = TONES[tone];
  return (
    <div
      style={{
        aspectRatio: aspect,
        background: `repeating-linear-gradient(135deg, ${t.bg} 0 12px, ${t.stripe} 12px 24px)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: t.text,
        fontFamily: '"JetBrains Mono", ui-monospace, monospace',
        fontSize: 11,
        letterSpacing: '0.04em',
        textTransform: 'lowercase',
        padding: 16,
        textAlign: 'center',
        lineHeight: 1.4,
        ...style,
      }}
    >
      {label}
    </div>
  );
}
