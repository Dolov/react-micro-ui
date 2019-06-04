import React from 'react'
import cls from 'classnames'


interface WrapperProps {
  children: any;
  className?: string;
  [propsName: string]: any;
}


const Wrapper = (
  {children, ...otherProps}: WrapperProps
  ) => (
    <div {...otherProps}>{children}</div>
  )


const FooterNopartBody = ({children, className, ...otherProps}: WrapperProps) => (
  <Wrapper className={cls("footerNopart-body", {className})} {...otherProps}>{children}</Wrapper>
)

const FooterNopartFooter= ({children, className, ...otherProps}: WrapperProps) => (
  <Wrapper className={cls("footerNopart-footer", {className})} {...otherProps}>{children}</Wrapper>
)

const FooterNopartContent = ({children, className, ...otherProps}: WrapperProps) => (
  <Wrapper className={cls("footerNopart-content", {className})} {...otherProps}>{children}</Wrapper>
)


export {
  FooterNopartBody,
  FooterNopartFooter,
  FooterNopartContent,
}