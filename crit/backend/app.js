const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// CORS middleware - specific domain allow karna better hai, agar possible ho toh
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // allowed methods specify karna acha hota hai
  allowedHeaders: ['Content-Type', 'Authorization'],   // agar auth ya custom headers hain toh include karein
}));

// Body parser middleware
app.use(express.json());

// Import and use modular routes
const ctaRoutes = require('./routes/cta');
app.use('/api/cta', ctaRoutes);

// Root route - quick backend status check
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running!' });
});

// Other standalone routes (modularize soon if many)
app.post('/api/contact/submit', (req, res) => {
  console.log('Contact Form Data:', req.body);
  res.json({ success: true, message: 'Contact form received!' });
});

app.post('/api/career/submit', (req, res) => {
  console.log('Career Form Data:', req.body);
  res.json({ success: true, message: 'Career form received!' });
});

// Generic 404 handler for unknown routes (optional but helpful)
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Endpoint not found' });
});

// Generic error handler middleware (better error handling)
app.use((err, req, res, next) => {
  console.error('Server Error:', err);
  res.status(500).json({ success: false, message: 'Internal Server Error' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
