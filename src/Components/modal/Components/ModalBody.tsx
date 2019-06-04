

import React from 'react'

const offset = 64

interface Props {
  isFull: boolean;
  footer: any;
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
      height = `${height} - ${nextSiblingHeight + previousSiblingHeight}px`
    } else {
      height = `${height} - ${nextSiblingHeight + previousSiblingHeight + offset}px`
    }
    const { height: prevHeight } = this.state
    if (prevHeight === height) return
    this.setState({
      height,
    })
  }

  getStyle() {
    const { height } = this.state
    const { isFull } = this.props
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
    return style
  }

  filterCustomFooter() {
    const { footer, children } = this.props
    console.log(children, 'children')
    if (footer) return 
  }

  element: any = null

  render() {
    const { children } = this.props
    const style = this.getStyle()
    this.filterCustomFooter()
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
