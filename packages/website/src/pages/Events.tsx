import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useViewport } from '../hooks/useViewport';
import { EVENTS } from '../data';

type FilterId = 'all' | 'retreat' | 'day' | 'daily';
const FILTER_IDS: FilterId[] = ['all', 'retreat', 'day', 'daily'];

export default function Events() {
  const { t } = useTranslation();
  const { isMobile, isTablet, isCompact } = useViewport();
  const PAD_X = isMobile ? 20 : isTablet ? 40 : 64;
  const PAD_Y = isMobile ? 48 : isTablet ? 64 : 80;
  const [filter, setFilter] = useState<FilterId>('all');

  const events =
    filter === 'all' ? EVENTS : EVENTS.filter(e => e.filterTag === filter);

  const calendarIcon = (size: number) => (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <rect
        x="1.5"
        y="2.5"
        width="11"
        height="10"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M1.5 5.5H12.5" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M4.5 1V4M9.5 1V4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );

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
        {t('events.eyebrow')}
      </div>
      <h1
        style={{
          fontFamily: '"Be Vietnam Pro", sans-serif',
          fontWeight: 300,
          fontSize: isMobile ? 36 : isTablet ? 48 : 64,
          letterSpacing: '-0.02em',
          margin: '0 0 48px',
        }}
      >
        {t('events.title')}
      </h1>

      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: 16,
          alignItems: isMobile ? 'stretch' : 'center',
          marginBottom: isMobile ? 32 : 48,
          paddingBottom: 24,
          borderBottom: '1px solid #ebe1cf',
        }}
      >
        <input
          placeholder={t('events.searchPlaceholder')}
          style={{
            flex: 1,
            padding: '14px 16px',
            fontSize: 14,
            fontFamily: 'inherit',
            background: 'transparent',
            border: '1px solid #d4c8b2',
            color: '#2a2620',
            borderRadius: 4,
          }}
        />
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {FILTER_IDS.map(id => (
            <button
              key={id}
              onClick={() => setFilter(id)}
              style={{
                padding: isMobile ? '10px 14px' : '12px 18px',
                fontSize: 12,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                background: filter === id ? '#f2a968' : 'transparent',
                color: filter === id ? '#2a1a08' : '#5b5246',
                border:
                  filter === id ? '1px solid #f2a968' : '1px solid #d4c8b2',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontWeight: filter === id ? 600 : 400,
                borderRadius: 4,
              }}
            >
              {t(`events.filters.${id}`)}
            </button>
          ))}
        </div>
      </div>

      <div
        style={{
          fontSize: 13,
          color: '#9a8e7a',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: 24,
        }}
      >
        {t('events.month')}
      </div>

      {events.map(e => (
        <article
          key={e.id}
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile
              ? '88px 1fr'
              : isTablet
                ? '100px 1fr'
                : '120px 1fr auto',
            gap: isMobile ? 24 : isTablet ? 32 : 48,
            padding: isMobile ? '32px 0' : '40px 0',
            borderBottom: '1px solid #ebe1cf',
            alignItems: 'start',
          }}
        >
          <div>
            <div
              style={{
                fontSize: 11,
                color: '#9a8e7a',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              {e.date.weekday}
            </div>
            <div
              style={{
                fontFamily: '"Be Vietnam Pro", sans-serif',
                fontWeight: 300,
                fontSize: isMobile ? 44 : isTablet ? 54 : 64,
                lineHeight: 1,
                color: '#2a2620',
                marginTop: 4,
              }}
            >
              {e.date.day}
            </div>
            <div
              style={{
                fontSize: 12,
                color: '#c87a3d',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginTop: 4,
              }}
            >
              {e.date.month}
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: 11,
                color: '#c87a3d',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: 8,
              }}
            >
              {t(`events.items.${e.id}.type`)} · {e.time}
            </div>
            <h3
              style={{
                fontFamily: '"Be Vietnam Pro", sans-serif',
                fontSize: isMobile ? 21 : isTablet ? 24 : 28,
                fontWeight: 500,
                margin: '0 0 12px',
                lineHeight: 1.2,
              }}
            >
              {t(`events.items.${e.id}.title`)}
            </h3>
            <p
              style={{
                fontSize: isMobile ? 14 : 15,
                lineHeight: 1.7,
                color: '#5b5246',
                margin: '0 0 12px',
                maxWidth: 640,
              }}
            >
              {t(`events.items.${e.id}.description`)}
            </p>
            <div
              style={{
                fontSize: 13,
                color: '#9a8e7a',
                marginBottom: isCompact ? 16 : 0,
              }}
            >
              {t('events.ledBy')} · {e.teacher}
            </div>
            {isCompact && (
              <button
                style={{
                  background: 'transparent',
                  color: '#2a2620',
                  border: '1px solid #2a2620',
                  padding: '10px 16px',
                  fontSize: 11,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  fontWeight: 500,
                  borderRadius: 4,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                {calendarIcon(12)}
                {t('events.addToCalendar')}
              </button>
            )}
          </div>
          {!isCompact && (
            <button
              style={{
                background: 'transparent',
                color: '#2a2620',
                border: '1px solid #2a2620',
                padding: '12px 20px',
                fontSize: 12,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontWeight: 500,
                borderRadius: 4,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              {calendarIcon(14)}
              {t('events.addToCalendar')}
            </button>
          )}
        </article>
      ))}
    </div>
  );
}
