import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  LineSeries,
  Category,
  DataLabel,
  Tooltip,
} from '@syncfusion/ej2-react-charts';
import { SparklineAreaData } from '../../data/dummy';

import { useThemeContext } from '../../context/ThemeProvider';
import { useStateContext } from '../../context/ContextProvider';

const LineChart = ({ height }) => {
  const { currentColor, isLightTheme } = useThemeContext();
  const { activeMenu } = useStateContext();
  return (
    <ChartComponent
      primaryXAxis={{
        valueType: 'Category',
        title: 'Month',
        majorGridLines: { width: 0 },
        lineStyle: { width: 0 },
        titleStyle: { color: isLightTheme ? 'gray' : '#fff' },
        labelStyle: { color: isLightTheme ? 'gray' : '#fff' },
      }}
      primaryYAxis={{
        title: 'Sales',
        plotOffset: 5,
        lineStyle: { width: 0 },
        majorGridLines: { width: isLightTheme ? 1 : 0.5 },
        labelStyle: { color: isLightTheme ? 'gray' : '#fff' },
        titleStyle: { color: isLightTheme ? 'gray' : '#fff' },
      }}
      tooltip={{ enable: true }}
      chartArea={{
        border: { width: 0 },
      }}
      height={height}
      width={activeMenu ? null : '100%'}
      background={isLightTheme ? '' : '#33373E'}
    >
      <Inject services={[Category, LineSeries, DataLabel, Tooltip]} />
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={SparklineAreaData}
          xName='xval'
          yName='yval'
          type='Line'
          width={2}
          marker={{ visible: true, width: 8, height: 8 }}
          name='Sales'
          fill={currentColor}
          columnSpacing={1}
        />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;
