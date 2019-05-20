import React from 'react'

interface Props {
  mode?: 'around' | 'vertical';
  header: any;
  onLeave?: Function;
  onReach?: Function;
  perfectHeight: number;
}

const clsPrefix = 'micro-suction'

const defaultMargin = 16

export default class SuctionHeader extends React.PureComponent<Props> {

  headRef: any = null

  childrenRef: any = null

  state = {
    height: null,
    margin: defaultMargin,
  }

  initHeight: any = null

  onScroll = (e: any) => {
    const { offsetHeight } = this.headRef
    const { offsetHeight: childrenEleHeight } = this.childrenRef
    const { scrollTop, offsetHeight: scrollEleHeight } = e.target
    const { perfectHeight } = this.props
    if (!this.initHeight) {
      this.initHeight = offsetHeight
    }
    // 防止抖动
    if (childrenEleHeight < scrollEleHeight + this.initHeight) {
      this.childrenRef.style.height = (childrenEleHeight + this.initHeight) + 'px'
    }
    
    
    const distance = this.initHeight - scrollTop
    const height = distance > perfectHeight ? distance : perfectHeight
    const margin = this.calcMargin(scrollTop)
    this.setState({
      height,
      margin,
    })
  }

  calcMargin = (scrollTop: number) => {
    const { perfectHeight, mode, onReach } = this.props
    if(mode === 'vertical') return defaultMargin
    if (scrollTop === 0) {
      return defaultMargin
    } else if (scrollTop >= perfectHeight) {
      return 0
    } else {
      const res = ((perfectHeight - scrollTop) / perfectHeight) * defaultMargin
      return res
    }
  }

  render() {
    const { header, children } = this.props
    const { height, margin } = this.state
    return (
      <div className={clsPrefix}>
        <div className={`${clsPrefix}-header`} style={{margin}}>
          <div ref={el => {this.headRef=el}} style={{height, overflow:'hidden'}}>{header}</div>
        </div>
        <div className={`${clsPrefix}-body`} onScroll={this.onScroll}>
          <div className={`${clsPrefix}-children`}>
            <div ref={node => {this.childrenRef=node}}>{children}</div>
          </div>
        </div>
      </div>
    )
  }
}
