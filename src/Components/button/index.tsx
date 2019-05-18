import React, { PureComponent } from 'react'



const clsPrefix = 'micro-button'

export default class index extends PureComponent {

  onMouseMove = (e: any) => {
    if (!this.button) return
    const x = e.pageX - e.target.offsetLeft
    const y = e.pageY - e.target.offsetTop
    e.target.style.setProperty('--x', `${ x }px`)
    e.target.style.setProperty('--y', `${ y }px`)
  }

  button: any = null

  render() {
    const { children } = this.props
    return (
      <div 
        className={clsPrefix} 
        ref={node => {this.button=node}}
        onMouseMove={this.onMouseMove}
      >
        {children}
      </div>
    )
  }
}
