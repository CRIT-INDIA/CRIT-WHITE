const mongoose = require('mongoose');

const opportunitySchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true
  },
  desiredPosition: {
    type: String,
    required: [true, 'Desired position is required'],
    trim: true
  },
  experience: {
    type: String,
    required: [true, 'Experience is required'],
    trim: true
  },
  currentCTC: {
    type: String,
    required: [true, 'Current CTC is required'],
    trim: true
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true
  },
  cv: {
    filename: {
      type: String,
      required: [true, 'CV filename is required']
    },
    originalName: {
      type: String,
      required: [true, 'CV original name is required']
    },
    path: {
      type: String,
      required: [true, 'CV path is required']
    },
    size: {
      type: Number,
      required: [true, 'CV size is required']
    },
    mimetype: {
      type: String,
      required: [true, 'CV mimetype is required']
    }
  },
  submittedAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['pending', 'reviewed', 'contacted', 'rejected'],
    default: 'pending'
  }
});

module.exports = mongoose.model('Opportunity', opportunitySchema); 