import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/home_page/HomePage'
import DetailPage from './pages/detail_page/DetailPage'

const RouteHandler = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<HomePage />}
      />
      <Route
        path='/detail/:name'
        element={<DetailPage />}
      />
      <Route
        path='*'
        element={<HomePage />}
      />
    </Routes>
  )
}

export default RouteHandler