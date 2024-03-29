const mongoose = require('mongoose');
const AnswerSchema = new mongoose.Schema({
  comment: {type: String},
  show: {type: boolean, default: false},
  user: {type: mongoose.Types.ObjectId, ref: 'user'},
});
const commentSchema = new mongoose.Schema({
  comment: {type: String},
  show: {type: boolean, default: false},
  user: {type: mongoose.Types.ObjectId, ref: 'user'},
  createdAt: {type: String, default: new Date().now()},
  answers: {type: [AnswerSchema], default: []},
});
module.exports = {
  commentSchema
};