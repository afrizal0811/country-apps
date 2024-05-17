import { Image } from 'antd'
import React from 'react'

const AntdImage = (props) => {
  const { alt, className, height, src, style, width } = props

  return (
    <Image
      alt={alt}
      className={className}
      width={width}
      height={height}
      src={src}
      preview={false}
      style={style}
    />
  )
}

export default AntdImage
