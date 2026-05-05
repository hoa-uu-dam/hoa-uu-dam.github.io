import { Trans, useTranslation } from 'react-i18next';
import { useViewport } from '../hooks/useViewport';
import { ANNOUNCEMENTS } from '../data';

export default function News() {
  const { t } = useTranslation();
  const { isMobile, isTablet } = useViewport();
  const PAD_X = isMobile ? 20 : isTablet ? 40 : 64;
  const PAD_Y = isMobile ? 48 : isTablet ? 64 : 80;
  const [feature, ...rest] = ANNOUNCEMENTS;

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
        {t('news.eyebrow')}
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
        <Trans
          i18nKey="news.title"
          components={{
            em: <em style={{ fontStyle: 'italic', color: '#c87a3d' }} />,
          }}
        />
      </h1>

      {feature && (
        <article
          style={{
            marginBottom: isMobile ? 48 : 64,
            paddingBottom: isMobile ? 40 : 56,
            borderBottom: '1px solid #ebe1cf',
            cursor: 'pointer',
            maxWidth: 880,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              fontSize: 11,
              color: '#9a8e7a',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: 24,
            }}
          >
            <span style={{ color: '#c87a3d' }}>
              {t(`news.items.${feature.id}.category`)}
            </span>
            <span
              style={{
                width: 4,
                height: 4,
                borderRadius: '50%',
                background: '#d4c8b2',
              }}
            />
            <span>{feature.date}</span>
          </div>
          <h2
            style={{
              fontFamily: '"Be Vietnam Pro", sans-serif',
              fontSize: isMobile ? 30 : isTablet ? 40 : 52,
              fontWeight: 300,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              margin: '0 0 24px',
            }}
          >
            {t(`news.items.${feature.id}.title`)}
          </h2>
          <p
            style={{
              fontSize: isMobile ? 16 : 19,
              lineHeight: 1.7,
              color: '#5b5246',
              margin: '0 0 32px',
              maxWidth: 720,
            }}
          >
            {t(`news.items.${feature.id}.excerpt`)}
          </p>
          <span
            style={{
              fontSize: 12,
              color: '#2a2620',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              boxShadow: 'inset 0 -4px 0 -2px #f2a968',
              paddingBottom: 2,
            }}
          >
            {t('news.readLetter')}
          </span>
        </article>
      )}

      <ul style={{ listStyle: 'none', padding: 0, margin: 0, maxWidth: 880 }}>
        {rest.map((a, i) => (
          <li
            key={a.id}
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile
                ? '1fr'
                : isTablet
                  ? '140px 1fr'
                  : '160px 1fr',
              gap: isMobile ? 12 : isTablet ? 32 : 48,
              padding: isMobile ? '28px 0' : '36px 0',
              borderBottom: i < rest.length - 1 ? '1px solid #ebe1cf' : 'none',
              cursor: 'pointer',
              alignItems: 'baseline',
            }}
          >
            <div
              style={{
                paddingTop: 6,
                display: isMobile ? 'flex' : 'block',
                gap: 12,
                alignItems: 'baseline',
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  color: '#c87a3d',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  marginBottom: isMobile ? 0 : 6,
                }}
              >
                {t(`news.items.${a.id}.category`)}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: '#9a8e7a',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                {a.date}
              </div>
            </div>
            <div>
              <h3
                style={{
                  fontFamily: '"Be Vietnam Pro", sans-serif',
                  fontSize: isMobile ? 21 : 26,
                  fontWeight: 400,
                  lineHeight: 1.3,
                  letterSpacing: '-0.005em',
                  margin: '0 0 10px',
                }}
              >
                {t(`news.items.${a.id}.title`)}
              </h3>
              <p
                style={{
                  fontSize: isMobile ? 14 : 15,
                  lineHeight: 1.7,
                  color: '#5b5246',
                  margin: 0,
                }}
              >
                {t(`news.items.${a.id}.excerpt`)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
