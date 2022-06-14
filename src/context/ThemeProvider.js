import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [currentColor, setCurrentColor] = useState('#03c9d7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false)
    
    const setThemeMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value)
    }

    const setThemeColor = (color) => {
        setCurrentColor(color);
      localStorage.setItem('themeColor', color);
    };

    const handleThemeColorChange = (e, value) => {
      value = e.currentValue.hex;
      setCurrentColor(value.toUpperCase());
      localStorage.setItem('themeColor', value);
    };

    return(
        <ThemeContext.Provider
            value={{
                currentColor,
                setThemeColor,
                currentMode,
                setThemeMode,
                themeSettings,
                setThemeSettings,
                handleThemeColorChange
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => useContext(ThemeContext)