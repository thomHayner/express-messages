const express = require('express');
const parser = require('body-parser');
const app = express();

// if you are using mongo/mongoose uncomment this line
// const Message = require('./db/Message');

// if you are using postgres, uncomment this line
const pool = require('./db/pgconfig');

app.use(parser.json());

app.use((req,res,next) => {
  res.status(404).send('That route does not exist');
});

const port = 3000;

//===========FORMAT-EXAMPLE===========//
// app.__type__(__url__, function(req, res) {
//   stuff here
//   don't forget to parse
//   
// })
//===========FORMAT-EXAMPLE===========//

app.post(`/api/messages`, function(req, res) {
  // promise chain goes here
  
});

app.get(`/api/messages`, getAllMessages);

app.put(`/api/messages`, function(req, res) {
  // promise chain goes here
  // 
});

app.delete(`/api/messages`, function(req, res) {
  // promise chain goes here
  // 
});


app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
