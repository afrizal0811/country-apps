import { SearchOutlined, SyncOutlined } from '@ant-design/icons'
import { Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getApi } from '../../utilities/handleApi'

const AntdSearch = () => {
  const navigate = useNavigate()

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
      const isArray = Array.isArray(data)
      if (isArray) {
        const topCountry = data.slice(0, 5)
        const country = topCountry.map((d) => d.name)
        const countryCommon = country.map((d) => d.common)
        callback(countryCommon)
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
        navigate(`/detail/${value}`)
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
        notFoundContent={data === null ? renderNotFound : null}
        options={handleOption(data)}
      />
    )
  }

  return (
    <SearchInput
      placeholder='Input Search Text'
      style={{
        width: 700,
      }}
    />
  )
}

export default AntdSearch
