import React from 'react'
import ImageToText from '@/Components/image-to-text'


const style ={
  marginTop: 32,
}
export default class index extends React.PureComponent {

  state = {
    list: [],
  }

  componentDidMount() {
    
  }

  onChange = (list: any) => {
    this.setState({
      list,
    })
  }

  render() {
    const { list } = this.state
    return (
      <div>
        <ImageToText onChange={this.onChange} lang={['chi_sim', 'eng']} />
        {list.map((item: any, index: number) => {
          const { status, progress, text } = item
          if (!status) {
            return <div style={style} key={index}>{text}</div>
          }
          return <div style={style} key={index}>{status}: {progress*100}%</div>
        })}
      </div>
    )
  }
}
