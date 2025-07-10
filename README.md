# Job Discovery Platform

A comprehensive job discovery and application tracking platform that aggregates job openings from multiple sources and provides intelligent job recommendations with resume optimization features.

## Overview

This platform automates job discovery by periodically scraping active job openings from popular job portals including LinkedIn, Naukri, and others. It provides users with personalized job recommendations based on their skills profile, tracks application progress, and offers resume optimization suggestions for specific job descriptions.

## Key Features

### Job Aggregation
- Automated periodic scraping of job openings from major job portals (LinkedIn, Naukri, etc.)
- Centralized database of active job listings
- Real-time job availability updates

### User Profile Management
- Comprehensive user profile collection during signup (similar to Greenhouse and Internshala)
- Skills, experience, and preferences tracking
- Location and role preferences
- Salary expectations

### Job Application Tracking
- Manual status updates for job applications
- Track applications through multiple stages:
  - Applied
  - Interviewed
  - Shortlisted
  - Rejected
- Complete application history

### Smart Recommendations
- Personalized job recommendations based on user skills and profile
- Eligibility score calculation for each job posting
- Match percentage between user profile and job requirements

### Resume Optimization
- Resume keyword analysis
- JD-specific keyword suggestions
- Resume enhancement recommendations for better job matching

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Winston for logging
- Puppeteer for web scraping
- Cheerio for HTML parsing
- Bcrypt for password hashing

### Frontend
- React 19
- Vite
- React Router DOM
- Tailwind CSS
- Material-UI (MUI)
- Zustand for state management
- Axios for API calls
- React Hook Form for form handling
- Framer Motion for animations
- React Hot Toast for notifications

## Project Structure

```
Job_Hunt_V0/
├── backend/
│   ├── config/          # Database and logger configuration
│   ├── controllers/     # Business logic handlers
│   ├── middlewares/     # Auth and logging middlewares
│   ├── models/          # Database models (User, Job, Resume)
│   ├── routes/          # API route definitions
│   └── utils/           # Helper utilities (OTP, etc.)
├── frontend/
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page components
│   │   ├── services/    # API service layer
│   │   ├── store/       # State management
│   │   └── utils/       # Frontend utilities
│   └── public/          # Static assets
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB
- npm or yarn

### Backend Setup
1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file with required environment variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

4. Start the development server:
   ```
   npm run dev
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

## Features in Detail

### Authentication
- Secure user registration and login
- OTP-based verification
- JWT token-based session management
- Protected routes for authenticated users

### Dashboard
- Personalized job recommendations
- Application status overview
- Profile completion status
- Quick access to recent applications

### Resume Editor
- Upload and manage resumes
- Resume analysis and scoring
- Keyword optimization suggestions
- Template-based resume creation

## License

ISC

## Author

Developed as a comprehensive job hunting solution.
