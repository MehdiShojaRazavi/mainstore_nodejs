const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
  title : {type: String},
  parent : {type: mongoose.Types.ObjectId, ref: "categories", default: undefined},
});
const Category = mongoose.model('categorie', categorySchema);
module.exports = {
  Category
};