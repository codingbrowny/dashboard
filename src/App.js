import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './layout'

import './App.css'

const App = () => {
  return (
    <BrowserRouter>
    <Layout/>
    <Routes>
      <Route />
    </Routes>
    </BrowserRouter>
  )
}

export default App