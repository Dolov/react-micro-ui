import React from 'react'
import { message } from 'antd'

const clsPrefix = 'micro-copy'

interface Props {
  label?: any;
  content: string;
  [propName: string]: any;
}

export default class Copy extends React.PureComponent<Props> {

  static defaultProps = {
    label: 'copy',
  }

  state = {

  }

  copy = () => {
    this.textarea.select()
    const success = document.execCommand("Copy")
    if (success) {
      message.success('复制成功')
    } else {
      message.error('复制失败')
    }
  }

  textarea: any = null

  render() {
    const { label, content, ...otherProps } = this.props
    return (
      <div className={clsPrefix} {...otherProps}>
        <textarea value={content} ref={node => {this.textarea=node}} />
        <span onClick={this.copy}>{label}</span>
      </div>
    )
  }
}

