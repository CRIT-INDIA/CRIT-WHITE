const express = require('express');
const router = express.Router();
const Cta = require('../models/Cta');

// POST - Submit CTA form
router.post('/submit', async (req, res) => {
  try {
    console.log('=== CTA FORM RECEIVED ===');
    console.log('Request body:', req.body);

    const {
      name,
      email,
      company,
      phone,
      countryCode,
      service,
      message
    } = req.body;

    // Validation check (optional, can be improved or use a validation library)
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required fields.'
      });
    }

    // Create new CTA document
    const newCtaEntry = new Cta({
      name,
      email,
      company,
      phone,
      countryCode,
      service,
      message
    });

    // Save to MongoDB
    const savedCta = await newCtaEntry.save();

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

// GET - Get all CTA submissions (for admin)
router.get('/all', async (req, res) => {
  try {
    const ctaSubmissions = await Cta.find().sort({ submittedAt: -1 });
    res.json({
      success: true,
      data: ctaSubmissions
    });
  } catch (error) {
    console.error('Error fetching CTA submissions:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching CTA submissions'
    });
  }
});

// PUT - Update CTA status (for admin)
router.put('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;

    // Optional: You can validate 'status' here if needed (e.g. must be within certain enum)

    const updatedCta = await Cta.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!updatedCta) {
      return res.status(404).json({
        success: false,
        message: 'CTA submission not found'
      });
    }

    res.json({
      success: true,
      data: updatedCta
    });
  } catch (error) {
    console.error('Error updating CTA status:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating CTA status'
    });
  }
});

module.exports = router;
