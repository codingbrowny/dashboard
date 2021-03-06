import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { notificationData } from '../data/dummy';
import { useStateContext } from '../context/ContextProvider';
import { useThemeContext } from '../context/ThemeProvider';

const Notification = () => {
  const {currentColor} = useThemeContext()
  const { setIsClicked } = useStateContext();

  return (
    <div className='nav-item fixed right-5 md:right-24 top-16 bg-white dark:bg-[#42464D] p-6 rounded-lg w-72 drop-shadow-lg'>
      <div className='flex justify-between items-center border-b-2'>
        <div className='flex gap-3'>
          <p className='font-semibold text-lg dark:text-gray-200'>
            Notifications
          </p>
        </div>
        <Button
          icon={<MdOutlineCancel />}
          color='rgb(153, 171, 180)'
          bgHoverColor='light-gray'
          size='2xl'
          borderRadius='50%'
          onClick={() => setIsClicked(false)}
        />
      </div>
      <div>
        {notificationData?.map((item, index) => (
          <div
            key={index}
            className='flex items-center leading-8 gap-5 border-b-1 border-color p-2 cursor-pointer'
          >
            <img
              className='rounded-full h-10 w-10'
              src={item.image}
              alt={item.message}
            />
            <div>
              <p className='font-semibold dark:text-gray-200 text-sm'>{item.message}</p>
              <p className='text-gray-500 text-xs dark:text-gray-400'>
                {' '}
                {item.desc}{' '}
              </p>
            </div>
          </div>
        ))}
        <div className='mt-5'>
          <Button
            color='white'
            bgColor={currentColor}
            text='See all'
            borderRadius='10px'
            width='full'
          />
        </div>
      </div>
    </div>
  );
};

export default Notification;
