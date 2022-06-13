import React, {createContext, useContext, useState} from 'react';

const StateContext = createContext();

const initialState = {
    messages: false,
    userProfile:false,
    notification:false
}

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState(undefined)
    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]: true})
    }

    const [currentColor, setCurrentColor] = useState('#1A97F5');
    const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);

    const setThemeMode = (e) => {
      setCurrentMode(e.target.value);
      localStorage.setItem('themeMode', e.target.value);
    };

  const setThemeColor = (themeColor) => {
      setCurrentColor(themeColor);
      localStorage.setItem('themeColor', themeColor);
  };
  
   const handleThemeColorChange = (e, value) => {
     value = e.currentValue.hex;
     setCurrentColor(value.toUpperCase());
     localStorage.setItem('themeColor', value);
   };
    
    return (
      <StateContext.Provider
        value={{
          activeMenu,
          setActiveMenu,
          isClicked,
          setIsClicked,
          screenSize,
          setScreenSize,
          handleClick,
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
      </StateContext.Provider>
    );
}

export const useStateContext = () =>useContext(StateContext)