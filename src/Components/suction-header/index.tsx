import React from 'react'

interface Props {
  mode: 'around' | 'vertical';
  header: any;
  height: number;
}

const clsPrefix = 'micro-suction'

export default class SuctionHeader extends React.PureComponent<Props> {

  state = {

  }

  render() {
    const { header, children } = this.props
    return (
      <div className={clsPrefix}>
        <div className="header">
          {header}
        </div>
        <div className="body">
          {children}
        </div>
      </div>
    )
  }
}
