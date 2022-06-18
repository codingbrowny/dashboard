import React from 'react';
import {
  ChartComponent,
  Inject,
  Category,
  Tooltip,
} from '@syncfusion/ej2-react-charts';

import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from '../../data/dummy';

const AreaChart = () => {
  return (
      <ChartComponent
      id='area-chart'
          dataSource={areaCustomSeries}
          chartArea={{ border: { width: 0 }, primaryXAxis: areaPrimaryXAxis, primaryYAxis: areaPrimaryYAxis }}
    >
      <Inject services={[Category, Tooltip]} />
    </ChartComponent>
  );
};

export default AreaChart;
