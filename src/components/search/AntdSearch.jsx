import { Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getApi } from '../../utilities/handleApi'

const AntdSearch = () => {
  const navigate = useNavigate()

  let timeout
  const fetch = (value, callback) => {
    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    }

    const option = async () => {
      const url = `${process.env.REACT_APP_API_URL}/name`
      const data = await getApi(`${url}/${value}`)
      const isArray = Array.isArray(data)
      if (isArray) {
        const country = data.map((d) => d.name)
        const countryCommon = country.map((d) => d.common)
        callback(countryCommon)
      } else {
        callback([])
      }
    }

    if (value) {
      timeout = setTimeout(option, 1000)
    } else {
      callback([])
    }
  }

  const SearchInput = (props) => {
    const [data, setData] = useState([])
    const [value, setValue] = useState()

    useEffect(() => {
      if (value) {
        navigate(`/detail/${value}`)
      }
    }, [value])
    const handleSearch = (newValue) => {
      fetch(newValue, setData)
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

    return (
      <Select
        showSearch
        value={value}
        placeholder={props.placeholder}
        style={props.style}
        defaultActiveFirstOption={false}
        suffixIcon={null}
        filterOption={false}
        onSearch={handleSearch}
        onChange={handleChange}
        notFoundContent={data ? renderNotFound : null}
        options={handleOption(data)}
      />
    )
  }

  return (
    <SearchInput
      placeholder='input search text'
      style={{
        width: 700,
      }}
    />
  )
}

export default AntdSearch
