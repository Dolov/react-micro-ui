import React from 'react'
import { Upload, Icon } from 'antd'
import { TesseractWorker } from 'tesseract.js'

const worker = new TesseractWorker()

interface Props {
  lang?: Array<string> | string;
  onChange: Function;
}

export default class ImageToText extends React.PureComponent<Props> {

  static defaultProps = {
    lang: 'chi_sim',
    onChange: () => {},
  }

  handlePreview = () => {

  }

  imgData: any = {

  }

  handleChange = ({file, fileList}) => {
    const { onChange, lang } = this.props
    const { uid, status, originFileObj } = file
    const language = Array.isArray(lang) ? lang.join("+"): lang
    if (status === 'done') {
      worker.recognize(originFileObj, language)
        .progress((message: any) => {
          this.imgData[uid] = message
          onChange(this.handleImageData())
        })
        .then((result:any) => {
          this.imgData[uid] = result
          onChange(this.handleImageData())
        })
    }
    if (status === 'removed') {
      delete this.imgData[uid]
      onChange(this.handleImageData())
    }
    
  }

  handleImageData() {
    return Object.keys(this.imgData).map(uid => this.imgData[uid])
  }

  render() {
    return (
      <Upload
        multiple
        listType="picture-card"
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
