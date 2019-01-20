import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { emptyFn } from 'utils'

class Button extends Component {
  render () {
    return <div onClick={this.props.onClick}>button</div>
  }
};

Button.propTypes = {
  onClick: PropTypes.func
}

Button.defaultProps = {
  onClick: emptyFn
}

export default Button
