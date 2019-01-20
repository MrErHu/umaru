import React, { Component } from 'react'
import Icon from '@/components/Icon'
import Modal from '@/components/Modal'

import './App.less'

class App extends Component {
  render () {
    return (
      <div>
        <div>
          <Icon type='message' width={36} height={36} iconSize={36} />
          <Icon type='contact' width={36} height={36} iconSize={36} />
          <Icon type='emoji' width={36} height={36} iconSize={36} />
          <Icon type='close' width={36} height={36} iconSize={36} />
        </div>
        <Modal title={'Modal'} visible={false}>
         String
        </Modal>
      </div>
    )
  }
}

export default App
