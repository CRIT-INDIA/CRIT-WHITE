const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

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

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 