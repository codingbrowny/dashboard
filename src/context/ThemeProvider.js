import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentColor, setCurrentColor] = useState('#03c9d7');
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [themeSettings, setThemeSettings] = useState(false);

    const setThemeMode = () => {
      setIsLightTheme(!isLightTheme)
    localStorage.setItem('lightTheme', JSON.stringify(!isLightTheme));
  };

  const setThemeColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('themeColor', color);
  };

  const handleThemeColorChange = (e, value) => {
    value = e.currentValue.hex;
    setCurrentColor(value.toUpperCase());
    localStorage.setItem('themeColor', value);
  };

  return (
    <ThemeContext.Provider
      value={{
        currentColor,
        isLightTheme,
        setIsLightTheme,
        setThemeColor,
        setThemeMode,
        themeSettings,
        setThemeSettings,
        handleThemeColorChange,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
