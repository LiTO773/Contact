import React from 'react'
import { remote } from 'electron'

// TODO: Render this on .drawer, not on .app
export default class WindowButtons extends React.Component {
  onClickMaximize () {
    const window = remote.getCurrentWindow()
    // Sets the window to its original state or fullscreens it
    window.setFullScreen(!window.isFullScreen())
  }

  onClickMinimize () {
    const window = remote.getCurrentWindow()
    window.minimize()
  }

  render () {
    return (
      <center>
        <div className='windowDiv'>
          <a className='windowButton' id='wb1' href='javascript:window.close()' />
          <a className='windowButton' id='wb2' onClick={this.onClickMinimize} />
          <a className='windowButton' id='wb3' onClick={this.onClickMaximize} />
        </div>
      </center>
    )
  }
}
