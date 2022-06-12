import React from 'react';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { FiSettings } from 'react-icons/fi';

import { Navbar, Sidebar, ThemeSettings } from '../components';

import { useStateContext } from '../context/ContextProvider';

const Layout = ({children}) => {
  const { activeMenu, themeSettings, setThemeSettings, currentColor } = useStateContext();
  return (
    <div className='flex relative dark:bg-main-dark-bg'>
      <div className='fixed right-4 bottom-4' style={{ zIndex: 1000 }}>
        <TooltipComponent content='Settings' position='top'>
          <button
            type='button'
            onClick={() => setThemeSettings(true)}
            className='text-2xl p-2 hover:drop-shadow-xl text-white'
            style={{ borderRadius: '50%', backgroundColor: currentColor }}
          >
            <FiSettings />
          </button>
        </TooltipComponent>
      </div>
      {activeMenu ? (
        <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
          <Sidebar />
        </div>
      ) : (
        <div className='w-0 dark:bg-secondary-dark-bg'>
          <Sidebar />
        </div>
      )}
      <div
        className={`bg-[#f0f3fa] dark:bg-main-dark-bg min-h-screen w-full ${
          activeMenu ? 'md:ml-72' : 'flex-2'
        }`}
      >
        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full dark:drop-shadow-2xl'>
          <Navbar />
        </div>
        {themeSettings && <ThemeSettings />}
        {children}
      </div>
    </div>
  );
};

export default Layout;
