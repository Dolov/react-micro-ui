import React from 'react'

interface Props {
  children: any;
  [propName: string]: any;
}

const clsPrefix = 'micro-content'

export default (props: Props) => {
  const { children } = props
  return (
    <div className={clsPrefix}>
      <div>{children}</div>
    </div>
  )
}
