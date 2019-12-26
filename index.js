const express = require('express');
const app = express();

const mongoose = require('mongoose');
const config=require('./config/database');

mongoose.Promise=global.Promise;
mongoose.connect(config.uri,(err)=>
{
  if(err){
  console.log('Could Not Connect To Database',err)
}
else{
  // console.log(config.secret)
  console.log('Connected To Database:'+config.db)
}
});

app.get('*', (req, res) =>
 res.send('<h2>Hello World!</h2>'))

app.listen(8080, () =>
console.log(`Example app listening on port ${8080}!`))
