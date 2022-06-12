import React from 'react';
import {
  SparklineComponent,
  SparklineTooltip,
  Inject,
} from '@syncfusion/ej2-react-charts';

const SparkLineChart = ({
  id,
  type,
  color,
  data,
  width,
  height,
  currentColor,
}) => {
  return (
    <SparklineComponent
      id={id}
      type={type}
      color={color}
      width={width}
      height={height}
      lineWidth={1}
      valueType='Numeric'
      fill={color}
      border={{color: currentColor, width: 5}}
      dataSource={data}
      xName='xval'
      yName='yval'
      tooltipSettings={{
        visible: true,
        format: 'X-${xval} : Y-${yval}',
        trackLineSettings: {
          visible: true,
        },
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLineChart;
