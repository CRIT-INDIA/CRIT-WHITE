const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Opportunity = require('../models/Opportunity');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /pdf|doc|docx/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only PDF, DOC, and DOCX files are allowed'));
    }
  }
});

// POST - Submit opportunity application with CV upload
router.post('/submit', upload.single('cv'), async (req, res) => {
  try {
    console.log('Opportunity form submission received');
    console.log('Request body:', req.body);
    console.log('Request file:', req.file);
    
    const {
      fullName,
      desiredPosition,
      experience,
      currentCTC,
      message
    } = req.body;

    // Check if CV was uploaded
    if (!req.file) {
      console.log('No CV file uploaded');
      return res.status(400).json({
        success: false,
        message: 'CV file is required'
      });
    }

    // Create new opportunity application
    const opportunity = new Opportunity({
      fullName,
      desiredPosition,
      experience,
      currentCTC,
      message,
      cv: {
        filename: req.file.filename,
        originalName: req.file.originalname,
        path: req.file.path,
        size: req.file.size,
        mimetype: req.file.mimetype
      }
    });

    // Save to database
    const savedOpportunity = await opportunity.save();

    res.status(201).json({
      success: true,
      message: 'Opportunity application submitted successfully!',
      data: savedOpportunity
    });

  } catch (error) {
    console.error('Opportunity form submission error:', error);
    
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }

    if (error.message.includes('Only PDF, DOC, and DOCX files are allowed')) {
      return res.status(400).json({
        success: false,
        message: 'Invalid file type. Only PDF, DOC, and DOCX files are allowed.'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// GET - Get all opportunity applications (admin)
router.get('/all', async (req, res) => {
  try {
    console.log('Fetching all opportunity applications...');
    const applications = await Opportunity.find().sort({ submittedAt: -1 });
    console.log('Found applications:', applications.length);
    console.log('Applications:', applications);
    res.json({
      success: true,
      data: applications
    });
  } catch (error) {
    console.error('Error fetching applications:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching opportunity applications'
    });
  }
});

// PUT - Update opportunity application status (admin)
router.put('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const application = await Opportunity.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    
    if (!application) {
      return res.status(404).json({
        success: false,
        message: 'Opportunity application not found'
      });
    }

    res.json({
      success: true,
      data: application
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating opportunity application status'
    });
  }
});

// GET - Download CV file
router.get('/cv/:filename', (req, res) => {
  const filename = req.params.filename;
  const filepath = path.join(__dirname, '../uploads', filename);
  
  res.download(filepath, (err) => {
    if (err) {
      res.status(404).json({
        success: false,
        message: 'File not found'
      });
    }
  });
});

module.exports = router; 