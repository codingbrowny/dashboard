import React from 'react';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { FiSettings } from 'react-icons/fi';

import { Navbar, Sidebar } from '../components';
// import {
//   Area,
//   Bar,
//   Line,
//   ColorMapping,
//   Pyramid,
//   Financial,
//   Stacked,
//   Calendar,
//   ColorPicker,
//   Customers,
//   Ecommerce,
//   Editor,
//   Employees,
//   Kanban,
//   Orders,
// } from '../pages';

import { useStateContext } from '../context/ContextProvider';

const Layout = ({children}) => {
  const { activeMenu } = useStateContext();
  return (
    <div className='flex relative dark:bg-main-dark-bg'>
      <div className='fixed right-4 bottom-4' style={{ zIndex: 1000 }}>
        <TooltipComponent content='Settings' position='top'>
          <button
            type='button'
            className='text-2xl p-2 hover:drop-shadow-xl text-white bg-red-500'
            style={{ borderRadius: '50%' }}
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
        className={`dark:bg-main-bg min-h-screen w-full ${
          activeMenu ? 'md:ml-72' : 'flex-2'
        }`}
        style={{ background: '#f0f3fa' }}
      >
        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
          <Navbar />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
