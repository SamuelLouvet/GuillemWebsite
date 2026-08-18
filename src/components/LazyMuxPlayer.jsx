import { forwardRef, lazy, Suspense } from 'react';

const MuxPlayer = lazy(() => import('@mux/mux-player-react'));

const LazyMuxPlayer = forwardRef(function LazyMuxPlayer(props, ref) {
  return (
    <Suspense fallback={<div className="mux-fallback" style={props.style} />}>
      <MuxPlayer ref={ref} {...props} />
    </Suspense>
  );
});

export default LazyMuxPlayer;
