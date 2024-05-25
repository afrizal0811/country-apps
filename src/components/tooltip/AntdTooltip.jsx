import { Tooltip } from 'antd'
import React from 'react'
import { isEmpty } from 'lodash'
const AntdTooltip = (props) => {
  const { data, children, text } = props

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
      title={isEmpty(data) ? text : title}
    >
      {children}
    </Tooltip>
  )
}

export default AntdTooltip
