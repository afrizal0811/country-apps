import { SearchOutlined, SyncOutlined } from '@ant-design/icons'
import { Select } from 'antd'
import { isArray, isNull, map } from 'lodash'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getApi } from '../../utilities/handleApi'
import IsMobile from '../../utilities/isMobile'
const AntdSearch = () => {
  const navigate = useNavigate()
  const isMobile = IsMobile()

  let timeout
  const fetch = (value, callback, searching) => {
    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    }

    const option = async () => {
      searching(true)
      const url = `${process.env.REACT_APP_BASE_URL}/name`
      const data = await getApi(`${url}/${value}`)
      if (isArray(data)) {
        const topCountry = data.slice(0, 5)
        const country = topCountry.map((d) => d.name)
        const countryCommon = country.map((d) => d.common)
        const countryOfficial = country.map((d) => d.official)
        const mappedCountry = map(
          countryCommon,
          (value, index) => value + ` (` + countryOfficial[index] + `)`
        )
        callback(mappedCountry)
      } else {
        callback(null)
      }
      searching(false)
    }

    if (value) {
      timeout = setTimeout(option, 300)
    } else {
      callback([])
    }
  }

  const SearchInput = (props) => {
    const [data, setData] = useState([])
    const [value, setValue] = useState()
    const [isSearch, setIsSearch] = useState(false)

    useEffect(() => {
      if (value) {
        const commonName = value.substring(0, value.indexOf('(') - 1)
        navigate(`/detail/${commonName}`)
      }
    }, [value])

    const handleSearch = (newValue) => {
      fetch(newValue, setData, setIsSearch)
    }

    const handleChange = (newValue) => {
      setValue(newValue)
    }

    const handleOption = (data) =>
      (data || []).map((d) => ({
        value: d,
        label: d,
      }))

    const renderNotFound = <p style={{ color: 'red' }}>Data not found</p>
    const suffix = isSearch ? <SyncOutlined spin /> : <SearchOutlined />

    return (
      <Select
        showSearch
        value={value}
        placeholder={props.placeholder}
        style={props.style}
        defaultActiveFirstOption={false}
        suffixIcon={suffix}
        filterOption={false}
        onSearch={handleSearch}
        onChange={handleChange}
        notFoundContent={isNull(data) && renderNotFound}
        options={handleOption(data)}
      />
    )
  }

  return (
    <SearchInput
      placeholder='Input Search Text'
      style={{
        width: isMobile ? 300 : 700,
      }}
    />
  )
}

export default AntdSearch
