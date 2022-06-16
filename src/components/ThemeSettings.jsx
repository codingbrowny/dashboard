import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { themeColors } from '../data/dummy';

import { useThemeContext } from '../context/ThemeProvider';

const ThemeSettings = () => {
  const {
    setThemeColor,
    currentMode,
    currentColor,
    setThemeSettings,
    handleThemeColorChange,
  } = useThemeContext();

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-50 nav-item w-screen bg-half-transparent '>
      <div className='float-right bg-[#f0f3fa] dark:text-gray-200 w-400 h-screen dark:bg-secondary-dark-bg theme-settings'>
        <div className='flex justify-between items-center p-4 ml-4'>
          <p className='font-semiblod text-xl'>Settings</p>
          <button
            type='button'
            onClick={() => setThemeSettings(false)}
            className='p-2 rounded-full bg-transparent hover:drop-shadow-md hover:bg-light-gray text-2xl'
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className='flex-col border-t-1 border-color p-4 ml-4'>
          <p className='font-semiblod text-lg'>Themes</p>
         
        </div>
        <div className='flex-col border-t-1 border-color p-4 ml-4'>
          <p className='font-semiblod text-lg'>Theme Colors</p>
          <div className='flex gap-3'>
            {themeColors.map((theme, index) => (
              <TooltipComponent
                key={index}
                content={theme.name}
                position='BottomCenter'
              >
                <div className='flex relative mt-2 cursor-pointer gap-5'>
                  <button
                    type='button'
                    className='h-10 w-10 rounded-full cursor-pointer'
                    style={{ backgroundColor: theme.color }}
                    onClick={() => setThemeColor(theme.color)}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        theme.color === currentColor ? 'block' : 'hidden'
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>

        {/* Color Picker */}
        <div className='ml-4 mt-5 border-t-2 p-4'>
          <p className='text-xl dark:text-gray-200 mb-4'>Inline Picker</p>
          <ColorPickerComponent
            id='color-picker'
            inline
            showButtons={false}
            modeSwitcher
            change={handleThemeColorChange}
            enablePersistence
            style={{
              backgroundColor: currentMode === 'Dark' ? '#1d2026' : 'white',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
