import { Card } from 'antd'
import React from 'react'

const AntdCard = (props) => {
  const { className, children } = props
  return (
    <Card
      className={className}
      style={{
        width: 540,
        height: 145,
        'box-shadow': 'rgba(17, 17, 26, 0.1) 0px 0px 16px',
      }}
    >
      {children}
    </Card>
  )
}

export default AntdCard
