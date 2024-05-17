import { Card } from 'antd'
import React from 'react'
import IsMobile from '../../utilities/isMobile'

const AntdCard = (props) => {
  const { className, children } = props
  const isMobile = IsMobile()
  
  return (
    <Card
      className={className}
      style={{
        width: isMobile ? 350 : 540,
        height: 145,
        'box-shadow': 'rgba(17, 17, 26, 0.1) 0px 0px 16px',
      }}
    >
      {children}
    </Card>
  )
}

export default AntdCard
