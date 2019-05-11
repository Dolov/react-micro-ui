import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  history: 'hash',
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
        { path: '/content', name: 'Content', useContent: true, component: './Content' },
        { path: '/graypicture', name: 'GrayPicture', useContent: true, component: './GrayPicture' },
        { path: '/suctionheader', name: 'SuctionHeader', useContent: false, component: './SuctionHeader' },
        
      ]
    },
  ]
}

export default config;
