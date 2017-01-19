import React from 'react'

// TODO: Render this on .drawer, not on .app
export default class WindowButtons extends React.Component {
  render () {
    return (
      <center>
        <div className='windowDiv'>
          <a className='windowButton' id='wb1' href='javascript:window.close()' />
          <div className='windowButton' id='wb2' />
          <div className='windowButton' id='wb3' />
        </div>
      </center>
    )
  }
}
