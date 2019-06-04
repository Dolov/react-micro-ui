import React, { Component } from 'react'
import { Button } from 'antd'
import Modal from '@/Components/modal'
import '@/Components/modal/style'

const { Footer, Body } = Modal

export default class index extends Component {

  state = {
    visible: false,
  }

  showModal = () => {
    this.setState({
      visible: true,
    })
  }

  onOk = () => {
    this.setState({
      visible: false,
    })
  }
  onCancel = () => {
    this.setState({
      visible: false,
    })
  }
  
  render() {
    const { visible } = this.state
    return (
      <div>
        <Button onClick={this.showModal}>Click me</Button>
        <Modal
          footer={null}
          title="组件扩展"
          onOk={this.onOk}
          onCancel={this.onCancel}
          visible={visible}
        >
          <div>
            <h3>该组件基于 antd Modal</h3>
            <h3>增加了全屏、拖拽、超出滚动、指定 Header 颜色等功能, 默认开启</h3>
            <h3>全屏: fullable</h3>
            <h3>拖拽: dragable</h3>
            <h3>拖拽: dragable</h3>
            <h3>拖拽: dragable</h3>
            <h3>拖拽: dragable</h3>
            <h3>拖拽: dragable</h3>
            <h3>拖拽: dragable</h3>
            <h3>拖拽: dragable</h3>
            <h3>拖拽: dragable</h3>
            <h3>拖拽: dragable</h3>
            <h3>拖拽: dragable</h3>
            <h3>拖拽: dragable</h3>
            <h3>拖拽: dragable</h3>
            <h3>拖拽: dragable</h3>
            <h3>拖拽: dragable</h3>
            <h3>拖拽: dragable</h3>
            <h3>拖拽: dragable</h3>
            <h3>拖拽: dragable</h3>
            <h3>拖拽: dragable</h3>
            <h3>拖拽: dragable</h3>
            <h3>拖拽: dragable</h3>
            <h3>拖拽: dragable</h3>
            <h3>拖拽: dragable</h3>
            <h3>拖拽: dragable</h3>
            <h3>拖拽: dragable</h3>
            <h3>拖拽: dragable</h3>
            <h3>拖拽: dragable</h3>
            <Footer>
              <Button>取消</Button>
              <Button type="primary">确定</Button>
            </Footer>
          </div>
        </Modal>
      </div>
    )
  }
}
