const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.static('public'))
app.get('/', (req, res) => {
  res.send('Helloo World!')
})
app.get('/image', (req, res) => {
  let imagePath = path.join(__dirname, "images.jpg");
  res.sendFile(imagePath)

})
app.get('/dynamicimage', (req, res) => {
  image = req.query.imagename
  let imagePath1 = path.join(__dirname,image);
  res.sendFile(imagePath1)
})
app.get('/dynamicimage/:id', (req, res) => {
  const pic = imagePath.find(c=> c.id === parseInt(req.params.id));
  if(!pic) res.status(404).send('image not found');
  res.sendFile(pic);
})


app.listen(port, () => {
  console.log(`Welcomee on port ${port}`)
})
