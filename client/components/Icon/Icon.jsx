import React from 'react'
import PropTypes from 'prop-types'

import './icon.less'

const Icon = ({ type, width, height, iconSize }) => {
  return (
    <div className={'component-icon'} style={{ width, height, lineHeight: height + 'px' }}>
      <i className={`iconfont icon-${type}`} style={{ fontSize: iconSize }} />
    </div>
  )
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  iconSize: PropTypes.number
}

export default Icon
