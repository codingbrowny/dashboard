import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './layout';

import './App.css';
import {
  Calendar,
  Customers,
  Dashboard,
  Editor,
  Employees,
  Login,
  Orders,
  Todo,
} from './pages';

import { useThemeContext } from './context/ThemeProvider';

const App = () => {
  const { isLightTheme } = useThemeContext();

  return (
    <div className={isLightTheme ? '' : 'dark'}>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path='orders' element={<Orders />} />
            <Route path='customers' element={<Customers />} />
            <Route path='employees' element={<Employees />} />
            <Route path='calendar' element={<Calendar />} />
            <Route path='editor' element={<Editor />} />
            <Route path='todo' element={<Todo/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
