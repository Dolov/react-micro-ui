import React, { DOMElement } from 'react'


interface HtmlPreviewProps {
  data: string | HTMLElement;
  style?: string;
  title?: string;
}

export default class HtmlPreview extends React.PureComponent<HtmlPreviewProps> {

  static defaultProps = {
    style: "",
    title: "无标题"
  }

  state = {

  }

  domParse() {
    const { data, style, title } = this.props
    if (typeof data === 'string') {
      const domParser = new DOMParser()
      const dom: any = domParser.parseFromString(data, "text/html")
      dom.title = title
      if (style && typeof style === 'string') {
        const head = dom.getElementsByTagName("head")[0]
        const styleTag = document.createElement("style")
        styleTag.innerText = style
        head.appendChild(styleTag)
      }
      return dom
    }
  }

  xmlSerialize(parsedDom: HTMLElement) {
    const xmlSerializer = new XMLSerializer()
    const xmlString = xmlSerializer.serializeToString(parsedDom)
    return xmlString
  }

  openWindow(xmlString: string) {
    if (this.previewWindow) {
      this.previewWindow.close()
    }
    this.previewWindow = window.open()
    this.previewWindow.document.write(xmlString)
    this.previewWindow.document.close()
  }

  preview = () => {
    const parsedDom = this.domParse()
    const xmlString = this.xmlSerialize(parsedDom)
    this.openWindow(xmlString)
  }

  previewWindow: any = null

  render() {
    return null
  }
}
