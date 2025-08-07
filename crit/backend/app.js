const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',  // or a specific domain like 'https://your-frontend.com'
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running!' });
});

app.post('/api/cta/submit', (req, res) => {
  console.log('CTA Form Data:', req.body);
  res.json({ success: true, message: 'CTA form received!' });
});

app.post('/api/contact/submit', (req, res) => {
  console.log('Contact Form Data:', req.body);
  res.json({ success: true, message: 'Contact form received!' });
});

app.post('/api/career/submit', (req, res) => {
  console.log('Career Form Data:', req.body);
  res.json({ success: true, message: 'Career form received!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
