import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [currentColor, setCurrentColor] = useState('#03c9d7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false)
    
    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value)
    }

    const colorMode = (e) => {
      setCurrentColor(e.target.value);
      localStorage.setItem('themeColor', e.target.value);
    };

    return(
        <ThemeContext.Provider
            value={[
                currentColor,
                colorMode,
                currentMode,
                setMode,
                themeSettings,
                setThemeSettings
            ]}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => useContext(ThemeContext)