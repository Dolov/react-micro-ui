import React, { PureComponent } from 'react'
import cls from 'classnames'

const clsPrefix = 'micro-steps'

interface StepsProps {
  children: StepProps;
  className?: string;
}

interface StepProps {
  title?: any;
  className?: string;
}

const Step = (props:StepProps) => {
  return null
}

class Steps extends PureComponent<StepsProps> {

  static Step = Step

  static defaultProps = {
    
  }

  renderStep() {
    const { children } = this.props
    return React.Children.map(children, (child: any) => {
      const { title, className } = child.props
      return (
        <div className={cls("step",className)}>
          <div className="dot"><div /></div>
          <div className="tail" />
          <div className="title">{title}</div>
        </div>
      )
    })
  }

  render() {
    const { className } = this.props
    return (
      <div className={cls(clsPrefix,className)}>
        {this.renderStep()}
      </div>
    )
  }
}






export default Steps
