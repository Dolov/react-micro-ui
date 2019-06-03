import React from 'react'
import ReactDOM from 'react-dom'
import { Modal as AntdModal } from 'antd'
import cls from 'classnames'
import ModalBody from './Components/ModalBody'
import Title from './Components/Title'
import { fail } from 'assert';




const clsPrefix = 'micro-modal'

interface Props {
  visible: boolean;
  onOk: Function;
  onCancel: Function;
  title?: any;
  fullable?: boolean;
  dragable?: boolean;
  headerColor?: string;
  [propsName: string]: any;
}


export default class Modal extends React.PureComponent<Props> {

  static defaultProps = {
    fullable: true,
    dragable: true,
    headerColor: 'linear-gradient(45deg,#328DC0,#4BB6E5)',
  }

  state = {
    isFull: false,
    transform: null,
  }

  setFull = () => {
    const { isFull } = this.state
    this.setState({
      isFull: !isFull,
    }, () => {
      this.setClass(!isFull)
    })
  }

  setClass = (isFull: boolean) => {
    if (!this.modalInstance) return 
    const modalElement = ReactDOM.findDOMNode(this.modalInstance)
    if (!modalElement) return 
    const targetElement = modalElement.querySelector(".ant-modal-content")
    if (!targetElement) return 
    if (isFull) {
      targetElement.classList.add("fullscreen")
    } else {
      targetElement.classList.remove("fullscreen")
    }
  }

  onCancel = () => {
    const { onCancel } = this.props
    const { isFull } = this.state
    if (isFull) {
      this.setFull()
    }
    this.setState({
      transform: null,
    })
    onCancel()
  }

  getPos = (disX, disY) => {
    this.setState({
      transform: `translate(${disX}px, ${disY}px)`
    })
  }

  modalInstance: any = null

  render() {
    const { isFull, transform } = this.state
    console.log(transform)
    const { className, dragable, fullable, title, headerColor, children, ...otherProps } = this.props
    return (
      <AntdModal 
        // destroyOnClose
        style={{transform}}
        centered
        ref={instance => {this.modalInstance=instance}}
        title={(
          <Title 
            color={headerColor}
            getPos={this.getPos}
            isFull={isFull}
            setFull={this.setFull}
            fullable={fullable} 
            dragable={dragable}
            modalInstance={this.modalInstance}
          >
            {title}
          </Title>
        )}
        className={cls(clsPrefix, className)} 
        {...otherProps} 
        onCancel={this.onCancel}
      >
        <ModalBody isFull={isFull}>{children}</ModalBody>
      </AntdModal>
    )
  }
}





