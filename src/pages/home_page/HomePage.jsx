import React from 'react'
import AntdSearch from '../../components/search/AntdSearch'
import './styles.css'
const HomePage = () => {
  return (
    <div className='home-container'>
      <div className='home-content'>
        <h1>Country</h1>
        <AntdSearch />
      </div>
    </div>
  )
}

export default HomePage
