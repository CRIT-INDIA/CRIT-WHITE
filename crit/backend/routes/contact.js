const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST - Submit contact form
router.post('/submit', async (req, res) => {
  try {
    const {
      name,
      email,
      companyName,
      countryCode,
      phoneNumber,
      message,
      service
    } = req.body;

    // Create new contact entry
    const contact = new Contact({
      name,
      email,
      companyName,
      countryCode,
      phoneNumber,
      message,
      service
    });

    // Save to database
    const savedContact = await contact.save();

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully!',
      data: savedContact
    });

  } catch (error) {
    console.error('Contact form submission error:', error);
    
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

// GET - Get all contact submissions (admin)
router.get('/all', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ submittedAt: -1 });
    res.json({
      success: true,
      data: contacts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching contacts'
    });
  }
});

// PUT - Update contact status (admin)
router.put('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }

    res.json({
      success: true,
      data: contact
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating contact status'
    });
  }
});

module.exports = router; 