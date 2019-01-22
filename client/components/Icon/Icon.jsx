import React from 'react'
import PropTypes from 'prop-types'

import './icon.less'

const Icon = ({ type, width, height, iconSize, className }) => {
  return (
    <i
      className={`component-icon ${className} iconfont icon-${type}`}
      style={{
        width,
        height,
        fontSize: iconSize,
        lineHeight: height + 'px'
      }}
    />
  )
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  iconSize: PropTypes.number,
  className: PropTypes.string
}

export default Icon
