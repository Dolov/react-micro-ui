import React from 'react'
import Content from '@/Components/content'
import GrayPicture from '@/Components/gray-picture'
import '@/Components/gray-picture/style'
export default class extends React.PureComponent {

  state = {
    color: true,
  }

  change = () => {
    const { color } = this.state
    this.setState({
      color: !color,
    })
  }

  render() {
    const { color } = this.state
    return (
      <Content>
        <div>
          <GrayPicture 
            src="http://media.shisongyan.top/image/girl.jpeg" 
            color={color}
            onClick={this.change}
            style={{maxWidth:'100%'}}
          />
        </div>
      </Content>
    )
  }
}

