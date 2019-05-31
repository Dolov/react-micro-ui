import React from 'react'
import ImageToText from '@/Components/image-to-text'


const style ={
  marginTop: 16,
  padding: 16,
  background: 'rgba(0, 0, 0, 0.03)',
}

const lang = ['chi_sim', 'eng']
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
        <ImageToText onChange={this.onChange} lang={lang} />
        {list.map((item: any, index: number) => {
          const { status, progress, text } = item
          if (!status) {
            return <div style={style} key={index}>{text}</div>
          }
          return <div style={style} key={index}>{status}: {progress.toFixed(4)*100}%</div>
        })}
      </div>
    )
  }
}
