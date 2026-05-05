import { useTranslation } from 'react-i18next';
import type { TeachingItem } from '../data';

type Props = {
  teaching: TeachingItem;
  variant?: 'numbered' | 'plate' | 'rule' | 'minimal' | 'corner';
};

export default function LessonCard({ teaching, variant = 'numbered' }: Props) {
  const { t } = useTranslation();
  const type = t(`teachings.items.${teaching.id}.type`);
  const title = t(`teachings.items.${teaching.id}.title`);

  const arrow = (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      style={{ flexShrink: 0, color: '#c87a3d' }}
    >
      <path
        d="M3 7H11M11 7L7 3M11 7L7 11"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const teacherRow = (mutedColor = '#9a8e7a') => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
        marginTop: 12,
        fontSize: 12,
        color: mutedColor,
      }}
    >
      <span>{teaching.teacher}</span>
      {arrow}
    </div>
  );

  if (variant === 'numbered') {
    return (
      <article
        style={{
          cursor: 'pointer',
          background: '#fdf8ef',
          padding: 24,
          borderRadius: 4,
          display: 'flex',
          flexDirection: 'column',
          minHeight: 220,
          position: 'relative',
        }}
      >
        <div
          style={{
            fontSize: 11,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#c87a3d',
          }}
        >
          {type}
        </div>
        <h4
          style={{
            fontFamily: '"Be Vietnam Pro", sans-serif',
            fontSize: 20,
            fontWeight: 500,
            lineHeight: 1.3,
            margin: '16px 0 0',
            color: '#2a2620',
          }}
        >
          {title}
        </h4>
        <div style={{ marginTop: 16, fontSize: 12, color: '#9a8e7a' }}>
          {teaching.teacher}
        </div>
        <div style={{ position: 'absolute', right: 20, bottom: 20 }}>
          {arrow}
        </div>
      </article>
    );
  }

  if (variant === 'plate') {
    return (
      <article
        style={{
          cursor: 'pointer',
          background: '#f1e3c9',
          padding: 24,
          aspectRatio: '1',
          borderRadius: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            fontSize: 11,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#8a6a3a',
          }}
        >
          {type}
        </div>
        <div>
          <h4
            style={{
              fontFamily: '"Be Vietnam Pro", sans-serif',
              fontSize: 20,
              fontWeight: 500,
              lineHeight: 1.3,
              margin: 0,
              color: '#2a2620',
            }}
          >
            {title}
          </h4>
          {teacherRow('#7a6a4a')}
        </div>
      </article>
    );
  }

  return (
    <article
      style={{
        cursor: 'pointer',
        background: '#fdf8ef',
        padding: 24,
        aspectRatio: '1',
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <div
          style={{
            fontSize: 11,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#c87a3d',
          }}
        >
          {type}
        </div>
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: '#f2a968',
            marginTop: 4,
          }}
        />
      </div>
      <div>
        <h4
          style={{
            fontFamily: '"Be Vietnam Pro", sans-serif',
            fontSize: 20,
            fontWeight: 500,
            lineHeight: 1.3,
            margin: 0,
            color: '#2a2620',
          }}
        >
          {title}
        </h4>
        {teacherRow()}
      </div>
    </article>
  );
}
