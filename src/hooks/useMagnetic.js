import { useEffect, useRef } from 'react';

const canHover = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Attaches a subtle cursor-attraction effect: the element eases toward the
 * pointer while it's within its bounds, and springs back on leave. Skipped
 * on touch devices and when the user prefers reduced motion.
 */
export function useMagnetic(strength = 16) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !canHover()) return;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * strength;
      const y = ((e.clientY - r.top) / r.height - 0.5) * strength;
      el.style.translate = `${x.toFixed(1)}px ${y.toFixed(1)}px`;
    };
    const onLeave = () => { el.style.translate = ''; };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [strength]);

  return ref;
}
