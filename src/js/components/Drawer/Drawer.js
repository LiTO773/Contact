import React from 'react'

import WindowButton from './WindowButton'
import AddButton from './AddButton'

export default class Drawer extends React.Component {
  render () {
    return (
      <div>
        <WindowButton />
        <AddButton />
      </div>
    )
  }
}
