import React from 'react';
import {BsCurrencyDollar} from 'react-icons/bs';
import {GoPrimitiveDot} from 'react-icons/go';

import {StackedChart, SparkLineChart, Button, PieChart, Card} from '../components';
import {earningData, SparkLineAreaData, ecomPieChartData } from '../data/dummy';

import { useStateContext } from '../context/ContextProvider';

const Ecommerce = () => {
  return (
    <div className='mt-12'>
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
              <p className="text-gray-400 mt-2 capitalize">{`Total ${item.title}`}</p>
              <p>
                  <span className='text-lg font-semibold'>{item.amount}</span>
                  <span className={`text-${item.pcColor} text-sm ml-2`}>{item.percentage}</span>
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ecommerce