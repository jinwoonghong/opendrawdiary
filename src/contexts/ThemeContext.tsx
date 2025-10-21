import React, { createContext, useState, useContext } from 'react';
import { COLORS } from '../constants/colors';

type Theme = 'day' | 'night'; // 조선시대 스타일 테마 이름

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  colors: typeof COLORS;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('day');

  const toggleTheme = () => {
    setTheme(prev => prev === 'day' ? 'night' : 'day');
  };

  const colors = theme === 'day' ? COLORS : {
    ...COLORS,
    background: COLORS.backgroundDark, // 어두운 한지 배경
    backgroundSecondary: COLORS.charcoal, // 숯색 배경
    text: COLORS.textLight, // 한지색 텍스트
    textSecondary: COLORS.smoke, // 연기색 텍스트
    paper: COLORS.charcoal,
    ink: COLORS.textLight,
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};