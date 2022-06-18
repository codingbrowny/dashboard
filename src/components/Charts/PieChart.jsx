import React from 'react';
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationDataLabel,
  Tooltip,
  Inject,
  AccumulationLegend,
  AccumulationTooltip,
} from '@syncfusion/ej2-react-charts';

import { useThemeContext } from '../../context/ThemeProvider';
import { pieChartData } from '../../data/dummy';

const PieChart = ({ height }) => {
  const { isLightTheme } = useThemeContext();

  return (
    <AccumulationChartComponent
      height={height}
      tooltip={{ enable: true }}
          background={isLightTheme ? '' : '#33373E'}
          
      legendSettings={{ visible: true, position: 'Auto', textStyle: { color: isLightTheme ? 'gray' : '#fff' } }}
    >
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          dataSource={pieChartData}
          xName='x'
          yName='y'
          radius='80%'
          innerRadius='50%'
          explode={true}
          explodeOffset='10%'
          explodeIndex={0}
          pointColorMapping='color'
          dataLabel={{
            visible: true,
            position: 'Inside',
              font: { color: 'white', fontWeight: 'bold' },
            
          }}
        />
      </AccumulationSeriesCollectionDirective>
      <Inject services={[AccumulationDataLabel, Tooltip, AccumulationLegend, AccumulationTooltip]} />
    </AccumulationChartComponent>
  );
};

export default PieChart;
