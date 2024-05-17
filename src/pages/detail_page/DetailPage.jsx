import { ArrowLeftOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AntdButton from '../../components/button/AntdButton'
import AntdImage from '../../components/image/AntdImage'
import { getApi } from '../../utilities/handleApi'
// import AntdSpin from '../../components/spin/AntdSpin'
import AntdCard from '../../components/card/AntdCard'
import './styles.css'

const DetailPage = () => {
  const [data, setData] = useState([])
  //   const [isLoading, setIsLoading] = useState(true)
  const { name } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const url = `${process.env.REACT_APP_BASE_URL}/name/${name}?fullText=true`
    const fetch = async () => {
      setData(await getApi(url))
    }
    fetch()
    // setIsLoading(false)
  }, [name])

  return (
    <div className='detail-container'>
      <AntdButton
        icon={<ArrowLeftOutlined />}
        title='Back to Homepage'
        onClick={() => navigate('/')}
      />
      {data.map((country, index) => {
        const {
          altSpellings,
          capital,
          currencies,
          flags,
          idd,
          latlng,
          region,
          subregion,
        } = country

        const { root, suffixes } = idd
        const currency = Object.keys(currencies)
        const renderSpelling = altSpellings.map((spell) => <p>{spell}</p>)
        return (
          <div
            key={index}
            className='detail-content'
          >
            <div className='detail-name'>
              <div>
                <h1>{name}</h1>
                <AntdImage
                  alt={name}
                  src={flags.png}
                  width={46}
                  height={30}
                  style={{ border: 'solid 1px black' }}
                />
              </div>
              <span>{renderSpelling}</span>
            </div>
            <div className='details'>
              <div className='detail-first'>
                <AntdCard className='detail-latlong'>
                  <p>LatLong</p>
                  <h1>
                    {latlng[0]}, {latlng[1]}
                  </h1>
                </AntdCard>
                <div className='detail-call'>
                  <p>Calling Code</p>
                  <h1>
                    {root}
                    {suffixes[0]}
                  </h1>
                  <p>1 country with this calling code</p>
                </div>
              </div>
              <div className='detail-second'>
                <AntdCard className='detail-location'>
                  <p>
                    Capital: <b>{capital}</b>
                  </p>
                  <p>
                    Region: <b>{region}</b>
                  </p>
                  <p>
                    Subregion: <b>{subregion}</b>
                  </p>
                </AntdCard>
                <div className='detail-currency'>
                  <p>Currency</p>
                  <h1>{currency[0]}</h1>
                  <p>1 country with this currency</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default DetailPage
