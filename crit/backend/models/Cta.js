const mongoose = require('mongoose');

const ctaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters'],
    match: [/^[A-Za-z\s]{2,}$/, 'Name must contain only letters and spaces']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  company: {
    type: String,
    trim: true,
    minlength: [2, 'Company name must be at least 2 characters']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true
  },
  countryCode: {
    type: String,
    default: '+91'
  },
  service: {
    type: String,
    required: [true, 'Service selection is required'],
    enum: [
      'SAP Implementation',
      'SAP Rollout  Services',
      'Sap Support Services',
      'SAP Upgrade Services',
      'SAP Migration Services',
      'SAP Integration Services',
      'SAP Automation Services',
      'Other'
    ]
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    minlength: [15, 'Message must be at least 15 characters']
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

module.exports = mongoose.model('Cta', ctaSchema); 