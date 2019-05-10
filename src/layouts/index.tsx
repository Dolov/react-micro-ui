import React from 'react'
import { Icon } from 'antd'
import Menu from './Menu'
import S from './index.less'

const BasicLayout: React.FC = props => {
  const { route: {routes} } = props
  return (
    <div className={S.wrapper}>
      <h1 className={S.title}>
        <span>Yay! Welcome to react-micro-ui!</span>
        <a href="https://github.com/Dolov/react-micro-ui" style={{color:'white'}}>
          <Icon className={S.github} type="github" />
        </a>
      </h1>
      <div className={S.main}>
        <div className={S.menu}><Menu routes={routes} /></div>
        <div className={S.children}>{props.children}</div>
      </div>
    </div>
  );
};

export default BasicLayout;
