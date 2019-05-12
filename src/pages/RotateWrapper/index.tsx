import React from 'react'
import RotateWrapper from '@/Components/rotate-wrapper'
import '@/Components/rotate-wrapper/style'



export default class Index extends React.PureComponent {

  state = {
    active: true,
  } 

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        active: false,
      })
    }, 3000)
  }
  
  render() {
    const { active } = this.state
    return (
      <div style={{flex: 1,display:'flex',alignItems:'center',justifyContent:'center'}}>
        <RotateWrapper active={active}>
          Loading
        </RotateWrapper>
      </div>
    )
  }
}
