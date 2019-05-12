import React from 'react'


interface Props {
  active: boolean;
  children: any;
}

const clsPrefix = 'micro-ui-rotate-wrapper'

export default class RotateWrapper extends React.PureComponent<Props> {

  state = {

  }

  render() {
    const { children, active } = this.props
    const stopClassName = active ? "": "stop"
    return (
      <span className={`${clsPrefix} ${stopClassName}`}>{children}</span>
    )
  }
}
