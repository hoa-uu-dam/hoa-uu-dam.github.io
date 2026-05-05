import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LotusMark from './LotusMark';
import Flag from './Flag';
import { LANGS } from '../lang';
import { useViewport } from '../hooks/useViewport';
import { NAV_ITEMS } from '../data';

export default function Header() {
  const { t, i18n } = useTranslation();
  const { isMobile, isCompact } = useViewport();
  const location = useLocation();
  const navigate = useNavigate();
  const [langOpen, setLangOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const langRef = useRef<HTMLDivElement | null>(null);

  const lang = i18n.language === 'vi' ? 'vi' : 'en';
  const current = LANGS.find(l => l.id === lang)!;

  useEffect(() => {
    if (!langOpen) return;
    const onDoc = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node))
        setLangOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [langOpen]);

  const isActive = (path: string) =>
    path === '/'
      ? location.pathname === '/'
      : location.pathname.startsWith(path);

  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: isMobile ? '16px 20px' : isCompact ? '20px 40px' : '24px 64px',
    borderBottom: '1px solid #ebe1cf',
  } as const;

  const navLink = (active: boolean) => ({
    cursor: 'pointer',
    fontSize: 13,
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
    color: active ? '#2a2620' : '#6b6357',
    transition: 'color .2s, box-shadow .2s',
    fontWeight: 500,
    lineHeight: 1.5,
    textDecoration: 'none',
    boxShadow: active ? 'inset 0 -4px 0 -2px #f2a968' : 'none',
    padding: 0,
  });

  return (
    <>
      <nav style={navStyle}>
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            cursor: 'pointer',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <LotusMark size={isMobile ? 26 : 32} color="#f2a968" />
          <div>
            <div
              style={{
                fontFamily: '"Be Vietnam Pro", sans-serif',
                fontWeight: 600,
                fontSize: isMobile ? 14 : 16,
                letterSpacing: '0.02em',
              }}
            >
              {t('site.title')}
            </div>
            <div
              style={{
                fontSize: isMobile ? 9 : 10,
                color: '#9a8e7a',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                marginTop: 2,
              }}
            >
              {t('site.tagline')}
            </div>
          </div>
        </Link>

        {isCompact ? (
          <button
            onClick={() => setNavOpen(true)}
            aria-label={t('nav.openMenu')}
            style={{
              background: 'transparent',
              border: 'none',
              padding: 8,
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              gap: 5,
              alignItems: 'flex-end',
            }}
          >
            <span
              style={{
                width: 22,
                height: 1.5,
                background: '#2a2620',
                display: 'block',
              }}
            />
            <span
              style={{
                width: 16,
                height: 1.5,
                background: '#2a2620',
                display: 'block',
              }}
            />
            <span
              style={{
                width: 22,
                height: 1.5,
                background: '#2a2620',
                display: 'block',
              }}
            />
          </button>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            {NAV_ITEMS.map(n => (
              <Link
                key={n.id}
                to={n.path}
                onClick={() => setNavOpen(false)}
                style={navLink(isActive(n.path))}
              >
                {t(`nav.${n.id}`)}
              </Link>
            ))}
            <div ref={langRef} style={{ position: 'relative' }}>
              <button
                onClick={() => setLangOpen(o => !o)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 7,
                  background: 'transparent',
                  border: 'none',
                  padding: '4px 2px',
                  fontSize: 11,
                  letterSpacing: '0.1em',
                  color: '#6b6357',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  fontWeight: 400,
                }}
              >
                <Flag id={lang} />
                <span>{current.code}</span>
                <svg
                  width="8"
                  height="5"
                  viewBox="0 0 9 6"
                  fill="none"
                  style={{
                    transition: 'transform .2s',
                    transform: langOpen ? 'rotate(180deg)' : 'none',
                    opacity: 0.6,
                  }}
                >
                  <path
                    d="M1 1l3.5 3.5L8 1"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {langOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 6px)',
                    right: 0,
                    background: '#fdf8ef',
                    border: '1px solid #e0d3b8',
                    borderRadius: 4,
                    minWidth: 140,
                    zIndex: 10,
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(60, 40, 20, 0.06)',
                  }}
                >
                  {LANGS.map(l => (
                    <button
                      key={l.id}
                      onClick={() => {
                        i18n.changeLanguage(l.id);
                        setLangOpen(false);
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        width: '100%',
                        background: l.id === lang ? '#f1e3c9' : 'transparent',
                        border: 'none',
                        padding: '10px 12px',
                        fontSize: 12,
                        color: '#2a2620',
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                        textAlign: 'left',
                        fontWeight: l.id === lang ? 600 : 400,
                      }}
                    >
                      <Flag id={l.id} />
                      <span style={{ letterSpacing: '0.06em' }}>{l.code}</span>
                      <span
                        style={{
                          color: '#9a8e7a',
                          fontSize: 12,
                          marginLeft: 'auto',
                        }}
                      >
                        {l.label}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </nav>

      {isCompact && navOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: '#fdf8ef',
            zIndex: 50,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: isMobile ? '16px 20px' : '20px 40px',
              borderBottom: '1px solid #ebe1cf',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <LotusMark size={isMobile ? 26 : 32} color="#f2a968" />
              <div>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: isMobile ? 14 : 16,
                    letterSpacing: '0.02em',
                  }}
                >
                  {t('site.title')}
                </div>
                <div
                  style={{
                    fontSize: isMobile ? 9 : 10,
                    color: '#9a8e7a',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    marginTop: 2,
                  }}
                >
                  {t('site.tagline')}
                </div>
              </div>
            </div>
            <button
              onClick={() => setNavOpen(false)}
              aria-label={t('nav.closeMenu')}
              style={{
                background: 'transparent',
                border: 'none',
                padding: 8,
                cursor: 'pointer',
                width: 36,
                height: 36,
                position: 'relative',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: 22,
                  height: 1.5,
                  background: '#2a2620',
                  transform: 'translate(-50%,-50%) rotate(45deg)',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: 22,
                  height: 1.5,
                  background: '#2a2620',
                  transform: 'translate(-50%,-50%) rotate(-45deg)',
                }}
              />
            </button>
          </div>

          <div
            style={{
              flex: 1,
              padding: isMobile ? '32px 20px' : '48px 40px',
              display: 'flex',
              flexDirection: 'column',
              gap: isMobile ? 24 : 32,
            }}
          >
            {NAV_ITEMS.map(n => (
              <span
                key={n.id}
                onClick={() => {
                  navigate(n.path);
                  setNavOpen(false);
                }}
                style={{
                  cursor: 'pointer',
                  fontFamily: '"Be Vietnam Pro", sans-serif',
                  fontWeight: 300,
                  fontSize: isMobile ? 32 : 44,
                  lineHeight: 1.1,
                  letterSpacing: '-0.01em',
                  color: isActive(n.path) ? '#c87a3d' : '#2a2620',
                }}
              >
                {t(`nav.${n.id}`)}
              </span>
            ))}
          </div>

          <div
            style={{
              padding: isMobile ? '24px 20px' : '32px 40px',
              borderTop: '1px solid #ebe1cf',
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <span
              style={{
                fontSize: 11,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#9a8e7a',
              }}
            >
              {t('nav.language')}
            </span>
            {LANGS.map(l => (
              <button
                key={l.id}
                onClick={() => i18n.changeLanguage(l.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  background: l.id === lang ? '#f1e3c9' : 'transparent',
                  border:
                    '1px solid ' + (l.id === lang ? '#f1e3c9' : '#d4c8b2'),
                  padding: '8px 14px',
                  fontSize: 12,
                  color: '#2a2620',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  borderRadius: 4,
                  fontWeight: l.id === lang ? 600 : 400,
                  letterSpacing: '0.06em',
                }}
              >
                <Flag id={l.id} />
                <span>{l.code}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
