import React, { PureComponent } from 'react'
import Steps from '@/Components/steps'
import '@/Components/steps/style'

const { Step } = Steps

export default class index extends PureComponent {
  render() {
    return (
      <Steps style={{marginTop:50}}>
        <Step title="step1" />
        <Step title="step2" />
        <Step title="step3" />
        <Step title="step4" />
      </Steps>
    )
  }
}
