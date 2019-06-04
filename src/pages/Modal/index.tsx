import React, { Component } from 'react'
import { Button } from 'antd'
import Modal from '@/Components/modal'
import '@/Components/modal/style'

const { Footer, Body, Content } = Modal

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
          footer='nopart'
          onOk={this.onOk}
          title="组件扩展"
          visible={visible}
          onCancel={this.onCancel}
        >
          <Content>
            <Body>
              <div>该组件基于 antd Modal 做了部分扩展</div>
              <div>增加了全屏放大、拖拽、超出滚动、按钮与组件不分离、 指定 Header 颜色等功能</div>
              <div>其中全屏放大、拖拽、超出滚动 <b>默认开启</b></div>

              <div>头部颜色: headerColor</div>
              <div>全屏: fullable</div>
              <div>拖拽: dragable   , 拖拽事件设置在头部，如果 title=null 同样不可拖拽</div>
              
            </Body>
            <Footer>
              <Button>取消</Button>
              <Button type="primary">确定</Button>
            </Footer>
          </Content>
        </Modal>
      </div>
    )
  }
}
