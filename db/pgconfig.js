const { Pool } = require('pg');
const pool = new Pool({
  database: 'messages'
});


function getAllMessages(req, res) {
  pool.query(SELECT, messages, FROM, messages)
  .then(function(data) {
      res.status('success').send(data);
  )}
  .catch(function(err) { 
      res.status(err);
  });
}

// function getOneMessage(req, res, next) {
//   // SELECT '__==column==__' FROM '__==table==__' WHERE '__==condition==__'
//   // .then(function(data) {
//       // res.status('__success status code__').json({'__stuff here, data__'});
//   // })
//   // .catch(function(err) {
//       //  res.status('__err status code__');
//   // })

//   //next goes somewhere
// }

// function addMessage(req, res, next) {
//   // pool.query(INSERT INTO messages(name, message) VALUES('$1', '$2') RETURNING id);
// }

// function editMessage(req, res, next) {
//   // 
// }

// function deleteMessage(rew, res, next) {
//   // 
// }

module.exports = {getAllMessages}
module.exports = pool;