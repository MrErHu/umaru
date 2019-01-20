import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Icon from '../Icon'

import './Modal.less'

const modelWrap = document.getElementById('modal-wrap')

class Modal extends Component {
  constructor (props) {
    super(props)
    this.el = document.createElement('div')
    this.state = {
      visible: props.visible
    }
  }

  static getDerivedStateFromProps (nextProps) {
    return {
      visible: nextProps.visible
    }
  }

  componentDidMount () {
    modelWrap.appendChild(this.el)
  }

  componentWillUnmount () {
    modelWrap.removeChild(this.el)
  }

  render () {
    const { width, title, children } = this.props
    const { visible } = this.state
    const Modal = (
      <div className={'modal'}>
        <div className={'modal-content'} style={{ width }}>
          <div className={'modal-close'}>
            <Icon type={'close'} width={56} height={56} />
          </div>
          <div className={'modal-header'} >
            <div className={'modal-title'}>
              {title}
            </div>
          </div>
          <div className={'modal-content'} >
            {children}
          </div>
          <div className={'modal-foot'} />
        </div>
      </div>
    )
    this.el.setAttribute('class', visible ? 'modal-mask' : 'modal-mask modal-mask-hidden')
    return ReactDOM.createPortal(Modal, this.el)
  }
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  width: PropTypes.number,
  visible: PropTypes.bool
}

Modal.defaultProps = {
  width: 500,
  visible: false
}

export default Modal
