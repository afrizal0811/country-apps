import { Tooltip } from 'antd'
import React from 'react'

const AntdTooltip = (props) => {
  const { data, children } = props
  const title = (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {(data || []).map((d) => (
        <p>{d}</p>
      ))}
    </div>
  )

  return (
    <Tooltip
      arrow={false}
      className='tooltip-content'
      placement='bottom'
      title={title}
    >
      {children}
    </Tooltip>
  )
}

export default AntdTooltip
