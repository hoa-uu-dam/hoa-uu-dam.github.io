import { Trans, useTranslation } from 'react-i18next';
import Placeholder from '../components/Placeholder';
import { useViewport } from '../hooks/useViewport';

type Pillar = { n: string; title: string; body: string };

export default function About() {
  const { t } = useTranslation();
  const { isMobile, isTablet, isCompact } = useViewport();
  const PAD_X = isMobile ? 20 : isTablet ? 40 : 64;
  const PAD_Y = isMobile ? 48 : isTablet ? 64 : 80;
  const pillars = t('about.pillars', { returnObjects: true }) as Pillar[];

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
        {t('about.eyebrow')}
      </div>
      <h1
        style={{
          fontFamily: '"Be Vietnam Pro", sans-serif',
          fontWeight: 300,
          fontSize: isMobile ? 36 : isTablet ? 48 : 64,
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          margin: `0 0 ${isMobile ? 40 : 64}px`,
          maxWidth: 900,
        }}
      >
        <Trans
          i18nKey="about.title"
          components={{
            em: <em style={{ fontStyle: 'italic', color: '#c87a3d' }} />,
          }}
        />
      </h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isCompact ? '1fr' : '1fr 1fr',
          gap: isMobile ? 32 : isTablet ? 48 : 80,
          alignItems: 'start',
        }}
      >
        <Placeholder
          label={t('about.founderImageAlt')}
          aspect={isMobile ? '4/3' : '4/5'}
          tone="warm"
          style={{ borderRadius: 4 }}
        />
        <div>
          <p
            style={{
              fontSize: isMobile ? 16 : 18,
              lineHeight: 1.7,
              color: '#3a342b',
              margin: 0,
            }}
          >
            {t('about.intro')}
          </p>
          <p
            style={{
              fontSize: isMobile ? 15 : 16,
              lineHeight: 1.7,
              color: '#5b5246',
              marginTop: 24,
            }}
          >
            {t('about.name')}
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop: isMobile ? 72 : 120,
          paddingTop: isMobile ? 56 : 80,
          borderTop: '1px solid #ebe1cf',
        }}
      >
        <div
          style={{
            fontSize: 11,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#c87a3d',
            marginBottom: 16,
          }}
        >
          {t('about.missionEyebrow')}
        </div>
        <h2
          style={{
            fontFamily: '"Be Vietnam Pro", sans-serif',
            fontWeight: 300,
            fontSize: isMobile ? 30 : isTablet ? 40 : 52,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            margin: `0 0 ${isMobile ? 56 : 80}px`,
            maxWidth: 1000,
          }}
        >
          <Trans
            i18nKey="about.missionTitle"
            components={{
              em: <em style={{ fontStyle: 'italic', color: '#c87a3d' }} />,
            }}
          />
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: isMobile ? 48 : 64,
            rowGap: isMobile ? 48 : 80,
          }}
        >
          {pillars.map(p => (
            <div key={p.n}>
              <div
                style={{
                  fontFamily: '"Be Vietnam Pro", sans-serif',
                  fontWeight: 300,
                  fontSize: isMobile ? 44 : 56,
                  color: '#f2a968',
                  lineHeight: 1,
                  marginBottom: 16,
                }}
              >
                {p.n}
              </div>
              <h3
                style={{
                  fontSize: isMobile ? 20 : 24,
                  fontWeight: 500,
                  margin: '0 0 12px',
                  color: '#2a2620',
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontSize: isMobile ? 15 : 16,
                  lineHeight: 1.7,
                  color: '#5b5246',
                  margin: 0,
                  maxWidth: 480,
                }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
