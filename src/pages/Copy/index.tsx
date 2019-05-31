import React from 'react'
import Copy from '@/Components/copy'
import '@/Components/copy/style'

const data = [
  '失眠睡不着，可能是因为，你手机还有电。',
  '上帝为你关上了一扇门，然后就去洗洗睡了。',
  '贫穷限制了我那么多，为什么没有限制我的体重？',
  '这次期末考，我会用实力告诉你，我们年级共有多少人。',
]

const style = {
  padding: 16,
  marginBottom: 16,
  background: 'rgba(0, 0, 0, 0.03)',
  display: 'flex',
  justifyContent: 'space-between',
}

export default class Index extends React.PureComponent {

  state = {

  }

  render() {
    return (
      <div>
        {data.map((item, index) => {
          return (
            <div key={index} style={style}>
              <span>{item}</span>
              <Copy label="copy" content={item} />
            </div>
          )
        })}
      </div>
    )
  }
}
