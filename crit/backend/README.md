# CRIT India Backend API

Backend API for handling Contact Form, CTA Form, and Career Form submissions.

## Features

- **Contact Form API**: Handle general contact inquiries
- **CTA Form API**: Handle consultation requests
- **Career Form API**: Handle job applications with CV upload
- **Database Storage**: MongoDB integration for data persistence
- **Validation**: Comprehensive form validation
- **Admin Endpoints**: View and manage submissions

## Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Configuration**
   ```bash
   cp environment.env .env
   ```
   Update `.env` with your configuration:
   - MongoDB connection string

3. **Create Uploads Directory**
   ```bash
   mkdir uploads
   ```

4. **Start Server**
   ```bash
   # Development
   npm run dev
   
   # Production
   npm start
   ```

## API Endpoints

### Contact Form
- `POST /api/contact/submit` - Submit contact form
- `GET /api/contact/all` - Get all contact submissions (admin)
- `PUT /api/contact/:id/status` - Update contact status (admin)

### CTA Form
- `POST /api/cta/submit` - Submit consultation request
- `GET /api/cta/all` - Get all CTA submissions (admin)
- `PUT /api/cta/:id/status` - Update CTA status (admin)

### Career Form
- `POST /api/career/submit` - Submit job application with CV
- `GET /api/career/all` - Get all career applications (admin)
- `PUT /api/career/:id/status` - Update application status (admin)
- `GET /api/career/cv/:filename` - Download CV file

### Health Check
- `GET /api/health` - Server health status

## Form Data Structure

### Contact Form
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "companyName": "ABC Corp",
  "countryCode": "+91",
  "phoneNumber": "9876543210",
  "message": "Interested in SAP services",
  "service": "SAP Implementation"
}
```

### CTA Form
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "company": "XYZ Ltd",
  "phone": "9876543210",
  "countryCode": "+91",
  "service": "SAP Implementation",
  "message": "Need consultation for SAP implementation"
}
```

### Career Form
```form-data
{
  "name": "Mike Johnson",
  "email": "mike@example.com",
  "currentCTC": "8 LPA",
  "mobileNumber": "9876543210",
  "yearOfExperience": "3 years",
  "skills": "React, Node.js, MongoDB",
  "noticePeriod": "30 days",
  "linkedinProfile": "https://linkedin.com/in/mike",
  "position": "ReactJs Developer",
  "cv": [file upload]
}
```

## Database Models

### Contact
- name, email, companyName, phoneNumber, message, service
- status tracking: new, in-progress, contacted, closed

### CTA
- name, email, company, phone, service, message
- status tracking: new, in-progress, contacted, closed

### Career
- name, email, currentCTC, experience, skills, noticePeriod, linkedinProfile
- CV file upload with metadata
- status tracking: new, reviewing, shortlisted, interviewed, hired, rejected

## File Upload

- **Supported formats**: PDF, DOC, DOCX
- **Size limit**: 5MB
- **Storage**: Local file system (`uploads/` directory)
- **Security**: File type validation and size restrictions

## Error Handling

- Comprehensive validation with detailed error messages
- Database error handling
- File upload error handling

## Security Features

- Input validation and sanitization
- File type validation
- File size limits
- CORS configuration
- Environment variable protection

## Development

```bash
# Install nodemon for development
npm install -g nodemon

# Run in development mode
npm run dev
```

## Production Deployment

1. Set `NODE_ENV=production`
2. Configure production MongoDB
3. Configure reverse proxy (nginx recommended)
4. Set up SSL certificates
5. Configure file upload directory permissions

## Support

For technical support, contact the development team. 