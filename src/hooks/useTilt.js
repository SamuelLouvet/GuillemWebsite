import { useEffect, useRef } from 'react';

const canHover = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Subtle perspective tilt that follows the pointer — used on the hero
 * photo so the whole frame feels alive rather than a flat image.
 */
export function useTilt(maxDeg = 5) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !canHover()) return;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(1200px) rotateX(${(-py * maxDeg).toFixed(2)}deg) rotateY(${(px * maxDeg).toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`;
    };
    const onLeave = () => { el.style.transform = ''; };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [maxDeg]);

  return ref;
}
