import React from 'react';
import {
  ScheduleComponent,
  Day,
  Week,
  Month,
  WorkWeek,
  Agenda,
  DragAndDrop,
  Inject,
} from '@syncfusion/ej2-react-schedule';

import { scheduleData } from '../data/dummy';
import { Header } from '../components';

const Calendar = () => {
  return <div
    className='m-2 md:mx-10 md:mt-12 p-2 md:p-10 rounded-2xl bg-white'
  >
    <Header title='Calendar' category='Utility' />
    <ScheduleComponent
      height='550px'
      eventSettings={{ dataSource: scheduleData }}
      selectedDate={new Date()}
    > 
      <Inject services={[Day, Week, Month, WorkWeek, Agenda, DragAndDrop]} />
    </ScheduleComponent>
  </div>;
};

export default Calendar;