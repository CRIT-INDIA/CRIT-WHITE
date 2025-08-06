const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  companyName: {
    type: String,
    trim: true
  },
  countryCode: {
    type: String,
    default: '+91'
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    minlength: [10, 'Message must be at least 10 characters']
  },
  service: {
    type: String,
    enum: [
      'SAP Implementation',
      'SAP Rollout  Services',
      'SAP Support Services',
      'SAP Upgrade Services',
      'SAP Migration Services',
      'SAP Integration Services',
      'SAP Automation Services'
    ]
  },
  submittedAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['new', 'in-progress', 'contacted', 'closed'],
    default: 'new'
  }
});

module.exports = mongoose.model('Contact', contactSchema); 