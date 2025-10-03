import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => localStorage.getItem('mode') || 'light');
  useEffect(() => {
    document.documentElement.dataset.theme = mode;
    localStorage.setItem('mode', mode);
  }, [mode]);
  const toggle = () => setMode((m) => (m === 'light' ? 'dark' : 'light'));
  return <ThemeContext.Provider value={{ mode, toggle }}>{children}</ThemeContext.Provider>;
};
