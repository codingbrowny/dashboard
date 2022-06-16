import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { userProfileData } from '../data/dummy';
import avatar from '../data/avatar.jpg';

import { useThemeContext } from '../context/ThemeProvider';
import { useStateContext } from '../context/ContextProvider';

const UserProfile = () => {
  const {currentColor} = useThemeContext()
  const { setIsClicked } = useStateContext();

  return (
    <div className='nav-item fixed right-5 top-16 bg-white dark:bg-[#42464D] p-6 rounded-lg drop-shadow-lg w-72'>
      <div className='flex justify-between items-center'>
        <p className='font-semibold text-lg dark:text-gray-200'>User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color='rgb(153, 171, 180)'
          bgHoverColor='light-gray'
          size='2xl'
          borderRadius='50%'
          onClick={() => setIsClicked(false)}
        />
      </div>
      <div className='flex gap-5 items-center mt-5 border-color border-b-1 pb-4'>
        <img
          className='rounded-full h-12 w-12 md:h-16 md:w-16'
          src={avatar}
          alt='user-profile'
        />
        <div>
          <p className='font-semibold text-lg dark:text-gray-200'>
            {' '}
            Michael Roberts{' '}
          </p>
          <p className='text-gray-500 text-xs dark:text-gray-400'>
            {' '}
            Administrator{' '}
          </p>
          <p className='text-gray-500 text-sm font-semibold dark:text-gray-400'>
            {' '}
            info@shop.com{' '}
          </p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <div
            key={index}
            className='flex gap-5 border-b-1 border-color py-3 hover:bg-light-gray cursor-pointer dark:hover:bg-[#42464D]'
          >
            <button
              type='button'
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className='text-lg rounded-lg p-2 hover:bg-light-gray'
            >
              {item.icon}
            </button>

            <div>
              <p className='font-semibold dark:text-gray-200 text-sm'>
                {item.title}
              </p>
              <p className='text-gray-500 text-xs dark:text-gray-400'>
                {' '}
                {item.desc}{' '}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-3 flex'>
        <Button
          color='white'
          bgColor={currentColor}
          text='Logout'
          borderRadius='10px'
          width='full'
        />
      </div>
    </div>
  );
};

export default UserProfile;