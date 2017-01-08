import JSFtp from 'jsftp'

const ftp = new JSFtp({
  host: 'ftp.up.pt',
  port: 21,
  user: 'anonymous',
  pass: ''
})

export default () => {
  ftp.ls('.', (err, res) => {
    res.forEach((file) => {
	  console.log(file.name)
    })
  })
}
