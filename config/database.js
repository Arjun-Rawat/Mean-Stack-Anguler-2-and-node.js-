

const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports={
  // uri:'mongodb://localhost:27017/Mean-angular',
  uri: 'mongodb+srv://Arjun07:arjun@cluster0-ctagw.mongodb.net/Mean-angular?retryWrites=true&w=majority',
  secret:crypto,
  db:'Mean-angular'
}
