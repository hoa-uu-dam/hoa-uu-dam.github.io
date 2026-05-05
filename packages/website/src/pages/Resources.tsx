import { useTranslation } from 'react-i18next';
import { useViewport } from '../hooks/useViewport';

type Section = { cat: string; items: string[] };

export default function Resources() {
  const { t } = useTranslation();
  const { isMobile, isTablet } = useViewport();
  const PAD_X = isMobile ? 20 : isTablet ? 40 : 64;
  const PAD_Y = isMobile ? 48 : isTablet ? 64 : 80;
  const sections = t('resources.sections', {
    returnObjects: true,
  }) as Section[];

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
        {t('resources.eyebrow')}
      </div>
      <h1
        style={{
          fontFamily: '"Be Vietnam Pro", sans-serif',
          fontWeight: 300,
          fontSize: isMobile ? 36 : isTablet ? 48 : 64,
          letterSpacing: '-0.02em',
          margin: `0 0 ${isMobile ? 56 : 80}px`,
          maxWidth: 900,
        }}
      >
        {t('resources.title')}
      </h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: isMobile ? 48 : 64,
          rowGap: isMobile ? 48 : 64,
        }}
      >
        {sections.map((sec, i) => (
          <div key={i}>
            <h3
              style={{
                fontFamily: '"Be Vietnam Pro", sans-serif',
                fontSize: isMobile ? 20 : 22,
                fontWeight: 500,
                color: '#c87a3d',
                margin: '0 0 24px',
                paddingBottom: 12,
                borderBottom: '1px solid #f2a968',
              }}
            >
              {sec.cat}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {sec.items.map((it, j) => (
                <li
                  key={j}
                  style={{
                    padding: '14px 0',
                    borderBottom: '1px solid #ebe1cf',
                    fontSize: isMobile ? 15 : 16,
                    color: '#3a342b',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>{it}</span>
                  <span style={{ color: '#9a8e7a' }}>→</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
