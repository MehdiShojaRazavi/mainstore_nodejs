const mongoose = require('mongoose');
const { commentSchema } = require('./comments');
const productSchema = new mongoose.schema({
  title : {type: String, required: true},
  short_text : {type: String, required: true},
  text : {type: String, required: true},
  images : {type: [String], required: true},
  tags : {type: [String], required: true},
  category : {type: mongoose.Types.ObjectId, ref: 'category', required: true},
  comments : {type: [commentSchema], default: []},
  likes : {type: [mongoose.Types.ObjectId], ref: 'user', default: []},
  deslikes : {type: [mongoose.Types.ObjectId], ref: 'user', default: []},
  bookmarks : {type: [mongoose.Types.ObjectId], ref: 'user', default: []},
  price : {type: Number, default: 0},
  discount : {type: Number, default: 0},
  count : {type: Number},
  type : {type: String, required: true}, // Online - physici
  format : {type: String},
  supplier : {type: mongoose.Types.ObjectId, ref:'user', required: true},
  features : {type: Object, default: {
    length: '',
    height: '',
    width: '',
    weight: '',
    colors: [],
    madeIn: ''
  }},
});

const Porduct = mongoose.model('product', productSchema);
module.exports = {
  Porduct
}