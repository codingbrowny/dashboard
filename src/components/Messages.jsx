import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { Button } from '.';

import { messagesData } from '../data/dummy';
import { useStateContext } from '../context/ContextProvider';
import { useThemeContext } from '../context/ThemeProvider';

const Messages = () => {
  const { currentColor } = useThemeContext();
  const { setIsClicked } = useStateContext();

  return (
    <div
      className='nav-item fixed right-5 md:right-28 top-16 bg-white dark:bg-[#42464D] p-6 rounded-lg w-72 drop-shadow-lg'
      style={{ zIndex: 1000 }}
    >
      <div className='flex justify-between items-center border-b-2 pb-1'>
        <p className='font-semibold text-lg dark:text-gray-200'>Messages</p>
        <Button
          icon={<MdOutlineCancel />}
          color='rgb(153, 171, 180)'
          bgHoverColor='light-gray'
          size='2xl'
          borderRadius='50%'
          onClick={() => setIsClicked(false)}
        />
      </div>
      <div className='mt-2'>
        {messagesData?.map((item, index) => (
          <div
            key={index}
            className='flex items-center gap-4 border-b-1 border-color py-2 leading-5 cursor-pointer'
          >
            <div className='relative'>
              <img
                className='rounded-full h-10 w-10'
                src={item.image}
                alt={item.message}
              />
              <span
                style={{ background: item.dotColor }}
                className='absolute inline-flex rounded-full h-2 w-2 right-0 -top-1'
              />
            </div>
            <div>
              <p className='font-semibold dark:text-gray-200 text-sm'>
                {item.sender}
              </p>
              <div className='flex justify-between items-center'>
                <p className='text-gray-500 dark:text-gray-400 text-xs'>
                  {item.desc}
                </p>
                <p className='text-gray-500 dark:text-gray-400 text-xs'>
                  {item.time}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div className='mt-5'>
          <Button
            color='white'
            bgColor={currentColor}
            text='See all messages'
            borderRadius='10px'
            width='full'
          />
        </div>
      </div>
    </div>
  );
};

export default Messages;
