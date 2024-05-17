import { Button } from 'antd'
import React from 'react'

const AntdButton = (props) => {
  const { title, icon, onClick } = props

  return (
    <Button
      icon={icon}
      onClick={onClick}
      style={{ background: '#8362F2', color: 'white', marginBottom: '1rem' }}
    >
      {title}
    </Button>
  )
}

export default AntdButton
