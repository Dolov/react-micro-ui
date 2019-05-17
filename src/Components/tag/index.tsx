import React from 'react'

interface Props {
  color?: string;
  children: string;
  className?: string;
  [propName: string]: any;
}

const clsPrefix = 'micro-tag'

export default class Tag extends React.PureComponent<Props> {
  
  static defaultProps = {
    color: 'red',
    className: null,
  }

  hiddenEle: any = null

  componentDidMount() {
    const { offsetWidth, offsetHeight } = this.hiddenEle
    console.log(offsetWidth, offsetHeight)
  }

  render() {
    const { color, className, children, ...otherProps } = this.props
    return (
      <>
        <div className={`${clsPrefix} ${className}`} {...otherProps}>{children}</div>
        <span ref={node => {this.hiddenEle=node}} style={{display:'none'}}>{children}</span>
      </>
    )
  }
}
