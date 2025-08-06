const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Review = require('../models/Review');

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
    // Allow only image files
    if (file.mimetype.startsWith('image/')) {
      return cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  }
});

// POST - Submit review with optional profile picture
router.post('/submit', upload.single('profilePicture'), async (req, res) => {
  try {
    console.log('Review form submission received');
    console.log('Request body:', req.body);
    console.log('Request file:', req.file);
    
    const {
      name,
      email,
      position,
      company,
      review,
      rating
    } = req.body;

    // Validate rating
    const ratingNum = parseInt(rating);
    if (isNaN(ratingNum) || ratingNum < 1 || ratingNum > 5) {
      return res.status(400).json({
        success: false,
        message: 'Rating must be between 1 and 5'
      });
    }

    // Create new review
    const reviewData = {
      name,
      email,
      position,
      company,
      review,
      rating: ratingNum
    };

    // Add profile picture if uploaded
    if (req.file) {
      reviewData.profilePicture = {
        filename: req.file.filename,
        originalName: req.file.originalname,
        path: req.file.path,
        size: req.file.size,
        mimetype: req.file.mimetype
      };
    }

    const newReview = new Review(reviewData);

    // Save to database
    const savedReview = await newReview.save();

    res.status(201).json({
      success: true,
      message: 'Review submitted successfully! Thank you for your feedback.',
      data: savedReview
    });

  } catch (error) {
    console.error('Review form submission error:', error);
    
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }

    if (error.message.includes('Only image files are allowed')) {
      return res.status(400).json({
        success: false,
        message: 'Invalid file type. Only image files are allowed.'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// GET - Get all reviews (admin)
router.get('/all', async (req, res) => {
  try {
    console.log('Fetching all reviews...');
    const reviews = await Review.find().sort({ submittedAt: -1 });
    console.log('Found reviews:', reviews.length);
    res.json({
      success: true,
      data: reviews
    });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching reviews'
    });
  }
});

// GET - Get published reviews (public)
router.get('/published', async (req, res) => {
  try {
    console.log('Fetching published reviews...');
    const reviews = await Review.find({ 
      status: 'approved', 
      isPublished: true 
    }).sort({ submittedAt: -1 });
    console.log('Found published reviews:', reviews.length);
    res.json({
      success: true,
      data: reviews
    });
  } catch (error) {
    console.error('Error fetching published reviews:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching published reviews'
    });
  }
});

// PUT - Update review status (admin)
router.put('/:id/status', async (req, res) => {
  try {
    const { status, isPublished } = req.body;
    const updateData = {};
    
    if (status) updateData.status = status;
    if (typeof isPublished === 'boolean') updateData.isPublished = isPublished;
    
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );
    
    if (!review) {
      return res.status(404).json({
        success: false,
        message: 'Review not found'
      });
    }

    res.json({
      success: true,
      data: review
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating review status'
    });
  }
});

// GET - Download profile picture
router.get('/profile-picture/:filename', (req, res) => {
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