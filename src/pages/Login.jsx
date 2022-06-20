import React, { useState } from 'react';
import { RiUser3Fill } from 'react-icons/ri';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

import avatar from '../data/avatar3.png'

import { useThemeContext } from '../context/ThemeProvider';

const Login = () => {
  const { currentColor } = useThemeContext();
  const [visible, setVisible] = useState(false);

  const togglePasswordVisibility = () => {
    const pValue = document.getElementById('password');
    !visible
      ? pValue.setAttribute('type', 'text')
      : pValue.setAttribute('type', 'password');
    setVisible(!visible);
  };

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div width='sm:w-4/5 md:w-1/2 lg:w-1/4 w-9/12 p-10 drop-shadow-lg'>
        <div className="flex justify-center items-center mb-5">
        <img src={avatar} alt="Profile" className='w-24 h-24 rounded-full p-2 drop-shadow-xl border-1' />
        </div>
        <form action='' onSubmit={(e) => e.preventDefault}>
          <div className='form-field my-2'>
            <label
              htmlFor='username'
              className='dark:text-gray-200 text-lg block py-2'
            >
              Enter Username
            </label>
            <div className='flex items-center'>
              <input
                type='text'
                id='username'
                name='username'
                placeholder='Enter username'
                required
                className={`px-3 py-2.5 border-2 w-full rounded-md focus:border-[${currentColor}]`}
              />
              <span className='ml-[-30px] text-lg relative'>
                <RiUser3Fill />
              </span>
            </div>
          </div>
          <div className='form-field my-2'>
            <label
              htmlFor='Password'
              className='dark:text-gray-200 text-lg block py-2'
            >
              Enter Password
            </label>
            <div className='flex items-center'>
              <input
                type='password'
                id='password'
                name='password'
                placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'
                required
                className={`px-3 py-2.5 border-2 w-full rounded-md focus:border-[${currentColor}]`}
              />
              <button
                type='button'
                className='ml-[-30px] text-lg relative'
                onClick={togglePasswordVisibility}
              >
                {visible ? <AiFillEye /> : <AiFillEyeInvisible />}
              </button>
            </div>
          </div>
          <div className='form-field flex justify-center my-5'>
            <button
              type='submit'
              className={`bg-[#f3ee] p-3 w-full rounded-md text-white font-semibold hover:bg-opacity-70 drop-shadow-md`}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
