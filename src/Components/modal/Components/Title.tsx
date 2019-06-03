
import React from 'react'
import ReactDOM from 'react-dom'
import { Icon } from 'antd'


interface Props {
  isFull: boolean;
  setFull: Function;
  color?: string;
  fullable: boolean;
  dragable: boolean;
  children: any;
  modalInstance: any;
}

export default class Title extends React.PureComponent<Props> {

  state = {

  }

  mouseDownPosX: number = 0

  mouseDownPosY: number = 0

  componentWillUnmount() {
    document.removeEventListener('mouseup', this.mouseUp)
  }

  onMouseDown = (e: any) => {
    const { dragable, modalInstance, isFull } = this.props
    if (!dragable || !modalInstance || isFull) return 
    const modalElement = ReactDOM.findDOMNode(modalInstance)
    if (!modalElement) return 
    const target = modalElement.querySelector('.ant-modal')
    const { clientX, clientY } = e
    this.mouseDownPosX = clientX
    this.mouseDownPosY = clientY
    document.addEventListener('mousemove', this.mouseMove)
  }

  mouseMove = (e: any) => {
    const { clientX, clientY } = e
    const { getPos } = this.props
    const disX = clientX - this.mouseDownPosX
    const disY = clientY - this.mouseDownPosX
    getPos(disX, disY)
    document.addEventListener('mouseup', this.mouseUp)
  }

  mouseUp = () => {
    document.removeEventListener('mousemove', this.mouseMove)
  }

  render() {
    const { isFull, fullable, setFull, children, color } = this.props
    if (!children) return null
    return (
      <div className="title-main" style={{background:color}} onMouseDown={this.onMouseDown}>
        <div>{children}</div>
        {fullable&&(
          <div className="full-screen-icon-wrapper" onClick={setFull}>
            {isFull?<Icon type="fullscreen-exit" />:<Icon type="fullscreen" />}
          </div>
        )}
      </div>
    )
  }
}


