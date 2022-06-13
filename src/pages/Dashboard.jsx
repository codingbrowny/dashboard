import React from 'react';
// import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';

import {
  StackedChart,
  Button,
  // PieChart,
  Card,
  SparkLineChart,
} from '../components';

import {
  earningData,
  SparklineAreaData,
  // ecomPieChartData,
} from '../data/dummy';

import { useStateContext } from '../context/ContextProvider';

const Dashboard = () => {
  const {currentColor} = useStateContext()
  return (
    <div className='mt-12 px-5 md:mx-10'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='flex justify-center flex-wrap gap-2 items-center'>
          {earningData.map((item) => (
            <Card key={item.title}>
              <button
                type='button'
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className='text-xl opacity-0.9 p-3 rounded-full hover:drop-shadow-md'
              >
                {item.icon}
              </button>
              <p className='text-gray-400 mt-2 capitalize'>{`Total ${item.title}`}</p>
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
      <div className='flex justify-center flex-wrap gap-10'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg mt-5 p-4 rounded-2xl w-full'>
          <div className='flex justify-between'>
            <p className='font-semibold text-xl'>Revenue Update</p>
            <div className='flex items-center gap-4'>
              <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className='flex items-center gap-2 text-green-600 hover:drop-shadow-xl'>
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className='mt-10 flex gap-10 justify-center flex-wrap'>
            <div className='border-r-1 border-color m-4 pr-10'>
              <div>
                <p className='text-gray-400'>Budget</p>
                <p>
                  <span className='text-2xl font-semibold'>$45,784</span>
                  <span className='text-xs p-1.5 cursor-pointer bg-green-400 hover:drop-shadow-xl ml-3 rounded-full'>
                    +23%
                  </span>
                </p>
              </div>
              <div className='mt-8'>
                <p className='text-gray-400'>Expense</p>
                <p>
                  <span className='text-2xl font-semibold'>$85,784</span>
                </p>
              </div>
              {/* SparkLine Chart */}
              <div className='mt-5'>
                <SparkLineChart
                  currentColor={currentColor}
                  id='sparkline'
                  type='Line'
                  height='80px'
                  width='250px'
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>
              <div className='mt-10'>
                <Button
                  text='Download Report'
                  bgColor={currentColor}
                  color='white'
                  borderRadius='10px'
                />
              </div>
            </div>
            {/* StackedChart */}
            <div>
              <StackedChart width='320px' height="350px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;