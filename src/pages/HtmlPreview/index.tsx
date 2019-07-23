import React from 'react'
import { Button } from 'antd'
import HtmlPreview from '@/Components/html-preview'
import '@/Components/html-preview/style'

const htmlString = "<h1>Yay! Welcome to react-micro-ui!</h1>"

export default class Index extends React.PureComponent {

  state = {

  }

  preview = () => {
    this.instance.preview()
  }

  instance: any = null

  render() {
    return (
      <div>
        <Button onClick={this.preview}>预览</Button>
        <HtmlPreview 
          ref={instance => {this.instance=instance}} 
          data={htmlString}
          title="预览"
          style={`h1{color:red}`}
        />
      </div>
    )
  }
}
