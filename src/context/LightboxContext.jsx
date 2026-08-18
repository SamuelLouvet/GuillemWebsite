import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const LightboxContext = createContext(null);

export function LightboxProvider({ children }) {
  const [videoKey, setVideoKey] = useState(null);

  const open = useCallback((key) => {
    setVideoKey(key);
    document.documentElement.style.overflow = 'hidden';
  }, []);
  const close = useCallback(() => {
    setVideoKey(null);
    document.documentElement.style.overflow = '';
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [close]);

  return (
    <LightboxContext.Provider value={{ videoKey, open, close }}>
      {children}
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error('useLightbox must be used within LightboxProvider');
  return ctx;
}
