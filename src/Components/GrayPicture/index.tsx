import React from 'react'
import cls from 'classnames'
import style from './index.css'

interface Props {
  src: string;
  color: boolean;
  [propName: string]: any;
}


export default (props: Props) => {
  const { src, color, className, ...otherProps } = props

  return (
    <img src={src} className={cls(className, {[style.gray]: !color})} {...otherProps} />
  )
}
