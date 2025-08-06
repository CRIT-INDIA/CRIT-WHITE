const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  currentCTC: {
    type: String,
    required: [true, 'Current CTC is required'],
    trim: true
  },
  mobileNumber: {
    type: String,
    required: [true, 'Mobile number is required'],
    trim: true
  },
  yearOfExperience: {
    type: String,
    required: [true, 'Experience is required'],
    trim: true
  },
  skills: {
    type: String,
    required: [true, 'Skills are required'],
    trim: true
  },
  noticePeriod: {
    type: String,
    required: [true, 'Notice period is required'],
    enum: ['Immediate', '15 days', '30 days', '60 days', '90 days', 'More than 90 days', '15days', '30days', '60days', '90days']
  },
  linkedinProfile: {
    type: String,
    required: [true, 'LinkedIn profile is required'],
    trim: true
  },
  cv: {
    filename: String,
    originalName: String,
    path: String,
    size: Number,
    mimetype: String
  },
  position: {
    type: String,
    default: 'General Application'
  },
  submittedAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['new', 'reviewing', 'shortlisted', 'interviewed', 'hired', 'rejected'],
    default: 'new'
  }
});

module.exports = mongoose.model('Career', careerSchema); 