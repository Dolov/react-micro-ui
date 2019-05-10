import React from 'react'
import { Icon } from 'antd'
import Menu from './Menu'
import Link from 'umi/link'
import Content from '@/Components/content'

import '@/Components/content/style'
import S from './index.less'


const BasicLayout: React.FC = props => {
  const { location: {pathname}, route: {routes} } = props
  const { useContent } = routes.find(route => route.path === pathname)
  const children = useContent ? <Content>{props.children}</Content>: props.children
  return (
    <div className={S.wrapper}>
      <h1 className={S.title}>
        <span className="title-text">
          <Link to="/">Yay! Welcome to react-micro-ui!</Link>
        </span>
        <a href="https://github.com/Dolov/react-micro-ui" style={{color:'white'}}>
          <Icon className={S.github} type="github" />
        </a>
      </h1>
      <div className={S.main}>
        <div className={S.menu}><Menu routes={routes} /></div>
        <div className={S.children}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default BasicLayout;
