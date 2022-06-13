import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { themeColors } from '../data/dummy';

import { useStateContext } from '../context/ContextProvider';

const ThemeSettings = () => {
  const {
    setThemeColor,
    setThemeMode,
    currentMode,
    currentColor,
    setThemeSettings,
    handleThemeColorChange,
  } = useStateContext();

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-50 nav-item w-screen bg-half-transparent'>
      <div className='float-right bg-[#f0f3fa] dark:text-gray-200 w-400 h-screen dark:bg-secondary-dark-bg'>
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
          <div className='flex justify-start items-center my-5'>
            <div className='mr-4'>
              <input
                type='radio'
                name='theme'
                id='light'
                value='Light'
                className='cursor-pointer'
                onChange={setThemeMode}
                checked={currentMode === 'Light'}
                hidden
              />
              <label
                htmlFor='light'
                className='bg-white drop-shadow-md py-2 px-5 rounded-md dark:text-black border-2 border-slate-900 dark:border-0'
              >
                Light
              </label>
            </div>
            <div>
              <input
                type='radio'
                name='theme'
                id='dark'
                value='Dark'
                className='cursor-pointer'
                onChange={setThemeMode}
                checked={currentMode === 'Dark'}
                hidden
              />
              <label
                htmlFor='dark'
                className='drop-shadow-lg py-2 px-5 text-white bg-main-dark-bg rounded-md dark:border-2 dark:border-white'
              >
                Dark
              </label>
            </div>
          </div>
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
            style={{backgroundColor: currentMode==='Dark'? '#1d2026': 'white'}}
          />
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
