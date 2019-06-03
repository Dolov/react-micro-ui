
import React from 'react'
import { Icon } from 'antd'


interface Props {
  isFull: boolean;
  setFull: Function;
  color?: string;
  fullable: boolean;
  dragable: boolean;
  children: any;
}

const Title = (props: Props) => {
  const { isFull, fullable, setFull, children, color } = props
  if (!children) return null
  
  return (
    <div className="title-main" style={{background:color}}>
      <div>{children}</div>
      {fullable&&(
        <div className="full-screen-icon-wrapper" onClick={setFull}>
          {isFull?<Icon type="fullscreen-exit" />:<Icon type="fullscreen" />}
        </div>
      )}
    </div>
  )
}



export default Title
