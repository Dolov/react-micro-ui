import React from 'react'
import cls from 'classnames'

interface Props {
  src: string;
  color: boolean;
  [propName: string]: any;
}

const clsPrefix = 'micro-gray-picture'

export default (props: Props) => {
  const { src, color, className, ...otherProps } = props

  return (
    <img src={src} className={cls(className, {[clsPrefix]: !color})} {...otherProps} />
  )
}
