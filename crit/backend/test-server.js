const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'CRIT Backend is running!' });
});

// Contact form test
app.post('/api/contact/submit', (req, res) => {
  console.log('Contact form data:', req.body);
  res.json({ success: true, message: 'Contact form received!' });
});

// CTA form test
app.post('/api/cta/submit', (req, res) => {
  console.log('CTA form data:', req.body);
  res.json({ success: true, message: 'CTA form received!' });
});

// Career form test
app.post('/api/career/submit', (req, res) => {
  console.log('Career form data:', req.body);
  res.json({ success: true, message: 'Career form received!' });
});

app.listen(PORT, () => {
  console.log(`Test server running on http://localhost:${PORT}`);
}); 