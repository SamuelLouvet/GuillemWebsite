import { useEffect } from 'react';

/**
 * Global scroll-driven effects: reveal-on-scroll for [data-reveal] /
 * [data-reveal-scale], the header progress bar, and parallax translate for
 * [data-par]. Runs once for the whole tree — mirrors how the original
 * design's runtime scanned the live DOM rather than per-component state,
 * which keeps scroll-tick work off React's render cycle.
 */
export function useScrollFX() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-in', '1');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' }
    );

    const seen = new WeakSet();
    let raf = 0;
    const scan = () => {
      document.querySelectorAll('[data-reveal], [data-reveal-scale]').forEach((el) => {
        if (seen.has(el) || el.hasAttribute('data-in')) return;
        seen.add(el);
        io.observe(el);
      });
    };
    scan();

    const mo = new MutationObserver(() => {
      if (raf) return;
      raf = requestAnimationFrame(() => { raf = 0; scan(); });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    const progressBar = document.getElementById('progressBar');
    const onScroll = () => {
      const h = document.documentElement;
      const pct = Math.min(1, h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight));
      if (progressBar) progressBar.style.width = (pct * 100).toFixed(1) + '%';
      document.querySelectorAll('[data-par]').forEach((el) => {
        const r = el.getBoundingClientRect();
        const s = parseFloat(el.getAttribute('data-par')) || 0;
        el.style.translate = '0 ' + ((r.top + r.height / 2 - window.innerHeight / 2) * -s).toFixed(1) + 'px';
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      io.disconnect();
      mo.disconnect();
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
}
