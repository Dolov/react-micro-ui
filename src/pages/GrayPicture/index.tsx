import React from 'react'
import GrayPicture from '@/Components/GrayPicture'

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
      <div>
        <GrayPicture 
          src="http://media.shisongyan.top/image/girl.jpeg" 
          color={color}
          onClick={this.change}
          style={{maxWidth:'100%'}}
        />
      </div>
    )
  }
}

