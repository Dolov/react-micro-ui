import React from 'react'
import APILoader from './APILoader'

export default class Location extends React.PureComponent {

  state = {

  }

  componentDidMount() {
    const apiLoader = new APILoader().init()
    apiLoader.then((AMap: any) => {
      AMap.plugin('AMap.Geolocation', () => {
        const geolocation = new AMap.Geolocation({
          enableHighAccuracy: true,//是否使用高精度定位，默认:true
          timeout: 10000,          //超过10秒后停止定位，默认：5s
          buttonPosition:'RB',    //定位按钮的停靠位置
          buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点
        })
        geolocation.getCurrentPosition((status, result) => {
          if(status === 'complete'){
            console.log(status)
          } else {
            console.log(result)
          }
        })
      })
    })
  }

  render() {
    return (
      <div>1234</div>
    )
  }
}
