const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true
  },
  position: {
    type: String,
    required: [true, 'Position is required'],
    trim: true
  },
  company: {
    type: String,
    required: [true, 'Company is required'],
    trim: true
  },
  review: {
    type: String,
    required: [true, 'Review is required'],
    trim: true,
    maxlength: [500, 'Review cannot exceed 500 characters']
  },
  rating: {
    type: Number,
    required: [true, 'Rating is required'],
    min: [1, 'Rating must be at least 1'],
    max: [5, 'Rating cannot exceed 5']
  },
  profilePicture: {
    filename: {
      type: String,
      required: false
    },
    originalName: {
      type: String,
      required: false
    },
    path: {
      type: String,
      required: false
    },
    size: {
      type: Number,
      required: false
    },
    mimetype: {
      type: String,
      required: false
    }
  },
  submittedAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
  isPublished: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Review', reviewSchema); 