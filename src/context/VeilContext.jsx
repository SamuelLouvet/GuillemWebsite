import { createContext, useCallback, useContext, useRef, useState } from 'react';

const VeilContext = createContext(null);

export function VeilProvider({ children }) {
  const [state, setState] = useState({ active: false, no: '', title: '' });
  const t1 = useRef(null);
  const t2 = useRef(null);

  const navigate = useCallback(({ target, no, title }) => {
    const el = document.getElementById(target);
    if (!el) return;
    clearTimeout(t1.current);
    clearTimeout(t2.current);
    setState({ active: true, no: no || '', title: title || '' });
    t1.current = setTimeout(() => {
      window.scrollTo({ top: target === 'top' ? 0 : el.offsetTop - 78, behavior: 'auto' });
      t2.current = setTimeout(() => setState((s) => ({ ...s, active: false })), 260);
    }, 560);
  }, []);

  return (
    <VeilContext.Provider value={{ ...state, navigate }}>
      {children}
    </VeilContext.Provider>
  );
}

export function useVeil() {
  const ctx = useContext(VeilContext);
  if (!ctx) throw new Error('useVeil must be used within VeilProvider');
  return ctx;
}
