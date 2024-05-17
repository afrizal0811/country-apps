import { ArrowLeftOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AntdButton from '../../components/button/AntdButton'
import AntdCard from '../../components/card/AntdCard'
import AntdImage from '../../components/image/AntdImage'
import AntdSpin from '../../components/spin/AntdSpin'
import AntdTooltip from '../../components/tooltip/AntdTooltip'
import { getApi } from '../../utilities/handleApi'
import { callingCodeSelector, currencySelector } from './help'
import './styles.css'

const DetailPage = () => {
  const [countries, setCountries] = useState([])
  const [callCodes, setCallCodes] = useState({ length: null, data: null })
  const [valutas, setValutas] = useState({ length: null, data: null })
  const [isLoading, setIsLoading] = useState(true)
  const { name } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const fecthData = async (url, setData) => {
      const response = await getApi(url)
      const responseLength = response.length
      const responseName = response.map((data) => data.name)
      setData({ length: responseLength, data: responseName })
    }
    const fetchCountries = async () => {
      const urlCoutries = `${process.env.REACT_APP_BASE_URL}/name/${name}?fullText=true`
      setCountries(await getApi(urlCoutries))
    }

    fetchCountries()
    const country = countries ? countries[0] : {}
    if (country) {
      const callingCode = callingCodeSelector(country.idd)
      const countryCurrency = currencySelector(country.currencies)
      const urlCallCodes = `${process.env.REACT_APP_CALL_CODE_URL}/${callingCode}`
      const urlCurrencies = `${process.env.REACT_APP_CURRENCY_URL}/${countryCurrency}`
      fecthData(urlCallCodes, setCallCodes)
      fecthData(urlCurrencies, setValutas)
      setIsLoading(false)
    }
  }, [name, countries])

  const renderLoading = <AntdSpin />
  const renderData = countries.map((country, index) => {
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
    const latlangs = latlng[0] + `, ` + latlng[1]
    const callingCode = callingCodeSelector(idd)
    const countryCurrency = currencySelector(currencies)
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
              className='img-flag'
              src={flags.png}
              width={46}
              height={30}
            />
          </div>
          <span>{renderSpelling}</span>
        </div>
        <div className='details'>
          <div className='detail-first'>
            {/* ================ LATLONG ====================== */}
            <AntdCard className='detail-latlong'>
              <p>LatLong</p>
              <h1>{latlangs}</h1>
            </AntdCard>
            {/* ============= INFO LOCATION =================== */}
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
          </div>
          <div className='detail-second'>
            {/* ================ CALL CODE ====================== */}
            <div className='detail-call'>
              <p>Calling Code</p>
              <h1>{callingCode}</h1>
              <div>
                <AntdTooltip data={callCodes.data}>
                  <p>{callCodes.length} country</p>
                </AntdTooltip>
                <span>&nbsp;with this calling code</span>
              </div>
            </div>
            {/* ================ CURRECY ====================== */}
            <div className='detail-currency'>
              <p>Currency</p>
              <h1>{countryCurrency[0]}</h1>
              <div>
                <AntdTooltip data={valutas.data}>
                  <p>{valutas.length} country</p>
                </AntdTooltip>
                <span>&nbsp;with this currency</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  })
  return (
    <div className='detail-container'>
      <AntdButton
        icon={<ArrowLeftOutlined />}
        title='Back to Homepage'
        onClick={() => navigate('/')}
      />
      {isLoading ? renderLoading : renderData}
    </div>
  )
}

export default DetailPage
