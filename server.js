'use strict';


const express = require('express'), cookieParser = require('cookie-parser'); 
const app = express();
app.use(cookieParser());
app.use(express.static('public'));

// listen for requests :)


app.get('/', (req, res) => {
  if(req.cookies['a-b-test']) {
    
  }
  else if(Math.random()<0.5) {
    res.cookie('a-b-test','b')
  }
  else(res.cookie('a-b-test','a')) 
  
    
  res.sendfile(__dirname + '/views/index.html')
  } )
  
        
app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080 }`));
