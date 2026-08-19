/** Inline transition-delay for staggering a list of [data-reveal] rows. */
export function staggerDelay(i, step = 70, max = 8) {
  return { transitionDelay: `${Math.min(i, max) * step}ms` };
}
