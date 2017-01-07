const electron = require('electron')
const {app, BrowserWindow} = electron
const path = require('path')
const url = require('url')

let mainWindow

app.on('ready', () => {
  mainWindow = new BrowserWindow({width: 800, height: 600}) // Create the browser window.

  mainWindow.loadURL(url.format({ // and load the index.html of the app.
   	pathname: path.join(__dirname, '/src/html/index.html'),
    protocol: 'file:',
    slashes: true
  }))
})
