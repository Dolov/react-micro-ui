import React, { Component } from 'react'
import { Button } from 'antd'
import Modal from '@/Components/modal'
import '@/Components/modal/style'


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
          title="组件扩展"
          onOk={this.onOk}
          onCancel={this.onCancel}
          visible={visible}
        >
          <h1>测试高度</h1>
          <h1>测试高度</h1>
          <h1>测试高度</h1>
          <h1>测试高度</h1>
          <h1>测试高度</h1>
          <h1>测试高度</h1>
          <h1>测试高度</h1>
          <h1>测试高度</h1>
          <h1>测试高度</h1>
          <h1>测试高度</h1>
          <h1>测试高度</h1>
          <h1>测试高度</h1>
          <h1>测试高度</h1>
          <h1>测试高度</h1>
          <h1>测试高度</h1>
          <h1>测试高度</h1>
          <h1>测试高度</h1>
          <h1>测试高度</h1>
          <h1>测试高度</h1>
          <h1>测试高度</h1>
          <h1>测试高度</h1>
          <h1>测试高度</h1>
        </Modal>
      </div>
    )
  }
}
