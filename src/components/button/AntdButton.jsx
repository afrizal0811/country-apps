import { Button } from 'antd'
import React from 'react'

const AntdButton = (props) => {
  const { title, icon, onClick } = props
  
  return (
    <Button
      icon={icon}
      onClick={onClick}
    >
      {title}
    </Button>
  )
}

export default AntdButton
