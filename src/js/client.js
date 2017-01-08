import React from 'react'
import ReactDOM from 'react-dom'

import test from './connection/test'

const app = document.getElementById('app')

test()
ReactDOM.render(<h1>Welcome to Contact</h1>, app)
