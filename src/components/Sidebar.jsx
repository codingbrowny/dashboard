import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

// Dummy Data
import { links } from '../data/dummy';

import { useThemeContext } from '../context/ThemeProvider';
import { useStateContext } from '../context/ContextProvider';

const Sidebar = () => {
  const {currentColor} = useThemeContext()
  const { activeMenu, setActiveMenu, screenSize, } = useStateContext();

  const sidebarCloseHandler = () => {
    if(activeMenu && screenSize <= 900) {
      setActiveMenu(false)
    }
  }

  const activeLink = `flex item-center gap-5 pl-4 pb-2.5 pt-3 rounded-lg m-2 text-white text-mt bg-[${currentColor}]`;
  const normalLink ='flex item-center gap-5 pl-4 pb-2.5 pt-3 rounded-lg m-2 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray text-mt text-gray-700';

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (
        <>
          <div className='flex justify-between items-center'>
            <Link
              to={'/'}
              onClick={sidebarCloseHandler}
              className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'
            >
              <SiShopware />
              <span>Lerdit</span>
            </Link>
            <TooltipComponent content='Menu' position='BottomCenter'>
              <button
                type='button'
                className='text-xl p-3 rounded-full mt-4 hover:ng-light-gray md:hidden block'
                onClick={() =>
                  setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                }
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className='mt-10'>
            {links.map((item) => (
              <div key={item.title}>
                <p className='m-3 text-gray-400	mt-4 capitalize'>{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.route}`}
                    key={link.route}
                    onClick={sidebarCloseHandler}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : '',
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    <span className='text-xl'>{link.icon}</span>
                    <span className='capitalize'>{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
