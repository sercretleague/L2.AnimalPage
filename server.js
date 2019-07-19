const pug = require('pug');
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => {
  const compiledFunction = pug.compileFile('./views/index.pug');
  
  res.send(compiledFunction({
    name: 'CatHub'
  }));
});

app.listen(port, () => console.log(`App listening on port ${port}!`));