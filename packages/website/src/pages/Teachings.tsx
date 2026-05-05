import { Trans, useTranslation } from 'react-i18next';
import Placeholder from '../components/Placeholder';
import { useViewport } from '../hooks/useViewport';
import { TEACHINGS } from '../data';

export default function Teachings() {
  const { t } = useTranslation();
  const { isMobile, isTablet } = useViewport();
  const PAD_X = isMobile ? 20 : isTablet ? 40 : 64;
  const PAD_Y = isMobile ? 48 : isTablet ? 64 : 80;
  const items = [...TEACHINGS, ...TEACHINGS.slice(0, 2)];

  return (
    <div style={{ padding: `${PAD_Y}px ${PAD_X}px` }}>
      <div
        style={{
          fontSize: 11,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#c87a3d',
          marginBottom: 16,
        }}
      >
        {t('teachings.eyebrow')}
      </div>
      <h1
        style={{
          fontFamily: '"Be Vietnam Pro", sans-serif',
          fontWeight: 300,
          fontSize: isMobile ? 36 : isTablet ? 48 : 64,
          letterSpacing: '-0.02em',
          margin: '0 0 48px',
          maxWidth: 900,
        }}
      >
        <Trans
          i18nKey="teachings.title"
          components={{
            em: <em style={{ fontStyle: 'italic', color: '#c87a3d' }} />,
          }}
        />
      </h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile
            ? '1fr'
            : isTablet
              ? 'repeat(2, 1fr)'
              : 'repeat(3, 1fr)',
          gap: isMobile ? 40 : isTablet ? 32 : 48,
        }}
      >
        {items.map((te, i) => (
          <article key={`${te.id}-${i}`} style={{ cursor: 'pointer' }}>
            <Placeholder
              label={`teaching · ${te.teacher.toLowerCase()}`}
              aspect="4/3"
              tone={i % 2 ? 'warm' : 'cream'}
              style={{ borderRadius: 4 }}
            />
            <div
              style={{
                fontSize: 11,
                color: '#c87a3d',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginTop: 16,
              }}
            >
              {t(`teachings.items.${te.id}.type`)}
            </div>
            <h3
              style={{
                fontFamily: '"Be Vietnam Pro", sans-serif',
                fontSize: isMobile ? 20 : 22,
                fontWeight: 500,
                margin: '8px 0',
                lineHeight: 1.3,
              }}
            >
              {t(`teachings.items.${te.id}.title`)}
            </h3>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.6,
                color: '#5b5246',
                margin: '0 0 8px',
              }}
            >
              {t(`teachings.items.${te.id}.excerpt`)}
            </p>
            <div style={{ fontSize: 12, color: '#9a8e7a' }}>{te.teacher}</div>
          </article>
        ))}
      </div>
    </div>
  );
}
