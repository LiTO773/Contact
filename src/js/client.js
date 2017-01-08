import React from 'react'
import ReactDOM from 'react-dom'

import AddServer from './components/AddServer'
import test from './connection/test'

const app = document.getElementById('app')

test()
ReactDOM.render(
  <div>
    <AddServer />
  </div>
, app)
