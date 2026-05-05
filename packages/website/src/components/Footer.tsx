import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LotusMark from './LotusMark';
import { useViewport } from '../hooks/useViewport';
import { NAV_ITEMS, type NavId } from '../data';

const SUB_LINK_KEYS: NavId[] = [
  'about',
  'events',
  'teachings',
  'news',
  'resources',
  'contact',
];

export default function Footer() {
  const { t } = useTranslation();
  const { isMobile, isTablet, isCompact } = useViewport();
  const PAD_X = isMobile ? 20 : isTablet ? 40 : 64;
  const PAD_Y = isMobile ? 48 : isTablet ? 56 : 64;
  const navItems = NAV_ITEMS;

  return (
    <footer
      style={{
        padding: `${PAD_Y}px ${PAD_X}px`,
        borderTop: '1px solid #ebe1cf',
        marginTop: isMobile ? 48 : 64,
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isCompact ? '1fr' : '2fr 1fr',
          gap: isMobile ? 32 : 48,
          alignItems: 'start',
          paddingBottom: isMobile ? 36 : 48,
          borderBottom: '1px solid #ebe1cf',
          marginBottom: isMobile ? 36 : 48,
        }}
      >
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 16,
            }}
          >
            <LotusMark size={28} color="#f2a968" />
            <div style={{ fontWeight: 600, fontSize: 16 }}>
              {t('site.title')}
            </div>
          </div>
          <p
            style={{
              fontSize: 14,
              color: '#5b5246',
              lineHeight: 1.7,
              maxWidth: 420,
              margin: 0,
            }}
          >
            {t('footer.tagline')}
          </p>
        </div>
        <div style={{ fontSize: 13, color: '#3a342b', lineHeight: 1.8 }}>
          <div
            style={{
              fontSize: 11,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#c87a3d',
              marginBottom: 12,
            }}
          >
            {t('footer.visit')}
          </div>
          <div>
            42 Lotus Lane
            <br />
            Blue Mountains, NSW
          </div>
          <div style={{ marginTop: 12 }}>
            <a
              href="mailto:hello@hoauudam.org"
              style={{
                color: '#2a2620',
                textDecoration: 'none',
                boxShadow: 'inset 0 -5px 0 -3px #f2a968',
                paddingBottom: 1,
              }}
            >
              hello@hoauudam.org
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile
            ? '1fr 1fr'
            : isTablet
              ? `repeat(${Math.ceil(navItems.length / 2)}, 1fr)`
              : `repeat(${navItems.length}, 1fr)`,
          gap: isMobile ? 24 : 32,
          rowGap: isMobile ? 32 : isTablet ? 40 : 32,
        }}
      >
        {navItems.map(n => {
          const subLinks = SUB_LINK_KEYS.includes(n.id as NavId)
            ? (t(`footer.subLinks.${n.id}`, {
                returnObjects: true,
              }) as string[])
            : [];
          return (
            <div key={n.id}>
              <Link
                to={n.path}
                style={{
                  display: 'block',
                  fontSize: 11,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#c87a3d',
                  marginBottom: 16,
                  cursor: 'pointer',
                  fontWeight: 500,
                  textDecoration: 'none',
                }}
              >
                {t(`nav.${n.id}`)}
              </Link>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  fontSize: 13,
                  color: '#3a342b',
                  lineHeight: 2,
                }}
              >
                {(Array.isArray(subLinks) ? subLinks : []).map((s, i) => (
                  <li key={i}>
                    <Link
                      to={n.path}
                      style={{
                        cursor: 'pointer',
                        color: 'inherit',
                        textDecoration: 'none',
                      }}
                    >
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div
        style={{
          marginTop: isMobile ? 40 : 64,
          paddingTop: 24,
          borderTop: '1px solid #ebe1cf',
          fontSize: 11,
          color: '#9a8e7a',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          gap: isMobile ? 12 : 0,
          letterSpacing: '0.04em',
        }}
      >
        <div>{t('footer.copy')}</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <span>{t('footer.newsletter')}</span>
          <span>{t('footer.facebook')}</span>
          <span>{t('footer.youtube')}</span>
        </div>
        <div>{t('footer.madeWith')}</div>
      </div>
    </footer>
  );
}
