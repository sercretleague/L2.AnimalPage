const pug = require('pug');
const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  const compiledFunction = pug.compileFile('./views/index.pug');
  
  res.send(compiledFunction({
    name: 'Porosenok'
  }));
});

app.post('/submit', (req, res) => {
  const compiledFunction = pug.compileFile('./views/index.pug');

  res.send(compiledFunction({
    name: JSON.stringify(req.body)
  }));
})

app.listen(port, () => console.log(`App listening on port ${port}!`));