import React, { PureComponent } from 'react'
import cls from 'classnames'

const clsPrefix = 'micro-steps'

interface StepsProps {
  style?: any;
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
    const { className, ...otherProps } = this.props
    return (
      <div className={cls(clsPrefix,className)} {...otherProps}>
        {this.renderStep()}
      </div>
    )
  }
}






export default Steps
