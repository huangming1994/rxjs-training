const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

app.get('*', function(req, res){
  const pth = path.resolve(process.cwd())
  fs.readFile(path.join(pth, 'index.html'), (err, file) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(file.toString());
    }
  })
})

app.listen(8000, function(){
  console.log('app is listening on port 8000')
})