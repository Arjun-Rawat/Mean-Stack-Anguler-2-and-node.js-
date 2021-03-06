  const express = require('express');
  const app = express();
  const router=express.Router();
  const mongoose = require('mongoose');
  const config=require('./config/database');
  const path=require('path');
  const authentication=require('./routes/authentication')(router);
  const blogs=require('./routes/blogs')(router);
  const bodyParser = require('body-parser');
  const cors=require('cors');
  const port = process.env.PORT||8080;

  //database connection
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

  app.use(cors({
    origin:'http://localhost:4200'
  }));

  app.use(bodyParser.urlencoded({ extended: false }))

  app.use(bodyParser.json());

  app.use(express.static(__dirname + '/public'));
  app.use('/authentication',authentication);
  app.use('/blogs',blogs);


  app.get('*', (req, res) =>{
   res.sendFile(path.join(__dirname + '/public/index.html'));
  })

  app.listen(port,() =>{
  console.log(`Example app listening on port ` + port);
});
