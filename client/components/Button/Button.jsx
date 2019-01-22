import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import { emptyFn } from 'utils'
import Icon from '../Icon'

import './Button.less'

class Button extends Component {
  render () {
    const { type, size, block, icon, children } = this.props
    const className = ClassNames(['btn'], {
      'btn-lg': size === Button.SIZE.LARGE,
      'btn-sm': size === Button.SIZE.SMALL,
      'btn-primary': type === Button.TYPE.PRIMARY,
      'btn-danger': type === Button.TYPE.DANGER,
      'btn-block': block === true
    })
    return (
      <button className={className} onClick={this.props.onClick}>
        {icon && <Icon type={icon} className='btn-icon' />}
        {children && <span>{children}</span>}
      </button>
    )
  }
};

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['primary', 'danger', 'default']),
  size: PropTypes.oneOf(['large', 'default', 'small']),
  icon: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  block: PropTypes.bool
}

Button.defaultProps = {
  onClick: emptyFn,
  type: 'default',
  size: 'default',
  icon: null,
  children: '',
  block: false
}

Button.SIZE = {
  LARGE: 'large',
  DEFAULT: 'default',
  SMALL: 'small'
}

Button.TYPE = {
  PRIMARY: 'primary',
  DEFAULT: 'default',
  DANGER: 'danger'
}

export default Button
