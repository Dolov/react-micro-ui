
import React from 'react'
import cls from 'classnames'
import { Icon } from 'antd'


interface Props {
  getPos: Function;
  isFull: boolean;
  setFull: Function;
  color?: string;
  fullable: boolean;
  dragable: boolean;
  children: any;
}

export default class Title extends React.PureComponent<Props> {

  state = {
    moving: false,
  }

  lastDisX: number = 0

  lastDisY: number = 0

  mouseDownPosX: number = 0

  mouseDownPosY: number = 0

  componentWillUnmount() {
    document.removeEventListener('mouseup', this.onMouseUp)
    document.removeEventListener('mousemove', this.onMouseMove)
  }

  componentDidMount() {
    document.addEventListener('mouseup', this.onMouseUp)
    document.addEventListener('mousemove', this.onMouseMove)
  }

  onMouseDown = (e: any) => {
    const { dragable, isFull } = this.props
    if (!dragable || isFull) return 
    const { clientX, clientY } = e
    this.mouseDownPosX = clientX - this.lastDisX
    this.mouseDownPosY = clientY - this.lastDisY
    this.setState({
      moving: true,
    })
  }

  mouseMove = (e: any) => {
    const { clientX, clientY } = e
    const { getPos } = this.props
    const isValid = this.calcBoundary(clientX, clientY)
    if (!isValid) return 
    const disX = clientX - this.mouseDownPosX 
    const disY = clientY - this.mouseDownPosY 
    this.lastDisX = disX
    this.lastDisY = disY
    getPos(
      {translateX: disX, translateY: disY}, 
    )
  }

  onMouseUp = () => {
    this.setState({
      moving: false,
    })
  }

  onMouseMove = (e: any) => {
    const { moving } = this.state
    if (!moving) return
    this.mouseMove(e)
  }

  calcBoundary(x: number, y: number): boolean {
    const boundaryTop: number = 0
    const boundaryLeft: number = 0
    const boundaryRight: number = innerWidth
    const boundaryBottom: number = innerHeight
    if (
      x > boundaryLeft &&
      x < boundaryRight &&
      y > boundaryTop &&
      y < boundaryBottom
    ) {
      return true
    }
    return false
  }

  render() {
    const { moving } = this.state
    const { isFull, fullable, setFull, children, color } = this.props
    if (!children) return null
    return (
      <div 
        style={{background:color}} 
        className={cls("title-main",{moving})}
        onMouseDown={this.onMouseDown}
      >
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


