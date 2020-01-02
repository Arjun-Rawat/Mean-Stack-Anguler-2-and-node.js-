

const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports={
  uri:'mongodb://localhost:27017/Mean-angular',
  secret:crypto,
  db:'Mean-angular'
}
