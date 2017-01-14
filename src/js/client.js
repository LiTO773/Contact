import React from 'react'
import ReactDOM from 'react-dom'

import AddServer from './components/AddServer'
import Drawer from './components/Drawer/Drawer'
import test from './connection/test'

const drawer = document.getElementById('drawer')
const app = document.getElementById('app')

test()
ReactDOM.render(<Drawer />, drawer) // Renders to .drawer

ReactDOM.render( // Renders to .app
  <div>
    <AddServer />
  </div>
, app)
