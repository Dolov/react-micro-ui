import React from 'react'


export default class ModalCustomFooter extends React.PureComponent {

  state = {

  }

  render() {
    const { children } = this.props
    return (
      <div className="custom-footer">{children}</div>
    )
  }
}