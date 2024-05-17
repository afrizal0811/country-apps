import { Button } from 'antd'
import React from 'react'

const AntdButton = (props) => {
  const { title } = props
  return <Button>{title}</Button>
}

export default AntdButton
