import React from 'react'
import style from './index.css'

interface Props {
  children: any;
  [propName: string]: any;
}

export default (props: Props) => {
  const { children } = props
  return (
    <div className={style.content}>
      <div>{children}</div>
    </div>
  )
}
