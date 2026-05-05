import { useEffect, useState } from 'react';

export type Viewport = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isCompact: boolean;
};

const compute = (w: number): Viewport => {
  const isMobile = w < 768;
  const isTablet = w >= 768 && w < 1024;
  const isDesktop = w >= 1024;
  return { isMobile, isTablet, isDesktop, isCompact: isMobile || isTablet };
};

export function useViewport(): Viewport {
  const [vp, setVp] = useState<Viewport>(() =>
    compute(typeof window !== 'undefined' ? window.innerWidth : 1280)
  );
  useEffect(() => {
    const onResize = () => setVp(compute(window.innerWidth));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return vp;
}
