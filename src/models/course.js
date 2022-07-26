const mongoose = require('mongoose');
const {commentSchema} = require('./comments')
const Episode = mongoose.Schema({
  title: {type: String},
  text: {type: String},
  type: {type: String, default: 'unlock'},
  time: {type: String},
  videoAddress: {type: String},
});
const Chapter = new mongoose.Schema({
  title : {type: String},
  text : {type: String},
  episodes: {type: [Episode], default: []}
});
const courseSchema = new mongoose.Schema({
  title: {type: String, required: true},
  short_text: {type: String, required: true},
  text: {type: String, required: true},
  image: {type: String, required: true},
  tags: {type: [String]},
  category: {type: [mongoose.Types.ObjectId], ref: "category", default: []},
  comments: {type: [commentSchema], default: []},
  likes: {type: [mongoose.Types.ObjectId], ref: 'user', default: []},
  deslikes: {type: [mongoose.Types.ObjectId], ref: 'user', default: []},
  bookmarks: {type: [mongoose.Types.ObjectId], ref: 'user', default: []},
  price: {type: Number, default: 0},
  discount: {type: Number, default: 0},
  type: {type: [String], default: 'free'}, /*free, cash, special */
  status: {type: [String], default: 'noStarted'}, /*notStarted, Completed, Holding*/
  teacher: {type: [mongoose.Types.ObjectId], ref: 'user', default: []},
  students: {type: [mongoose.Types.ObjectId], ref: 'user', default: []},
  chapters: {type: [Chapter], default: []},
});

const Course = mongoose.model('course', courseSchema);
module.exports = {
  Course
};