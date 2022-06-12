import React from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Sort,
  Filter,
  Page,
  Search,
  Toolbar,
  Selection,
  Edit,
  Inject,
} from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
  return (
    <div className='m-2 md:mx-10 md:mt-12 p-2 md:p-10 rounded-2xl bg-white'>
      <Header title='Customers' category='Page' />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSelection
        toolbar={['Delete', 'Add', 'Search']}
        editSettings={{allowAdding:true, allowEditing:true, allowDeleting:true}}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Toolbar, Search, Page, Selection, Sort, Filter, Edit]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
