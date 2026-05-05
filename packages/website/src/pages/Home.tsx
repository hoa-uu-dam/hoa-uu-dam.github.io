import { useNavigate } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';
import Placeholder from '../components/Placeholder';
import LessonCard from '../components/LessonCard';
import { useViewport } from '../hooks/useViewport';
import { ANNOUNCEMENTS, EVENTS, TEACHINGS } from '../data';

export default function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isMobile, isTablet, isCompact } = useViewport();
  const PAD_X = isMobile ? 20 : isTablet ? 40 : 64;
  const PAD_Y = isMobile ? 48 : isTablet ? 64 : 80;
  const eyebrow = {
    fontSize: 11,
    letterSpacing: '0.18em',
    textTransform: 'uppercase' as const,
    color: '#c87a3d',
  };
  const linkUnderline = {
    fontSize: 12,
    color: '#2a2620',
    cursor: 'pointer',
    boxShadow: 'inset 0 -4px 0 -2px #f2a968',
    paddingBottom: 1,
    background: 'transparent',
    border: 'none',
    fontFamily: 'inherit',
  };

  return (
    <div>
      <section style={{ padding: `${PAD_Y}px ${PAD_X}px 32px` }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isCompact ? '1fr' : '1fr 1fr',
            gap: isMobile ? 32 : isTablet ? 40 : 64,
            alignItems: 'end',
          }}
        >
          {isCompact && (
            <div>
              <Placeholder
                label={t('home.heroImageAlt')}
                aspect={isMobile ? '4/3' : '16/10'}
                tone="warm"
                style={{ borderRadius: 4 }}
              />
            </div>
          )}
          <div>
            <h1
              style={{
                marginTop: 0,
                fontFamily: '"Be Vietnam Pro", sans-serif',
                fontWeight: 300,
                fontSize: isMobile ? 34 : isTablet ? 46 : 60,
                lineHeight: 1.15,
                letterSpacing: '-0.015em',
                margin: 0,
                color: '#2a2620',
                textWrap: 'pretty',
              }}
            >
              {t('home.heroTitle')}
            </h1>
            <p
              style={{
                fontSize: isMobile ? 15 : 17,
                lineHeight: 1.7,
                color: '#5b5246',
                maxWidth: 480,
                marginTop: isMobile ? 24 : 32,
              }}
            >
              {t('home.heroDescription')}
            </p>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: isMobile ? 12 : 16,
                marginTop: isMobile ? 28 : 40,
              }}
            >
              <button
                onClick={() => navigate('/teachings')}
                style={{
                  background: '#f2a968',
                  color: '#2a1a08',
                  border: 'none',
                  padding: isMobile ? '12px 22px' : '14px 28px',
                  fontSize: 13,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  borderRadius: 4,
                }}
              >
                {t('home.browseLessons')}
              </button>
              <button
                onClick={() => navigate('/events')}
                style={{
                  background: 'transparent',
                  color: '#2a2620',
                  border: '1px solid #2a2620',
                  padding: isMobile ? '12px 22px' : '14px 28px',
                  fontSize: 13,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  borderRadius: 4,
                }}
              >
                {t('home.findEvents')}
              </button>
            </div>
          </div>
          {!isCompact && (
            <div>
              <Placeholder
                label={t('home.heroImageAlt')}
                aspect="4/5"
                tone="warm"
                style={{ borderRadius: 4 }}
              />
            </div>
          )}
        </div>
      </section>

      <section
        style={{
          padding: `${PAD_Y}px ${PAD_X}px`,
          borderTop: '1px solid #ebe1cf',
          marginTop: isMobile ? 48 : isTablet ? 64 : 96,
          display: 'grid',
          gridTemplateColumns: isCompact ? '1fr' : '320px 1fr',
          gap: isMobile ? 48 : isTablet ? 56 : 80,
        }}
      >
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              marginBottom: 24,
              gap: 12,
            }}
          >
            <div style={eyebrow}>{t('home.newsEyebrow')}</div>
            <button onClick={() => navigate('/news')} style={linkUnderline}>
              {t('home.viewAllNews')}
            </button>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {ANNOUNCEMENTS.slice(0, 5).map((a, i, arr) => (
              <li
                key={a.id}
                onClick={() => navigate('/news')}
                style={{
                  padding: '14px 0',
                  borderBottom:
                    i < arr.length - 1 ? '1px solid #ebe1cf' : 'none',
                  cursor: 'pointer',
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#9a8e7a',
                    marginBottom: 4,
                  }}
                >
                  {a.date}
                </div>
                <div
                  style={{ fontSize: 14, lineHeight: 1.5, color: '#3a342b' }}
                >
                  {t(`news.items.${a.id}.title`)}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              marginBottom: isMobile ? 24 : 32,
              gap: 12,
            }}
          >
            <div style={eyebrow}>{t('home.eventsEyebrow')}</div>
            <button onClick={() => navigate('/events')} style={linkUnderline}>
              {t('home.viewAllEvents')}
            </button>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: 32,
            }}
          >
            {EVENTS.slice(0, 4).map(e => (
              <article key={e.id} style={{ cursor: 'pointer' }}>
                <Placeholder
                  label={e.imageLabel}
                  aspect="4/3"
                  tone="cream"
                  style={{ borderRadius: 4 }}
                />
                <div
                  style={{
                    marginTop: 16,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    fontSize: 11,
                    color: '#9a8e7a',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  <span>
                    {e.date.month} {e.date.day}
                  </span>
                  <span
                    style={{
                      width: 4,
                      height: 4,
                      background: '#f2a968',
                      borderRadius: '50%',
                    }}
                  />
                  <span>{t(`events.items.${e.id}.type`)}</span>
                </div>
                <h3
                  style={{
                    fontFamily: '"Be Vietnam Pro", sans-serif',
                    fontSize: isMobile ? 19 : 22,
                    fontWeight: 500,
                    lineHeight: 1.3,
                    margin: '12px 0 8px',
                    color: '#2a2620',
                  }}
                >
                  {t(`events.items.${e.id}.title`)}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: '#5b5246',
                    margin: 0,
                  }}
                >
                  {t(`events.items.${e.id}.description`).slice(0, 100)}…
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{ padding: `${PAD_Y}px ${PAD_X}px`, background: '#f8eeda' }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: isMobile ? 24 : 32,
            gap: 12,
          }}
        >
          <div style={eyebrow}>{t('home.teachingsEyebrow')}</div>
          <button onClick={() => navigate('/teachings')} style={linkUnderline}>
            {t('home.browseAllLessons')}
          </button>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile
              ? '1fr 1fr'
              : isTablet
                ? 'repeat(3, 1fr)'
                : 'repeat(4, 1fr)',
            gap: isMobile ? 16 : 32,
          }}
        >
          {TEACHINGS.slice(0, isTablet ? 3 : 4).map(te => (
            <LessonCard key={te.id} teaching={te} variant="numbered" />
          ))}
        </div>
      </section>

      <section
        style={{
          padding: isMobile
            ? '72px 20px'
            : isTablet
              ? '96px 40px'
              : '120px 64px',
          textAlign: 'center',
        }}
      >
        <div style={{ ...eyebrow, marginBottom: 24 }}>
          {t('home.visitEyebrow')}
        </div>
        <h2
          style={{
            fontFamily: '"Be Vietnam Pro", sans-serif',
            fontWeight: 300,
            fontSize: isMobile ? 32 : isTablet ? 42 : 56,
            margin: 0,
            letterSpacing: '-0.01em',
            lineHeight: 1.1,
            maxWidth: 800,
            marginInline: 'auto',
          }}
        >
          <Trans
            i18nKey="home.visitTitle"
            components={{
              em: <em style={{ fontStyle: 'italic', color: '#c87a3d' }} />,
            }}
          />
        </h2>
        <p
          style={{
            fontSize: isMobile ? 15 : 17,
            color: '#5b5246',
            maxWidth: 560,
            margin: '32px auto 0',
            lineHeight: 1.6,
          }}
        >
          {t('home.visitDescription')}
        </p>
        <button
          onClick={() => navigate('/contact')}
          style={{
            background: 'transparent',
            color: '#2a2620',
            border: '1px solid #2a2620',
            padding: '14px 28px',
            fontSize: 13,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontWeight: 500,
            cursor: 'pointer',
            fontFamily: 'inherit',
            borderRadius: 4,
            marginTop: 40,
          }}
        >
          {t('home.getInTouch')}
        </button>
      </section>
    </div>
  );
}
