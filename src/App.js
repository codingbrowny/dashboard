import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './layout';

import './App.css';
import {
  Calendar,
  Customers,
  Dashboard,
  Editor,
  Employees,
  Orders,
} from './pages';

import { useThemeContext } from './context/ThemeProvider';

const App = () => {
  const { isLightTheme } = useThemeContext();
  
  return (
    <div className={(isLightTheme) ? '' : 'dark'}>
      <BrowserRouter>
        <Layout>
          <div>
            <Routes>
              {/* Main Pages */}
              <Route path='/' element={<Dashboard />} />
              {/* Other Pages */}
              <Route path='/orders' element={<Orders />} />
              <Route path='/customers' element={<Customers />} />
              <Route path='/employees' element={<Employees />} />
              {/* Applications */}
              <Route path='/calendar' element={<Calendar />} />
              <Route path='/editor' element={<Editor />} />
            </Routes>
          </div>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
