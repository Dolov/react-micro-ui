import React from 'react'
import ImageToText from '@/Components/image-to-text'
import Image from './WechatIMG38.png'

export default class index extends React.PureComponent {

  state = {

  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <ImageToText lang={['chi_sim', 'eng']} />
      </div>
    )
  }
}
