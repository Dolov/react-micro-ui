

import React from 'react'

const offset = 64
const paddingWidth = 48

interface Props {
  isFull: boolean;
}

export default class ModalBody extends React.PureComponent<Props> {

  state = {
    height: null,
  }

  componentDidMount() {
    this.calcHeight()
  }

  componentDidUpdate() {
    this.calcHeight()
  }

  calcHeight() {
    let height = '100vh'
    let nextSiblingHeight = 0
    let previousSiblingHeight = 0
    if (!this.element) return null
    const nextSibling = this.element.parentNode.nextSibling
    const previousSibling = this.element.parentNode.previousSibling
    if (nextSibling) {
      const { offsetHeight } = nextSibling
      nextSiblingHeight = offsetHeight
    }
    if (previousSibling) {
      const { offsetHeight } = previousSibling
      previousSiblingHeight = offsetHeight
    }
    const { isFull } = this.props
    if (isFull) {
      height = `${height} - ${nextSiblingHeight + previousSiblingHeight + paddingWidth}px`
    } else {
      height = `${height} - ${nextSiblingHeight + previousSiblingHeight + paddingWidth + offset}px`
    }
    const { height: prevHeight } = this.state
    if (prevHeight === height) return
    this.setState({
      height,
    })
  }

  element: any = null

  render() {
    const { height } = this.state
    const { children, isFull } = this.props
    const style: {
      overflow: string;
      height?: string;
      maxHeight?: string;
    } = { overflow: 'auto' }
    if (isFull) {
      style.height = `calc(${height})`
    } else {
      style.maxHeight = `calc(${height})`
    }
    return (
      <div 
        ref={ele => {this.element=ele}} 
        style={style}
        className="body-main"
      >
        {children}
      </div>
    )
  }
}
