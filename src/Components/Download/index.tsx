import React, { PureComponent } from 'react'

interface Props {
  src: string;
  type: 'windowopen' | 'h5' | 'form';
}

export default class index extends PureComponent<Props> {

  static defaultProps = {
    type: 'h5',
  }

  download = () => {
    const { src } = this.props
    window.open(src)
  }

  render() {
    const { type, src } = this.props
    if (type === 'windowopen') {
      return (
        <a onClick={this.download}>{src}</a>
      )
    }
    if (type === 'h5') {
      return (
        <a href={src} download="name.jpg">{src}</a>
      )
    }
  }
}
