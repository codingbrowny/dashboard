import React from 'react';
import { Card, } from '../components';
import { earningData, } from '../data/dummy';

const Dashboard = () => {
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
    </div>
  );
};

export default Dashboard;
