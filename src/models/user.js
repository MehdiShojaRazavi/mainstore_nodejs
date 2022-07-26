const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const contactSchema = new mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true},
  birthday: {type: String},
})
const defaultContact = {
  firstName: undefined,
  lastName: undefined,
  birthday: undefined,
}
const defaultOtp = {
  code: 0,
  expiresIn: 0,
}
const userSchema = new mongoose.Schema({
  contact: {type: contactSchema, default: defaultContact, lowercase: true},
  username: {type: String, required: true, lowercase: true},
  password: {type: String},
  email: {type: String, required: true, lowercase: true},
  mobile: {type: String, required: true, lowercase: true},
  otp: {type: Object, default: defaultOtp},
  image: {type: String, default: undefined},
  role: {type: String, default: 'USER'},
  cources: {type: [mongoose.Types.ObjectId], ref: 'course', default: []},
  products: {type: [mongoose.Types.ObjectId], ref: 'product', default: []},
  basket: {type: String},
}, {
  timestamps: {
      createdAt: false,
      updatedAt: true
  }
});

const User = mongoose.model("User", userSchema);
module.exports = {
  User
};
