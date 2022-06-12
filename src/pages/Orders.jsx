import React from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  ContextMenu,
  Sort,
  Filter,
  Page,
  PdfExport,
  ExcelExport,
  Edit,
  Search,
  Toolbar,
  Inject,
} from '@syncfusion/ej2-react-grids';

import { ordersData, ordersGrid } from '../data/dummy';
import { Header } from '../components';

const Orders = () => {
  return (
    <div className='m-2 md:mx-10 md:mt-12 p-2 md:p-10 rounded-2xl bg-white'>
      <Header title='Orders' category='Page' />
      <GridComponent
        id='gridcomp'
        dataSource={ordersData}
        allowPaging
        allowSorting
        toolbar={['Search']}
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            ContextMenu,
            Sort,
            Filter,
            PdfExport,
            ExcelExport,
            Edit,
            Search, 
            Toolbar,
            Page
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
