const mongoose = require('mongoose');
const productSchema = new mongoose.schema({

});

const Porduct = mongoose.model('product', productSchema);
module.exports = {
  Porduct
}