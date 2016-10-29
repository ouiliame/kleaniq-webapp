import mongoose from 'mongoose';

const schema = mongoose.Schema({
  name: {
    first: { type: String, required: true },
    last: { type: String, required: true }
  },

  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    index: { unique: true }
  },

  password_hash: { type: String, required: true },

  affiliation: { type: String, required: true }
});

export default mongoose.model('AdminUser', schema);
