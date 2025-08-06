const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Career = require('../models/Career');

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

// POST - Submit career application with CV upload
router.post('/submit', upload.single('cv'), async (req, res) => {
  try {
    console.log('Career form submission received');
    console.log('Request body:', req.body);
    console.log('Request file:', req.file);
    
    const {
      name,
      email,
      currentCTC,
      mobileNumber,
      yearOfExperience,
      skills,
      noticePeriod,
      linkedinProfile,
      position
    } = req.body;

    // Check if CV was uploaded
    if (!req.file) {
      console.log('No CV file uploaded');
      return res.status(400).json({
        success: false,
        message: 'CV file is required'
      });
    }

    // Create new career application
    const career = new Career({
      name,
      email,
      currentCTC,
      mobileNumber,
      yearOfExperience,
      skills,
      noticePeriod,
      linkedinProfile,
      position,
      cv: {
        filename: req.file.filename,
        originalName: req.file.originalname,
        path: req.file.path,
        size: req.file.size,
        mimetype: req.file.mimetype
      }
    });

    // Save to database
    const savedCareer = await career.save();

    res.status(201).json({
      success: true,
      message: 'Job application submitted successfully!',
      data: savedCareer
    });

  } catch (error) {
    console.error('Career form submission error:', error);
    
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

// GET - Get all career applications (admin)
router.get('/all', async (req, res) => {
  try {
    console.log('Fetching all career applications...');
    const applications = await Career.find().sort({ submittedAt: -1 });
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
      message: 'Error fetching career applications'
    });
  }
});

// PUT - Update career application status (admin)
router.put('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const application = await Career.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    
    if (!application) {
      return res.status(404).json({
        success: false,
        message: 'Career application not found'
      });
    }

    res.json({
      success: true,
      data: application
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating career application status'
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