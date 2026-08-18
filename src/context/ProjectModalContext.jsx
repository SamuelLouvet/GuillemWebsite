import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const ProjectModalContext = createContext(null);

export function ProjectModalProvider({ children }) {
  const [openIndex, setOpenIndex] = useState(-1);

  const open = useCallback((i) => {
    setOpenIndex(i);
    document.documentElement.style.overflow = 'hidden';
  }, []);
  const close = useCallback(() => {
    setOpenIndex(-1);
    document.documentElement.style.overflow = '';
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [close]);

  return (
    <ProjectModalContext.Provider value={{ openIndex, open, close }}>
      {children}
    </ProjectModalContext.Provider>
  );
}

export function useProjectModal() {
  const ctx = useContext(ProjectModalContext);
  if (!ctx) throw new Error('useProjectModal must be used within ProjectModalProvider');
  return ctx;
}
