import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

import './icon.less'

const Icon = ({ type, className, spin, style = {} }) => {
  const {
    height = 24,
    width = 24,
    fontSize = 24,
    ...otherStyle
  } = style
  const classname = ClassNames(['component-icon iconfont', `icon-${type}`, className, { 'icon-spin': spin }])
  return (
    <i
      className={classname}
      style={{
        width,
        height,
        fontSize,
        lineHeight: height + 'px',
        ...otherStyle
      }}
    />
  )
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  spin: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string
}

export default Icon
