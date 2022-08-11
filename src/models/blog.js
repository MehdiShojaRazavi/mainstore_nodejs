const mongoose = require('mongoose');
const { commentSchema } = require('./comments');
const BlogSchema = new mongoose.Schema({
  title: {type: String, required: true},
  author: {type: mongoose.Types.ObjectId, ref: 'user', required: true},
  short_Text: {type: String, required: true},
  text: {type: String, required: true},
  image: {type: String, required: true},
  tags: {type: [String], required: true},
  category: {type: [mongoose.type.ObjectId], ref: 'category', required: true},
  comments: {type: [commentSchema], default: []},
  likes: {type: [mongoose.Types.ObjectId], ref: 'user', default: []},
  deslikes: {type: [mongoose.Types.ObjectId], ref: 'user', default: []},
  bookmarks: {type: [mongoose.Types.ObjectId], ref: 'user', default: []},
}, {
  timestamps: true,
  versionKey: false
});
const Blog = mongoose.model('blog', BlogSchema);
module.exports = {
  BlogModel
};