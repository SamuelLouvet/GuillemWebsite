import { forwardRef, lazy, Suspense } from 'react';

const MuxPlayer = lazy(() => import('@mux/mux-player-react'));

const LazyMuxPlayer = forwardRef((props, ref) => (
  <Suspense fallback={<div className="mux-fallback" style={props.style} />}>
    <MuxPlayer ref={ref} {...props} />
  </Suspense>
));
LazyMuxPlayer.displayName = 'LazyMuxPlayer';

export default LazyMuxPlayer;
