const mongoose = require('mongoose');
const validator = require('validator');
const orderSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'user',
  },
  items: {
    type: [mongoose.Schema.ObjectId],
    ref: 'Item',
  },
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowerCase: true,
    validate: [validator.isEmail, 'Invalid Email!'],
  },
  phoneNum: [
    {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isMobilePhone(value, 'ar-EG'))
          throw new Error('invalid number');
      },
    },
  ],
  address: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
    enum: ['cash', 'creditCard'],
  },
  amount: {
    type: Number,
  },
  confirmCode: String,
});

orderSchema.methods.encryptConfirmCode = async function (code) {
  this.confirmCode = await bcrypt.hash(code, 10);
};
orderSchema.methods.checkConfirmCode = async function (code) {
  return await bcrypt.compare(this.confirmCode, code);
};
const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
