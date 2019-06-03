import React from 'react'
import ReactDOM from 'react-dom'
import { Modal as AntdModal } from 'antd'
import cls from 'classnames'
import ModalBody from './Components/ModalBody'
import Title from './Components/Title'




const clsPrefix = 'micro-modal'

interface Props {
  visible: boolean;
  onOk: Function;
  onCancel: Function;
  title?: any;
  fullable?: boolean;
  headerColor?: string;
  [propsName: string]: any;
}


export default class Modal extends React.PureComponent<Props> {

  state = {
    isFull: false,
  }

  setFull = () => {
    const { isFull } = this.state
    this.setState({
      isFull: !isFull,
    }, this.setClass)
  }

  setClass = () => {
    if (!this.modalInstance) return 
    const { isFull } = this.state
    const modalElement = ReactDOM.findDOMNode(this.modalInstance)
    const targetElement = modalElement.querySelector(".ant-modal-content")
    if (!targetElement) return 
    if (isFull) {
      targetElement.classList.add("fullscreen")
    } else {
      targetElement.classList.remove("fullscreen")
    }
  }

  modalInstance: any = null

  modalBodyInstance: any = null

  render() {
    const { isFull } = this.state
    const { className, fullable=true, title, headerColor, children, ...otherProps } = this.props
    return (
      <AntdModal 
        centered
        ref={instance => {this.modalInstance=instance}}
        title={(
          <Title 
            color={headerColor}
            isFull={isFull}
            setFull={this.setFull}
            fullable={fullable} 
          >
            {title}
          </Title>
        )}
        className={cls(clsPrefix, className)} 
        {...otherProps} 
      >
        <ModalBody isFull={isFull}>{children}</ModalBody>
      </AntdModal>
    )
  }
}





