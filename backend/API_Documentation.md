# Job Hunt Backend API Documentation

Base URL: `/api/`

---

## Authentication

### POST `/auth/register`
Register a new user.

**Body:**
```json
{
  "name": "string",
  "identifier": "string (email or phone)",
  "password": "string",
  "remember": "boolean"
}
```
**Response:**  
- `user` object

---

### POST `/auth/login`
Login with email/phone and password.

**Body:**
```json
{
  "identifier": "string",
  "password": "string",
  "remember": "boolean"
}
```
**Response:**  
- `user` object

---

### POST `/auth/verify-otp`
Verify OTP for registration or identifier change.

**Body:**
```json
{
  "_id": "string",
  "otp": "string"
}
```
**Response:**  
- `user` object

---

### POST `/auth/resend-otp`
Resend OTP to user.

**Body:**
```json
{
  "_id": "string"
}
```
**Response:**  
- Success message

---

### POST `/auth/forget-password`
Request password reset link.

**Body:**
```json
{
  "identifier": "string"
}
```
**Response:**  
- Success message

---

### POST `/auth/reset-password`
Reset password using token.

**Body:**
```json
{
  "token": "string",
  "newPassword": "string"
}
```
**Response:**  
- Success message

---

### POST `/auth/logout`
Logout the current user (requires authentication).

**Response:**  
- Success message

---

## User

All `/user` routes require authentication.

### GET `/user/all`
Get current user details.

**Response:**  
- `user` object

---

### PUT `/user/basic-details`
Update basic user details.

**Body:**
```json
{
  "name": "string",
  "email": "string",
  "location": { "country": "string", "state": "string", "city": "string" },
  "mobile": { "countryCode": "string", "number": "string" },
  "jobSearchStatus": "string",
  "profilePicture": "string"
}
```
**Response:**  
- Success message, updated `user` object

---

### PUT `/user/bio`
Update user bio.

**Body:**
```json
{ "bio": "string" }
```
**Response:**  
- Success message, updated `user` object

---

### PUT `/user/skills`
Update user skills.

**Body:**
```json
{ "skills": ["string", ...] }
```
**Response:**  
- Success message, updated `user` object

---

### PUT `/user/roles`
Update user interested roles.

**Body:**
```json
{ "roles": ["string", ...] }
```
**Response:**  
- Success message, updated `user` object

---

### PUT `/user/job-types`
Update user job types.

**Body:**
```json
{ "jobTypes": ["string", ...] }
```
**Response:**  
- Success message, updated `user` object

---

### PUT `/user/expected-salary`
Update expected salary.

**Body:**
```json
{ "expectedSalary": "number" }
```
**Response:**  
- Success message, updated `user` object

---

### PUT `/user/job-locations`
Update preferred job locations.

**Body:**
```json
{ "jobLocations": ["string", ...] }
```
**Response:**  
- Success message, updated `user` object

---

### PUT `/user/work-experience`
Update work experiences.

**Body:**
```json
{ "workExperiences": [ { ... }, ... ] }
```
**Response:**  
- Success message, updated `user` object

---

### PUT `/user/password`
Change user password.

**Body:**
```json
{ "oldPassword": "string", "newPassword": "string" }
```
**Response:**  
- Success message, updated `user` object

---

### POST `/user/identifier/otp`
Send OTP for identifier (email/phone) change.

**Body:**
```json
{ "identifier": "string" }
```
**Response:**  
- Success message

---

### PUT `/user/identifier`
Update identifier (email/phone) after OTP verification.

**Body:**
```json
{ "identifier": "string", "otp": "string" }
```
**Response:**  
- Success message, updated `user` object

---

## User Jobs

All `/userJobs` routes require authentication.

### POST `/userJobs/add`
Add a new job to user's tracking list.

**Body:**
```json
{
  "role": "string",
  "companyName": "string",
  "jobURL": "string",
  "location": "string",
  "salary": "string",
  "jobType": "string",
  "description": "string",
  "status": "string"
}
```
**Response:**  
- Success message, job object

---

### GET `/userJobs/all-jobs`
Get all jobs tracked by the user.

**Response:**  
- List of jobs

---

### POST `/userJobs/update-status`
Update status of a job.

**Body:**  
- See implementation for required fields.

---

### PUT `/userJobs/update-status-date`
Update status date for a job.

**Body:**  
- See implementation for required fields.

---

### POST `/userJobs/create-status`
Create a new status for a job.

**Body:**  
- See implementation for required fields.

---

### PUT `/userJobs/update-status`
Update an existing status for a job.

**Body:**  
- See implementation for required fields.

---

### DELETE `/userJobs/delete-status`
Delete a status from a job.

**Body:**  
- See implementation for required fields.

---

## Resume

All `/resumes` routes require authentication.

### GET `/resumes/`
Get all resumes for the current user.

**Response:**  
- List of resumes

---

### POST `/resumes/`
Upload a new resume.

**Body:**
```json
{
  "template": "string",
  "data": { ... }
}
```
**Response:**  
- Resume object

---

### PUT `/resumes/:id`
Update an existing resume.

**Body:**
```json
{
  "template": "string",
  "data": { ... }
}
```
**Response:**  
- Updated resume object

---

### GET `/resumes/:id`
Get a single resume by ID.

**Response:**  
- Resume object

---

### DELETE `/resumes/:id`
Delete a resume by ID.

**Response:**  
- Success message

---

## Cover Letters

All `/coverLetters` routes require authentication.

### POST `/coverLetters/add`
Add a new cover letter.

**Body:**
```json
{ "style": "string" }
```
**Response:**  
- Success message, cover letter object

---

### GET `/coverLetters/all`
Get all cover letters for the user.

**Response:**  
- List of cover letters

---

### PUT `/coverLetters/update/:id`
Update a cover letter.

**Body:**
```json
{ "style": "string" }
```
**Response:**  
- Success message, updated cover letter object

---

### DELETE `/coverLetters/delete/:id`
Delete a cover letter.

**Response:**  
- Success message

---

## Templates

All `/templates` routes require authentication.

### POST `/templates/add`
Add a new template.

**Body:**
```json
{ "style": "string" }
```
**Response:**  
- Success message, template object

---

### GET `/templates/all`
Get all templates for the user.

**Response:**  
- List of templates

---

### PUT `/templates/update/:id`
Update a template.

**Body:**
```json
{ "style": "string" }
```
**Response:**  
- Success message, updated template object

---

### DELETE `/templates/delete/:id`
Delete a template.

**Response:**  
- Success message

---

## Error Handling

- All endpoints return appropriate HTTP status codes.
- Error responses are in the form:
```json
{ "error": "Error message" }
```

---

**Note:**  
All routes (except `/auth/*`) require authentication via a JWT cookie.

---