import React from 'react'

export default class AddServer extends React.Component {
  render () {
  	return (
    <div className='addServer'>
      <input placeholder='New Server' className='bigInput' />
      <hr />
      <form>
        <input placeholder='Address' />
        <input placeholder='Username' />
        <input placeholder='Password' type='password' />
        <input placeholder='Port' type='number' />
      </form>
      <button>Connect!</button>
    </div>
  	)
  }
}
