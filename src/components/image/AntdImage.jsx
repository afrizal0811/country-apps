import { Image } from 'antd'
import React from 'react'

const AntdImage = (props) => {
  const { width, height, src, alt, style } = props

  return (
    <Image
      alt={alt}
      width={width}
      height={height}
      src={src}
      preview={false}
      style={style}
    />
  )
}

export default AntdImage
