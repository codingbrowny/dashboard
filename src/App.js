import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './layout';

import './App.css';
import {
  Area,
  Bar,
  Calendar,
  ColorMapping,
  ColorPicker,
  Customers,
  Ecommerce,
  Editor,
  Employees,
  Financial,
  Kanban,
  Line,
  Orders,
  Pie,
  Pyramid,
  Stacked,
} from './pages';

import { useStateContext } from './context/ContextProvider';

const App = () => {
  const { currentMode } = useStateContext();

  const themeMode = localStorage.getItem('themeMode')

  return (
    <div className={(currentMode && themeMode) === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <Layout>
          <div>
            <Routes>
              {/* Main Pages */}
              <Route path='/' element={<Ecommerce />} />
              <Route path='/ecommerce' element={<Ecommerce />} />
              {/* Other Pages */}
              <Route path='/orders' element={<Orders />} />
              <Route path='/customers' element={<Customers />} />
              <Route path='/employees' element={<Employees />} />
              {/* Applications */}
              <Route path='/calendar' element={<Calendar />} />
              <Route path='/editor' element={<Editor />} />
              <Route path='/kanban' element={<Kanban />} />
              <Route path='/color-picker' element={<ColorPicker />} />
              {/* Dashboard Charts */}
              <Route path='/chart/area' element={<Area />} />
              <Route path='/chart/pie' element={<Pie />} />
              <Route path='/chart/bar' element={<Bar />} />
              <Route path='/chart/line' element={<Line />} />
              <Route path='/chart/pyramid' element={<Pyramid />} />
              <Route path='/chart/stacked' element={<Stacked />} />
              <Route path='/chart/financial' element={<Financial />} />
              <Route path='/chart/color-mapping' element={<ColorMapping />} />
            </Routes>
          </div>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
