import React, { useEffect } from 'react';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { FiSettings } from 'react-icons/fi';

const Layout = () => {
  const activeMenu = true;
  return (
    <div className='flex relative dark:bg-main-dark-bg'>
      <div className='fixed right-4 bottom-4' style={{ zIndex: 1000 }}>
        <TooltipComponent content='Settings' position='top'>
          <button
            type='button'
            className='text-4xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
            style={{ background: 'black', borderRadius: '50%' }}
          >
            <FiSettings />
          </button>
        </TooltipComponent>
      </div>
      {activeMenu ? (
        <div className='w-72 sidebar fixed dark:bg-secondary-dark-bg bg-white'>
          Sidebar
        </div>
      ) : (
        <div>Sidebar w-0</div>
      )}
      <div
        className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
          activeMenu ? 'md:ml-72' : 'flex-2'
        }`}
      >
        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'></div>
        Navbar
      </div>
    </div>
  );
};

export default Layout;
