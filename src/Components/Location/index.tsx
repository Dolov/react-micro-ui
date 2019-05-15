import React from 'react'
import APILoader from './APILoader'

interface Props {
  getPosition?: Function;
}

export default class Location extends React.PureComponent<Props> {

  state = {
    result: {}
  }

  componentDidMount() {
    const { getPosition } = this.props
    const apiLoader = new APILoader().init()
    apiLoader.then((Map: any) => {
      Map.plugin('AMap.Geolocation', () => {
        const geolocation = new AMap.Geolocation({
          enableHighAccuracy: true,//是否使用高精度定位，默认:true
          timeout: 10000,          //超过10秒后停止定位，默认：5s
          buttonPosition:'RB',    //定位按钮的停靠位置
          buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点
        })
        geolocation.getCityInfo((status, result) => {
          if(status === 'complete'){
            if (typeof getPosition === 'function') {
              getPosition(result)
              this.setState({
                result,
              })
            }
          } else {
            console.log(result)
          }
        })
      })
    })
  }

  render() {
    const { children } = this.props
    const { result } = this.state
    if (typeof children !== 'function') return children
    return (
      <div>{children(result)}</div>
    )
  }
}
