import { resolve } from 'dns';


interface APILoaderProps {
  appKey?: string;
  version?: string;
}

const defaultProps: APILoaderProps = {
  appKey: 'd771766da7b94868c8103d749ba3ead7',
  version: '1.4.14',
}

let amap: any = null

export default class APILoader {
  constructor(props?: APILoaderProps) {
    this.config = {...defaultProps, ...props}
  }

  init() {
    amap = amap || this.getAmapPromise()
    return amap
  }

  generateScriptTag(src: string) {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    script.defer = true
    script.src = src
    return script
  }

  getAmapPromise() {
    const { version, appKey } = this.config
    const src = `https://webapi.amap.com/maps?v=${version}&key=${appKey}`
    const script = this.generateScriptTag(src)
    document.body.appendChild(script)
    return new Promise(resolve => {
      script.onload = () => {
        resolve(window.AMap)
      }
    })
  }
}
