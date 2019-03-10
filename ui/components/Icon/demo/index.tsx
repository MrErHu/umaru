import React, { Component, Fragment } from 'react'
import Icon from '../Icon'

class IconDemo extends Component {
  render () {
    return (
      <Fragment>
        <div>普通图标:</div>
        <div>
          <Icon type='message' />
          <Icon type='contact' />
          <Icon type='emoji' />
          <Icon type='close' />
        </div>
        <div>可旋转图标:</div>
        <div>
          <Icon type='message' spin />
          <Icon type='contact' spin />
          <Icon type='emoji' spin />
          <Icon type='close' spin />
        </div>
      </Fragment>
    )
  }
}

export default IconDemo
