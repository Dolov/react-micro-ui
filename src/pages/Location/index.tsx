import React from 'react'
import Location from '@/Components/Location'

export default class Index extends React.PureComponent {

  getPosition = (res: any) => {
    console.log(res)
  }

  render() {

    return (
      <div>
        <Location getPosition={this.getPosition}>
          {(res: any) => {
            return Object.keys(res).map(item => {
              return (
                <div key={item}>
                  <span>{item}: </span>
                  <span> {`${res[item]}`}</span>
                </div>
              )
            })
          }}
        </Location>
      </div>
    )
  }
}
