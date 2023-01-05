const mongoose = require('mongoose');
const commentSchema = mongoose.Schema({
  comunityId: {},
  username: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    default: '',
  },
  date: { type: date },
});

const comment = mongoose.model('Comment', commentSchema);
module.exports = comment;
