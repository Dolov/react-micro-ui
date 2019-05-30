import React from 'react'
import { Upload, Icon, Modal } from 'antd'
import { TesseractWorker } from 'tesseract.js'

interface Props {
  lang?: Array<string> | string;
  onChange: Function;
}

export default class ImageToText extends React.PureComponent<Props> {

  static defaultProps = {
    lang: 'chi_sim',
    onChange: () => {},
  }

  state = {
    previewImage: '',
    previewVisible: false,
  }

  handlePreview = async (file: any) => {
    const { originFileObj } = file
    this.setState({
      previewImage: await getBase64(originFileObj),
      previewVisible: true,
    })
  }

  handleCancel = (e: any) => {
    this.setState({
      previewVisible: false,
    })
    e.stopPropagation()
  }

  imgData: any = {}

  handleChange = ({file, fileList}) => {
    const { onChange, lang } = this.props
    const { uid, status, originFileObj } = file
    const language = Array.isArray(lang) ? lang.join("+"): lang
    if (status === 'done') {
      const worker = new TesseractWorker()
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
    const { previewVisible, previewImage } = this.state
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
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </Upload>
    )
  }
}


function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

