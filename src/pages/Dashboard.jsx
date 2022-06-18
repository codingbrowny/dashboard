import React from 'react';
import { Card, PieChart, LineChart } from '../components';
import { earningData, } from '../data/dummy';

import { useThemeContext } from '../context/ThemeProvider';

const Dashboard = () => {
  const { currentColor } = useThemeContext();
  return (
    <div className='mt-12 px-5 md:mx-10'>
      <div className='flex justify-center flex-wrap md:flex-nowrap items-center gap-5 '>
        {earningData.map((item) => (
          <Card key={item.title} width='lg:w-1/4'>
            <button
              type='button'
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className='text-xl opacity-0.9 p-3 rounded-full hover:drop-shadow-md'
            >
              {item.icon}
            </button>
            <p className='text-gray-400 mt-2 capitalize'>{item.title}</p>
            <p>
              <span className='text-lg font-semibold'>{item.amount}</span>
              <span className={`text-${item.pcColor} text-sm ml-2`}>
                {item.percentage}
              </span>
            </p>
          </Card>
        ))}
      </div>
      <div className='mt-10 flex justify-center flex-wrap md:flex-nowrap items-center gap-5 drop-shadow-md'>
        <div className='md:w-2/3 bg-white dark:bg-secondary-dark-bg p-5 rounded-2xl'>
          <p className='text-lg tracking-tigh text-gray-500 dark:text-gray-200 mb-5 font-bold'>
            Annual Sales Overview
          </p>
          <LineChart height='300' borderRadius={12} />
        </div>
        <div className='md:w-1/3 bg-white dark:bg-secondary-dark-bg p-5 rounded-2xl'>
          <p className='text-lg tracking-tigh text-gray-500 dark:text-gray-200 mb-5 font-bold'>
            Inventory
          </p>
          <PieChart
            color={currentColor}
            title='Earning'
            height='300'
          />
        </div>
      </div>
      {/* New In Stock */}
      
    </div>
  );
};

export default Dashboard;
