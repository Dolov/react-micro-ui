import React from 'react'
import { Upload, Icon } from 'antd'
import { TesseractWorker } from 'tesseract.js'

const worker = new TesseractWorker()

interface Props {
  lang?: Array<string> | string;
}

export default class ImageToText extends React.PureComponent<Props> {

  state = {

  }

  handlePreview = () => {

  }

  handleChange = () => {
    
  }

  render() {
    return (
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        // fileList={fileList}
        onPreview={this.handlePreview}
        onChange={this.handleChange}
      >
        <div>
          <Icon type="plus" />
          <div className="ant-upload-text">Upload</div>
        </div>
      </Upload>
    )
  }
}
