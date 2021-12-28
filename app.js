const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.render('2048');
})
app.listen(process.env.PORT||port, () => {
  console.log(`Starting server`)
})