// import { map } from 'lodash'
// import React, { useEffect, useState } from 'react'
// import AntdImage from '../../components/image/AntdImage'
// import AntdTooltip from '../../components/tooltip/AntdTooltip'
// import { getApi } from '../../utilities/handleApi'
import React from 'react'
import AntdSearch from '../../components/search/AntdSearch'
import './styles.css'

const HomePage = () => {
  // const [countries, setCountries] = useState([])
  // const [flags, setFlags] = useState([])

  // useEffect(() => {
  //   const fetch = async () => {
  //     const url = `${process.env.REACT_APP_BASE_URL}/all?fields=name,flags`
  //     setCountries(await getApi(url))
  //   }
  //   fetch()
  // }, [])

  // useEffect(() => {
  //   const countriesLength = countries.length
  //   if (countriesLength > 0) {
  //     for (var i = 1; i <= 5; i++) {
  //       const randomNum = Math.floor(Math.random() * countriesLength) + 1
  //       setFlags((prev) => [...prev, countries[randomNum]])
  //     }
  //   }
  // }, [countries])

  return (
    <div className='home-container'>
      <div className='home-content'>
        <h1>Country</h1>
        {/* <div className='flag-container'>
          {map(flags, (flag) => (
            <AntdTooltip text={flag.name.common}>
              <div>
                <AntdImage
                  alt={flag.name.common}
                  className='flag-content'
                  src={flag.flags.png}
                  width={46}
                  height={30}
                />
              </div>
            </AntdTooltip>
          ))}
        </div> */}
        <AntdSearch />
      </div>
    </div>
  )
}

export default HomePage
