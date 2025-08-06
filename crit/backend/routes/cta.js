const express = require('express');
const router = express.Router();
const Cta = require('../models/Cta');

// POST - Submit CTA form
router.post('/submit', async (req, res) => {
  try {
    console.log('=== CTA FORM RECEIVED ===');
    console.log('Request body:', req.body);
    console.log('Request headers:', req.headers);
    
    const {
      name,
      email,
      company,
      phone,
      countryCode,
      service,
      message
    } = req.body;
    
    console.log('Extracted fields:');
    console.log('- name:', name);
    console.log('- email:', email);
    console.log('- company:', company);
    console.log('- phone:', phone);
    console.log('- countryCode:', countryCode);
    console.log('- service:', service);
    console.log('- message:', message);

    // Create new CTA entry
    const cta = new Cta({
      name,
      email,
      company,
      phone,
      countryCode,
      service,
      message
    });

    // Save to database
    const savedCta = await cta.save();

    res.status(201).json({
      success: true,
      message: 'Consultation request submitted successfully!',
      data: savedCta
    });

  } catch (error) {
    console.error('CTA form submission error:', error);
    
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }

    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// GET - Get all CTA submissions (admin)
router.get('/all', async (req, res) => {
  try {
    const ctaSubmissions = await Cta.find().sort({ submittedAt: -1 });
    res.json({
      success: true,
      data: ctaSubmissions
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching CTA submissions'
    });
  }
});

// PUT - Update CTA status (admin)
router.put('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const cta = await Cta.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    
    if (!cta) {
      return res.status(404).json({
        success: false,
        message: 'CTA submission not found'
      });
    }

    res.json({
      success: true,
      data: cta
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating CTA status'
    });
  }
});

module.exports = router; 