import React from 'react'
import { Menu } from 'antd'
import Link from 'umi/link';




export default ({routes}) => {
  const renderRoutes = routes.filter((route: any) => route.name)
  return (
    <Menu>
      {renderRoutes.map((route: any) => (
        <Menu.Item><Link to={route.path}>{route.name}</Link></Menu.Item>
      ))}
    </Menu>
  )
}


