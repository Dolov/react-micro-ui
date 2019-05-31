import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  history: 'hash',
  hash: true,
  publicPath: './',
  // exportStatic: {
  //   dynamicRoot: true,
  // },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'react-micro-ui',
      dll: false,
      
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  routes: [
    { path: '/', component: '../layouts/index',
      routes: [
        { path: '/', useContent: true, component: './index' },
        { path: '/tag', name: 'Tag', useContent: true, component: './Tag' },
        { path: '/copy', name: 'Copy', useContent: true, component: './Copy' },
        { path: '/steps', name: 'Steps', useContent: true, component: './Steps' },
        { path: '/button', name: 'Button', useContent: true, component: './Button' },
        { path: '/content', name: 'Content', useContent: true, component: './Content' },
        { path: '/location', name: 'Location', useContent: true, component: './Location' },
        { path: '/download', name: 'Download', useContent: true, component: './Download' },
        { path: '/graypicture', name: 'GrayPicture', useContent: true, component: './GrayPicture' },
        { path: '/imagetotext', name: 'ImageToText', useContent: true, component: './ImageToText' },
        { path: '/suctionheader', name: 'SuctionHeader', useContent: false, component: './SuctionHeader' },
        { path: '/rotatewrapper', name: 'RotateWrapper', useContent: true, component: './RotateWrapper' },
        
      ]
    },
  ]
}

export default config;
