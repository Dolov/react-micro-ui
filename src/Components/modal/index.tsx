import React from 'react'
import ReactDOM from 'react-dom'
import { Modal as AntdModal } from 'antd'
import cls from 'classnames'
import ModalBody from './Components/ModalBody'
import Title from './Components/Title'
import { 
  FooterNopartBody,
  FooterNopartFooter,
  FooterNopartContent,
} from './Components/Wrapper'

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

  static Body = FooterNopartBody

  static Footer = FooterNopartFooter

  static Content = FooterNopartContent

  static defaultProps = {
    fullable: true,
    dragable: true,
    headerColor: 'linear-gradient(45deg,#328DC0,#4BB6E5)',
  }

  state = {
    isFull: false,
    transform: null,
  }

  setFullScreen = () => {
    const { isFull } = this.state
    this.setState({
      isFull: !isFull,
    }, () => {
      this.setFullScreenClass(!isFull)
    })
  }

  setFullScreenClass = (isFull: boolean) => {
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
      this.setFullScreen()
    }
    this.setState({
      transform: null,
    })
    this.titleInstance.lastDisX = 0
    this.titleInstance.lastDisY = 0
    onCancel()
  }

  getPos = (
    translate: {translateX: number, translateY: number}
    ) => {
    const { translateX, translateY } = translate
    this.setState({
      transform: `translate(${translateX}px, ${translateY}px)`,
    })
  }

  titleInstance: any = null

  modalInstance: any = null

  render() {
    const { isFull, transform } = this.state
    const trans = isFull? null: transform
    const { style, footer, className, dragable, fullable, title, headerColor, children, ...otherProps } = this.props
    return (
      <AntdModal 
        style={{...style,transform:trans}}
        centered
        ref={instance => {this.modalInstance=instance}}
        title={(
          <Title 
            ref={instance => {this.titleInstance=instance}}
            color={headerColor}
            getPos={this.getPos}
            isFull={isFull}
            fullable={fullable} 
            dragable={dragable}
            setFullScreen={this.setFullScreen}
          >
            {title}
          </Title>
        )}
        className={cls(clsPrefix, className)} 
        {...otherProps} 
        footer={footer!=='nopart'&&footer}
        onCancel={this.onCancel}
      >
        <ModalBody footer={footer} isFull={isFull}>{children}</ModalBody>
      </AntdModal>
    )
  }
}





