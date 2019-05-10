import React from 'react'
import SuctionHeader from '@/Components/suction-header'
import '@/Components/suction-header/style'

import style from './index.less'

export default () => {

  return (
    <SuctionHeader
      mode="around"  // around    vertical
      height={60}
      header={<div className={style.header}>123</div>}
    >
      <div className={style.main}>内容区域</div>
    </SuctionHeader>
  )
}
