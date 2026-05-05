import { useTranslation } from 'react-i18next';
import { useViewport } from '../hooks/useViewport';

export default function Contact() {
  const { t } = useTranslation();
  const { isMobile, isTablet } = useViewport();
  const PAD_X = isMobile ? 20 : isTablet ? 40 : 64;
  const PAD_Y = isMobile ? 48 : isTablet ? 64 : 80;

  const eyebrow = {
    fontSize: 11,
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    color: '#c87a3d',
    marginBottom: 12,
  };

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
        {t('contact.eyebrow')}
      </div>
      <h1
        style={{
          fontFamily: '"Be Vietnam Pro", sans-serif',
          fontWeight: 300,
          fontSize: isMobile ? 36 : isTablet ? 48 : 64,
          letterSpacing: '-0.02em',
          margin: `0 0 ${isMobile ? 48 : 64}px`,
        }}
      >
        {t('contact.title')}
      </h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile
            ? '1fr'
            : isTablet
              ? '1fr 1fr'
              : '1fr 1fr 1fr',
          gap: isMobile ? 36 : isTablet ? 48 : 64,
          maxWidth: 1000,
        }}
      >
        <div>
          <div style={eyebrow}>{t('contact.addressLabel')}</div>
          <div
            style={{
              fontSize: isMobile ? 16 : 18,
              lineHeight: 1.6,
              color: '#2a2620',
            }}
          >
            42 Lotus Lane
            <br />
            Blue Mountains, NSW 2780
            <br />
            Australia
          </div>
        </div>
        <div>
          <div style={eyebrow}>{t('contact.emailLabel')}</div>
          <a
            href="mailto:hello@hoauudam.org"
            style={{
              fontSize: isMobile ? 16 : 18,
              color: '#2a2620',
              textDecoration: 'none',
              boxShadow: 'inset 0 -6px 0 -3px #f2a968',
              paddingBottom: 1,
            }}
          >
            hello@hoauudam.org
          </a>
        </div>
        <div>
          <div style={eyebrow}>{t('contact.hoursLabel')}</div>
          <div
            style={{
              fontSize: isMobile ? 15 : 16,
              lineHeight: 1.7,
              color: '#3a342b',
            }}
          >
            {t('contact.hours')}
          </div>
        </div>
      </div>
    </div>
  );
}
