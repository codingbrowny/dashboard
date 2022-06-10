import React, {useEffect} from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import {FiShoppingCart} from 'react-icons/fi';
import {BsChatLeft} from "react-icons/bs";
import {RiNotification3Line} from 'react-icons/ri';
import {MdKeyboardArrowDown} from 'react-icons/md';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg'
import {Cart, Notification, Chat, UserProfile} from '.'

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
  const {activeMenu, setActiveMenu, isClicked, setIsClicked, screenSize, setScreenSize, handleClick} = useStateContext();

  useEffect(() => {
    const resizeHandler = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', resizeHandler);
    resizeHandler();
    return () => window.removeEventListener('resize', resizeHandler)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if(screenSize <= 768) {
      setActiveMenu(false)
    } else {
      setActiveMenu(!false)
    }
  }, [screenSize])
  
  

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavBtn 
      title='Menu' 
      btnFunc={()=> setActiveMenu((prevActiveMenu)=> !prevActiveMenu)}
      color='red'
      icon={<AiOutlineMenu/>} />
      
      <div className="flex">
      <NavBtn 
      title='Cart' 
      btnFunc={()=> handleClick('cart')}
      color='red'
      icon={<FiShoppingCart/>} 
      />
      <NavBtn 
      title='Messages' 
      btnFunc={()=> handleClick('messages')}
      color='red'
      dotColor='#f338'
      icon={<BsChatLeft/>} 
      />
      <NavBtn 
      title='Notification' 
      btnFunc={()=> handleClick('notification')}
      color='red'
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
      {isClicked.cart && <Cart/>}
      {isClicked.messages && <Chat/>}
      {isClicked.notification && <Notification/>}
      {isClicked.profile && <UserProfile/>}
      </div>
    </div>
  )
}

export default Navbar