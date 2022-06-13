import React, {useEffect} from 'react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import {BsChatLeft} from "react-icons/bs";
import {RiNotification3Line} from 'react-icons/ri';
import {MdKeyboardArrowDown} from 'react-icons/md';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg'
import {Notification, Messages, UserProfile} from '.'

import {useStateContext} from '../context/ContextProvider';

const NavBtn = ({title, btnFunc, icon, color, dotColor}) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button 
    type='button' 
    onClick={btnFunc} 
    style={{color}} 
    className='relative text-xl p-3 rounded-full hover:bg-light-gray'>
      <span
      style={{background:dotColor}}
      className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'/>
        {icon}
    </button>
  </TooltipComponent>
)

const Navbar = () => {
  const {setActiveMenu, isClicked, screenSize, setScreenSize, handleClick, currentColor} = useStateContext();

  useEffect(() => {
    const resizeHandler = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', resizeHandler);
    resizeHandler();
    return () => window.removeEventListener('resize', resizeHandler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(!false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenSize])
  
  

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavBtn 
      title='Menu' 
      btnFunc={()=> setActiveMenu((prevActiveMenu)=> !prevActiveMenu)}
      color={currentColor}
      icon={<HiOutlineMenuAlt2/>} />
      
      <div className="flex">
      <NavBtn 
      title='Messages' 
      btnFunc={()=> handleClick('messages')}
      color={currentColor}
      dotColor='#f338'
      icon={<BsChatLeft/>} 
      />
      <NavBtn 
      title='Notifications' 
      btnFunc={()=> handleClick('notification')}
      color={currentColor}
      dotColor='#f338'
      icon={<RiNotification3Line/>} 
      />
      <TooltipComponent content='Profile' position='BottomCenter'>
        <div 
        className="flex items-center gap-2 cursor-pointer hover:bg-light-gray p-1 rounded-lg"
        onClick={()=>handleClick('profile')}
        >
          <img src={avatar} alt="Profile Pic" className='w-8 h-8 rounded-full'/>
          <p className="text-gray-400 text-14">
            <span>Hi,</span>{' '}
            <span className='font-bold ml-1'>Browny</span>
          </p>
          <MdKeyboardArrowDown className='text-gray-400 font-14' />
        </div>
      </TooltipComponent>
      {isClicked.messages && <Messages/>}
      {isClicked.notification && <Notification/>}
      {isClicked.profile && <UserProfile/>}
      </div>
    </div>
  )
}

export default Navbar