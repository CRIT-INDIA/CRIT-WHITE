const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'CRIT Backend API is running' });
});

// Contact form endpoint
app.post('/api/contact/submit', (req, res) => {
  try {
    const { name, email, companyName, countryCode, phoneNumber, message, service } = req.body;
    
    // Basic validation
    if (!name || !email || !phoneNumber || !message) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields',
        errors: []
      });
    }

    console.log('Contact form submitted:', req.body);
    
    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully!',
      data: req.body
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// CTA form endpoint
app.post('/api/cta/submit', (req, res) => {
  try {
    const { name, email, company, phone, countryCode, service, message } = req.body;
    
    // Basic validation
    if (!name || !email || !phone || !service || !message) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields',
        errors: []
      });
    }

    console.log('CTA form submitted:', req.body);
    
    res.status(201).json({
      success: true,
      message: 'Consultation request submitted successfully!',
      data: req.body
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Career form endpoint
app.post('/api/career/submit', (req, res) => {
  try {
    const { name, email, currentCTC, mobileNumber, yearOfExperience, skills, noticePeriod, linkedinProfile, position } = req.body;
    
    // Basic validation
    if (!name || !email || !currentCTC || !mobileNumber || !yearOfExperience || !skills || !noticePeriod || !linkedinProfile) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields',
        errors: []
      });
    }

    console.log('Career form submitted:', req.body);
    
    res.status(201).json({
      success: true,
      message: 'Job application submitted successfully!',
      data: req.body
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Simple server running on http://localhost:${PORT}`);
  console.log('Available endpoints:');
  console.log('- GET  /api/health');
  console.log('- POST /api/contact/submit');
  console.log('- POST /api/cta/submit');
  console.log('- POST /api/career/submit');
}); 